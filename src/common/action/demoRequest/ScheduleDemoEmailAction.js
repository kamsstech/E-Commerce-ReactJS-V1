import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";

// import { useHistory } from "react-router-dom";
import { Constants } from "../../constant/localstorage";
import axios from "axios";


export const ScheduleDemoEmailLoading = () => ({
  type: Types.SCHEDULE_DEMO_EMAIL_LOADING,
  loading: true,
  error: "",
  message:"",
  statuscode:"",
  payload: "",
});

export const ScheduleDemoEmailSuccess = (msg,code) => ({
  type: Types.SCHEDULE_DEMO_EMAIL_SUCCESS,
  loading: false,
  message:msg,
  statuscode:code,
  error: "",
  payload: "Thank You For The Information. We Will Be Shortly Getting In Touch With You",
});

export const ScheduleDemoEmailFailure = (errMsg,code) => ({
  type: Types.SCHEDULE_DEMO_EMAIL_FAILURE,
  loading: false,
  message:"",
  error: errMsg,
  statuscode:code,
  payload: ""
});

export const ScheduleDemoEmailAction = (body)  => async (dispatch) => {
  // let history = useHistory();
  dispatch(ScheduleDemoEmailLoading());

  
  // https://prod-1pharma.livc.in/lc/ms/eml/l/1pharma/email/send



    axios.post(`https://qa-tg-bot-api.livetrack.in/csquare/send-demo-email`,body, {})
    .then(response => {
        if(response.data.appStatusCode === 0){
        
        dispatch(ScheduleDemoEmailSuccess(response.data.messages[0],response.data.appStatusCode));
        // history.push("/home");
        } else {
        dispatch(ScheduleDemoEmailFailure(response.data.messages[0],response.data.appStatusCode))
        }
    })
    .catch(err => {
        dispatch(ScheduleDemoEmailFailure("Something went wrong, Please try again later!"));
    })

}