import { Module } from '@nestjs/common';
import { CategoryController } from './categorycontroller';
import { CategoryService } from './category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatergorySchema } from './jurneyModels/catergory.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name:'catergory', schema: CatergorySchema }])],
    controllers: [CategoryController],
    providers: [ CategoryService],
})
export class JurneyModule {}
