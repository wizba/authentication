import { Injectable } from '@nestjs/common';
import { _Catergory } from './jurneyModels/catergory.document';
import { Model, DocumentQuery } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Catergory } from './jurneyModels/category.models';
import { threadId } from 'worker_threads';
import { type } from 'os';

@Injectable()
export class CategoryService {
    constructor(@InjectModel('catergory') private categoryRepository:Model<_Catergory>){}

    /**
     * 
     * @param categoryObject is dto that passes data accoding to the admin
     * create a new catergory by admin
     */
    async createCatergory(categoryObject:Catergory):Promise<Catergory> {
    
        const newUser = await new this.categoryRepository(categoryObject)
        return newUser.save();
    }

    // gets all the catergories of the user 
    getAllCatergories(){
        //
        const catergories: DocumentQuery<_Catergory[], _Catergory, {}> = this.categoryRepository.find();
        
        return catergories;
    }

    //gets catergory by id
    getCatergoryById(id:string)
    {
        const catergory = this.categoryRepository.findById(id);
         return catergory;
    }

    /**
     * this method gets catergory by name
     * @param name passed by the user from the controller ton access catergory by name
     */
    async getCatergoryByName(name:string)
    {
        const catergory = await this.categoryRepository.findOne({title:name}).exec();

        return catergory;
    }

}
