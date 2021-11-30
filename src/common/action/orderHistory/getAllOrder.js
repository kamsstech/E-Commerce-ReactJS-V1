import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";


export const getAllOrdersLoading = () => ({
    loading:false,
    type: Types.GET_ALL_ORDERS_LOADING,
    statusCode:"",
    payload: [],
    error: ""

});
export const getAllOrdersSuccess = (result,code) => ({
    loading:false,
    type: Types.GET_ALL_ORDERS_SUCCESS,
    payload: result,
    statusCode:code,
    error: ""
});

export const getAllOrdersFailure = (errMsg,code) => ({
    loading:false,
    type: Types.GET_ALL_ORDERS_FAILURE,
    payload: [],
    statusCode:code,
    error: errMsg
});

export const getAllOrders = (body) => async (dispatch) => {
    dispatch(getAllOrdersLoading());
    const headers = {
      "Content-Type": "application/json",
      "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
      "X-csquare-api-key":localStorage.getItem(Constants.KEY),
    };
    
      
    await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/ord/orderHistory`, body,{ headers })
        // await axios.get(`${ENV.BASE_URL}/lc/ms/c2/web/l/landing?id=localhost`, inputs, {headers})
        .then(response => {
            if (response.data.appStatusCode === 0) {
                if (response.data.payloadJson !== null) {
                    dispatch(getAllOrdersSuccess(response.data.payloadJson.data,response.data.appStatusCode));
                } else {
                    dispatch(getAllOrdersFailure(response.data.messages[0],response.data.appStatusCode));
                }
            } else {
                dispatch(getAllOrdersFailure(response.data.messages[0],response.data.appStatusCode));
            }
        })
        .catch(error => {
            dispatch(getAllOrdersFailure("Something went wrong, Please try again later!"));
        });

};
