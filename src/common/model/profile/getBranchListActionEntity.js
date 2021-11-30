import { BranchEntity } from "..";

export interface GetBranchListActionEntity {
    type: string;
    payload: BranchEntity[] | [];
    error: string;
}
  