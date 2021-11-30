import { AddUserInputEntity } from ".."

export interface GetUserInfoActionEntity {
    type: string;
    payload: AddUserInputEntity | {};
    error: string;
}