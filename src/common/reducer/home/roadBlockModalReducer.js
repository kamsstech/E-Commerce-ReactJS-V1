import { Types } from "../../constant/action";


const initialState = {
  loading:false,
  statuscode:"",
  payload: [],
  error: ""
};

const RoadBlockModalReducer = (
  state = initialState,
  action
)  => {
  switch (action.type) {
    case Types.ROAD_BLOCK_MODAL_LOADING:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        error: action.error
      };

    case Types.ROAD_BLOCK_MODAL_SUCCESS:
      return {
        loading:action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        error: action.error
      };
    
    case Types.ROAD_BLOCK_MODAL_FAILURE:
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

export default RoadBlockModalReducer;

