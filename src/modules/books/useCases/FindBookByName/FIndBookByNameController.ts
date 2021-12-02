import { Request, Response } from "express";
import { FindBookByNameUseCase } from "./FindBookByNameUseCase";


class FindBookByNameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        const findBookByNameUseCase = new FindBookByNameUseCase()

        const books = await findBookByNameUseCase.execute(name);

        return response.status(200).json(books)
    }
}

export { FindBookByNameController }