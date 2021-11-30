import { OffersResultEntity } from "../index"

export interface OffersReducerEntity {
    loading:boolean;
    payload: OffersResultEntity[] | [];
    error: string;
}