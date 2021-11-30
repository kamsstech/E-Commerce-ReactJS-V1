import { PdpPageJsubDetailEntity } from "../index"

export interface AlternativesResultEntity {
    c_item_code: string;
    c_item_name: string;
    j_sub_detail: PdpPageJsubDetailEntity;
    n_mrp: number;
    n_gst: number;
    c_hsn_sac: string;
    a_image_urls:string[];
    a_thumbnail_urls: string[];
}