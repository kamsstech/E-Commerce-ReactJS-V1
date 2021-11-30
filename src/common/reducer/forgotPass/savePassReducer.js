import { Types } from "../../constant/action";

const initialState = {
  loading: false,
  success:"",
  statuscode:"",
  error: ""
};

const SavePassReducer = (
  state = initialState,  action
) => {
  switch (action.type) {
    case Types.SAVE_PASS_LOADING:
      return {
        loading: action.loading,
        success: action.success,
        statuscode: action.statuscode,
        error: action.error
      };

    case Types.SAVE_PASS_SUCCESS:
      return {
        loading: action.loading,
        success: action.success,
        statuscode: action.statuscode,
        error: action.error
      };

    case Types.SAVE_PASS_FAILURE:
      return {
        loading: action.loading,
        success: action.success,
        statuscode: action.statuscode,
        error: action.error
      };

    default:
      return state;
  }
};

export default SavePassReducer;
