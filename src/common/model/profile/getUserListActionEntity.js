import { userEntity } from "..";

export interface GetUserListActionEntity {
    type: string;
    message: string;
    payload: userEntity[] | [];
    error: string;
}
  