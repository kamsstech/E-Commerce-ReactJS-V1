import { ShopByMfcActionResultEntity } from "./shopByMfcActionResultEntity";

export interface ShopByMfcEntity {
    loading: boolean;
    payload: ShopByMfcActionResultEntity[] | [];
    error: string;
}