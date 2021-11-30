import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";

import {Base64} from "../encode/encodePassword";
import { Constants } from "../../constant/localstorage";
export const searchByMoleculesLoading = () => ({
  type: Types.SEARCH_BY_MOLECULE_LOADING,
  loading: true,
  payload: [],
  statuscode:"",
  error: ""
});

export const searchByMoleculesSuccess = (result,code) => ({
  type: Types.SEARCH_BY_MOLECULE_SUCCESS,
  loading: false,
  payload: result,
  statuscode:code,
  error: ""
});

export const searchByMoleculesFailure = (errMsg,code) => ({
  type: Types.SEARCH_BY_MOLECULE_FAILURE,
  loading: false,
  payload: [],
  statuscode:code,
  error: errMsg
});

export const SearchByMolecule = (body) => async (dispatch) => {
  dispatch(searchByMoleculesLoading());

  const headers = {
    "Content-Type": "application/json",
    "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
    "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)

  };
  // let moleculeSearchKey = Base64.encode(searchKey)
  
   //.get(`${ENV.BASE_URL}/mst/search/mol/${searchKey}`,{ headers })


  //  const body = {
  //   c_search_term: searchKey,
  //   c_search_type: search_type
  // }
  // c2/lc/ms/mst/mol/search/mol
  
  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/mol/list`,body,{ headers })
    .then(response => {
      
      if(response.data.appStatusCode === 0){

        let moleculeData = [];

        moleculeData.push(response.data.payloadJson)

        dispatch(searchByMoleculesSuccess(response.data.payloadJson.data.j_list, response.data.appStatusCode))

      } else {
        dispatch(searchByMoleculesFailure(response.data.messages[0], response.data.appStatusCode))
      }
    })
    .catch(error => {
      dispatch(searchByMoleculesFailure("Something went wrong, Please try again later!"));
    });
};
