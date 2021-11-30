import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";


export const orderdetailLoading = () => ({
    type: Types.GET_ORDERDETAIL_LOADING,
    loading:false,
    payload:[],
    statusCode:"",
    error: ""
   
  });
  export const orderdetailSuccess = (result,code) => ({
    type: Types.GET_ORDERDETAIL_SUCCESS,
    loading:false,
    payload:result,
    statusCode:code,
    error: ""
  });
  
  export const orderdetailFailure = (errMsg,code) => ({
    type: Types.GET_ORDERDETAIL_FAILURE,
    loading:false,
    payload:[],
    statusCode:code,
    error: errMsg
  });
  

export const OrderDetailCall = (body) => async (dispatch) => {
    dispatch(orderdetailLoading());
    const headers = {
      "Content-Type": "application/json",
      "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
      "X-csquare-api-key":localStorage.getItem(Constants.KEY),
    };

  

  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/ord/getOrder`,body,{headers})
    .then(response => {
      if(response.data.appStatusCode === 0){
        if (response.data.payloadJson !== null) {

        dispatch(orderdetailSuccess(response.data.payloadJson.data,response.data.appStatusCode))
        } 
        else {
          dispatch(orderdetailFailure(response.data.messages[0],response.data.appStatusCode))
        }
      } 
      else {
        dispatch(orderdetailFailure(response.data.messages[0].response.data.appStatusCode))
      }
    })
    .catch(error => {
      dispatch(orderdetailFailure("Something went wrong, Please try again later!"));
    });


};
