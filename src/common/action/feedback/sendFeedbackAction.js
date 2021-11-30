import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";


import { Constants } from "../../constant/localstorage";
import axios from "axios";
export const sendFeedbackLoading = () => ({
  type: Types.SEND_FEEDBACK_LOADING,
  loading: true,
  error: ""
});

export const sendFeedbackSuccess = () => ({
  type: Types.SEND_FEEDBACK_SUCCESS,
  loading: false,
  error: ""
});

export const sendFeedbackFailure = (errMsg) => ({
  type: Types.SEND_FEEDBACK_FAILURE,
  loading: false,
  error: errMsg
});

export const sendFeedbackAction = (body)  => async (dispatch) => {
  dispatch(sendFeedbackLoading());

  // const headers: any = {
  //   "Content-Type": "application/json",
  //   "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID)
  // };

  // axios.get(`${ENV.CUST_BASE_URL}/firm/branch/default`, {headers})
  // .then(response => {
  //   if (response.data.appStatusCode === 0) {
  //     if(response.data.payloadJson !== null){
  //       localStorage.setItem(Constants.FIRM_ID, response.data.payloadJson.n_branch_id)

  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

        axios.post(`${REACT_APP_BASE_URL}/firm/feedback`,body, {headers})
        .then(response => {
          if(response.data.appStatusCode === 0){
            
            dispatch(sendFeedbackSuccess());
          } else {
            dispatch(sendFeedbackFailure(response.data.messages[0]))
          }
        })
        .catch(err => {
          dispatch(sendFeedbackFailure("Something went wrong, Please try again later!"));
        })

  //     } else {
  //       dispatch(sendFeedbackFailure(response.data.messages[0]))
  //     }
  //   } else {
  //     dispatch(sendFeedbackFailure(response.data.messages[0]))
  //   }
  // })
  // .catch(err => {
  //   dispatch(sendFeedbackFailure("Something went wrong, Please try again later!"));
  // })
}

