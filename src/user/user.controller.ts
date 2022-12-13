import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from '@app/user/user.service';

@Controller()
//unit router api nest
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('users')
  async createUser(@Body('user') createUserDto: any): Promise<any> {
    console.log('createUserDto-----------', createUserDto);
    return this.userService.createUser(createUserDto);
  }
}
