import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UsersRepository } from './repositories/users.repository';

const repositories = [UsersRepository];

@Global()
@Module({
  providers: [
    { provide: PrismaService, useValue: PrismaService.getInstance() },
    ...repositories,
  ],
  exports: [PrismaService, ...repositories],
})
export class DatabaseModule {}
