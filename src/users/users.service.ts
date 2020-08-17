import { Injectable } from '@nestjs/common';
import { _User } from './userModels/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user } from './userModels/user.dto';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(@InjectModel('user') private userRepository:Model<_User>) {
  }
  
  
  async createUser(userObject) {
    
     const newUser = await new this.userRepository(userObject)
     return newUser.save();
 }


 async getStudent(userID){
  const _user = await this.userRepository.findById(userID).exec();
  return _user;
}
  //find by email
  async _findOne(email:string): Promise<user | undefined> {
    const _user = await this.userRepository.findOne({email:email}).exec();
    return _user;
  }

  
}