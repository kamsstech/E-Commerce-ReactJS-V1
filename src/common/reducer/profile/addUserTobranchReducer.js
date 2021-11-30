import { Types } from "../../constant/action";
import { RegisterEntity, RegisterActionEntity } from "../../model";

const initialState: RegisterEntity = {
  loading: false,
  error: ""
};

const AddUserToBranchReducer = (
  state: RegisterEntity = initialState,
  action: RegisterActionEntity
): RegisterEntity => {
  switch (action.type) {
    case Types.ADD_USER_TO_BRANCH_LOADING:
      return {
        loading: action.loading,
        error: action.error
      };

    case Types.ADD_USER_TO_BRANCH_SUCCESS:
      return {
        loading: action.loading,
        error: action.error
      };

    case Types.ADD_USER_TO_BRANCH_FAILURE:
      return {
        loading: action.loading,
        error: action.error
      };

    default:
      return state;
  }
};

export default AddUserToBranchReducer;
