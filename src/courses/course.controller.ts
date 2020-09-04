import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
interface CourseDto{
     title:string;
    description:string;
}

@Controller('course')
export class CourseController {

    my_courses:CourseDto[]=[]; 

    @Get('greet')
    testing()
    {
        return 'tested';
    }

    @Post('my_course')
    course(@Body() courseDto:CourseDto)
    {
        this.my_courses.push(courseDto);
        return courseDto;
    }

    @Get('All')
    getAllCourses()
    {
        return this.my_courses;
    }

    @Put('my_course/:id')
    updateCourse(@Param('id') id,@Body() courseDto:CourseDto)
    {
        this.my_courses[id] =courseDto;
    }

    @Delete('my_course/:id')
    deleteCourse(@Param('id') id)
    {
        this.my_courses.splice(id,1);
    }
}
