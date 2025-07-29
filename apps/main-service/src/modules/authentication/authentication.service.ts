import { Codes } from '@common/utils/codes';
import { errorMessage } from '@common/utils/error-messages';
import { UsersRepository } from '@infra/database/repositories/users.repository';
import { mapGetUserToResponse } from '@module/users/users.mapper';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { SignInRequestDto } from './dto/request/sign-in-request.dto';
import { SignInResponseDto } from './dto/response/sign-in-response.dto';
import { UserStatus } from '@solarapp/shared';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly jwtService: JwtService,
    private usersRepository: UsersRepository,
  ) {}

  async signIn(signInDto: SignInRequestDto): Promise<SignInResponseDto> {
    const { email, password } = signInDto;

    const lowercaseEmail = email.toLowerCase();

    const user = await this.usersRepository.get({
      where: { email: { equals: lowercaseEmail, mode: 'insensitive' } },
    });

    if (!user) {
      throw new HttpException(
        errorMessage(Codes.AUTH__UNEXPECTED_AUTHORIZATION),
        HttpStatus.UNAUTHORIZED,
      );
    }
    if (user.status === UserStatus.BLOCKED) {
      throw new HttpException(
        errorMessage(Codes.AUTH__USER_DISABLED),
        HttpStatus.UNAUTHORIZED,
        {
          cause: new Error(Codes.AUTH__USER_DISABLED),
        },
      );
    }

    if (!user.emailVerifiedAt) {
      // TODO: send confirmation email
      // await this.authenticationService.sendConfirmationAccountEmail(user);

      throw new HttpException(
        errorMessage(Codes.AUTH__USER_NOT_ACTIVATED),
        HttpStatus.UNAUTHORIZED,
      );
    }

    const passwordMatch = await bcrypt.compare(password, user?.password);
    if (!passwordMatch) {
      throw new HttpException(
        errorMessage(Codes.AUTH__UNEXPECTED_AUTHORIZATION),
        HttpStatus.UNAUTHORIZED,
      );
    }

    const accessToken = this.jwtService.sign({
      id: user.id,
      role: user.role,
    });

    return {
      accessToken,
      user: mapGetUserToResponse(user)
    };
  }
}
