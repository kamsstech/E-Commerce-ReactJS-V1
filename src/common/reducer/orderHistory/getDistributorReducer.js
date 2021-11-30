import { Types } from "../../constant/action";
import {GetDistributorsActionEntity, GetDistributorsReducerEntity, } from "../../model";

const initialState: GetDistributorsReducerEntity = {
  loading:false,
  payload: [],
  error: ""
};

const GetDistributorReducer = (
  state: GetDistributorsReducerEntity = initialState,
  action: GetDistributorsActionEntity
):GetDistributorsReducerEntity  => {
  switch (action.type) {
    case Types.GET_DISTRIBUTORS_LOADING:
      return {
        loading: action.loading,
        payload: action.payload,
        error: action.error
      };

    case Types.GET_DISTRIBUTORS_SUCCESS:
      return {
        loading:action.loading,
        payload: action.payload,
        error: action.error
      };
    
    case Types.GET_DISTRIBUTORS_FAILURE:
      return {
        loading:action.loading,
        payload: action.payload,
        error: action.error
      };
      
    default:
      return state;
  }
};

export default GetDistributorReducer;

