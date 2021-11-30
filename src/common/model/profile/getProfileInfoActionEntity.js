import { RegisterDetailsInputEntity } from "..";

export interface GetProfileInfoActionEntity {
    type: string;
    payload: RegisterDetailsInputEntity;
    error: string;
  }
  