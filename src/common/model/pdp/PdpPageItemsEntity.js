import { PdpPageItemsResultEntity } from "../index"

export interface PdpPageItemsEntity {
    payload: PdpPageItemsResultEntity | null;
    loading: boolean;
    // payload: PdpPageItemsResultEntity[] | [];
    error: string;
}