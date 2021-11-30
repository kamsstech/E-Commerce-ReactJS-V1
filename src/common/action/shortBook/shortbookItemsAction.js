import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";

export const shortbookItemsLoading = () => ({
  type: Types.SHORTBOOK_LOADING,
  payload:[],
  loading: true,
  statuscode:"",
  error: "",
  msg:""
});
export const shortbookItemsSuccess = (result,code) => ({
  type: Types.SHORTBOOK_SUCCESS,
  payload: result,
  loading: false,
  statuscode:code,
  error: "",
  msg:""
});

export const shortbookItemsFailure = (errMsg,code) => ({
  type: Types.SHORTBOOK_FAILURE,
  payload: [],
  loading: false,
  statuscode:code,
  error: errMsg,
  msg:""
});

export const GetShortbookItems = (body) => async (dispatch) => {
  dispatch(shortbookItemsLoading())
  const headers = {
    "Content-Type": "application/json",
    "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
    "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)

  };
  
  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/sb/list`,body, {headers})
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(shortbookItemsSuccess(response.data.payloadJson,response.data.appStatusCode))
      }else{
        dispatch(shortbookItemsFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(shortbookItemsFailure("Something went wrong, Please try again later!"));
  });

  
};
