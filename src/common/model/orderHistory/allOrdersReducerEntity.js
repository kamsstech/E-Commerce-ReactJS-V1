import { AllOrdersResultEntity } from "../index"

export interface AllOrdersReducerEntity {
    loading:boolean;
    payload: AllOrdersResultEntity[] | [];
    error: string;
}