import { Types } from "../../constant/action";


const initialState = {
  loading:false,
  statuscode:"",
  payload: [],
  error: ""
};

const GetSellerInfoReducer = (
  state = initialState,
  action
)  => {
  switch (action.type) {
    case Types.GET_SELLER_INFO_LOADING:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        error: action.error
      };

    case Types.GET_SELLER_INFO_SUCCESS:
      return {
        loading:action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        error: action.error
      };
    
    case Types.GET_SELLER_INFO_FAILURE:
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

export default GetSellerInfoReducer;

