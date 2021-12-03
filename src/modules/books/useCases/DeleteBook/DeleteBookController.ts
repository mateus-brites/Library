import { Request, Response } from "express";
import { DeleteBookUseCase } from "./DeleteBookUseCase";


class DeleteBookController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.query

        const deleteBookUseCase = new DeleteBookUseCase();

        await deleteBookUseCase.execute(id as string);

        return response.status(201).send();
    }
}

export { DeleteBookController }