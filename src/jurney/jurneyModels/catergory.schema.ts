import * as mongoose from 'mongoose';

export const CatergorySchema = new mongoose.Schema({
    title:String,
    stacks:[],
    created: { type: Date, default: Date.now }
})