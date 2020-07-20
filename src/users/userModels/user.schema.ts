import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    created: { type: Date, default: Date.now }
})