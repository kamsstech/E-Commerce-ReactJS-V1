import { PreferedSellerResultEntity } from "../index"

export interface PreferedSellerReducerEntity{
    loading: boolean,
    payload: PreferedSellerResultEntity[] | [],
    error: string
}