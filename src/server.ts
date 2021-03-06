import "reflect-metadata";
import "express-async-errors";
import express, { NextFunction, Request, Response }  from "express";
import "./database";
import {router} from "./routes";
import { AppError } from "./errors/AppError";

const app = express();
app.use(express.json());

app.use(router);

app.listen(3333);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statuscode).json({ message: err.message});
        }app

        return response.status(500).json({
            status: "Error",
            message: `Internal server Error ${err}`,
        });
    }
)
