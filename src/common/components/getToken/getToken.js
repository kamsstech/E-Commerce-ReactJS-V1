import {Constants} from "../../constant/localstorage";

// export const getToken = () => {
//   if(localStorage.getItem(Constants.CUST_ID)&&localStorage.getItem(Constants.FIRM_ID)&&
//   localStorage.getItem(Constants.TOKEN)&&localStorage.getItem(Constants.MOBILE_NO)){
//     return true;
//   } else {
//     return false
//   }
    
// };

export const getToken = () => {
  // localStorage.getItem(Constants.CUST_ID) && 
  if(localStorage.getItem(Constants.TOKEN)&&localStorage.getItem(Constants.MOBILE_NO) 
  && localStorage.getItem(Constants.USER_ACTIVE_STATUS) && localStorage.getItem(Constants.USER_STATUS) 
  && localStorage.getItem(Constants.UPDATE_STATUS) ){
    return true;
  } else {
    return false
  }
    
};
