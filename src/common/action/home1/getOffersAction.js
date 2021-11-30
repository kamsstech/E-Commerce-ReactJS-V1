import { Types } from "../../constant/action";
import { ENV } from "../../constant/env";
import axios from "axios";
import { OffersActionEntity,OffersResultEntity } from "../../model";

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
    };
    await axios.get(`${ENV.BASE_URL}/lc/ms/mst/l/offers/0/10?c2code=`, { headers })
        // await axios.get(`${ENV.BASE_URL}/lc/ms/c2/web/l/landing?id=localhost`, {headers})
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
