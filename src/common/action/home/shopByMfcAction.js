import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";



  export const shopByMfcLoading = ()=> ({
    type: Types.SHOP_BY_MFC_LOADING,
    loading: true,
    payload: [],
    error: ""
  });

export const shopByMfcSuccess = (
  searchByMfcRes
  ) => ({
    type: Types.SHOP_BY_MFC_SUCCESS,
    loading: false,
    payload: searchByMfcRes,
    error: ""
  });

  export const shopByMfcFailure = (errMsg) => ({
    type: Types.SHOP_BY_MFC_FAILURE,
    loading: false,
    payload: [],
    error: "Sorry something went wrong, Please try again"
  });

export const shopByManfacturer = () => async (dispatch) => {
   
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };


  const body={
    "n_page":0,
    "n_limit":15
  }

    axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/head/mfg`,body, {headers})
      .then(response => {
        if(response.data.appStatusCode === 0){ 
          dispatch(shopByMfcSuccess(response.data.payloadJson.data))
        } else {
          dispatch(shopByMfcFailure(response.data.messages[0]))
        }
      })
      .catch(error => {
        dispatch(shopByMfcFailure("Sorry something went wrong, Please try again"));
      });
  };