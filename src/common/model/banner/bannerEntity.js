import { BannerResultEntity } from "./bannerResultEntity";

export interface BannerEntity {
    loading: boolean;
    payload: BannerResultEntity[] | [];
    error: string;
}