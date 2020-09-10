import { Injectable } from '@nestjs/common';
import { _Catergory } from './jurneyModels/catergory.document';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {
    constructor(@InjectModel('catergory') private categoryRepository:Model<_Catergory>){}

    async createCatergory(categoryObject) {
    
        const newUser = await new this.categoryRepository(categoryObject)
        return newUser.save();
    }
}
