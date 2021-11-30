import { FreqorderResultEntity } from "./freqorderResultEntity";

export interface FreqorderEntity {
    loading: boolean;
    payload: FreqorderResultEntity[] | [];
    error: string;
}