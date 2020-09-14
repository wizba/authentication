import { Document } from 'mongoose';


export interface Course extends Document{
    courseName:string;
    description:string;
    courseImage?:string;
    modules?:any[]
}