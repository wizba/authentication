/* eslint-disable @typescript-eslint/class-name-casing */



export interface user  {
    name?:string;
    email?:string;
    created?:Date;
    password?:string;
    
    Catergory?:Catergory[];
}

export interface Course
    {
        courseName:string;
        description:string;
        courseImage?:string;
        status?:boolean
    }

export interface Catergory{
            title ?:string,
           corses ?:Course[]
}

