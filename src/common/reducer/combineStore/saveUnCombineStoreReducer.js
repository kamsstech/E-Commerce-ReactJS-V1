import { Types } from "../../constant/action";


const initialState = {
  loading: false,
  error: "",
  statuscode:"",
  payload:"",
  message:""
};

const SaveUnCombineStoreReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.SAVE_UN_COMBINE_STORE_LOADING:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        error: action.error,
        message: action.message
      };

    case Types.SAVE_UN_COMBINE_STORE_SUCCESS:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        error: action.error,
        payload: action.payload,
        message: action.message
      };

    case Types.SAVE_UN_COMBINE_STORE_FAILURE:
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

export default SaveUnCombineStoreReducer;
