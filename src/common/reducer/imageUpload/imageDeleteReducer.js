import { Types } from "../../constant/action";


const initialState = {
  loading: false,
  error: "",
  payload:[],
  message:""
};

const ImageDeleteReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.IMAGE_DELETE_LOADING:
      return {
        loading: action.loading,
        error: action.error,
        message: action.message
      };

    case Types.IMAGE_DELETE_SUCCESS:
      return {
        loading: action.loading,
        error: action.error,
        payload: action.payload,
        message: action.message
      };

    case Types.IMAGE_DELETE_FAILURE:
      return {
        loading: action.loading,
        error: action.error,
        message: action.message
      };

    default:
      return state;
  }
};

export default ImageDeleteReducer;
