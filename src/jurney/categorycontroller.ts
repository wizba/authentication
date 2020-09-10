/* eslint-disable @typescript-eslint/camelcase */
import { Controller, Get } from '@nestjs/common';
import { Catergory, Stack } from './jurneyModels/category.models';
import { CategoryService } from './category.service';

@Controller('jurney')
export class CategoryController {

    constructor(private categoryService:CategoryService){}

    catergory:Catergory;
    tech_stack:Stack;
    @Get('test')
    testJurney()
    {
        this.catergory ={
            title:'Medicine',
            //course
            stacks:[]
        };
        this.tech_stack={
            stack_title:'Mean Stack',
            Modules:['5f57597dbec15519c07875ff','5f5759a101ee6f19c6ca3763','5f5759af31017119cac1e07a']
        };

        this.catergory.stacks.push(this.tech_stack);
        
        
        return this.categoryService.createCatergory(this.catergory);
    }
}
