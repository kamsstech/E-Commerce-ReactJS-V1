import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";


export const stateListSuccess = (result) => ({
  
  type: Types.STATE_LIST_SUCCESS,
  payload: result,
  
});
  
export const stateListFailure = (errMsg) => ({
  type: Types.STATE_LIST_FAILURE,
  payload: [],
  error: errMsg
});

export const StateListAction = () => async (dispatch) => {

 
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-key":(localStorage.getItem('key') || localStorage.getItem('KEY')),
    "X-csquare-api-token":((localStorage.getItem('token') || localStorage.getItem('TOKEN')))
  };

  await axios.get(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/g/state`,{headers})
  .then(response => {
      

      if(response.data.appStatusCode === 0){
        
        
        let result = [];
        response.data.payloadJson.data.map((item) => {
            let row = {
                c_state_code: item.c_code,
                c_state_name: item.c_name,
                c_sh_name: item.c_sh_name
            }
            result.push(row);
        })
        
        dispatch(stateListSuccess(result))
      } 
      else {
        dispatch(stateListFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(stateListFailure("Something went wrong, Please try again later!"));
    });
};
