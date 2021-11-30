import { SearchByMoleculeResultEntity } from "..";

export interface SearchByMoleculeActionEntity {
    type: string;
    loading: boolean;
    payload: SearchByMoleculeResultEntity[] | [];
    error: string;
}