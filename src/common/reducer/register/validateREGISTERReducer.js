
import { Types } from "../../constant/action";

const initialState = {
  loading: false,
  statuscode:"",
  message: "",
  payload: {
    message: ""
  },
  error: ""
};

const ValidateREGISTERReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.VALIDATE_REGISTER_LOADING:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        message: action.message,
        payload: action.payload,
        error: action.error
      };

    case Types.VALIDATE_REGISTER_SUCCESS:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        message: action.message,
        payload: action.payload,
        error: action.error
      };

    case Types.VALIDATE_REGISTER_FAILURE:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        message: action.message,
        payload: action.payload,
        error: action.error
      };

    default:
      return state;
  }
};

export default ValidateREGISTERReducer;
