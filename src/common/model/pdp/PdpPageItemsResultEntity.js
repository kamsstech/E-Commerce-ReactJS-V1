import { PdpPageJsubDetailEntity } from "../index"
import { PdpPageGeneralInfoEntity } from "../index"
import { PdpPageSizeVariants } from "../index"

export interface PdpPageItemsResultEntity {
    c_item_name: string;
    c_item_code:string;
    j_sub_detail: PdpPageJsubDetailEntity;
    n_mrp: number;
    n_gst: number;
    c_hsn_sac: string;
    j_general_info: PdpPageGeneralInfoEntity;
    j_size_variants: PdpPageSizeVariants[];
    a_image_urls: string[];
    a_thumbnail_urls: string[];
}


