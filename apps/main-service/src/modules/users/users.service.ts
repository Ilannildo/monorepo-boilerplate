import { UsersRepository } from '@infra/database/repositories/users.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { mapGetUserToResponse } from './users.mapper';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async get(user_id: string) {
    const user = await this.usersRepository.get({
      where: {
        id: user_id,
      },
    });

    if (!user) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    return mapGetUserToResponse(user);
  }
}
