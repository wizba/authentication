/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';
import { _User } from './userModels/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Course, Catergory } from './userModels/user.dto';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(@InjectModel('user') private userRepository: Model<_User>) {}

  async createUser(userObject) {
    const newUser = await new this.userRepository(userObject);
    return newUser.save();
  }

  async getStudent(userID) {
    const _user = await this.userRepository.findById(userID).exec();
    return _user;
  }
  //find by email
  async _findOne(email: string) {
    const _user = await this.userRepository.findOne({ email: email }).exec();
    return _user;
  }

  //adding a new course or subject
  coses: Course[] = [];

  async addCourse(
    catergory_name: string,
    my_course?: Course
  ) {

    const email ='william@123.com';
    let save_category=false;

    const my_user = this._findOne(email);

    //when the Catergory exists
    if ((await my_user).Catergory != undefined &&  (await my_user).Catergory.length>0) {
      for (let index = 0; index < (await my_user).Catergory.length; index++) {
        save_category =false;
        if ((await my_user).Catergory[index]['title'] == catergory_name && !save_category) {
          (await my_user).Catergory[index]['corses'].push(my_course);
          break;
        }else{
          save_category = true;
          
        }
      }
    } 
    //when the Catergory does not exists 
    if(save_category) {
      const coses: Course[] = [];
      coses.push(my_course);

      (await my_user).Catergory.push({
        title: catergory_name,
        corses: coses,
      });

      save_category = false;
    }
   
    return this.userRepository.findOneAndUpdate(
      { email: email },
      { Catergory: (await my_user).Catergory },
    );
  }
}
