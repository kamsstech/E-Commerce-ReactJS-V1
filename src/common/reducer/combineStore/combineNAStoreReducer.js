import { Types } from "../../constant/action";


const initialState = {
  loading: false,
  error: "",
  statuscode:"",
  payload:"",
};

const combineNAStoreReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.COMBINE_NA_STORE_LOADING:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        error: action.error,
        payload: action.payload
      };

    case Types.COMBINE_NA_STORE_SUCCESS:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        error: action.error,
        payload: action.payload,
      };

    case Types.COMBINE_NA_STORE_FAILURE:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        error: action.error,
        payload: action.payload
      };

    default:
      return state;
  }
};

export default combineNAStoreReducer;
