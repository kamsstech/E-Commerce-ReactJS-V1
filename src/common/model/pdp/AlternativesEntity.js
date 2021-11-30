import { AlternativesResultEntity } from "../index"

export interface AlternativesEntity {
    loading: boolean;
    payload: AlternativesResultEntity | [];
    // payload: AlternativesResultEntity[] | [];
    error: string;
}