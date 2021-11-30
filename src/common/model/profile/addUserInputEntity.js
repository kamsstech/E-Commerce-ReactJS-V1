import { AddUserRoleEntity } from "..";

export interface AddUserInputEntity {
    n_user_id?: number;
    c_mobile_no?: string;
    c_name?: string;
    c_email?: string;
    c_address_1?: string;
    c_address_2?: string;
    c_area_name?: string;
    c_city_name?: string;
    c_state_name?: string;
    c_area_code?: string;
    c_city_code?: string;
    c_state_code?: string;
    c_pincode?: string;
    j_role: AddUserRoleEntity[]; 
}

