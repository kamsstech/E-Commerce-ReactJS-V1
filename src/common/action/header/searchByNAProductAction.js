import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";



export const searchByNAProductLoading = () => ({
  type: Types.SEARCH_BY_NA_PRODUCT_LOADING,
  loading: true,
  payload: [],
  statuscode:"",
  error: ""
});

export const searchByNAProductSuccess = (result,code) => ({
  type: Types.SEARCH_BY_NA_PRODUCT_SUCCESS,
  loading: false,
  payload: result,
  statuscode:code,
  error: ""
});

export const searchByNAProductFailure = (errMsg,code) => ({
  type: Types.SEARCH_BY_NA_PRODUCT_FAILURE,
  loading: false,
  payload: [],
  statuscode:code,
  error: errMsg
});

export const SearchByNAProduct = (body) => async (dispatch) => {
  dispatch(searchByNAProductLoading());

  const headers = {
    "Content-Type": "application/json"
  };


  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/na/search/prd`,body,{headers})
    .then(response => {
      
      if(response.data.appStatusCode === 0){
        dispatch(searchByNAProductSuccess(response.data.payloadJson.data.j_list,response.data.appStatusCode))
        // dispatch(searchByNAProductSuccess("",""))
      } else {
        dispatch(searchByNAProductFailure(response.data.messages[0],response.data.appStatusCode))
        // dispatch(searchByNAProductFailure("",""))
      }
    })
    .catch(error => {
      dispatch(searchByNAProductFailure("Something went wrong, Please try again later!"));
    });
};
