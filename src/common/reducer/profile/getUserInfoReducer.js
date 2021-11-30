import { Types } from "../../constant/action";
import { GetUserInfoEntity, GetUserInfoActionEntity } from "../../model";

const initialState: GetUserInfoEntity = {
  payload: {},
  error: ""
};

const GetUserInfoReducer = (
  state: GetUserInfoEntity = initialState,
  action: GetUserInfoActionEntity
): GetUserInfoEntity => {
  switch (action.type) {
    case Types.GET_USERINFO_SUCCESS:
      return {
        payload: action.payload,
        error: action.error
      };

    case Types.GET_USERINFO_FAILURE:
      return {
        payload: action.payload,
        error: action.error
      };
    
    case Types.GET_USERINFO_CLEAR:
      return {
        payload: action.payload,
        error: action.error
      };
      
    default:
      return state;
  }
};

export default GetUserInfoReducer;
