import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { IUser } from '@infra/models/user.model';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.UserCreateInput): Promise<IUser> {
    return this.prisma.user.create({
      data,
    });
  }

  update(id: string, data: Prisma.UserUpdateInput): Promise<IUser> {
    return this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  get(params: {
    where: Prisma.UserWhereInput;
    // include?: Prisma.UserInclude;
  }): Promise<IUser> {
    const { where } = params;

    return this.prisma.user.findFirst({
      where,
      // include,
    });
  }

  delete(id: string): Promise<IUser> {
    return this.prisma.user.delete({
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
    return this.prisma.user.findMany({
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

    return this.prisma.$transaction([
      this.prisma.user.count({
        where,
        orderBy,
      }),
      this.prisma.user.findMany({
        // include,
        where,
        orderBy,
        skip,
        take: Number(limit),
      }),
    ]);
  }
}
