import { MaufactererResultEntity } from "./manufacturerResultEntity";

export interface ManufacturerEntity {
    loading: boolean;
    payload: MaufactererResultEntity[] | [];
    error: string;
}