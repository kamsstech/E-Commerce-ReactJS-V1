import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";

// import { useHistory } from "react-router-dom";
import { Constants } from "../../constant/localstorage";
import axios from "axios";


export const ScheduleDemoLoading = () => ({
  type: Types.SCHEDULE_DEMO_REQUEST_LOADING,
  loading: true,
  error: "",
  message:"",
  statuscode:"",
  payload: "",
});

export const ScheduleDemoSuccess = (msg,code) => ({
  type: Types.SCHEDULE_DEMO_REQUEST_SUCCESS,
  loading: false,
  message:msg,
  statuscode:code,
  error: "",
  // payload: "Thank you for showing interest in C-SQUARE Products",
  payload: msg,

});

export const ScheduleDemoFailure = (errMsg,code) => ({
  type: Types.SCHEDULE_DEMO_REQUEST_FAILURE,
  loading: false,
  message:"",
  error: errMsg,
  statuscode:code,
  payload: ""
});

export const ScheduleDemoAction = (body)  => async (dispatch) => {
  // let history = useHistory();
  dispatch(ScheduleDemoLoading());

 

    axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/na/demo`,body, {})
    .then(response => {
        if(response.data.appStatusCode === 0){
        
        dispatch(ScheduleDemoSuccess(response.data.messages[0],response.data.appStatusCode));
        dispatch(ScheduleDemoSuccess("",""));
        // history.push("/home");
        } else {
        dispatch(ScheduleDemoFailure(response.data.messages[0],response.data.appStatusCode))
        }
    })
    .catch(err => {
        dispatch(ScheduleDemoFailure("Something went wrong, Please try again later!"));
    })

}