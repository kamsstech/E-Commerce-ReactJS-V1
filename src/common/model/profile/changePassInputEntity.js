export interface ChangePassInputEntity {
    c_old_pwd: string;
    c_new_pwd: string;
    c_confirm_pwd?: string;
    c_mobile_no?: string|null;
}
  