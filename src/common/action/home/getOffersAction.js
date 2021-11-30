import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";

import axios from "axios";


export const getOffersLoading = () => ({
    loading:false,
    type: Types.GET_OFFERS_LOADING,
    payload: [],
    error: ""

});
export const getOffersSuccess = (result) => ({
    loading:false,
    type: Types.GET_OFFERS_SUCCESS,
    payload: result,
    error: ""
});

export const getOffersFailure = (errMsg) => ({
    loading:false,
    type: Types.GET_OFFERS_FAILURE,
    payload: [],
    error: errMsg
});

export const GetOffers = () => async (dispatch) => {
    dispatch(getOffersLoading());
  
    const headers = {
        "Content-Type": "application/json",
        "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
        "X-csquare-api-key":localStorage.getItem(Constants.KEY),
      };
    
    
      const body={
        "n_page":0,
        "n_limit":5
      }

    axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/seller/fetch-offers`,body, {headers})
        .then(response => {
            if (response.data.appStatusCode === 0) {
                if (response.data.payloadJson !== null) {
                    dispatch(getOffersSuccess(response.data.payloadJson.data));
                } else {
                    dispatch(getOffersFailure(response.data.messages[0]));
                }
            } else {
                dispatch(getOffersFailure(response.data.messages[0]));
            }
        })
        .catch(error => {
            dispatch(getOffersFailure("Something went wrong, Please try again later!"));
        });

};
