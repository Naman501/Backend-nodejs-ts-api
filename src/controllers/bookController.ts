import { Response,Request } from "express"
import { Book } from "../models/Book"
import { log } from "console"

interface IResponse{
    success:boolean,
    message:string,
    data?:any,
}

export const getBooks=(req:Request,res:Response)=>{
           return res.json({
                    success:false,
                    message:"No books found",
           } as IResponse
        )
}

export const addBook = async (req:Request,res:Response)=>{

    // req.body
    const {name,author,publishYear,description}=req.body
    
    console.log("The data we are getting :",name,",",author,",",publishYear,",",description);
    

    try {
        
        const book =await Book.create({
            name,
            author,
            description,
            publishYear
        })

            return res.status(201).json({
                success:true,
                message:"Book Added",
                data: book
            } as IResponse)

    } catch (error:any) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }

}