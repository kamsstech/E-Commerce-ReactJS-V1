import { Types } from "../../constant/action";
import { RegisterEntity, RegisterActionEntity } from "../../model";

const initialState = {
  loading: false,
  error: "",
  message:"",
  statuscode:""
};

const RegisterReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.REGISTER_LOADING:
      return {
        loading: action.loading,
        error: action.error,
        message: action.message,
        statuscode: action.statuscode,
      };

    case Types.REGISTER_SUCCESS:
      return {
        loading: action.loading,
        error: action.error,
        message: action.message,
        statuscode: action.statuscode,
      };

    case Types.REGISTER_FAILURE:
      return {
        loading: action.loading,
        error: action.error,
        message: action.message,
        statuscode: action.statuscode,
      };

    default:
      return state;
  }
};

export default RegisterReducer;
