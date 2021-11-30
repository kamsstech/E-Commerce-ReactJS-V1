import { Types } from "../../constant/action";
import { Constants } from "../../constant/localstorage";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";



export const getPdpPageSellerDetailsLoading = ()  => ({
  type: Types.PDP_PAGE_SELLER_DETAILS_LOADING,
  loading: true,
  payload:[],
  statuscode:"",
  error: ""
});
export const getPdpPageSellerDetailsSuccess = (result,code) => ({
    type: Types.PDP_PAGE_SELLER_DETAILS_SUCCESS,
    loading: false,
    payload: result,
    statuscode:code,
    error: ""
});

export const getPdpPageSellerDetailsFailure = (errMsg,code) => ({
    type: Types.PDP_PAGE_SELLER_DETAILS_FAILURE,
    loading: false,
    payload: [],
    error: errMsg,
    statuscode:code,
  });

export const GetPdpPageSellerDetails = (itemCode) => async (dispatch) => {




const headers = {
  "Content-Type":"application/json",
  "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
  "X-csquare-api-key":localStorage.getItem(Constants.KEY),
};

// const body={
//   "c_uitem_code":itemCode
// }
const body ={
  "c_search_term":itemCode,
  "n_page":0,
  "n_limit":10
}


axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/search/l/getSellerByItemCode`,body, {headers})
    .then(response => {
    
        if(response.data.appStatusCode === 0){
            
            dispatch(getPdpPageSellerDetailsSuccess(response.data.payloadJson.data,response.data.appStatusCode))
            // dispatch(getPdpPageSellerDetailsSuccess("",""))
            
          } else {
            dispatch(getPdpPageSellerDetailsFailure(response.data.messages[0],response.data.appStatusCode))
          }
        })
        .catch(error => {
          dispatch(getPdpPageSellerDetailsFailure("Something went wrong in Seller Table, Please try again later!"));
        });
                 

}