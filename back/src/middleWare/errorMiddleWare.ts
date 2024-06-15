import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../httpError';

export default (
    err: Error | HttpError,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (err instanceof HttpError) {
        const status = err.status || 500;
        const message = err.message || 'Something went wrong';
        res.status(status).json({ error: message });
      } else {
        const status = 500;
        const message = 'Internal Server Error';
        res.status(status).json({ error: message });
      }
  }