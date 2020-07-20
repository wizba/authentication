import { Document } from 'mongoose';

export interface _User extends Document {
    name:string;
    email:string;
    created:Date;
    password:string;
}