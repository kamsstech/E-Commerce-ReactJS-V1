import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";



export const getUserInfoSuccess = (result) => ({
  type: Types.GET_USERINFO_SUCCESS,
  payload:result,
  error: ""
});

export const getUserInfoFailure = (errMsg) => ({
  type: Types.GET_USERINFO_FAILURE,
  payload: {},
  error: errMsg
});

export const GetUserInfoAction = (userId)  => async (dispatch) => {

  const body={
    "c_user_id":userId
  }
        const headers = {
          "Content-Type": "application/json",
          "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
          "X-csquare-api-key":localStorage.getItem(Constants.KEY),
        };
        
        axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/user/detail`, body,{headers})
        .then(response => {
          if(response.data.appStatusCode === 0){
            
            dispatch(getUserInfoSuccess(response.data.payloadJson))

          } else {
            dispatch(getUserInfoFailure(response.data.messages[0]))
          }
        }) 
        .catch(err => {
          dispatch(getUserInfoFailure("Something went wrong, Please try again later!"))
        })

  //     } else {
  //       dispatch(getUserInfoFailure(response.data.messages[0]))
  //     }
  //   } else {
  //     dispatch(getUserInfoFailure(response.data.messages[0]))
  //   }
  // }) .catch(err => {
  //   dispatch(getUserInfoFailure("Something went wrong, Please try again later!"))
  // })
}
