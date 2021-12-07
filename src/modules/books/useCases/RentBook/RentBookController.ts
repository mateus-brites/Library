import { Request, Response } from "express";
import { RentBookUseCase} from "./RentBookUseCase"


class RentBookController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.query;

        const rentBookUseCase = new RentBookUseCase();

        const book = await rentBookUseCase.execute(id as string);

        return response.status(201).json(book);
    }
}

export { RentBookController };