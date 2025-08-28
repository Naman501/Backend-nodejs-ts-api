import { Router,Request,Response } from "express";
import { addBook, deleteBooks, getBooks, updateBook } from "../controllers/bookController";


const bookRouter = Router();

bookRouter.get("/get-books",getBooks)
bookRouter.post("/add-book",addBook)
bookRouter.put("/update-book/:id",updateBook)
bookRouter.delete("/delete-book/:id",deleteBooks)
export default bookRouter;