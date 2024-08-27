import { Request, Response, NextFunction } from 'express';
import { ECustomErrorCode } from '../types/errors';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  const status = err.status || 500;
  const code = err.code || ECustomErrorCode.ERR_UNKNOWN;
  const message = err.message || 'An unknown error occurred';

  res.status(status).json({
    error: {
      code,
      message,
    },
  });
}
