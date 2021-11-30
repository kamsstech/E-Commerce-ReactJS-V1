import {StateListResultEntity} from "..";

export interface StateListActionEntity{
    type: string;
    payload: StateListResultEntity[];
    error: string;
}