import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";

import { Base64 } from "../encode/encodePassword";
import { Constants } from "../../constant/localstorage";
export const searchByMfcLoading = () => ({
    type: Types.SEARCH_BY_MFC_LOADING,
    loading: true,
    payload: [],
    statuscode:"",
    error: ""
});

export const searchByMfcSuccess = (result,code) => ({
    type: Types.SEARCH_BY_MFC_SUCCESS,
    loading: false,
    payload: result,
    statuscode:code,
    error: ""
});

export const searchByMfcFailure = (errMsg,code) => ({
    type: Types.SEARCH_BY_MFC_FAILURE,
    loading: false,
    payload: [],
    statuscode:code,
    error: errMsg
});

export const SearchByMfc = (body) => async (dispatch) => {
    dispatch(searchByMfcLoading());
    const headers = {
        "Content-Type": "application/json",
        "X-Csquare-Api-Token": localStorage.getItem(Constants.TOKEN),
        "X-Csquare-Api-Key": localStorage.getItem(Constants.KEY)
    };


    // let manufactureserachVar = Base64.encode(searchKey)
    // const body = {
    //   c_search_term: searchKey,
    //   c_search_type: search_type
    // }

    // .get(`${ENV.BASE_URL}/mst/search/mfc/${searchKey}`,{ headers })
    await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/search/l/mfc`, body, { headers })
        .then(response => {
            
            if (response.data.appStatusCode === 0) {
                let manufacturedata = [];
                manufacturedata.push(response.data.payloadJson)
                dispatch(searchByMfcSuccess(response.data.payloadJson.data.j_list , response.data.appStatusCode))
            } else {
                dispatch(searchByMfcFailure(response.data.messages[0], response.data.appStatusCode))
            }
        })
        .catch(error => {
            dispatch(searchByMfcFailure("Something went wrong, Please try again later!"));
        });
};