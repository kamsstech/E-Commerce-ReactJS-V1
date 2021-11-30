import { SearchBySellerResultEntity } from "./searchBySellerResultEntity";

export interface SearchBySellerActionEntity {
    type: string;
    loading: boolean;
    payload: SearchBySellerResultEntity[] | [];
    error: string;
}