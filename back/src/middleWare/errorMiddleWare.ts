import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../httpError';
import { PrismaClientInitializationError, PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';

export default (
    err: Error | HttpError | PrismaClientKnownRequestError,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (err instanceof HttpError) {
        const status = err.status || 500;
        const message = err.message || 'Something went wrong';
        res.status(status).json({ error: message });
      } else if (err instanceof PrismaClientKnownRequestError) {
        const status = 500;
        const message = err.meta?.cause || 'Something went wrong';
        res.status(status).json({ error: message });
      } else {
        const status = 500;
        const message = 'Internal Server Error';
        res.status(status).json({ error: message });
      }
  }