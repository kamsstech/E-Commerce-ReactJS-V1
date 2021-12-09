import { Types } from "../../constant/action";
import axios from "axios";
import { ENV } from "../../constant/env";

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
      
      const body={
        "n_offset":inputs.n_offset,
        "n_limit":inputs.n_limit
      }
        if(inputs.type == 'best-selling')
        {
            body['c_process']=inputs.c_process;
        }
        else if(inputs.type == 'new')
        {
            body['c_process']=inputs.c_process;
        }
        else if(inputs.type == 'search')
        {
            body['c_search_term']=inputs.c_code
        }
        else if(inputs.type == 'category')
        {
            body['c_category_code']=inputs.c_code;
            body['c_process']=inputs.c_process;
        }
        else if(inputs.type == 'all')
        {
            body['c_process']=inputs.c_process;
        }
       await axios.post(`${ENV.ADMIN_BASE_URL}${inputs.page_path}`,body)
        .then(response => {
            if(response.data.status === 1){
                dispatch(getPlpPageSuccess(response.data,response.data.status))
              } else {
                dispatch(getPlpPageFailure(response.data.message,response.data.status))
              }
            })
        .catch(error => {
          dispatch(getPlpPageFailure("Something went wrong in Alternative Slider, Please try again later!"));
        });
  }
  else
  {
      dispatch(getPlpPageFailure("Invalid Path"))
  } 
}



