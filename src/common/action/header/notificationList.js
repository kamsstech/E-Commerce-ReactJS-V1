import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";

export const notificationListLoading = () => ({
  type: Types.NOTIFILIST_LOADING,
  loading: true,
  payload: [],
  error: ""
});

export const notificationListSuccess = (result) => ({
  type: Types.NOTIFILIST_SUCCESS,
  loading: false,
  payload: result,
  error: ""
});

export const notificationListFailure = (errMsg)=> ({
  type: Types.NOTIFILIST_FAILURE,
  loading: false,
  payload: [],
  error: errMsg
});

export const NotificationList = () => async (dispatch) => {
  dispatch(notificationListLoading());

  const headers = {
    "Content-Type":"application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

  await axios
   .get(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/notification/list`,{ headers })
    .then(response => {
      // console.log(response)
      if(response.data.appStatusCode === 0){
        dispatch(notificationListSuccess(response.data.payloadJson))
      } else {
        dispatch(notificationListFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(notificationListFailure("Something went wrong, Please try again later!"));
    });
};
