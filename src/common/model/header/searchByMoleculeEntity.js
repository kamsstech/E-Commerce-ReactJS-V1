import { SearchByMoleculeResultEntity } from "..";

export interface SearchByMoleculeEntity {
    loading: boolean;
    payload: SearchByMoleculeResultEntity[] | [];
    error: string;
}