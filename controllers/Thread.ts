import { RequestHandler } from 'express';
import { db } from '../persistence/memoryDB';
import { CustomRequestHandler } from "../DTOs/CustomRequestHandler";
import { CreateThreadRequest } from '../DTOs/Thread/CreateThreadRequest';
import { CreateThreadResponse } from '../DTOs/Thread/CreateThreadResponse';
import crypto from "crypto";
import { Thread } from "../types/Thread";
import { ListThreadsResponse } from '../DTOs/Thread/ListThreadsResponse';

// => the received req type is an object 
// => the response type is an object
export const ListAllThreadsHandler: CustomRequestHandler<{}, ListThreadsResponse> = (req, res, next) =>
{
    throw new Error("Error while listing threads");
    return res.status(200).json({ threads: db.ListAllThreads() });
};

// => receive an object represents the props we need from the thread type  
// => return nothing
export const CreateThread: CustomRequestHandler<CreateThreadRequest, CreateThreadResponse> = (req, res) =>
{
    // validate the dto recieved from the client 
    if (!req.body.title || !req.body.url || !req.body.userId) return res.status(400);

    // if its valid, create a new entity model and persist it using the db abstraction layer
    const newThread: Thread = {
        id: crypto.randomUUID(),
        title: req.body.title,
        url: req.body.url,
        userId: req.body.userId,
        createdAt: Date.now(),
        isRemoved: false
    };
    db.CreateNewThread(newThread);
    // returen the response status code
    return res.sendStatus(200);
};