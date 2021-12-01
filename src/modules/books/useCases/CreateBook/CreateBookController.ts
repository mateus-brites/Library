import { Request, Response } from "express"
import { CreateBookUseCase } from "./CreateBookUseCase";

class CreateBookController{
    async handle(request: Request, response: Response){

        const { name } = request.body;

        const createBookUseCase = new CreateBookUseCase();

        await createBookUseCase.execute(name);

    return response.send()
    }
}

export { CreateBookController };