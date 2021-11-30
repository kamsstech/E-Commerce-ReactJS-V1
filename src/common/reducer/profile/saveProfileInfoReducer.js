import { Types } from "../../constant/action";

const initialState = {
  loading: false,
  error: "",
  payload:"",
  statuscode:"",
};

const SaveProfileInfoReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.SAVE_PROINFO_LOADING:
      return {
        loading: action.loading,
        error: action.error,
        payload: action.payload,
        statuscode: action.statuscode
      };

    case Types.SAVE_PROINFO_SUCCESS:
      return {
        loading: action.loading,
        error: action.error,
        payload: action.payload,
        statuscode: action.statuscode
      };

    case Types.SAVE_PROINFO_FAILURE:
      return {
        loading: action.loading,
        error: action.error,
        payload: action.payload,
        statuscode: action.statuscode
      };

    default:
      return state;
  }
};

export default SaveProfileInfoReducer;
