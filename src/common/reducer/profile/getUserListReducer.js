import { Types } from "../../constant/action";


const initialState = {
  payload: [],
  message: "",
  statuscode:"",
  error: ""
};

const GetUserListReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.GET_USER_SUCCESS:
      return {
        payload: action.payload,
        message: action.message,
        statuscode: action.statuscode,
        error: action.error
      };

    case Types.GET_USER_FAILURE:
      return {
        payload: action.payload,
        message: action.message,
        statuscode: action.statuscode,
        error: action.error
      };

    case Types.GET_USER_CLEAR: 
      return {
        payload: action.payload,
        message: action.message,
        error: action.error
      };

    default:
      return state;
  }
};

export default GetUserListReducer;
