import { Types } from "../../constant/action";
import {FooterActionEntity, FooterReducerEntity } from "../../model";

const initialState: FooterReducerEntity = {
  loading:false,
  payload: [],
  error: ""
};

const FooterSubscribeReducer = (
  state: FooterReducerEntity = initialState,
  action: FooterActionEntity
): FooterReducerEntity => {
  switch (action.type) {
    case Types.GET_FOOTERSUBSCRIBE_LOADING:
      return {
        loading: action.loading,
        payload: action.payload,
        error: action.error
      };

    case Types.GET_FOOTERSUBSCRIBE_SUCCESS:
      return {
        loading:action.loading,
        payload: action.payload,
        error: action.error
      };
    
    case Types.GET_FOOTERSUBSCRIBE_FAILURE:
      return {
        loading:action.loading,
        payload: action.payload,
        error: action.error
      };
      
    default:
      return state;
  }
};

export default FooterSubscribeReducer;

