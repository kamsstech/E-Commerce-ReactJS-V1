import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
// import { Base64 } from "../encode/encodePassword";
import axios from "axios";


export const imageuploadLoading = () => ({
  type: Types.IMAGE_UPLOAD_LOADING,
  loading: true,
  error: ""
});

export const imageuploadSuccess = (result,sucMsg) => ({
  type: Types.IMAGE_UPLOAD_SUCCESS,
  loading: false,
  payload:result,
  message:sucMsg,
  error: ""
});



export const imageuploadFailure = (errMsg) => ({
  type: Types.IMAGE_UPLOAD_FAILURE,
  loading: false,
  error: errMsg
});


export const imageupload = (form) => async (dispatch) => {

       

  dispatch(imageuploadLoading());
 
  const headers = {
    "Content-Type": "application/json",
    "X-Csquare-Api-Key": localStorage.getItem(Constants.KEY),
    "X-Csquare-Api-Token": localStorage.getItem(Constants.TOKEN),
  };

        // const body = {
        //   docName: inputs.filename,
        //   docData: inputs.reader_result,
        // };

       
        // const body = {
        //   img: inputs.reader_result,
        // };

  
        
        

  await axios.post(`${REACT_APP_BASE_URL}/lc/ms/c2/blob/upload`, form, { headers })
    .then(response => {
      if (response.data.appStatusCode === 0) {
        // Set Roles array here


        // console.log(response.data.payloadJson.data,"response.data.payloadJson.data");
        dispatch(imageuploadSuccess(response.data.payloadJson.data, response.data.messages[0]));
        
      } 
      else {
        // dispatch(imageuploadFailure(response.data.messages[0]));
      }
    })
    .catch(error => {
      dispatch(imageuploadFailure("Something went wrong, Please try again later!"));
    });
};