import { Types } from "../../constant/action";


const initialState = {
  loading:false,
  payload: [],
  statusCode:"",
  error: ""
};

const AllOrdersReducer = (
  state = initialState,
  action
)  => {
  switch (action.type) {
    case Types.GET_ALL_ORDERS_LOADING:
      return {
        loading: action.loading,
        payload: action.payload,
        statusCode: action.statusCode,
        error: action.error
      };

    case Types.GET_ALL_ORDERS_SUCCESS:
      return {
        loading:action.loading,
        payload: action.payload,
        statusCode: action.statusCode,
        error: action.error
      };
    
    case Types.GET_ALL_ORDERS_FAILURE:
      return {
        loading:action.loading,
        payload: action.payload,
        statusCode: action.statusCode,
        error: action.error
      };
      
    default:
      return state;
  }
};

export default AllOrdersReducer;

