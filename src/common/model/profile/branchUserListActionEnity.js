import { BranchUserListInputEntity } from "..";

export interface BranchUserListActionEntity {
    type: string;
    payload:BranchUserListInputEntity[];
    error: string;
}
  