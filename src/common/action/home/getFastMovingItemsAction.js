import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";


export const getFastMovingItemsSuccess = (result) => ({
  type: Types.FASTMOVING_ITEMS_SUCCESS,
  payload: result,
  error: ""
});

export const getFastMovingItemsFailure = (errMsg) => ({
  type: Types.FASTMOVING_ITEMS_FAILURE,
  payload: [],
  error: errMsg
});

export const GetFastMovingItems = () => async (dispatch) => {
 
  
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };


  const body={
    "n_page":0,
    "n_limit":10
  }
    
   await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/item/top`,body, {headers})
        .then(response => {
          


          if(response.data.appStatusCode === 0){
            if(response.data.payloadJson !== null){

              dispatch(getFastMovingItemsSuccess(response.data.payloadJson))
                } 
              }else{
                dispatch(getFastMovingItemsFailure(response.data.messages[0]));
              }
            })
              .catch(error => {
                dispatch(getFastMovingItemsFailure("Something went wrong, Please try again later!"));
              });

  // const headers: any = {
  //   "Content-Type": "application/json",
  //   "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID)
  // };

  // axios.get(`${ENV.BASE_URL}/firm/branch/default`, {headers})
  // .then(response => {
  //   if (response.data.appStatusCode === 0) {
  //     if(response.data.payloadJson !== null){
  //       localStorage.setItem(Constants.FIRM_ID, response.data.payloadJson.n_branch_id)

        // GET PROFILE INFO
        ///madhuriiii --- no need 2 apis
        // const headers: any = {
        //     "Content-Type": "application/json",
        //     "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID),
        //     "x-csquare-firm-id": localStorage.getItem(Constants.FIRM_ID) //response.data.payloadJson.n_branch_id
        // };

        // axios.get(`${ENV.BASE_URL}/firm/profile`, {headers})
        // .then(response => {
        //   if(response.data.appStatusCode === 0){
        //     if(response.data.payloadJson !== null){
        //       if(response.data.payloadJson.c_pincode !== ""){
        //         axios
        //           .get(`${ENV.BASE_URL}/mst/fm/pincode/${response.data.payloadJson.c_pincode}/page/0/limit/10`,{ headers })
        //           .then(response => {
        //             if(response.data.appStatusCode === 0){
        //               // console.log(response.data.payloadJson.data, 'dshg')
        //               dispatch(getFastMovingItemsSuccess(response.data.payloadJson.data))
        //             } else {
        //               dispatch(getFastMovingItemsFailure(response.data.messages[0]))
        //             }
        //           })
        //           .catch(error => {
        //             dispatch(getFastMovingItemsFailure("Something went wrong, Please try again later!"));
        //           });
        //       }
        //     } else {
        //       dispatch(getFastMovingItemsFailure(response.data.messages[0]))
        //     }            
        //   } else {
        //     dispatch(getFastMovingItemsFailure(response.data.messages[0]))
        //   }
        // })
        // .catch(err => {

        // })
        // ---------commented till here
  //     } else {
  //       dispatch(getFastMovingItemsFailure(response.data.messages[0]))
  //     }
  //   } else {
  //     dispatch(getFastMovingItemsFailure(response.data.messages[0]))
  //   }
  // })
  // .catch(err => {
  //   dispatch(getFastMovingItemsFailure("Something went wrong, Please try again later!"))
  // })
};
