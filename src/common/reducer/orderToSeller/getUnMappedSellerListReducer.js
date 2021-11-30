import { Types } from "../../constant/action";


const initialState = {
  loading:false,
  statuscode:"",
  payload: [],
  error: ""
};

const GetUnMappedSellerListReducer = (
  state = initialState,
  action
)  => {
  switch (action.type) {
    case Types.UN_MAPPED_SELLER_LIST_LOADING:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        error: action.error
      };

    case Types.UN_MAPPED_SELLER_LIST_SUCCESS:
      return {
        loading:action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        error: action.error
      };
    
    case Types.UN_MAPPED_SELLER_LIST_FAILURE:
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

export default GetUnMappedSellerListReducer;

