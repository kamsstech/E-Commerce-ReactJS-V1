import { PdpPageJsubDetailEntity } from "../index"
import { PdpPageGeneralInfoEntity } from "../index"
import { PdpPageSizeVariants } from "../index"
export interface FastMovingItemsResultEntity {
    // c_item_name: string;
    // c_item_code:string;
    // j_sub_detail: PdpPageJsubDetailEntity;
    // n_mrp: number;
    // n_gst: number;
    // c_hsn_sac: string;
    // j_general_info: PdpPageGeneralInfoEntity;
    // j_size_variants: PdpPageSizeVariants[];
    // a_image_urls: string[];
    // a_thumbnail_urls: string[];
    ac_thumbnail_url:string[];
    c_contains: string;
    c_item_ucode: string;
    c_sponsored:string;
    c_item_name:string;
    c_pack_size: string;
    c_manufacturer:string;
    c_mfac_code:string;
    n_mrp: number
}
