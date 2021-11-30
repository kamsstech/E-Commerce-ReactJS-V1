export interface RegisterDetailsInputEntity {
    c_seller?: string;
    c_buyer?: string;
    c_mobile_no?: string | null;
    c_name?: string | null;
    c_email?: string;
    c_firm_contact_person?: string;
    c_firm_address1?: string;
    c_firm_address2?: string;
    c_state_name?: string;
    c_city_name?: string;
    c_area_name?: string;
    c_state_code?: string;
    c_city_code?: string;
    c_area_code?: string;
    c_pincode?: string;
    c_landmark?: string;
    c_card_holder_name?: string;
    c_card_no?: string;
    d_card_exp?: string;
    c_card_ifsc?: string;
    c_druglicense_no1?: string;
    c_druglicense_no2?: string;
    c_druglicense_expiry_date?: string;
    c_gst_type?: number;
    c_gst_no?: string;
    c_narcotic_no?: string;
    c_status?: string;
    c_image_url?: string;
    c_druglicense_no1_img?: string;
    c_druglicense_no2_img?: string;
    c_narcotic_no_img?: string;
    c_druglicense_no1_img_name?: string;
    c_druglicense_no2_img_name?: string;
    c_narcotic_no_img_name?: string;
    c_description? : string;
}
  