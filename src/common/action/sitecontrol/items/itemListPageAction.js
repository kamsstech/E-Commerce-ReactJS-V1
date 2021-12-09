// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const itemListPageLoading = () => ({
  type: Types.ITEM_LIST_PAGE_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const itemListPageSuccess = (result,code) => ({
  type: Types.ITEM_LIST_PAGE_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const itemListPageFailure = (errMsg,code) => ({
  type: Types.ITEM_LIST_PAGE_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const ItemListPageAction = (body) => async (dispatch) => {
  dispatch(itemListPageLoading())
  await axios.post(`${ENV.ADMIN_BASE_URL}/api/v1/items/allitems`,body)
        .then(response => {
          if(response.data.status == 1)
          {
            dispatch(itemListPageSuccess(response.data,response.data.status))
          }
          else
          {
           dispatch(itemListPageFailure(response.data.message,response.data.status)); 
          }
      
   })
  .catch(error => {
    dispatch(itemListPageFailure("Something went wrong, Please try again later!"));
  });
};
