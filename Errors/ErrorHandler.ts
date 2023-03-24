import { ErrorRequestHandler } from "express";

export const ErrorHandler: ErrorRequestHandler = (err, req, res, next) =>
{
   console.log(`Oops, an unexpected error has occurred, please try again later`);
   console.log("ERROR : ", err);
   return res.status(500).json({ "error": `Oops, an unexpected error has occurred, please try again later` });
};