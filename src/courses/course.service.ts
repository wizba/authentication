import { Injectable } from '@nestjs/common';
import { Course } from './couseModels/course.document';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CourseService {

    constructor(@InjectModel('course') private userRepository:Model<Course>){}
    getHello(): string {
    return 'cousers works';
    }

    
}