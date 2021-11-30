import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";
import { createBrowserHistory } from "history";
let history = createBrowserHistory();


export const registerDetailsLoading = () => ({
  type: Types.REGISTER_DETAILS_LOADING,
  loading: true,
  error: "",
  statuscode: "",
  message:""
});
  
export const registerDetailsSuccess = (sucMsg,code) => ({
  type: Types.REGISTER_DETAILS_SUCCESS,
  loading: false,
  error: "",
  statuscode: code,
  message:sucMsg
});

export const registerDetailsFailure = (errMsg,code) => ({
  type: Types.REGISTER_DETAILS_FAILURE,
  loading: false,
  error: errMsg,
  statuscode: code,
  message:""
});




export const profileDetailsLoading = () => ({
  type: Types.PROFILE_DETAILS_LOADING,
  loading: true,
  error: "",
  message:"",
  statuscode:""
});
  
export const profileDetailsSuccess = (result,code) => ({
  type: Types.PROFILE_DETAILS_SUCCESS,
  loading: false,
  error: "",
  payload:result,
  statuscode:code
});

export const profileDetailsFailure = (errMsg,code) => ({
  type: Types.PROFILE_DETAILS_SUCCESS,
  loading: false,
  error: errMsg,
  message:"",
  statuscode:code
});




export const registerDetails = (body) => async (dispatch) => {
  dispatch(registerDetailsLoading());
  
  const token=localStorage.getItem('token') || localStorage.getItem('TOKEN');
  const key=localStorage.getItem('key') || localStorage.getItem('KEY');

  // const c_type =form.get('c_type');
  const c_type =body.c_type



  // const c_seller =form.get('c_seller');
  // const c_buyer =form.get('c_buyer');
  // const c_name =form.get('c_name');
  // const c_firm_address =form.get('c_firm_address');
  // const c_firm_address1 =form.get('c_firm_address1');
  // const c_pincode =form.get('c_pincode');
  // const c_state_code =form.get('c_state_code');
  // const c_city_code =form.get('c_city_code');
  // const c_area_code =form.get('c_area_code');
  // const c_druglicense_no1 =form.get('c_druglicense_no1');
  // const c_druglicense_no1_img =form.get('c_druglicense_no1_img');
  // const c_druglicense_expiry_date =form.get('c_druglicense_expiry_date');
  // const c_gst_no =form.get('c_gst_no');
  // const c_gst_type =form.get('c_gst_type');

// const headers = {
  //   "Content-Type": "application/json",
  //   "X-csquare-api-key": localStorage.getItem(Constants.KEY),
  //   "X-csquare-api-token": localStorage.getItem(Constants.TOKEN),
  // };



  const headers = {
    "Content-Type": "application/json",
    "X-Csquare-Api-Key":localStorage.getItem('key') || localStorage.getItem('KEY'),
    "X-Csquare-Api-Token":localStorage.getItem('token') || localStorage.getItem('TOKEN')
  };




  // console.log(headers, form, "profile")
  
  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/detail`,body,{headers})

  .then(response => {
    
    if (response.data.appStatusCode === 0) {
          dispatch(registerDetailsSuccess(response.data.messages[0],response.data.appStatusCode ));
          dispatch(registerDetailsSuccess("","" ));

          if(response.data.payloadJson.data.c_lc_user_active_status === "A" && response.data.payloadJson.data.c_lc_user_status === "0" && response.data.payloadJson.data.c_update_status === "1"){
            
            localStorage.setItem(Constants.USER_ACTIVE_STATUS, response.data.payloadJson.data.c_lc_user_active_status);
            localStorage.setItem(Constants.USER_STATUS, response.data.payloadJson.data.c_lc_user_status);
            localStorage.setItem(Constants.UPDATE_STATUS, response.data.payloadJson.data.c_update_status);
          }else if(response.data.payloadJson.data.c_lc_user_active_status === "P" && response.data.payloadJson.data.c_lc_user_status === "0" && response.data.payloadJson.data.c_update_status === "1"){
            
            localStorage.setItem(Constants.USER_ACTIVE_STATUS, response.data.payloadJson.data.c_lc_user_active_status);
            localStorage.setItem(Constants.USER_STATUS, response.data.payloadJson.data.c_lc_user_status);
            localStorage.setItem(Constants.UPDATE_STATUS, response.data.payloadJson.data.c_update_status);
            
          }


        //   axios.get(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/profile`,{headers}).then(response1 =>{

        


        //     if (response1.data.appStatusCode === 0) {

        //       let result = [];
        //     response1.data.payloadJson.map((item) => {
        //     let row = {
        //       c_type: item.c_type,
        //       c_buyer: item.c_buyer,
        //       c_card_holder_name: item.c_card_holder_name,
        //       c_card_ifsc: item.c_card_ifsc,
        //       c_card_no: item.c_card_no,
        //       c_druglicense_expiry_date: item.c_druglicense_expiry_date,
        //     c_druglicense_no1: item.c_druglicense_no1,
        //     c_druglicense_no1_img: item.c_druglicense_no1_img,
        //     c_druglicense_no2: item.c_druglicense_no2,
        //     c_druglicense_no2_img: item.c_druglicense_no2_img,
        //     c_email: item.c_email,
        //     c_firm_address1: item.c_firm_address1,
        //     c_firm_address2: item.c_firm_address2,
        //     c_firm_contact_person: item.c_firm_contact_person,
        //     c_gst_no: item.c_gst_no,
        //     c_gst_type: item.c_gst_type,
        //     c_mobile_no: item.c_mobile_no,
        //     c_name: item.c_name,
        //     c_narcotic_no: item.c_narcotic_no,
        //     c_narcotic_no_img: item.c_narcotic_no_img,
        //     c_pincode: item.c_pincode,
        //     c_seller: item.c_seller,
        //     c_state_name: item.c_state_name,
        //     c_state_code: item.c_state_code,
        //     c_city_name: item.c_city_name,
        //     c_city_code: item.c_city_code,
        //     c_area_name: item.c_area_name,
        //     c_area_code: item.c_area_code,
        //     c_landmark: item.c_landmark,
        //     c_status: item.c_status,
        //     d_card_exp: item.d_card_exp,
        //     c_image_url: item.c_image_url,
            

        //     }

        //     result.push(row);
        // })
        //       dispatch(profileDetailsSuccess(result))
        //     }else{
        //       dispatch(profileDetailsFailure(response1.data.messages[0]))
        //     }

        //   }).catch((error) => {
        //     dispatch(registerDetailsFailure("1Something went wrong, Please try again later!"));
        //   })

          if(c_type !== "seller"){
            localStorage.setItem(Constants.TOKEN, token);
            localStorage.setItem(Constants.KEY, key);
            const mobile =localStorage.getItem(Constants.MOBILE_NO);
            localStorage.setItem(Constants.MOBILE_NO, mobile);
            history.push("/home");
          }
          

          // localStorage.removeItem('token');
          // localStorage.removeItem('key');
      
    } else {
      dispatch(registerDetailsFailure(response.data.messages[0],response.data.appStatusCode));
    }
  })
  .catch(error => {
      dispatch(registerDetailsFailure("Something went wrong, Please try again later!",""));
  });
}
