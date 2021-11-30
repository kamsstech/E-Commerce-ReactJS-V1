import { OffersResultEntity } from "../index"

export interface OffersActionEntity {
    loading:boolean;
    type: string;
    payload: OffersResultEntity[] | [];
    error: string;
}