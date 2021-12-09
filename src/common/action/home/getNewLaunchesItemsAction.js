import { Types } from "../../constant/action";
import { ENV } from "../../constant/env";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";
import {
  NewLaunchesItemsResultEntity,
  NewLaunchesItemsActionEntity
} from "../../model";

export const getNewLaunchesItemsSuccess = (
  result,code
) => ({
  type: Types.NEWLAUNCHES_ITEMS_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const getNewLaunchesItemsFailure = (errMsg,code) => ({
  type: Types.NEWLAUNCHES_ITEMS_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const GetNewLaunchesItems = (body) => async (dispatch) => {

    axios.post(`${ENV.ADMIN_BASE_URL}/api/v1/items/newitems`,body)
        .then(response => {
          if(response.data.status === 1){
              dispatch(getNewLaunchesItemsSuccess(response.data,response.data.status))
          }else{
            dispatch(getNewLaunchesItemsFailure(response.data.message,response.data.status));
          }
        })
    .catch(error => {
      dispatch(getNewLaunchesItemsFailure("Something went wrong, Please try again later!"));
    });

};
