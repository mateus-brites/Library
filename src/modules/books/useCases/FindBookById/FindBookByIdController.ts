import { Response, Request } from "express";
import { FindBookByIdUseCase } from "./FindBookByIdUseCase";


class FindBookByIdController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;

        const findBookUseCase = new FindBookByIdUseCase();

        const book = await findBookUseCase.execute(id);

        return response.json(book);
    }
}

export { FindBookByIdController };