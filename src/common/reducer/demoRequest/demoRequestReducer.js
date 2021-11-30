import { Types } from "../../constant/action";


const initialState = {
  loading: false,
  error: "",
  message:"",
  statuscode:"",
  payload:""
};

const SendDemoRequestReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.SEND_DEMO_REQUEST_LOADING:
      return {
        loading: action.loading,
        payload: action.payload,
        statuscode: action.statuscode,
        message: action.message,
        error: action.error
    };
    case Types.SEND_DEMO_REQUEST_SUCCESS:
      return {
        loading: action.loading,
        payload: action.payload,
        statuscode: action.statuscode,
        message: action.message,
        error: action.error
    };
    case Types.SEND_DEMO_REQUEST_FAILURE:
      return {
        loading: action.loading,
        error: action.error,
        statuscode: action.statuscode,
        message: action.message,
        payload:action.payload
      };
      
    default:
      return state;
  }
};

export default SendDemoRequestReducer;
