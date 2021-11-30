import { OrderdetailResultEntity } from "../index"

export interface OrderdetailReducerEntity{
    loading: boolean,
    payload: OrderdetailResultEntity[] | [],
    error: string
}