import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";



export const addUserLoading = () => ({
  type: Types.ADD_USER_LOADING,
  loading: true,
  error: ""
});

export const addUserSuccess = (sucMsg,code) => ({
  type: Types.ADD_USER_SUCCESS,
  message:sucMsg,
  statuscode:code,
  loading: false,
  error: ""
});

export const addUserFailure = (errMsg,code) => ({
  type: Types.ADD_USER_FAILURE,
  loading: false,
  statuscode:code,
  error: errMsg
});

export const AddUserAction = (body,edit)  => async (dispatch) => {
  dispatch(addUserLoading());
  
  
        const headers = {
          "Content-Type": "application/json",
          "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
          "X-csquare-api-key":localStorage.getItem(Constants.KEY),
        };
        

        
          
         if(edit){
          axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/user/update`, body, {headers})
          .then(response => {
            if(response.data.appStatusCode === 0){
              dispatch(addUserSuccess(response.data.messages[0],response.data.appStatusCode))
                         
            } else {
              dispatch(addUserFailure(response.data.messages[0],response.data.appStatusCode))
            }
          })
          .catch(err => {
            dispatch(addUserFailure("Something went wrong, Please try again later!"))
          })
         }else{
          axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/user/add`, body, {headers})
          .then(response => {
            if(response.data.appStatusCode === 0){
              dispatch(addUserSuccess(response.data.messages[0],response.data.appStatusCode))
                         
            } else {
              dispatch(addUserFailure(response.data.messages[0],response.data.appStatusCode))
            }
          })
          .catch(err => {
            dispatch(addUserFailure("Something went wrong, Please try again later!"))
          })
         }
        
        // else {
        //   axios.post(`${REACT_APP_BASE_URL}/firm/user`, body, {headers})
        //   .then(response => {
        //     if(response.data.appStatusCode === 0){
        //       if(response.data.payloadJson !== null){
        //         dispatch(addUserSuccess())
        //         console.log(isMobile);
                
        //         if(isMobile){
        //           // history.push("/user");
        //         }else{
        //           // history.push("/profile/user");
        //         }  
                
        //       } else {
        //         dispatch(addUserFailure(response.data.messages[0]))
        //       }
        //     } else {
        //       dispatch(addUserFailure(response.data.messages[0]))
        //     }
        //   })
        //   .catch(err => {
        //     dispatch(addUserFailure("Something went wrong, Please try again later!"))
        //   })
        // }
  //     } else {
  //       dispatch(addUserFailure(response.data.messages[0]))
  //     }
  //   } else {
  //     dispatch(addUserFailure(response.data.messages[0]))
  //   }
  // })
  // .catch(err => {
  //   dispatch(addUserFailure("Something went wrong, Please try again later!"))
  // })
}
