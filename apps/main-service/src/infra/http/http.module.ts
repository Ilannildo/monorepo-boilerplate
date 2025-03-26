import { Module } from '@nestjs/common';
import { AuthenticationModule } from '@module/authentication/authentication.module';
import { UsersModule } from '@module/users/users.module';

@Module({
  imports: [
    AuthenticationModule,
    UsersModule
  ],
})
export class HttpModule {}
