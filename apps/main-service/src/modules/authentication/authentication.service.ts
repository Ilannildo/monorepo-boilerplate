import { Codes } from '@common/utils/codes';
import { errorMessage } from '@common/utils/error-messages';
import { UsersRepository } from '@infra/database/repositories/users.repository';
import { mapGetUserToResponse } from '@module/users/users.mapper';
import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
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
      throw new UnauthorizedException(
        errorMessage(Codes.AUTH__UNEXPECTED_AUTHORIZATION),
        {
          cause: new Error(Codes.AUTH__UNEXPECTED_AUTHORIZATION),
        },
      );
    }

    if (user.status === UserStatus.BLOCKED) {
      throw new UnauthorizedException(errorMessage(Codes.AUTH__USER_DISABLED), {
        cause: new Error(Codes.AUTH__USER_DISABLED),
      });
    }

    if (!user.emailVerifiedAt) {
      // TODO: send confirmation email
      // await this.authenticationService.sendConfirmationAccountEmail(user);

      throw new UnauthorizedException(
        errorMessage(Codes.AUTH__USER_NOT_ACTIVATED),
        {
          cause: new Error(Codes.AUTH__USER_NOT_ACTIVATED),
        },
      );
    }

    const passwordMatch = await bcrypt.compare(password, user?.password);
    if (!passwordMatch) {
      throw new UnauthorizedException(
        errorMessage(Codes.AUTH__UNEXPECTED_AUTHORIZATION),
        {
          cause: new Error(Codes.AUTH__UNEXPECTED_AUTHORIZATION),
        },
      );
    }

    const accessToken = this.jwtService.sign({
      id: user.id,
      role: user.role,
    });

    return {
      accessToken,
      user: mapGetUserToResponse(user),
    };
  }
}
