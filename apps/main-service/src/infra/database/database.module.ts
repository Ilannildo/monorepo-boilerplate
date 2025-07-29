import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { UserProfilesRepository } from './repositories/user-profiles.repository';
import { UserSettingsRepository } from './repositories/user-settings.repository';

const repositories = [
  UsersRepository,
  UserProfilesRepository,
  UserSettingsRepository,
];

@Global()
@Module({
  providers: [PrismaService, ...repositories],
  exports: [PrismaService, ...repositories],
})
export class DatabaseModule {}
