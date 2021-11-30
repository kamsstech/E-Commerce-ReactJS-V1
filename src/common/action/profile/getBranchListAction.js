import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";


export const getBranchSuccess = (result) => ({
  type: Types.GET_BRANCH_SUCCESS,
  payload:result,
  error: ""
});

export const getBranchFailure = (errMsg) => ({
  type: Types.GET_BRANCH_FAILURE,
  payload: [],
  error: errMsg
});

export const getBranchListAction = (body)  => async (dispatch) => {
  const headers = {
    "Content-Type": "application/json",
    "X-Csquare-Api-Key": localStorage.getItem(Constants.KEY),
    "X-Csquare-Api-Token": localStorage.getItem(Constants.TOKEN),
  };


  // axios.get(`${ENV.BASE_URL}/firm/branch/default`, {headers})
  // .then(response => {
  //   if (response.data.appStatusCode === 0) {
  //     if(response.data.payloadJson !== null){
  //       localStorage.setItem(Constants.FIRM_ID, response.data.payloadJson.n_branch_id)

       
          // const response=await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/getbranchlist`,body, {headers})
          // try{
          //     if(response.data.appStatusCode === 0){
          //       if(response.data.payloadJson !== null){
          //         dispatch(getBranchSuccess(response.data.payloadJson.items))
          //       } else {
          //         dispatch(getBranchFailure(response.data.messages[0]))
          //       }
          //     } else {
          //       dispatch(getBranchFailure(response.data.messages[0]))
          //     }
          
          // }catch(error){
          //   dispatch(getBranchFailure("Something went wrong, Please try again latersssss!"));
          // }


        const body1={
          "n_page":"0",
          "n_limit":"10"
        }


        await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/getbranchlist`,body1, {headers})
        .then(response => {
          if(response.data.appStatusCode === 0){
            if(response.data.payloadJson !== null){
              dispatch(getBranchSuccess(response.data.payloadJson.items))
            } else {
              dispatch(getBranchFailure(response.data.messages[0]))
            }
          } else {
            dispatch(getBranchFailure(response.data.messages[0]))
          }
        })
        .catch(err => {
          dispatch(getBranchFailure("Something went wrong, Please try again latersssss!"));
        })

  //     } else {
  //       dispatch(getBranchFailure(response.data.messages[0]))
  //     }
  //   } else {
  //     dispatch(getBranchFailure(response.data.messages[0]))
  //   }
  // })
  // .catch(err => {
  //   dispatch(getBranchFailure("Something went wrong, Please try again later!"));
  // })
}
