import {model,Schema } from "mongoose";

interface IBook{
    name :string,
    author:string,
    publishYear:number,
    description:string,
}

const bookSchema = new Schema <IBook>({
    name:{
        type : String,
        required: true,
        trim:true
    }
    ,
    author:{
        type : String,
        trim:true,
        required: true,
    }
    ,
    publishYear :{
        type : Number,
        trim:true,
        required: true,
    }
    ,
    description:{
        type : String,
        required: true,
    }
})

const Book = model<IBook>("Book",bookSchema)

export {IBook,Book}