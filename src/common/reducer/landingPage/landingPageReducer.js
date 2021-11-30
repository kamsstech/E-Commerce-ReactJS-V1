import { Types } from "../../constant/action";
import {LandingPageActionEntity,LandingPageListEntity } from "../../model";

const initialState: LandingPageListEntity = {
  loading:false,
  payload: [],
  error: ""
};

const LandingPageReducer = (
  state: LandingPageListEntity = initialState,
  action: LandingPageActionEntity
): LandingPageListEntity => {
  switch (action.type) {
    case Types.GET_LANDINGPAGE_LOADING:
      return {
        loading: action.loading,
        payload: action.payload,
        error: action.error
      };

    case Types.GET_LANDINGPAGE_SUCCESS:
      return {
        loading:action.loading,
        payload: action.payload,
        error: action.error
      };
    
    case Types.GET_LANDINGPAGE_FAILURE:
      return {
        loading:action.loading,
        payload: action.payload,
        error: action.error
      };
      
    default:
      return state;
  }
};

export default LandingPageReducer;

