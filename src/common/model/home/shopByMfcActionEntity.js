import { ShopByMfcActionResultEntity } from "./shopByMfcActionResultEntity";

export interface ShopByMfcActionEntity {
    type: string;
    loading: boolean;
    payload: ShopByMfcActionResultEntity[] | [];
    error: string;
}