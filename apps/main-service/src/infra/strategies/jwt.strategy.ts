import { env } from '@/env';
import { Codes } from '@common/utils/codes';
import { errorMessage } from '@common/utils/error-messages';
import { UsersRepository } from '@infra/database/repositories/users.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersRepository: UsersRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: env.JWT_SECRET_KEY,
    });
  }

  async validate(payload: any) {
    const user = await this.usersRepository.get({
      where: {
        id: payload.id,
      },
    });

    if (!user) {
      throw new HttpException(
        errorMessage(Codes.AUTH__USER_NOT_AUTHORIZED),
        HttpStatus.UNAUTHORIZED,
        {
          cause: Codes.AUTH__USER_NOT_AUTHORIZED,
        },
      );
    }

    return user;
  }
}
