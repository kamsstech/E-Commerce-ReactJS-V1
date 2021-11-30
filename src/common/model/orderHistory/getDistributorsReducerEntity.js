import { GetDistributorsResultEntity } from "../index"

export interface GetDistributorsReducerEntity {
    loading:boolean;
    payload: GetDistributorsResultEntity[] | [];
    error: string;
}