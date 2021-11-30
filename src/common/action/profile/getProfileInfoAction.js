import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";

export const getProinfoSuccess = (result) => ({
  type: Types.GET_PROINFO_SUCCESS,
  payload: result,
  error: "",
});

export const getProinfoFailure = (errMsg) => ({
  type: Types.GET_PROINFO_FAILURE,
  payload: {},
  error: errMsg,
});

export const getProfileInfo = () => async (dispatch) => {
 
  // GET PROFILE INFO



  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token": localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key": localStorage.getItem(Constants.KEY)
  };

  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Key": localStorage.getItem(Constants.KEY),
  //   "X-Csquare-Api-Token": localStorage.getItem(Constants.TOKEN),
  // };


  await axios
    .get(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/profile`,{headers})
    .then((response) => {
      if (response.data.appStatusCode === 0) {
        localStorage.setItem(Constants.PIN_CODE, response.data.payloadJson.data.c_pincode);
        dispatch(getProinfoSuccess(response.data.payloadJson.data, response.data.messages[0]));
      } else {
        dispatch(getProinfoFailure(response.data.messages[0]));
      }
    })
    .catch((error) => {
      dispatch(
        getProinfoFailure("Something went wrong, Please try again later!")
      );
    });



  
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Key": localStorage.getItem(Constants.KEY),
  //   "X-Csquare-Api-Token": localStorage.getItem(Constants.TOKEN),
  // };

  // await axios.get(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/profile`, {headers})
  // .then(response => {
  //   if(response.data.appStatusCode === 0){

  //     const result = mapToProfileData(response.data.payloadJson)
  //     dispatch(getProinfoSuccess(result))

  //   } else {
  //     dispatch(getProinfoFailure(response.data.messages[0]))
  //   }

  // })
  // .catch(err => {
  //   dispatch(getProinfoFailure("Something went wrong, Please try again later!"));
  // })
  //     } else {
  //       dispatch(getProinfoFailure(response.data.messages[0]))
  //     }
  //   } else {
  //     dispatch(getProinfoFailure(response.data.messages[0]))
  //   }
  // })
  // .catch(err => {
  //   // console.log(err);
  //   dispatch(getProinfoFailure("Something went wrong, Please try again later!"));
  // })
};

const mapToProfileData = (response) => {
  let result = {
    c_mobile_no: "",
    c_name: "",
    c_seller: "",
    c_buyer: "",
    c_email: "",
    c_firm_contact_person: "",
    c_firm_address1: "",
    c_firm_address2: "",
    c_state_name: "",
    c_city_name: "",
    c_area_name: "",
    c_state_code: "",
    c_city_code: "",
    c_area_code: "",
    c_pincode: "",
    c_landmark: "",
    c_card_holder_name: "",
    c_card_no: "",
    d_card_exp: "",
    c_card_ifsc: "",
    c_druglicense_no1: "",
    c_druglicense_no2: "",
    c_druglicense_expiry_date: "",
    c_gst_type: -100,
    c_gst_no: "",
    c_narcotic_no: "",
    c_status: "",
    c_image_url: "",
    c_druglicense_no1_img: "",
    c_druglicense_no2_img: "",
    c_narcotic_no_img: "",
    c_druglicense_no1_img_name: "",
    c_druglicense_no2_img_name: "",
    c_narcotic_no_img_name: "",
  };

  Object.entries(response).map((entry) => {
    if (typeof entry[1] === "string") {
      result[entry[0]] = entry[1];
    }
  });

  return result;
};
