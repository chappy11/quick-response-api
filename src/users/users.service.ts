import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { UserLoginDto } from './dto/User.dto';

@Injectable()
export class UsersService {

  private db = null;

  constructor(private readonly databaseService: DatabaseService) {
    this.db = this.databaseService.user;
  }

  private async findManyQuery<T>(query: T) {
    const response = await this.db.findMany({
      where: query,
    });

    return response;
  }

  private async findOneQuery<T>(query: T) {
    const response = await this.db.findFirst({
      where: query
    })

    return response
  }

  async create(createUserDto: Prisma.UserCreateInput) {
    return this.db.create({ data: createUserDto });
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
    return await this.db.user.findMany({});
  }

}
