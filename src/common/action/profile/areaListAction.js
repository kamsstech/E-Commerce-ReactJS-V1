import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";


export const areaListSuccess = (result) => ({
  type: Types.AREA_LIST_SUCCESS,
  payload: result,
  error: ""
});
  
export const areaListFailure = (errMsg) => ({
  type: Types.AREA_LIST_FAILURE,
  payload: [],
  error: errMsg
});

export const AreaListAction = (city) => async (dispatch) => {

  // const headers = {
  //   "Content-Type": "application/json"
  // };
  const headers1 = {
    "Content-Type": "application/json",
    "X-csquare-api-key":"agiQKFNgtLHe4Wg1+nWn9g==",
    "X-csquare-api-token":"-134392078fc93f6"
  };
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-key":(localStorage.getItem('key') || localStorage.getItem('KEY')),
    "X-csquare-api-token":((localStorage.getItem('token') || localStorage.getItem('TOKEN')))
  };
  // await axios.post(`${REACT_APP_BASE_URL}/mst/area`,form,{ headers })
  
  // await axios.post(`${REACT_APP_BASE_URL}/mst/area`,{ headers }).then(response => {
    // await axios.get(`${REACT_APP_BASE_URL}/lc/ms/mst/search/l/area/${city}`,{ headers })
    await axios.get(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/g/area/${city}`,{ headers })
    .then(response => {
      // console.log(response.data,"area")
      if(response.data.appStatusCode === 0){
        

        let result = [];
        response.data.payloadJson.data.map((item) => {
            let row = {
                c_area_code: item.c_code,
                c_area_name: item.c_name,
                c_sh_name:item.c_sh_name
            }

            result.push(row);
        })

        dispatch(areaListSuccess(result))
      } else {
        dispatch(areaListFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(areaListFailure("Something went wrong, Please try again later!"));
    });
};
