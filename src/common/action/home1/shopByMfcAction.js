import { Types } from "../../constant/action";
import { ENV } from "../../constant/env";
import axios from "axios";



  export const shopByMfcLoading = () => ({
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
    // dispatch(searchBySellerLoading());
    // let serachVar:any = Base64.encode(searchKey)
    const headers = {
      "Content-Type": "application/json"
    };
  
    await axios
    // .get(`${ENV.BASE_URL}/mst/search/seller/${searchKey}`,{ headers })
    
    .get(`${ENV.BASE_URL}/lc/ms/mst/l/mft/list/0/10?c2code=dolo`,{ headers })
      .then(response => {
        if(response.data.appStatusCode === 0){ console.log("sweta55",response.data.payloadJson.data)
          dispatch(shopByMfcSuccess(response.data.payloadJson.data))
        } else {
          dispatch(shopByMfcFailure(response.data.messages[0]))
        }
      })
      .catch(error => {
        dispatch(shopByMfcFailure("Sorry something went wrong, Please try again"));
      });
  };