import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
// import { Base64 } from "../encode/encodePassword";
import axios from "axios";


export const imagedeleteLoading = () => ({
  type: Types.IMAGE_DELETE_LOADING,
  loading: true,
  error: ""
});

export const imagedeleteSuccess = (result,sucMsg) => ({
  type: Types.IMAGE_DELETE_SUCCESS,
  loading: false,
  payload:result,
  message:sucMsg,
  error: ""
});


export const imagedeleteFailure = (errMsg) => ({
  type: Types.IMAGE_DELETE_FAILURE,
  loading: false,
  error: errMsg
});


export const imagedelete = (body) => async (dispatch) => {

       

  dispatch(imagedeleteLoading());
 
  const headers = {
    "Content-Type": "application/json",
    "X-Csquare-Api-Key": localStorage.getItem(Constants.KEY),
    "X-Csquare-Api-Token": localStorage.getItem(Constants.TOKEN),
  };

      

  
        
        

  await axios.post(`${REACT_APP_BASE_URL}/lc/ms/c2/blob/delete`, body, { headers })
    .then(response => {
      if (response.data.appStatusCode === 0) {

        // console.log(response.data.payloadJson.data,"response.data.payloadJson.data");
        dispatch(imagedeleteSuccess(response.data.payloadJson.data, response.data.messages[0]));
        
      } 
      else {
        // dispatch(imageuploadFailure(response.data.messages[0]));
      }
    })
    .catch(error => {
      dispatch(imagedeleteFailure("Something went wrong, Please try again later!"));
    });
};