import { Controller, Get } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseDto } from './couseModels/course.dto';

@Controller('course')
export class CourseController {
    constructor(private courseService:CourseService){}
    course:CourseDto;

    @Get('/test')
    testController(){

        // this.course={
        //     courseName:'Mean stack', 
        //     description:'something',
        //     modules:[
        //         {
        //             title: 'Mongo',
                
        //             img: '../../../assets/images/react.svg'
        //           },

        //           {
        //             title: 'HTML',
                
                
        //             img: '../../../assets/images/html.svg'
        //           },
        //           {
        //             title: 'CSS',
        //             // description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                
        //             img: '../../../assets/images/css.svg'
        //           },
        //           {
        //             title: 'ANGULAR',
        //             // description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                
        //             img: '../../../assets/images/angular.svg'
        //           },
        //     ]
        // }
        this.course={
            courseName:'Lamp', 
            description:'something',
            modules:[
                {
                    title: 'Mongo',
                
                    img: '../../../assets/images/react.svg'
                  },
                  
                  {
                    title: 'HTML',
                
                
                    img: '../../../assets/images/html.svg'
                  },
                  {
                    title: 'CSS',
                    // description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                
                    img: '../../../assets/images/css.svg'
                  },
                  {
                    title: 'ANGULAR',
                    // description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                
                    img: '../../../assets/images/angular.svg'
                  },
            ]
        }
        return this.courseService.createCourse(this.course);
    }
    @Get('/all')
    getCOurse()
    {
        return this.courseService.findAllCourses();
    }
    
}
