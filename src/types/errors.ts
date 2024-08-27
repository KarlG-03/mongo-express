export type TCustomError = {
  code: ECustomErrorCode;
  message: string;
  status?: number;
};

export enum ECustomErrorCode {
  ERR_GENERAL = 'ERR_GENERAL',
  ERR_UNKNOWN = 'ERR_UNKNOWN',
}
