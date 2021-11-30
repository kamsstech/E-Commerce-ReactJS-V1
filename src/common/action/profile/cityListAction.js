import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";

export const cityListSuccess = (result) => ({
  type: Types.CITY_LIST_SUCCESS,
  payload: result,
  error: ""
});
  
export const cityListFailure = (errMsg) => ({
  type: Types.CITY_LIST_FAILURE,
  payload: [],
  error: errMsg
});

export const CityListAction = (state) => async (dispatch) => {

  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-key":(localStorage.getItem('key') || localStorage.getItem('KEY')),
    "X-csquare-api-token":((localStorage.getItem('token') || localStorage.getItem('TOKEN')))
  };
  // await axios.post(`${ENV.BASE_URL}/mst/city`,form,{ headers })
  // await axios.get(`${REACT_APP_BASE_URL}/lc/ms/mst/search/l/city/${state}`,{ headers })
  await axios.get(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/g/city/${state}`,{ headers })
  .then(response => {
    // console.log(response.data,"city")
      if(response.data.appStatusCode === 0){
        let result = [];
        response.data.payloadJson.data.map((item) => {
            let row = {
                c_city_code: item.c_code,
                c_city_name: item.c_name,
                c_sh_name: item.c_sh_name
            }

            result.push(row);
        })

        dispatch(cityListSuccess(result))
      } else {
        dispatch(cityListFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(cityListFailure("Something went wrong, Please try again later!"));
    });
};
