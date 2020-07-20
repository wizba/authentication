import { userSchema } from './userModels/user.schema';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name:'user', schema: userSchema }])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
