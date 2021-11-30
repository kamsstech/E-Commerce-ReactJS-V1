import { GetDistributorsResultEntity } from "../index"

export interface GetDistributorsActionEntity {
    loading:boolean;
    type: string;
    payload:  GetDistributorsResultEntity[] | [];
    error: string;
}