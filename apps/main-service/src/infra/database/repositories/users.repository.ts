import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IUser } from '@infra/models/user.model';
import { Prisma } from '@solarapp/db';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<IUser> {
    return await this.prisma.client.user.create({
      data,
    });
  }

  update(id: string, data: Prisma.UserUpdateInput): Promise<IUser> {
    return this.prisma.client.user.update({
      where: {
        id,
      },
      data,
    });
  }

  get(params: {
    where: Prisma.UserWhereInput;
    // include?: Prisma.UserInclude;
  }): Promise<IUser | null> {
    const { where } = params;

    return this.prisma.client.user.findFirst({
      where,
      // include,
    });
  }

  delete(id: string): Promise<IUser> {
    return this.prisma.client.user.delete({
      where: {
        id,
      },
    });
  }

  list(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
    // include?: Prisma.UserInclude;
  }): Promise<IUser[]> {
    const { cursor, orderBy, skip, take, where } = params;
    return this.prisma.client.user.findMany({
      where,
      orderBy,
      cursor,
      skip,
      take,
      // include,
    });
  }

  paginate(params: {
    page: number;
    limit: number;
    where?: Prisma.UserWhereInput;
    // include?: Prisma.UserInclude;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<[number, IUser[]]> {
    const { page, limit, orderBy, where } = params;

    const skip = Math.abs(page - 1) * limit;

    return this.prisma.client.$transaction([
      this.prisma.client.user.count({
        where,
        orderBy,
      }),
      this.prisma.client.user.findMany({
        // include,
        where,
        orderBy,
        skip,
        take: Number(limit),
      }),
    ]);
  }
}
