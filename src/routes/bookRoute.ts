import { Router,Request,Response } from "express";
import { getBooks } from "../controllers/bookController";


const bookRouter = Router();

bookRouter.get("/get-books",getBooks)

export default bookRouter;