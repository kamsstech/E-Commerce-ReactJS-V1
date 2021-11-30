import { Types } from "../../constant/action";


const initialState = {
  loading:false,
  statuscode:"",
  payload: [],
  error: ""
};

const SetPriorityMappedSellerReducer = (
  state = initialState,
  action
)  => {
  switch (action.type) {
    case Types.SET_PRIORITY_MAPPED_SELLER_LOADING:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        error: action.error
      };

    case Types.SET_PRIORITY_MAPPED_SELLER_SUCCESS:
      return {
        loading:action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        error: action.error
      };
    
    case Types.SET_PRIORITY_MAPPED_SELLER_FAILURE:
      return {
        loading:action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        error: action.error
      };
      
    default:
      return state;
  }
};

export default SetPriorityMappedSellerReducer;

