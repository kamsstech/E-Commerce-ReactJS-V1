import {PaymentFooterResponseEntity} from ".."
export interface PaymentFooterReducerEntity {
    loading:boolean;
    payload: PaymentFooterResponseEntity[] | {};
    error: string;
}