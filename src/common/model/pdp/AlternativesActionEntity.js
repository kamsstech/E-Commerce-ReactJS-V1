import { AlternativesResultEntity } from "../index"

export interface AlternativesActionEntity {
    type: string;
    loading: boolean;
    payload: AlternativesResultEntity | [];
    // payload: AlternativesResultEntity[] | [];
    error: string;
}