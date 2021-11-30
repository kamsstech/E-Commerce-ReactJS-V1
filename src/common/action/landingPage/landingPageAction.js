import { Types } from "../../constant/action";
import { ENV } from "../../constant/env";
import axios from "axios";
import { LandingListEntity,LandingPageActionEntity } from "../../model";


export const landingPageLoading = () => ({
  type: Types.GET_LANDINGPAGE_LOADING,
  loading:false,
  payload:[],
  error: ""
 
});
export const landingPageSuccess = (result) => ({
  type: Types.GET_LANDINGPAGE_SUCCESS,
  loading:false,
  payload:result,
  error: ""
});

export const landingPageFailure = (errMsg) => ({
  type: Types.GET_LANDINGPAGE_FAILURE,
  loading:false,
  payload:[],
  error: errMsg
});

export const CallLandingPage = (locationUrl) => async (dispatch) => {
  dispatch(landingPageLoading());
   
console.log("called landing page",locationUrl)
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
};
    //  await axios.get(`c2/web/l/landing?id=localhost`, {headers})
      await axios.get(`${ENV.BASE_URL}/lc/ms/c2/web/l/landing?id=localhost`, {headers})
        .then(response => {
          if (response.data.appStatusCode === 0) {
            if(response.data.payloadJson !== null){
            //   localStorage.setItem(Constants.FIRM_ID, response.data.payloadJson.n_branch_id)
            //   localStorage.setItem(Constants.DEFAULT_FIRM_ID, response.data.payloadJson.n_branch_id)
            var data = [];
            data.push(response.data.payloadJson.data)
              dispatch(landingPageSuccess(data));
             // history.push("/home");
            } else {
              dispatch(landingPageFailure("errormessgae"));
            }
          } else {
            dispatch(landingPageFailure("errormessage"));
          }
        })
        .catch(error => {
          dispatch(landingPageFailure("Something went wrong, Please try again later!"));
        }); 
    
};
