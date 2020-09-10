import { Injectable } from '@nestjs/common';
import { _Catergory } from './jurneyModels/catergory.document';
import { Model } from 'mongoose';
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
    getAllCatergories()
    {
        console.log(typeof this.categoryRepository.find())
        return this.categoryRepository.find();
    }

}
