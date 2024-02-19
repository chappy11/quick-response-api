import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { UserLoginDto } from './dto/User.dto';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({ data: createUserDto });
  }

  async login(loginParams: UserLoginDto) {
    const { email, password } = loginParams;
    const query = {
      email,
      password,
    };

    return this.filterByQuery(query);
  }

  async findAll() {
    return this.databaseService.user.findMany({});
  }

  async filterByQuery(query: any) {
    return this.databaseService.user.findMany({
      where: query,
    });
  }

  update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
