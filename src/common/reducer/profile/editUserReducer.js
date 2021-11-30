import { Types } from "../../constant/action";


const initialState = {
  loading: false,
  message:"",
  statuscode:"",
  error: ""
};

const EditUserReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.EDIT_USER_LOADING:
      return {
        loading: action.loading,
        error: action.error
      };

    case Types.EDIT_USER_SUCCESS:
      return {
        loading: action.loading,
        message: action.message,
        statuscode: action.statuscode,
        error: action.error
      };

    case Types.EDIT_USER_FAILURE:
      return {
        loading: action.loading,
        message: action.message,
        statuscode: action.statuscode,
        error: action.error
      };

    case Types.EDIT_USER_CLEAR: 
      return {
        loading: action.loading,
        error: action.error
      };

    default:
      return state;
  }
};

export default EditUserReducer;
