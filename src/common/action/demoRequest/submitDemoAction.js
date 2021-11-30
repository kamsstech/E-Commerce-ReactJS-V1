import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";

// import { useHistory } from "react-router-dom";
import { Constants } from "../../constant/localstorage";
import axios from "axios";


export const submitDemoRequestLoading = () => ({
  type: Types.SEND_DEMO_REQUEST_LOADING,
  loading: true,
  error: "",
  message:"",
  statuscode:"",
  payload: "",
});

export const submitDemoRequestSuccess = (msg,code) => ({
  type: Types.SEND_DEMO_REQUEST_SUCCESS,
  loading: false,
  message:msg,
  statuscode:code,
  error: "",
  payload: "Thank You For The Information. We Will Be Shortly Getting In Touch With You",
});

export const submitDemoRequestFailure = (errMsg,code) => ({
  type: Types.SEND_DEMO_REQUEST_FAILURE,
  loading: false,
  message:"",
  error: errMsg,
  statuscode:code,
  payload: ""
});

export const submitDemoRequestAction = (body)  => async (dispatch) => {
  // let history = useHistory();
  dispatch(submitDemoRequestLoading());

  const headers = {
    "Content-Type": "application/json",
    "X-Csquare-Api-Key": localStorage.getItem(Constants.KEY),
    "X-Csquare-Api-Token": localStorage.getItem(Constants.TOKEN),
  };

    axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/demo`,body, {headers})
    .then(response => {
        if(response.data.appStatusCode === 0){
        
        dispatch(submitDemoRequestSuccess(response.data.messages[0],response.data.appStatusCode));
        dispatch(submitDemoRequestSuccess("",""));

        // history.push("/home");
        } else {
        dispatch(submitDemoRequestFailure(response.data.messages[0],response.data.appStatusCode))
        }
    })
    .catch(err => {
        dispatch(submitDemoRequestFailure("Something went wrong, Please try again later!"));
    })

}