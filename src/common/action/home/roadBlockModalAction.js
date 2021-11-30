import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";



  export const roadBlockModalLoading = ()=> ({
    type: Types.ROAD_BLOCK_MODAL_LOADING,
    loading: true,
    statuscode:"",
    payload: [],
    error: ""
  });

export const roadBlockModalSuccess = (searchByMfcRes,code) => ({
    type: Types.ROAD_BLOCK_MODAL_SUCCESS,
    loading: false,
    statuscode:code,
    payload: searchByMfcRes,
    error: ""
  });

  export const roadBlockModalFailure = (errMsg,code) => ({
    type: Types.ROAD_BLOCK_MODAL_FAILURE,
    loading: false,
    statuscode:code,
    payload: [],
    error: errMsg
  });

export const roadBlockModal = () => async (dispatch) => {
   
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };


    axios.get(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/g/roadBlock`,{headers})
      .then(response => {
        if(response.data.appStatusCode === 0){ 
          dispatch(roadBlockModalSuccess(response.data.payloadJson.data, response.data.appStatusCode))
        } else {
          dispatch(roadBlockModalFailure(response.data.messages[0], response.data.appStatusCode))
        }
      })
      .catch(error => {
        dispatch(roadBlockModalFailure("Sorry something went wrong, Please try again"));
      });
  };