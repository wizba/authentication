/* eslint-disable @typescript-eslint/camelcase */
import { Controller, Get, Param } from '@nestjs/common';
import { Catergory, Stack } from './jurneyModels/category.models';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {

    constructor(private categoryService:CategoryService){}

    catergory:Catergory;
    tech_stack:Stack;
    tech_stack2:Stack;
    @Get('test')
    testJurney()
    {
        this.catergory ={
            title:'Science',
            //course
            stacks:[]
        };
        this.tech_stack={
            stack_title:'Medicine',
            Modules:['5f57597dbec15519c07875ff','5f5759a101ee6f19c6ca3763','5f5759af31017119cac1e07a']
        };
        this.tech_stack2={
            stack_title:'',
            Modules:['5f5759c436beb219d6ade357','5f5759d4d804a919d800cf65','5f5759af31017119cac1e07a']
        };

        this.tech_stack2={
            stack_title:'.Net',
            Modules:['5f5759c436beb219d6ade357','5f5759d4d804a919d800cf65','5f5759af31017119cac1e07a']
        };
        this.catergory.stacks.push(this.tech_stack);
        this.catergory.stacks.push(this.tech_stack2);
        
        
        return this.categoryService.createCatergory(this.catergory);
    }

    @Get('all')
    get_all_catergories()
    {
        return this.categoryService.getAllCatergories();
    }

    @Get(':id')
    get_category_by_id(@Param('id') id)
    {
        return this.categoryService.getCatergoryById(id);
    }

    //get cartegory by name
    @Get('name/:name')
    get_category_by_name(@Param('name') name:string)
    {
        return this.categoryService.getCatergoryByName(name);
    }
}
