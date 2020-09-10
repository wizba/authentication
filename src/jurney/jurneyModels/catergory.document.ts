import { Stack } from "./category.models";
import { Document } from 'mongoose';
/* eslint-disable @typescript-eslint/class-name-casing */
export interface _Catergory extends Document{
    title:string,
    stacks?:Stack[]
}