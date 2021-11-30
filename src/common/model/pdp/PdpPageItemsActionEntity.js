import { PdpPageItemsResultEntity } from "../index"

export interface PdpPageItemsActionEntity {
    type: string;
    loading: boolean;
    payload: PdpPageItemsResultEntity | null;
    // payload: PdpPageItemsResultEntity | {};
    error: string;
}