import { UsersService } from './users/users.service';
import { Controller, Request, Post, UseGuards, Get, Body, Res, Param, NotFoundException, HttpStatus } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService,private userService:UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log(req)
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post()
  postStudent(@Body() createCustomerDTO) {
    console.log(createCustomerDTO);
    return this.userService.createUser(createCustomerDTO);
  }


  // Fetch a particular customer using ID
  @Get('/:email')
  async getCustomer(@Res() res, @Param('email') email) {
      const _user = await this.userService._findOne(email);
      if (!_user) throw new NotFoundException('Customer does not exist!');
      return res.status(HttpStatus.OK).json(_user);
  }

}
