import { UsersService } from './users/users.service';
import { Controller, Request, Post, UseGuards, Get, Body, Res, Param, NotFoundException, HttpStatus, Put } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Course } from './users/userModels/user.dto';



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

  @Get('/test/test1')
  async test()
  {
   
    return this.userService.addCourse("Development",{
      courseName:'MEAN',
      description:'string 2',
      courseImage:'avatar',
      status:false
    })
  }

  // //adding a jurney to user 
  // //first you have to pass jurney object and push it to an existing user
  // @Post('jurney/:email')
  // async updateUser(@Param('email') email:string,@Body() Stack:Stack)
  // {
  //     const USER :Promise<_User>= this.userService._findOne(email);
  //    // const STACK = (await USER).Stacks;


  //    // (await USER).Stacks.push(this.getStack(Stack));
     

      
  
  
  //     return USER;
  // }

  // getStack(Stack:Stack)
  // {
  //   Stack.courses.forEach((course,Innerindex:number)=>{
            
  //     Stack.courses[Innerindex].status = false;
  //   });

  //   return Stack;
  // }

}
