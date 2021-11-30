import { Types } from "../../constant/action";
import { GetBranchInfoEntity, GetBranchInfoActionEntity } from "../../model";

const initialState: GetBranchInfoEntity = {
  payload: {},
  error: ""
};

const GetBranchInfoReducer = (
  state: GetBranchInfoEntity = initialState,
  action: GetBranchInfoActionEntity
): GetBranchInfoEntity => {
  switch (action.type) {
    case Types.GET_BRANCHINFO_SUCCESS:
      return {
        payload: action.payload,
        error: action.error
      };

    case Types.GET_BRANCHINFO_FAILURE:
      return {
        payload: action.payload,
        error: action.error
      };
    
    case Types.GET_BRANCHINFO_CLEAR: 
      return {
        payload: action.payload,
        error: action.error
      };
      
    default:
      return state;
  }
};

export default GetBranchInfoReducer;
