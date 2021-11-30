
import { SellersResultEntity } from './sellersResultEntity';

export interface SellersActionEntity {
  type : String;
  loading : boolean;
  payload : SellersResultEntity[] | [];
  error : string
}