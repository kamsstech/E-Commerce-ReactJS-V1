import { Types } from "../../constant/action";
// import { ENV } from "../../constant/env";
// import { Constants } from "../../constant/localstorage";
// import {Base64} from "../encode/encodePassword";
// import axios from "axios";





export const footerSubscribeLoading = () => ({
  type: Types.GET_FOOTERSUBSCRIBE_LOADING,
  loading:false,
  payload:[],
  error: ""
 
});
export const footerSubscribeSuccess = (result) => ({
  type: Types.GET_FOOTERSUBSCRIBE_SUCCESS,
  loading:false,
  payload:result,
  error: ""
});

export const footerSubscribeFailure = (errMsg) => ({
  type: Types.GET_FOOTERSUBSCRIBE_FAILURE,
  loading:false,
  payload:[],
  error: errMsg
});

export const footerSubscribe = (email) => async (dispatch) => {
  dispatch(footerSubscribeLoading());
   
console.log("footer subscribe",email)
// const headers: any = {
//   "Content-Type": "application/json",
//   "Access-Control-Allow-Origin": "*"
// };
const headers = {
  message:"subsscibed successfully"
};
dispatch(footerSubscribeSuccess(headers))
    //    await axios.get(`${ENV.BASE_URL}/ms/c2/web/landing?id=localhost`, {headers})
    //     .then(response => {
    //       if (response.data.appStatusCode === 0) {
    //         if(response.data.payloadJson !== null){
    //         //   localStorage.setItem(Constants.FIRM_ID, response.data.payloadJson.n_branch_id)
    //         //   localStorage.setItem(Constants.DEFAULT_FIRM_ID, response.data.payloadJson.n_branch_id)
    //           dispatch(landingPageSuccess(response.data.payloadJson.data));
    //          // history.push("/home");
    //         } else {
    //           dispatch(landingPageFailure("errormessgae"));
    //         }
    //       } else {
    //         dispatch(landingPageFailure("errormessage"));
    //       }
    //     })
    //     .catch(error => {
    //       dispatch(landingPageFailure("Something went wrong, Please try again later!"));
    //     }); 
    
};
