import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from './couseModels/course.schema';



@Module({
    imports:[MongooseModule.forFeature([{ name:'course', schema:  CourseSchema}])],
      controllers: [
    CourseController
  ],
  providers: [CourseService],
})
export class CoursesModule {}