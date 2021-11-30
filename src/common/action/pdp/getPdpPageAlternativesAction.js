import { Types } from "../../constant/action";
import axios from "axios";
import { ENV } from "../../constant/env";


export const getPdpPageAlternativeLoading = ()  => ({
  type: Types.PDP_PAGE_ALTERNATIVES_LOADING,
  loading: true,
  payload:[],
  error: ""
});

export const getPdpPageAlternativesSuccess = (result) => ({
    type: Types.PDP_PAGE_ALTERNATIVES_SUCCESS,
    loading: false,
    payload: result,
    error: ""
});
export const getPdpPageAlternativesFailure = (errMsg) => ({
    type: Types.PDP_PAGE_ALTERNATIVES_FAILURE,
    loading: false,
    payload: [],
    error: errMsg
  });

export const GetPdpPageAlternatives = (c_cont_code, limitNumber ) => async (dispatch) => {
       //alternatives api  input = c_cont_code/page/1/limit/10  from 1st ItemDetails_api 
       axios
    .get(`${ENV.BASE_URL}/mst/cache/summary/content/${c_cont_code}/page/1/limit/${limitNumber}`)
    .then(response => {
        if(response.data.appStatusCode === 0){
            // console.log(response.data.payloadJson.data, 'dshg')
            // console.log(response.data.payloadJson);
            dispatch(getPdpPageAlternativeLoading());
            dispatch(getPdpPageAlternativesSuccess(response.data.payloadJson.data))
            
          } else {
            dispatch(getPdpPageAlternativesFailure(response.data.messages[0]))
          }
        })
        .catch(error => {
          dispatch(getPdpPageAlternativesFailure("Something went wrong in Alternative Slider, Please try again later!"));
        });
    
}



