import { Types } from "../../constant/action";
import { RegisterEntity, RegisterActionEntity } from "../../model";

const initialState: RegisterEntity = {
  loading: false,
  error: ""
};

const SendFeedbackReducer = (
  state: RegisterEntity = initialState,
  action: RegisterActionEntity
): RegisterEntity => {
  switch (action.type) {
    case Types.SEND_FEEDBACK_LOADING:
      return {
        loading: action.loading,
        error: action.error
      };

    case Types.SEND_FEEDBACK_SUCCESS:
      return {
        loading: action.loading,
        error: action.error
      };

    case Types.SEND_FEEDBACK_FAILURE:
      return {
        loading: action.loading,
        error: action.error
      };

    default:
      return state;
  }
};

export default SendFeedbackReducer;
