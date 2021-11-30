import { Types } from "../../constant/action";
import axios from "axios";


export const productDetailsLoading = () => ({
  type: Types.PRODUCT_DETAILS_LOADING,
  loading: true,
  payload: {
    result: [],
    alternate: []
  },
  error: ""
});

export const productDetailsSuccess = (
  result
) => ({
  type: Types.PRODUCT_DETAILS_SUCCESS,
  loading: false,
  payload: result,
  error: ""
});

export const productDetailsFailure = () => ({
  type: Types.PRODUCT_DETAILS_FAILURE,
  loading: false,
  payload: {
    result: [],
    alternate: []
  },
  error: "Sorry something went wrong, Please try again"
});

export const ProductDetailsAction = (productCode) => async (
  dispatch
) => {
  dispatch(productDetailsLoading());
  await axios
    .get(
      "" +
        productCode
    )
    .then(response => {
      const headers = {
        "Content-Type": "application/json"
      };

      let body = {
        idx: 100,
        c2code: "c2info",
        device_id: "LiveOrderWeb",
        rfor: "c6b0f55e10314b23",
        ip: "::1",
        slugname: response.data.SlugName,
        userid: "Guest"
      };

      axios
        .post(
          "",
          body,
          { headers }
        )
        .then(response => {
          dispatch(productDetailsSuccess(response.data));
        })
        .catch(error => {
          //   console.log(error);
          dispatch(productDetailsFailure());
        });
    })
    .catch(error => {
      //   console.log(error);
      dispatch(productDetailsFailure());
    });
};
