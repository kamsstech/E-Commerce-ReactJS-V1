import { LoginResponseEntity } from "../../model";

export const LoginResponseMockdata: LoginResponseEntity = {
  appStatusCode: 0,
  payloadJson: {
    jwtToken:
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYW5qaXRoYSIsImV4cCI6MTU4MDgxODcwMSwiaWF0IjoxNTgwNzMyMzAxfQ.1w1g3kfIDKSgzdvNplZHzY0FKlH_1_1yTlm9wmJIe2M",
    tokenType: "Bearer ",
    expiryDuration: 86400000,
    refreshJwtToken: null
  },
  messages: ["You are Login Successfully !"],
  apiCall:
    '/login -> {"usernameOrMobileNumber":"9092402502","password":"csquare"}',
  payloadClass: null
};
