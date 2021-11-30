import { Types } from "../../constant/action";


const initialState = {
  loading: false,
  error: "",
  statuscode:"",
  message:""
};

const RegisterDetailsReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.REGISTER_DETAILS_LOADING:
      return {
        loading: action.loading,
        error: action.error,
        statuscode: action.statuscode,
        message:action.message
      };

    case Types.REGISTER_DETAILS_SUCCESS:
      return {
        loading: action.loading,
        error: action.error,
        statuscode: action.statuscode,
        message:action.message
      };

    case Types.REGISTER_DETAILS_FAILURE:
      return {
        loading: action.loading,
        error: action.error,
        statuscode: action.statuscode,
        message:action.message
      };

    default:
      return state;
  }
};

export default RegisterDetailsReducer;
