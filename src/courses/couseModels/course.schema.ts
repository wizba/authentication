import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
    courseName:String,
    description:String,
    courseImage:String,
    modules:[],
    created: { type: Date, default: Date.now }
})