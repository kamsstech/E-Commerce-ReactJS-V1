import { Types } from "../../constant/action";
import { ENV } from "../../constant/env";
import axios from "axios";
import { GetDistributorsActionEntity, GetDistributorsResultEntity } from "../../model";

export const getDistributorsLoading = () => ({
    loading: false,
    type: Types.GET_DISTRIBUTORS_LOADING,
    payload: [],
    error: ""

});
export const getDistributorsSuccess = (result) => ({
    loading: false,
    type: Types.GET_DISTRIBUTORS_SUCCESS,
    payload: result,
    error: ""
});

export const getDistributorsFailure = (errMsg) => ({
    loading: false,
    type: Types.GET_DISTRIBUTORS_FAILURE,
    payload: [],
    error: errMsg
});

export const getDistributors = () => async (dispatch) => {
    dispatch(getDistributorsLoading());
    const headers = {
        "Content-Type": "application/json",
    };
    let data = [{
        "c_code": "a",
        "c_name": "bb",
    }, {
        "c_code": "a",
        "c_name": "bb",
    },
    {
        "c_code": "a",
        "c_name": "bb",
    }]
    // console.log(data, "api call")

    dispatch(getDistributorsSuccess(data));
    // await axios.get(`${ENV.BASE_URL}/lc/ms/mst/l/offers/0/10?c2code=`, { headers })
    //     // await axios.get(`${ENV.BASE_URL}/lc/ms/c2/web/l/landing?id=localhost`, {headers})
    //     .then(response => {
    //         if (response.data.appStatusCode === 0) {
    //             if (response.data.payloadJson !== null) {
    //                 dispatch(getDistributorsSuccess(response.data.payloadJson.data));
    //             } else {
    //                 dispatch(getDistributorsFailure(response.data.messages[0]));
    //             }
    //         } else {
    //             dispatch(getDistributorsFailure(response.data.messages[0]));
    //         }
    //     })
    //     .catch(error => {
    //         dispatch(getDistributorsFailure("Something went wrong, Please try again later!"));
    //     });

};
