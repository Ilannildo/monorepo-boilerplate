import { UserRoleGuard } from '@common/guards/user-role.guard';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { AuthenticatedRequest } from '@common/types/authenticated-request';
import { CreateUserDto } from './dto/request/create-user.dto';

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

  @Post('/')
  async create(
    @Request() req: AuthenticatedRequest,
    @Body() data: CreateUserDto,
  ) {
    const response = await this.usersService.create(data, req.user.companyId);

    return response;
  }
}
