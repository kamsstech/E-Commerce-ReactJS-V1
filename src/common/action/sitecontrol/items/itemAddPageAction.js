// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const itemAddPageLoading = () => ({
  type: Types.ITEM_ADD_PAGE_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const itemAddPageSuccess = (result,code) => ({
  type: Types.ITEM_ADD_PAGE_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const itemAddPageFailure = (errMsg,code) => ({
  type: Types.ITEM_ADD_PAGE_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const ItemAddPageAction = (body) => async (dispatch) => {
  dispatch(itemAddPageLoading())
  await axios.post(`${ENV.ADMIN_BASE_URL}/api/v1/items/create`,body)
        .then(response => {
          if(response.data.status == 1)
          {
            dispatch(itemAddPageSuccess(response.data,response.data.status))
          }
          else
          {
           dispatch(itemAddPageFailure(response.data.message,response.data.status)); 
          }
      
   })
  .catch(error => {
    dispatch(itemAddPageFailure("Something went wrong, Please try again later!"));
  });
};
