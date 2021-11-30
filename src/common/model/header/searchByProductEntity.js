import { SearchByProductResultEntity } from "./searchByProductResultEntity";

export interface SearchByProductEntity {
    loading: boolean;
    payload: SearchByProductResultEntity[] | [];
    error: string;
}