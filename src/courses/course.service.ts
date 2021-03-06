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

    /**
     *  the method allows us to create course
     * @param couseObject contains data structure that should be used
     */
    async createCourse(couseObject:CourseDto) {
        const newCourse = await new this.courseRepository(couseObject)
        return newCourse.save();
    }
   
    /**
     *  the method allows us to create at the begining of the program 
     * @param couseObject contains data structure that should be used
     */
    async createDefaultCourse(couseObject:CourseDto) {
        const newCourse = await new this.courseRepository(couseObject)
        return newCourse.save();
    }

    async findAllCourses(): Promise<any> {
        return await this.courseRepository.find().exec();
     }

    
     //finds a course by id generated by mongoose
     async findCourseById(id): Promise<any> {
        const customer = await this.courseRepository.findById(id).exec();
        return customer;
     }

     // update a course
     async updateCourse(id, couseObject:CourseDto): Promise<any> {
        return await this.courseRepository.findByIdAndUpdate(id, couseObject, { new: true });
     }
    //finds a course matching a specific name
     async findCourseByname(courseName){
       return await this.courseRepository.findOne({courseName});
     }

     //finds a course matching multiple names
     async findManyCourseByname(courseName){
        return await this.courseRepository.find({courseName});
      }

       
}