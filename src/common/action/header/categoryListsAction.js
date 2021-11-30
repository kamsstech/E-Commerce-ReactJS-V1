import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";

export const categoryListsLoading = () => ({
    type: Types.CATEGORYLISTS_LOADING,
    loading: true,
    payload: [],
    error: ""
});

export const categoryListsSuccess = (categorylists) => ({
    type: Types.CATEGORYLISTS_SUCCESS,
    loading: false,
    payload: categorylists,
    error: ""
});

export const categoryListsFailure = (errMsg) => ({
    type: Types.CATEGORYLISTS_FAILURE,
    loading: false,
    payload: [],
    error: errMsg
});

export const CategoryListsAction = () => async (dispatch) => {
    dispatch(categoryListsLoading());

    const headers = {
        "Content-Type": "application/json",
        "X-csquare-api-token": localStorage.getItem(Constants.TOKEN),
        "X-csquare-api-key": localStorage.getItem(Constants.KEY),
    };
    ///c2/lc/ms/mst/g/category
    ///mst/g/category
    await axios
        .get(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/g/category`, { headers })
        .then(response => {
            if (response.data.appStatusCode === 0) {
                dispatch(categoryListsSuccess(response.data.payloadJson))
            } else {
                dispatch(categoryListsFailure(response.data.messages[0]))
            }
        })
        .catch(error => {
            dispatch(categoryListsFailure("Something went wrong, Please try again later!"));
        });
};