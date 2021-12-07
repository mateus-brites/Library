import { Request, Response } from "express";
import { ReplaceBookUseCase } from "./ReplaceBookUseCase";


class ReplaceBookController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.query

        const replaceBookUseCase = new ReplaceBookUseCase()

        await replaceBookUseCase.execute(id as string);

        return response.status(201).send()
    }
}

export { ReplaceBookController };