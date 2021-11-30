import {GSTEntity} from "..";

export interface GSTListActionEntity{
    type: string;
    payload: GSTEntity[];
    error: string;
}