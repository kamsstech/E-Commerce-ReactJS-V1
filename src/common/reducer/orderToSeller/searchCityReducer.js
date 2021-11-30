import { Types } from "../../constant/action";


const initialState = {
  loading:false,
  statuscode:"",
  payload: [],
  error: ""
};

const SearchCityReducer = (
  state = initialState,
  action
)  => {
  switch (action.type) {
    case Types.SEARCH_CITY_LOADING:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        error: action.error
      };

    case Types.SEARCH_CITY_SUCCESS:
      return {
        loading:action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        error: action.error
      };
    
    case Types.SEARCH_CITY_FAILURE:
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

export default SearchCityReducer;

