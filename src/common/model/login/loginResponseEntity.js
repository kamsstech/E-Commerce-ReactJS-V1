export interface LoginResponseEntity {
  appStatusCode: number;
  payloadJson: {
    jwtToken: string;
    tokenType: string;
    expiryDuration: number;
    refreshJwtToken: null;
  };
  messages: [string];
  apiCall: string;
  payloadClass: null;
}
