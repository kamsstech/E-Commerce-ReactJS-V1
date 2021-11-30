import { Types } from "../../constant/action";


const initialState = {
  loading: false,
  error: "",
  message:"",
  statuscode:"",
  payload:""
};

const ScheduleDemoEmailReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.SCHEDULE_DEMO_EMAIL_LOADING:
      return {
        loading: action.loading,
        payload: action.payload,
        statuscode: action.statuscode,
        message: action.message,
        error: action.error
    };
    case Types.SCHEDULE_DEMO_EMAIL_SUCCESS:
      return {
        loading: action.loading,
        payload: action.payload,
        statuscode: action.statuscode,
        message: action.message,
        error: action.error
    };
    case Types.SCHEDULE_DEMO_EMAIL_FAILURE:
      return {
        loading: action.loading,
        error: action.error,
        statuscode: action.statuscode,
        message: action.message,
        payload:action.payload
      };
      
    default:
      return state;
  }
};

export default ScheduleDemoEmailReducer;
