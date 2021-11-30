import { SearchByMfcResultEntity } from "../";

export interface SearchByMfcActionEntity {
    type: string;
    loading: boolean;
    payload: SearchByMfcResultEntity[] | [];
    error: string;
}