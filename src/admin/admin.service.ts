import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AdminLoginDto } from './dto/admin.dto';

@Injectable()
export class AdminService {
  private db = null;

  constructor(private readonly dbServices: DatabaseService) {
    this.db = this.dbServices.admin;
  }

  private async findByQuery<T>(query: T) {
    const response = await this.dbServices.admin.findMany({
      where: query,
    });

    return response;
  }

  private async findOne<T>(query: T) {
    const response = await this.dbServices.admin.findFirst({
      where: query
    })

    return response;
  }

  async create(createAdminDto: Prisma.AdminCreateInput) {
    const response = await this.dbServices.admin.create({
      data: createAdminDto,
    });

    return response;
  }

  async findAll() {
    const response = await this.dbServices.admin.findMany({});
    return response;
  }

  async login(loginDto: AdminLoginDto) {
    const response = await this.findOne(loginDto);

    return response;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
