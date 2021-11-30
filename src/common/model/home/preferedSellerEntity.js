import { PreferedSellerResultEntity } from "../index"

export interface PreferedSellerEntity {
    type:  string,
    loading: boolean,
    payload: PreferedSellerResultEntity[] | [],
    error: string
}