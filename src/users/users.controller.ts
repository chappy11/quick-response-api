import { Body, Controller, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserLoginDto } from './dto/User.dto';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.usersService.create(createUserDto);
  }

  @Post('login')
  login(@Body() loginDto: UserLoginDto) {
    return this.usersService.login(loginDto);
  }
}
