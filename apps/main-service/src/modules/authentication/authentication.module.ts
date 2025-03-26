import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { JwtModule } from '@nestjs/jwt';
import { env } from '@/env';
import { JwtStrategy } from '@infra/strategies/jwt.strategy';
import { JWT_EXPIRES_IN } from '@common/config/app';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: JWT_EXPIRES_IN,
      },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, JwtStrategy],
})
export class AuthenticationModule {}
