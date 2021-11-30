import { OrderdetailResultEntity } from "../index"

export interface OrderdetailActionEntity {
    type:  string,
    loading: boolean,
    payload: OrderdetailResultEntity[] | [],
    error: string
}