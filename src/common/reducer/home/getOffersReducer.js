import { Types } from "../../constant/action";


const initialState = {
  loading:false,
  payload: [],
  error: ""
};

const GetOffersReducer = (
  state = initialState,
  action
)  => {
  switch (action.type) {
    case Types.GET_OFFERS_LOADING:
      return {
        loading: action.loading,
        payload: action.payload,
        error: action.error
      };

    case Types.GET_OFFERS_SUCCESS:
      return {
        loading:action.loading,
        payload: action.payload,
        error: action.error
      };
    
    case Types.GET_OFFERS_FAILURE:
      return {
        loading:action.loading,
        payload: action.payload,
        error: action.error
      };
      
    default:
      return state;
  }
};

export default GetOffersReducer;

