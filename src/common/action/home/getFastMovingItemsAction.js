import { Types } from "../../constant/action";
import { ENV } from "../../constant/env";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";


export const getFastMovingItemsSuccess = (result,code) => ({
  type: Types.FASTMOVING_ITEMS_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const getFastMovingItemsFailure = (errMsg,code) => ({
  type: Types.FASTMOVING_ITEMS_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const GetFastMovingItems = (body) => async (dispatch) => {
   await axios.post(`${ENV.ADMIN_BASE_URL}/api/v1/items/bestsellingitems`,body)
        .then(response => {
          if(response.data.status === 1){
              dispatch(getFastMovingItemsSuccess(response.data,response.data.status))
              }else{
                dispatch(getFastMovingItemsFailure(response.data.message,response.data.status));
              }
            })
              .catch(error => {
                dispatch(getFastMovingItemsFailure("Something went wrong, Please try again later!"));
    });
};
