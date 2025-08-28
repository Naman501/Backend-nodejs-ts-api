import { Router,Request,Response } from "express";
import { addBook, getBooks } from "../controllers/bookController";


const bookRouter = Router();

bookRouter.get("/get-books",getBooks)
bookRouter.post("/add-book",addBook)

export default bookRouter;