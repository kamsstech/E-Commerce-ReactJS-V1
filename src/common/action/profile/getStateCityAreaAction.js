import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";


export const GetStateCityAreaSuccess = (result,code) => ({
  
  type: Types.STATE_CITY_AREA_LIST_SUCCESS,
  statuscode:code,
  payload: result,
  error:""
  
});
  
export const GetStateCityAreaFailure = (errMsg,code) => ({
  type: Types.STATE_CITY_AREA_LIST_FAILURE,
  payload: "",
  statuscode:code,
  error: errMsg
});

export const GetStateCityArea = (body) => async (dispatch) => {

 
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-key":(localStorage.getItem('key') || localStorage.getItem('KEY')),
    "X-csquare-api-token":((localStorage.getItem('token') || localStorage.getItem('TOKEN')))
  };

  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/na/address`,body,{headers})
  .then(response => {
      

      if(response.data.appStatusCode === 0){
        
        
        dispatch(GetStateCityAreaSuccess(response.data.payloadJson.data,response.data.appStatusCode))
      } 
      else {
        dispatch(GetStateCityAreaFailure(response.data.messages[0],response.data.appStatusCode))
      }
    })
    .catch(error => {
      dispatch(GetStateCityAreaFailure("Something went wrong, Please try again later!"));
    });
};
