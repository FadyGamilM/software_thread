import { RequestHandler } from "express"
const logger: RequestHandler = (req, res, next) => {
    console.log(`REQUEST_METHOD : ${req.method}, REQUEST_BODY : ${req.body}, REQUEST_TIME : ${Date.now()}`)
    next()
}

export { logger }