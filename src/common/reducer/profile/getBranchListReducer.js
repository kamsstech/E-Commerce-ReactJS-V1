import { Types } from "../../constant/action";
import { BranchListEntity, GetBranchListActionEntity } from "../../model";

const initialState = {
  payload: [],
  error: ""
};

const GetBranchListReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.GET_BRANCH_SUCCESS:
      return {
        payload: action.payload,
        error: action.error
      };

    case Types.GET_BRANCH_FAILURE:
      return {
        payload: action.payload,
        error: action.error
      };
    
    case Types.GET_BRANCH_CLEAR:
      return {
        payload: action.payload,
        error: action.error
      };
      
    default:
      return state;
  }
};

export default GetBranchListReducer;
