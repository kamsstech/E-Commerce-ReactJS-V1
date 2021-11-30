import { FastMovingItemsResultEntity } from "../index"

export interface FastMovingItemsEntity {
    payload: FastMovingItemsResultEntity[] | [];
    error: string;
}