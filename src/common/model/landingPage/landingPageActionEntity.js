import { LandingListEntity } from "./landingListEntity";

export interface LandingPageActionEntity {
   type: string;
   loading:boolean;
  payload: LandingListEntity[] | [];
  error: string;
}
