import { BranchEntity } from "..";

export interface BranchListEntity {
    payload: BranchEntity[] | [];
    error: string;
}
  