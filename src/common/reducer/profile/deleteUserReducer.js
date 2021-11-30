import { Types } from "../../constant/action";
import { RegisterEntity, RegisterActionEntity } from "../../model";

const initialState: RegisterEntity = {
  loading: false,
  error: ""
};

const DeleteUserReducer = (
  state: RegisterEntity = initialState,
  action: RegisterActionEntity
): RegisterEntity => {
  switch (action.type) {
    case Types.DELETE_USER_LOADING:
      return {
        loading: action.loading,
        error: action.error
      };

    case Types.DELETE_USER_SUCCESS:
      return {
        loading: action.loading,
        error: action.error
      };

    case Types.DELETE_USER_FAILURE:
      return {
        loading: action.loading,
        error: action.error
      };
    
    case Types.DELETE_USER_CLEAR: 
      return {
        loading: action.loading,
        error: action.error
      };

    default:
      return state;
  }
};

export default DeleteUserReducer;
