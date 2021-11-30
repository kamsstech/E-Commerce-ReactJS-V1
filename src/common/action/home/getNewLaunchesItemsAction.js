import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";
import {
  NewLaunchesItemsResultEntity,
  NewLaunchesItemsActionEntity
} from "../../model";

export const getNewLaunchesItemsSuccess = (
  result
) => ({
  type: Types.NEWLAUNCHES_ITEMS_SUCCESS,
  payload: result,
  error: ""
});

export const getNewLaunchesItemsFailure = (errMsg) => ({
  type: Types.NEWLAUNCHES_ITEMS_FAILURE,
  payload: [],
  error: errMsg
});

export const GetNewLaunchesItems = () => async (dispatch) => {
 

  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };


  const body={
    "n_page":0,
    "n_limit":15
  }

    axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/item/new`,body, {headers})
        .then(response => {
          // console.log(response);
          if(response.data.appStatusCode === 0){
            if(response.data.payloadJson !== null){
              dispatch(getNewLaunchesItemsSuccess(response.data.payloadJson))
            } 
          }else{
            dispatch(getNewLaunchesItemsFailure(response.data.messages[0]));
          }
        })
          .catch(error => {
            dispatch(getNewLaunchesItemsFailure("Something went wrong, Please try again later!"));
          });

};
