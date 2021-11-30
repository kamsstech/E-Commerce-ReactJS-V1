import { Types } from "../../constant/action";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../constant/env";


import { Constants } from "../../constant/localstorage";

export const getPdpNAPageItemsLoading = ()  => ({
    type: Types.PDP_NA_PAGE_ITEMS_LOADING,
    loading: true,
    payload:[],
    error: ""
  });
  
export const getPdpNAPageItemsSuccess = (result) => ({
    type: Types.PDP_NA_PAGE_ITEMS_SUCCESS,
    loading: false,
    payload: [result],
    error: ""
});
export const getPdpNAPageItemsFailure = (errMsg) => ({
    type: Types.PDP_NA_PAGE_ITEMS_FAILURE,
    loading: false,
    payload: [],
    error: errMsg
  });

export const GetPdpNAPageItems = (itemCode) => async (dispatch) => {
    dispatch(getPdpNAPageItemsLoading());

    const headers = {
        "Content-Type":"application/json",
      };

    const body={
        "c_item_code":itemCode
    }

    await axios.post(`${REACT_APP_BASE_URL}/c2/lc/na/pdp`,body,{headers})
    .then(response => {
        
        if(response.data.appStatusCode === 0){
            dispatch(getPdpNAPageItemsSuccess(response.data.payloadJson.data))
            
          } else {
            dispatch(getPdpNAPageItemsFailure(response.data.messages[0]))
          }
        })
        .catch(error => {
          dispatch(getPdpNAPageItemsFailure("Something went wrong, Please try again later!"));
        });
             
}