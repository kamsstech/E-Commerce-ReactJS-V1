import {AddBranchInputEntity} from ".."

export interface GetBranchInfoActionEntity {
    type: string;
    payload: AddBranchInputEntity | {};
    error: string;
}