import { Types } from "../../constant/action";

const initialState = {
  loading: false,
  statuscode:"",
  payload: {
    message: ""
  },
  dum_msg:"",
  error: ""
};

const SendOTPReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.SEND_OTP_LOADING:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        dum_msg: action.dum_msg,
        error: action.error
      };

    case Types.SEND_OTP_SUCCESS:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        dum_msg: action.dum_msg,
        error: action.error
      };

    case Types.SEND_OTP_FAILURE:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        dum_msg: action.dum_msg,
        error: action.error
      };
    case Types.SEND_OTP_RESET:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        dum_msg: action.dum_msg,
        error: action.error
      };
    default:
      return state;
  }
};

export default SendOTPReducer;
