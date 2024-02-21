import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { UserLoginDto } from './dto/User.dto';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({ data: createUserDto });
  }

  async login(loginParams: UserLoginDto): Promise<Prisma.UserCreateInput> {
    const { email, password } = loginParams;
    const query = {
      email,
      password,
    };

    const user = await this.findOneQuery(query);

    return user;
  }

  async findAll() {
    return await this.databaseService.user.findMany({});
  }

  private async findManyQuery<T>(query: T) {
    const response = await this.databaseService.user.findMany({
      where: query,
    });

    return response;
  }

  private async findOneQuery<T>(query: T) {
    const response = await this.databaseService.user.findFirst({
      where: query
    })

    return response
  }
}
