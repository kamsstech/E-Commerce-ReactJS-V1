import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";



export const getBranchInfoSuccess = (result) => ({
  type: Types.GET_BRANCHINFO_SUCCESS,
  payload:result,
  error: ""
});

export const getBranchInfoFailure = (errMsg) => ({
  type: Types.GET_BRANCHINFO_FAILURE,
  payload: {},
  error: errMsg
});

export const getBranchInfo = (body)  => async (dispatch) => {
  // const headers: any = {
  //   "Content-Type": "application/json",
  //   "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID)
  // };

  // await axios.get(`${ENV.BASE_URL}/firm/branch/default`, {headers})
  // .then(response => {
  //   if (response.data.appStatusCode === 0) {
  //     if(response.data.payloadJson !== null){
  //       localStorage.setItem(Constants.FIRM_ID, response.data.payloadJson.n_branch_id);

        // const headers = {
        //   "Content-Type": "application/json",
        //   "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID),
        //   "x-csquare-firm-id": localStorage.getItem(Constants.FIRM_ID)//response.data.payloadJson.n_branch_id
        // };

        const headers = {
          "Content-Type": "application/json",
          "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
          "X-csquare-api-key":localStorage.getItem(Constants.KEY),
        };
        
        // axios.get(`${REACT_APP_BASE_URL}/firm/profile/${branchId}`, {headers})
        await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/getbranchlist`, body,{headers})
        .then(response => {
          console.log(response.data,"RESPONSE BRANCH LIST")
          if(response.data.appStatusCode === 0){
            const result = mapToProfileData(response.data.payloadJson.items)
            // console.log(result, "hjd")
            dispatch(getBranchInfoSuccess(result))

          } else {
            dispatch(getBranchInfoFailure(response.data.messages[0]))
          }
        }) 
        .catch(err => {
          dispatch(getBranchInfoFailure("Something went wrong, Please try again later!"))
        })

  //     } else {
  //       dispatch(getBranchInfoFailure(response.data.messages[0]))
  //     }
  //   } else {
  //     dispatch(getBranchInfoFailure(response.data.messages[0]))
  //   }
  // }) .catch(err => {
  //   dispatch(getBranchInfoFailure("Something went wrong, Please try again later!"))
  // })
}

const mapToProfileData = (response) => {
  let result = {};

  Object.entries(response).map(entry => {
    if(typeof(entry[1]) === "string"){
      result[entry[0]] = entry[1];
    }
  })

  return result;
}

