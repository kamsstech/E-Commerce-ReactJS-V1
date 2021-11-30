import { SellersResultEntity } from "./sellersResultEntity";

export interface SellersEntity {
    loading: boolean;
    payload: SellersResultEntity[] | [];
    error: string;
}