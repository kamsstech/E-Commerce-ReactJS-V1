import { Types } from "../../constant/action";
import { SearchEntity, SearchActionEntity } from "../../model";

const InitialState: SearchEntity = {
  loading: false,
  payload: [],
  error: ""
};

const SearchReducer = (
  state: SearchEntity = InitialState,
  action: SearchActionEntity
): SearchEntity => {
  switch (action.type) {
    case Types.SEARCH_LOADING:
      return {
        loading: action.loading,
        payload: action.payload,
        error: action.error
      };

    case Types.SEARCH_SUCCESS:
      return {
        loading: action.loading,
        payload: action.payload,
        error: action.error
      };

    case Types.SEARCH_FAILURE:
      return {
        loading: action.loading,
        payload: action.payload,
        error: action.error
      };
    default:
      return state;
  }
};

export default SearchReducer;
