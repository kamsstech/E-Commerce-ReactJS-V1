import { FreqorderResultEntity } from './freqorderResultEntity'

export interface FreqorderActionEntity {
  type : String;
  loading : boolean;
  payload : FreqorderResultEntity[] | [];
  error : string
}