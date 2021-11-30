import { Types } from "../../constant/action";


const initialState = {
  loading: false,
  message:"",
  statuscode:"",
  error: ""
};

const AddUserReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.ADD_USER_LOADING:
      return {
        loading: action.loading,
        error: action.error
      };

    case Types.ADD_USER_SUCCESS:
      return {
        loading: action.loading,
        message: action.message,
        statuscode: action.statuscode,
        error: action.error
      };

    case Types.ADD_USER_FAILURE:
      return {
        loading: action.loading,
        message: action.message,
        statuscode: action.statuscode,
        error: action.error
      };

    case Types.ADD_USER_CLEAR: 
      return {
        loading: action.loading,
        error: action.error
      };

    default:
      return state;
  }
};

export default AddUserReducer;
