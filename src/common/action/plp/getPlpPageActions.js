import { Types } from "../../constant/action";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";

export const getPlpPageLoading = ()  => ({
  type: Types.PLP_PAGE_LOADING,
  loading: true,
  payload:[],
  statuscode:"",
  error: "",
  msg: ""
});

export const getPlpPageSuccess = (result,code) => ({
    type: Types.PLP_PAGE_SUCCESS,
    loading: false,
    payload: result,
    statuscode:code,
    error: "",
    msg: ""
});
export const getPlpPageFailure = (errMsg,code) => ({
    type: Types.PLP_PAGE_FAILURE,
    loading: false,
    payload: [],
    statuscode:code,
    error: errMsg,
    msg: ""
  });

export const GetPlpPageActions = (inputs) => async (dispatch) => {
  dispatch(getPlpPageLoading());
  if(inputs.page_path !='')
  {
      const headers = {
        "Content-Type":"application/json",
        "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
        "X-csquare-api-key":localStorage.getItem(Constants.KEY),
      };
      const body={
        "n_page":inputs.n_page,
        "n_limit":inputs.n_limit
      }
        if(inputs.type == 'top-most')
        {
            body['c_pincode']=localStorage.getItem(Constants.PIN_CODE);
        }
        else if(inputs.type == 'preferred')
        {
            body['c_pincode']=localStorage.getItem(Constants.PIN_CODE);
        }
        else if(inputs.type == 'new')
        {
            body['c_pincode']=localStorage.getItem(Constants.PIN_CODE);
        }
        else if(inputs.type == 'seller')
        {
            body['c_search_term']=inputs.c_code;
        }
        else if(inputs.type == 'mfg')
        {
            body['c_search_term']=inputs.c_code;
        }
        else if(inputs.type == 'mol')
        {
            body['c_search_term']=inputs.c_code;
        }
        else if(inputs.type == 'search')
        {
            body['c_search_term']=inputs.c_code
        }
        else if(inputs.type == 'category')
        {
            body['c_search_term']=inputs.c_code;
        }
       await axios.post(`${REACT_APP_BASE_URL}${inputs.page_path}`,body, {headers})
        .then(response => {
            if(response.data.appStatusCode === 0){
                dispatch(getPlpPageSuccess(response.data.payloadJson.data,response.data.appStatusCode))
              } else {
                dispatch(getPlpPageFailure(response.data.messages[0],response.data.appStatusCode))
              }
            })
        .catch(error => {
          dispatch(getPlpPageFailure("Something went wrong in Alternative Slider, Please try again later!"));
        });
  }
  else
  {
      console.log(inputs)
      dispatch(getPlpPageFailure("Invalid Path"))
  } 
}



