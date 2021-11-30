import { BannerResultEntity } from './bannerResultEntity'

export interface BannerActionEntity {
  type : String;
  loading : boolean;
  payload : BannerResultEntity[] | [];
  error : string
}