import {LandingListEntity} from ".."
export interface LandingPageListEntity {
    loading:boolean;
    payload: LandingListEntity[] | [];
    error: string;
}