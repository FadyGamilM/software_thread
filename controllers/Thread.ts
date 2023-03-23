import { RequestHandler } from 'express';
import { db } from '../persistence/memoryDB';

export const ListAllThreadsHandler: RequestHandler = (req, res, next) => {
    return res.status(200).json(db.ListAllThreads())
}