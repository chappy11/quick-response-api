import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import * as adminDto from './dto/admin.dto';

import { Prisma } from '@prisma/client';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  create(@Body() createAdminDto: Prisma.AdminCreateInput) {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Post('login')
  loginAdmin(@Body() loginDto: adminDto.AdminLoginDto) {
    return this.adminService.login(loginDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
