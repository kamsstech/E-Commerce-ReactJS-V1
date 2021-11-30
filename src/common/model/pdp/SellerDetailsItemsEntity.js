import { SellerDetailsResultEntity } from "../index"

export interface SellerDetailsItemsEntity {
    loading: boolean;
    // payload: SellerDetailsResultEntity;
    payload: SellerDetailsResultEntity[] | [];
    error: string;
}