export interface ValidateOTPActionEntity {
  type: string;
  loading: boolean;
  payload: { message: string };
  error: string;
}
