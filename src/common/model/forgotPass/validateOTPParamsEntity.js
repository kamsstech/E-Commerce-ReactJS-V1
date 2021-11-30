export interface ValidateOTPParamsEntity {
  mobileNumber: number | string;
  verifyOtp: number | string;
  ipAddress: string;
  c2Code: string;
}
