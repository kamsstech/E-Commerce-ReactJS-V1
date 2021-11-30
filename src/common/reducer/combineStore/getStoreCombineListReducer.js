import { Types } from "../../constant/action";


const initialState = {
  loading: false,
  error: "",
  statuscode:"",
  payload:[],
  message:""
};

const GetStoreCombineListReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.GET_STORE_COMBINE_LIST_LOADING:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        error: action.error,
        message: action.message
      };

    case Types.GET_STORE_COMBINE_LIST_SUCCESS:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        error: action.error,
        payload: action.payload,
        message: action.message
      };

    case Types.GET_STORE_COMBINE_LIST_FAILURE:
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

export default GetStoreCombineListReducer;
