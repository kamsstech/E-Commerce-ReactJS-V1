import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";

export const addShortbookItemsLoading = () => ({
  type: Types.ADD_SHORTBOOK_LOADING,
  payload:[],
  loading: true,
  error: ""
});
export const addShortbookItemsSuccess = (result) => ({
  type: Types.ADD_SHORTBOOK_SUCCESS,
  payload: "Success",
  loading: false,
  error: ""
});

export const addShortbookItemsFailure = (errMsg) => ({
  type: Types.ADD_SHORTBOOK_FAILURE,
  payload: [],
  loading: false,
  error: errMsg
});

export const AddShortbookItems = (body) => async (dispatch) => {
  dispatch(addShortbookItemsLoading())
  // const headers = {
  //   "Content-Type":"application/json",
  //   "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
  //   "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  // };
  const headers = {
    "Content-Type":"application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };
  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/sb/add`,body, {headers})
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(addShortbookItemsSuccess(response.data.messages[0]))

      }else{
        dispatch(addShortbookItemsFailure(response.data.messages[0]));
      }
   })
  .catch(error => {
    dispatch(addShortbookItemsFailure("Something went wrong, Please try again later!"));
  });

  
};
