/* eslint-disable @typescript-eslint/class-name-casing */
import { Document } from 'mongoose';


export interface _User extends Document {
    name:string;
    email:string;
    created:Date;
    password:string;
}