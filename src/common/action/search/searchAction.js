import { Types } from "../../constant/action";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../constant/env";


export const searchLoading = () => ({
  type: Types.SEARCH_LOADING,
  loading: true,
  payload: [],
  error: ""
});

export const searchSuccess = (
  result
) => ({
  type: Types.SEARCH_SUCCESS,
  loading: false,
  payload: result,
  error: ""
});

export const searchFailure = () => ({
  type: Types.SEARCH_FAILURE,
  loading: false,
  payload: [],
  error: "Sorry something went wrong, Please try again"
});

export const search = (searchKey) => async (dispatch) => {
  dispatch(searchLoading());

  await axios(`${REACT_APP_BASE_URL}/products/search-items?items=${searchKey}`
  )
    .then(response => {
      var result = [];
      if (response.data.status === "success") {
        Object.values(response.data.result).map((item) => {
          result.push(item);
        });
      }

      dispatch(searchSuccess(result));
    })
    .catch(error => {
      // console.log(error);
      dispatch(searchFailure());
    });
};
