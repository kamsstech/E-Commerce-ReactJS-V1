import {PaymentFooterResponseEntity} from "..";
export interface PaymentFooterActionEntity {
   type: string;
   loading:boolean;
  payload: PaymentFooterResponseEntity[] | {};
  error: string;
}
