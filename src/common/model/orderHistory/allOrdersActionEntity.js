import { AllOrdersResultEntity } from "../index"

export interface AllOrdersActionEntity {
    loading:boolean;
    type: string;
    payload: AllOrdersResultEntity[] | [];
    error: string;
}