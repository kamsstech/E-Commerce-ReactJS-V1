import { FooterResponseEntity } from "..";

export interface FooterActionEntity {
   type: string;
   loading:boolean;
  payload: FooterResponseEntity[] | {};
  error: string;
}
