import { UserRoleGuard } from '@common/guards/user-role.guard';
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { AuthenticatedRequest } from '@common/types/authenticated-request';

@ApiTags('Usuários')
@UseGuards(UserRoleGuard)
@UseGuards(AuthGuard('jwt'))
@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/me')
  async me(@Request() req: AuthenticatedRequest) {
    const user = req.user;

    return this.usersService.get(user.id);
  }
}
