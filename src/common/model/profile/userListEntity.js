import { userEntity } from "..";

export interface UserListEntity {
    message: string;
    payload: userEntity[] | [];
    error: string;
}
  