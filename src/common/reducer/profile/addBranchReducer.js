import { Types } from "../../constant/action";


const initialState = {
  loading: false,
  message: null,
  statuscode:"",
  error: ""
};

const AddBranchReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.ADD_BRANCH_LOADING:
      return {
        loading: action.loading,
        message: action.message,
        statuscode: action.statuscode,
        error: action.error
      };

    case Types.ADD_BRANCH_SUCCESS:
      return {
        loading: action.loading,
        message: action.message,
        statuscode: action.statuscode,
        error: action.error
      };

    case Types.ADD_BRANCH_FAILURE:
      return {
        loading: action.loading,
        message: action.message,
        statuscode: action.statuscode,
        error: action.error
      };

    case Types.ADD_BRANCH_CLEAR:
      return {
        loading: action.loading,
        message: action.message,
        statuscode: action.statuscode,
        error: action.error
      };
      
    default:
      return state;
  }
};

export default AddBranchReducer;
