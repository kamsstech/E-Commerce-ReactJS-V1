import { BrandsResultEntity } from './brandsResultEntity';

export interface BrandsActionEntity {
  type : String;
  loading : boolean;
  payload : BrandsResultEntity[] | [];
  error : string
}