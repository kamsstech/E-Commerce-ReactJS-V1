import { Types } from "../../constant/action";
import { ValidateOTPActionEntity, ValidateOTPEntity } from "../../model";

const initialState = {
  loading: false,
  payload: {
    message: ""
  },
  error: ""
};

const ValidateOTPReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.VALIDATE_OTP_LOADING:
      return {
        loading: action.loading,
        message:action.message,
        payload: action.payload,
        error: action.error
      };

    case Types.VALIDATE_OTP_SUCCESS:
      return {
        loading: action.loading,
        message:action.message,
        payload: action.payload,
        error: action.error
      };

    case Types.VALIDATE_OTP_FAILURE:
      return {
        loading: action.loading,
        message:action.message,
        payload: action.payload,
        error: action.error
      };

    default:
      return state;
  }
};

export default ValidateOTPReducer;
