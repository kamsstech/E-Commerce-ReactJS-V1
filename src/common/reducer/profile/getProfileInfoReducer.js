import { Types } from "../../constant/action";
import { GetProfileInfoEntity, GetProfileInfoActionEntity } from "../../model";

const initialState: GetProfileInfoEntity = {
  payload: {},
  error: ""
};

const GetProfileInfoReducer = (
  state: GetProfileInfoEntity = initialState,
  action: GetProfileInfoActionEntity
): GetProfileInfoEntity => {
  switch (action.type) {
    case Types.GET_PROINFO_SUCCESS:
      return {
        payload: action.payload,
        error: action.error
      };

    case Types.GET_PROINFO_FAILURE:
      return {
        payload: action.payload,
        error: action.error
      };

    default:
      return state;
  }
};

export default GetProfileInfoReducer;
