export interface AddBranchInputEntity {
    c_mobile_no: string;
    c_name: string;
    c_email: string;
    c_firm_contact_person: string;
    c_firm_address1: string;
    c_firm_address2: string;
    c_state_name: string;
    c_city_name: any;
    c_area_name: any;
    c_state_code: string;
    c_city_code: any;
    c_area_code: any;
    c_landmark: string;
    c_pincode: string;
    c_druglicense_no1: string;
    c_druglicense_no1_img:string;
    c_druglicense_no1_img_name?: string;
    c_druglicense_no2: string;
    c_druglicense_no2_img:string;
    c_druglicense_no2_img_name?: string;
    c_druglicense_expiry_date: string;
    c_gst_type: number;
    c_gst_no: string;
    c_narcotic_no: string;
    c_narcotic_no_img: string;
    c_narcotic_no_img_name?: string;
    c_status: string;
    n_firm_id? : string;
}