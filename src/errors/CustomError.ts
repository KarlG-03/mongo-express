import { ECustomErrorCode, TCustomError } from '../types/errors';

export const createGeneralError = (message: string = 'An error occurred', status: number = 500): TCustomError => ({
  code: ECustomErrorCode.ERR_GENERAL,
  message,
  status,
});
