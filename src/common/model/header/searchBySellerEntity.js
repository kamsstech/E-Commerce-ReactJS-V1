import { SearchBySellerResultEntity } from "./searchBySellerResultEntity";

export interface SearchBySellerEntity {
    loading: boolean;
    payload: SearchBySellerResultEntity[] | [];
    error: string;
}