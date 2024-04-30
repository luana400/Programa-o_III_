import { Request, Response } from "express"
import {BookService} from './src/controllers/book.service'

class bookController {
    async create(req: Request, res: Response){
        const book = await new BookService().create(req.body)
        return res.json(book)
    }

    async findById (req:Request, res: Response) {
        const book = await new BookService().findById(req.params.id)
        return res.json(book)
    }

    export default new bookController;
}