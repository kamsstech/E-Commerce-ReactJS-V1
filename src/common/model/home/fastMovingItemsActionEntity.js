import { FastMovingItemsResultEntity } from "../index"

export interface FastMovingItemsActionEntity {
    type: string;
    payload: FastMovingItemsResultEntity[] | [];
    error: string;
}