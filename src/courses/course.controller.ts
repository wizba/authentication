import { Controller, Get } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
    constructor(private courseService:CourseService)
    {}
    @Get('/test')
    testController()
    {
        return this.courseService.getHello();
    }
}
