import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";


import { Redirect } from "react-router-dom";

export const saveProinfoLoading = () => ({
  type: Types.SAVE_PROINFO_LOADING,
  loading: true,
  payload:"",
  statuscode:"",
  error: ""
});
  
export const saveProinfoSuccess = (result,code) => ({
  type: Types.SAVE_PROINFO_SUCCESS,
  loading: false,
  payload:result,
  statuscode:code,
  error: ""
});

export const saveProinfoFailure = (errMsg,code) => ({
  type: Types.SAVE_PROINFO_FAILURE,
  loading: false,
  payload:"",
  statuscode:code,
  error: errMsg
});

export const saveProfileInfo = (inputs,isMobile) => async (dispatch) => {
  dispatch(saveProinfoLoading())
  const body = inputs;

  // console.log(inputs, "fhjsfjs")
  // const headers = {
  //   "Content-Type": "application/json",
  //   "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID),
  //   "x-csquare-firm-id": localStorage.getItem(Constants.FIRM_ID)
  // };
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/detail`,body,{headers})

  .then(response => {
    
    if (response.data.appStatusCode === 0) {
          dispatch(saveProinfoSuccess(response.data.messages[0],response.data.appStatusCode));
          dispatch(saveProinfoSuccess("",""));


        //   axios.get(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/profile`,{},headers).then(response1 =>{

            


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
        //     dispatch(registerDetailsFailure("Something went wrong, Please try again later!"));
        //   })




          // if(c_type !== "seller"){
          //   localStorage.setItem(Constants.TOKEN, token);
          //   localStorage.setItem(Constants.KEY, key);
          //   history.push("/home");
          // }
          

          // localStorage.removeItem('token');
          // localStorage.removeItem('key');
      
    } else {
      dispatch(saveProinfoFailure(response.data.messages[0],response.data.appStatusCode));
    }
  })
  .catch(error => {
      
      dispatch(saveProinfoFailure("Something went wrong, Please try again later!"));
  });








  // await axios
  // .put(`${ENV.BASE_URL}/firm/profile`, body, { headers })
  // .then(response => {
  //   if (response.data.appStatusCode === 0) {   
  //     // console.log(response, "res")  
  //     dispatch(saveProinfoSuccess());
  //     if(isMobile){
  //       history.push("/profile");
  //       // return <Redirect to="/profile"/>;
  //     }
  //   } else {
  //     dispatch(saveProinfoFailure(response.data.messages[0]));
  //   }
  // })
  // .catch(error => {
  //   // console.log(error, "error");
  //   dispatch(saveProinfoFailure("Something went wrong, Please try again later!"));
  // });
}