import {FooterResponseEntity} from ".."
export interface FooterReducerEntity {
    loading:boolean;
    payload: FooterResponseEntity[] | {};
    error: string;
}