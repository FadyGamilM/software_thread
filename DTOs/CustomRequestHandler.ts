import { RequestHandler } from "express";

// this type is a custom type above the request and response type that the express's request handler is receiving, so i can select what i need to receive in the 
// request and what i need to return in the response .. its more like what grpc is doing
export type CustomRequestHandler<RequestType, ResponseType> = RequestHandler<
   string,
   Partial<ResponseType>,
   Partial<RequestType>,
   any
>;
