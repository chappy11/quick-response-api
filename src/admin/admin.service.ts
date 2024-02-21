import { Injectable } from '@nestjs/common';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { AdminLoginDto } from './dto/admin.dto';

@Injectable()
export class AdminService {
  constructor(private readonly dbServices: DatabaseService) {}

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
    const response = await this.findByQuery(loginDto);

    return response;
  }

  async findByQuery<T>(query: T) {
    const response = await this.dbServices.admin.findMany({
      where: query,
    });

    return response;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
