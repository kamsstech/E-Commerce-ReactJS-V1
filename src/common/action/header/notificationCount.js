import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";

export const notificationCountLoading = () => ({
  type: Types.NOTIFICOUNT_LOADING,
  loading: true,
  payload: [],
  error: ""
});

export const notificationCountSuccess = (categorylists) => ({
  type: Types.NOTIFICOUNT_SUCCESS,
  loading: false,
  payload: categorylists,
  error: ""
});

export const notificationCountFailure = (errMsg)=> ({
  type: Types.NOTIFICOUNT_FAILURE,
  loading: false,
  payload: [],
  error: errMsg
});

export const NotificationCount = () => async (dispatch) => {
  dispatch(notificationCountLoading());

  const headers = {
    "Content-Type":"application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

  await axios
   .get(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/notification/count`,{ headers })
    .then(response => {
      // console.log(response)
      if(response.data.appStatusCode === 0){
        dispatch(notificationCountSuccess(response.data.payloadJson))
      } else {
        dispatch(notificationCountFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(notificationCountFailure("Something went wrong, Please try again later!"));
    });
};
