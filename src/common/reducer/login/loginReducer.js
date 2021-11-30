import { Types } from "../../constant/action";
import { LoginEntity, LoginActionEntity } from "../../model";

const initialState = {
  loading: false,
  error: "",
  statuscode:"",
  payload:[],
  message:""
};

const LoginReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.LOGIN_LOADING:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        error: action.error,
        message: action.message
      };

    case Types.LOGIN_SUCCESS:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        error: action.error,
        payload: action.payload,
        message: action.message
      };

    case Types.LOGIN_FAILURE:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        error: action.error,
        message: action.message
      };

    default:
      return state;
  }
};

export default LoginReducer;
