import { SellerDetailsResultEntity } from "../index"

export interface SellerDetailsActionEntity {
    type: string;
    loading: boolean;
    // payload: SellerDetailsResultEntity;
    payload: SellerDetailsResultEntity[] | [];
    error: string;
}