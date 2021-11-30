import { BrandsResultEntity } from "./brandsResultEntity";

export interface BrandsEntity {
    loading: boolean;
    payload: BrandsResultEntity[] | [];
    error: string;
}