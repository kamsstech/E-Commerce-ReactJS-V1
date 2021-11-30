export interface SendOTPActionEntity {
  type: string;
  loading: boolean;
  payload: { message: string };
  error: string;
}
