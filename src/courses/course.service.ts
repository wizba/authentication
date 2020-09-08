import { Injectable } from '@nestjs/common';
import { Course } from './couseModels/course.document';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourseDto } from './couseModels/course.dto';

@Injectable()
export class CourseService {

    constructor(@InjectModel('course') private courseRepository:Model<Course>){}
    getHello(): string {
    return 'cousers works';
    }

    async createCourse(couseObject:CourseDto) {
    
        const newUser = await new this.courseRepository(couseObject)
        return newUser.save();
    }
   


}