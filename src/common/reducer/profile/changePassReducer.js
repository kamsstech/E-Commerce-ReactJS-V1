import { Types } from "../../constant/action";


const initialState = {
  loading: false,
  error: "",
  statuscode:"",
  payload: []
};

const ChangePasswordReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.CHANGE_PASSWORD_LOADING:
      return {
        loading: action.loading,
        error: action.error,
        statuscode: action.statuscode,
        payload:action.payload
      };

    case Types.CHANGE_PASSWORD_SUCCESS:
      return {
        loading: action.loading,
        error: action.error,
        statuscode: action.statuscode,
        payload:action.payload

      };

    case Types.CHANGE_PASSWORD_FAILURE:
      return {
        loading: action.loading,
        error: action.error,
        statuscode: action.statuscode,
        payload:action.payload

      };

    default:
      return state;
  }
};

export default ChangePasswordReducer;
