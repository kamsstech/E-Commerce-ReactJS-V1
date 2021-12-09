import { Types } from "../../constant/action";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { ENV } from "../../constant/env";


import { Constants } from "../../constant/localstorage";

export const getPdpPageItemsLoading = ()  => ({
    type: Types.PDP_PAGE_ITEMS_LOADING,
    loading: true,
  payload:[],
  statuscode:"",
  error: "",
  msg: ""
  });
  
export const getPdpPageItemsSuccess = (result,code) => ({
    type: Types.PDP_PAGE_ITEMS_SUCCESS,
    loading: false,
    payload: result,
    statuscode:code,
    error: "",
    msg: ""
});
export const getPdpPageItemsFailure = (errMsg,code) => ({
    type: Types.PDP_PAGE_ITEMS_FAILURE,
    loading: false,
    payload: [],
    statuscode:code,
    error: errMsg,
    msg: ""
  });

export const GetPdpPageItems = (itemCode) => async (dispatch) => {
    dispatch(getPdpPageItemsLoading());
    const body={
        "c_item_code":itemCode
    }
    

    await axios.post(`${ENV.ADMIN_BASE_URL}/api/v1/items/itemsdetail`,body)
    .then(response => {
        
        if(response.data.status === 1){
            dispatch(getPdpPageItemsSuccess(response.data,response.data.status))
            
          } else {
            dispatch(getPdpPageItemsFailure(response.data.message,response.data.status))
          }
        })
        .catch(error => {
          dispatch(getPdpPageItemsFailure("Something went wrong, Please try again later!"));
        });
}