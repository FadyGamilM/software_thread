import express from "express";
import { logger } from "./logger";
import { CreateThread, ListAllThreadsHandler } from './controllers/Thread';
import { ErrorHandler } from "./Errors/ErrorHandler";
import asyncHandler from "express-async-handler";
import { InitDB } from "./persistence/sqliteDB";

(async () =>
{
    // wait untill the db is ready 
    await InitDB();

    // then do all the server-setup stuff
    const app = express();
    app.use(express.json());

    app.use(logger);

    app.get("/threads/list", asyncHandler(ListAllThreadsHandler));
    app.post("/threads/new", asyncHandler(CreateThread));

    app.get("/", (req, res, next) =>
    {
        return res.send("hello from server ");
    });


    app.use(ErrorHandler);

    let PORT = 5000;
    app.listen("5000", () =>
    {
        console.log(`app is running on port ${PORT}`);
    });

})();
