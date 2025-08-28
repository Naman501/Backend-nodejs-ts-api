import { Router,Request,Response } from "express";
import { addBook, getBooks, updateBook } from "../controllers/bookController";


const bookRouter = Router();

bookRouter.get("/get-books",getBooks)
bookRouter.post("/add-book",addBook)
bookRouter.put("/update-book/:id",updateBook)
export default bookRouter;