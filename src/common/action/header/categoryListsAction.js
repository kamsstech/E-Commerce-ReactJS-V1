import { Types } from "../../constant/action";
import { ENV } from "../../constant/env";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";

export const categoryListsLoading = () => ({
    type: Types.CATEGORYLISTS_LOADING,
    payload:[],
      statuscode:"",
      loading: true,
      error: "",
      msg: ""
});

export const categoryListsSuccess = (result,code) => ({
    type: Types.CATEGORYLISTS_SUCCESS,
     payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const categoryListsFailure = (errMsg,code) => ({
    type: Types.CATEGORYLISTS_FAILURE,
     payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const CategoryListsAction = () => async (dispatch) => {
    dispatch(categoryListsLoading());
    const body ={
        c_process:"1"
    }
    await axios
        .post(`${ENV.ADMIN_BASE_URL}/api/v1/category/maincategory`,body)
        .then(response => {
            if (response.data.status === 1) {
                dispatch(categoryListsSuccess(response.data,response.data.status))
            } else {
                dispatch(categoryListsFailure(response.data.message,response.data.status))
            }
        })
        .catch(error => {
            dispatch(categoryListsFailure("Something went wrong, Please try again later!"));
        });
};