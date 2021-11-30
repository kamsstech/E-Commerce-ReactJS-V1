import { Types } from "../../constant/action";


const initialState = {
  payload: [],
  error: "",
  statuscode:""
};

const GetBranchListUsersReducer = (
  state = initialState,
  action
) => {
    
  switch (action.type) {
    case Types.GET_BRANCH_LIST_USER_SUCCESS:
      return {
        payload: action.payload,
        error: action.error,
        statuscode: action.statuscode
      };

    case Types.GET_BRANCH_LIST_USER_FAILURE:
      return {
        payload: action.payload,
        error: action.error,
        statuscode: action.statuscode
      };

    default:
      return state;
  }
};

export default GetBranchListUsersReducer;
