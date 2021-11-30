import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";



  export const SearchAreaLoading = ()=> ({
    type: Types.SEARCH_AREA_LOADING,
    loading: true,
    statuscode:"",
    payload: [],
    error: ""
  });

export const SearchAreaSuccess = (result,code) => ({
    type: Types.SEARCH_AREA_SUCCESS,
    loading: false,
    statuscode:code,
    payload: result,
    error: ""
  });

  export const SearchAreaFailure = (errMsg,code) => ({
    type: Types.SEARCH_AREA_FAILURE,
    loading: false,
    statuscode:code,
    payload: [],
    error: errMsg
  });

export const SearchArea = (body) => async (dispatch) => {
   
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

    axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/g/area/search`,body,{headers})
      .then(response => {
       
        if(response.data.appStatusCode === 0){ 
          dispatch(SearchAreaSuccess(response.data.payloadJson.data, response.data.appStatusCode))
        } else {
          dispatch(SearchAreaFailure(response.data.messages[0], response.data.appStatusCode))
        }
      })
      .catch(error => {
        dispatch(SearchAreaFailure("Sorry something went wrong, Please try again"));
      });
  };