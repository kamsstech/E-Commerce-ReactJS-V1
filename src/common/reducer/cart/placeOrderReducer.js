import { Types } from "../../constant/action";


const initialState = {
  loading:false,
  statuscode:"",
  payload: [],
  error: ""
};

const PlaceOrderReducer = (
  state = initialState,
  action
)  => {
  switch (action.type) {
    case Types.PLACE_ORDER_LOADING:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        error: action.error
      };

    case Types.PLACE_ORDER_SUCCESS:
      return {
        loading:action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        error: action.error
      };
    
    case Types.PLACE_ORDER_FAILURE:
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

export default PlaceOrderReducer;

