import { SearchByMfcResultEntity } from "..";

export interface SearchByMfcEntity {
    loading: boolean;
    payload: SearchByMfcResultEntity[] | [];
    error: string;
}