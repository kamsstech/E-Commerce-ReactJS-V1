import { Types } from "../../constant/action";


const initialState = {
    loading: false,
    payload: {
      message: ""
    },
    error: "",
    message:"",
  statuscode:""
};

const SetDefaultBranchReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.SET_DEFAULT_SUCCESS:
      return {
        loading: action.loading,
        payload: action.payload,
        error: action.error,
        message: action.message,
        statuscode: action.statuscode,

      };

    case Types.SET_DEFAULT_FAILURE:
      return {
        loading: action.loading,
        payload: action.payload,
        error: action.error,
        message: action.message,
        statuscode: action.statuscode,
      };

    default:
      return state;
  }
};

export default SetDefaultBranchReducer;
