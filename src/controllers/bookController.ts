import { Response,Request } from "express"
import { Book } from "../models/Book"
import { log } from "console"
import { matchesGlob } from "path";

interface IResponse{
    success:boolean,
    message:string,
    data?:any,
}

export const getBooks=async (req:Request,res:Response)=>{

try {
     
    const books = await Book.find();
    if(!books){
        return res.status(404).json({
            success:false,
            message:"No books Found."
        } as IResponse)
    }
 
    return res.status(200).json({
                    success:true,
                    message:"Books found",
                    data:books
           } as IResponse
        )
  

} catch (error) {
    return res.status(500).json({
        success:false,
        message:"Internal Server Error"
    } as IResponse)
}

         
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

export const updateBook = async(req:Request,res:Response)=>{
    const {id} = req.params;

    const {name,author,publishYear,description}=req.body

    try {
        const book= await Book.findByIdAndUpdate(id,{name,author,publishYear,description},{
            new:true
        })

        if(!book){
         return res.status(404).json({
            success:false,
            message:"No books Found."
        } as IResponse)
        }
        return res.status(200).json({
            success:true,
            message:"Book Updated"
        } as IResponse)

    } catch (error:any) {
        return res.status(300).json({
            success:false,
            message:error.message
        })
    }
}

export const deleteBooks = async (req:Request,res:Response)=>{
    const {id} = req.params;
try {
    const book = await Book.findByIdAndDelete(id)
  if(!book){
      return res.status(404).json({
        success:false,
            message:"No book found."
    })
  }
  return res.status(200).json({
    success:true,
    message:"Book Deleted!",
  })
    
} catch (error: any) {
      return res.status(300).json({
            success:false,
            message:error.message
        })
}}