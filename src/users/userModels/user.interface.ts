/* eslint-disable @typescript-eslint/class-name-casing */
import { Document } from 'mongoose';
import { Catergory } from './user.dto';




export interface _User extends Document {
    name:string;
    email:string;
    created:Date;
    password:string;
    Catergory?:Catergory[];
}