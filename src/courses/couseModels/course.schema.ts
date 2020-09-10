import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
    courseName:String,
    description:String,
    courseImage:String,
    created: { type: Date, default: Date.now }
})