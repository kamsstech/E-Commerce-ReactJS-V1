import { MaufactererResultEntity } from '../index'

export interface ManufacturerActionEntity {
  type : String;
  loading : boolean;
  payload : MaufactererResultEntity[] | [];
  error : string
}