import { SearchByProductResultEntity } from "./searchByProductResultEntity";

export interface SearchByProductActionEntity {
    type: string;
    loading: boolean;
    payload: SearchByProductResultEntity[] | [];
    error: string;
}