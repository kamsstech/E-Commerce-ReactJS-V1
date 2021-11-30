import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";


const getBranchSuccess = (result) => ({
  type: Types.GET_BRANCH_SUCCESS,
  payload:result,
  error: ""
});

const getBranchFailure = (errMsg) => ({
  type: Types.GET_BRANCH_FAILURE,
  payload: [],
  error: errMsg
});

export const searchBranchListAction = (searchKey)  => async (dispatch) => {
  // const headers: any = {
  //   "Content-Type": "application/json",
  //   "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID)
  //   };

  // axios.get(`${ENV.BASE_URL}/firm/branch/default`, {headers})
  // .then(response => {
  //   if (response.data.appStatusCode === 0) {
  //     if(response.data.payloadJson !== null){
  //       localStorage.setItem(Constants.FIRM_ID, response.data.payloadJson.n_branch_id)

        // const headers = {
        //   "Content-Type": "application/json",
        //   "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID),
        //   "x-csquare-firm-id": localStorage.getItem(Constants.FIRM_ID) //response.data.payloadJson.n_branch_id
        // };

        const headers = {
          "Content-Type": "application/json",
          "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
          "X-csquare-api-key":localStorage.getItem(Constants.KEY),
        };
        
        axios.get(`${REACT_APP_BASE_URL}/firm/branch/search/${searchKey}`, {headers})
        .then(response => {
          if(response.data.appStatusCode === 0){
            if(response.data.payloadJson !== null){
              // console.log(response.data.payloadJson.list)
              dispatch(getBranchSuccess(response.data.payloadJson.list))
            } else {
              dispatch(getBranchFailure(response.data.messages[0]))
            }
          } else {
            dispatch(getBranchFailure(response.data.messages[0]))
          }
        })
        .catch(err => {
          dispatch(getBranchFailure("Something went wrong, Please try again later!"));
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