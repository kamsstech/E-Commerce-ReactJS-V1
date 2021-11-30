import { Types } from "../../constant/action";


const initialState = {
  loading: false,
  error: "",
  message:"",
  statuscode:""

};

const VerifyOTPReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.VERIFY_OTP_LOADING:
      return {
        loading: action.loading,
        message: action.message,
        error: action.error,
        statuscode: action.statuscode
      };

    case Types.VERIFY_OTP_SUCCESS:
      return {
        loading: action.loading,
        message: action.message,
        error: action.error,
        statuscode: action.statuscode
      };

    case Types.VERIFY_OTP_FAILURE:
      return {
        loading: action.loading,
        message: action.message,
        error: action.error,
        statuscode: action.statuscode
      };

    default:
      return state;
  }
};

export default VerifyOTPReducer;
