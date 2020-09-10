import { Controller, Get } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseDto } from './couseModels/course.dto';

@Controller('course')
export class CourseController {
    constructor(private courseService:CourseService){}
    course:CourseDto;

    @Get('/test')
    testController(){

        this.course={
            courseName:'IDC', 
            description:'something'
        }
        return this.courseService.createCourse(this.course);
    }
    @Get('/all')
    getCOurse()
    {
        return this.courseService.findAllCourses();
    }
    
}
