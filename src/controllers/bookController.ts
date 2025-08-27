import { Response,Request } from "express"
import { Book } from "../models/Book"

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

const addBook = async (req:Request,res:Response)=>{

    // req.body
    const {name,author,publishYear,description}=req.body


    
    try {
        
    } catch (error:any) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }

}