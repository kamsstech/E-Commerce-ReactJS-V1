import { Types } from "../../constant/action";


const initialState  = {
    loading: false,
    payload: "",
    error: ""
}

const UploadImgReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.UPLOAD_IMG_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.UPLOAD_IMG_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.UPLOAD_IMG_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default UploadImgReducer;