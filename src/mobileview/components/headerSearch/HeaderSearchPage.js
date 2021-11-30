import * as React from "react";
import { useState, useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import SearchIcon from "../../../assets/mobImages/search-grey/search.png";
import ScanIcon from "../../../assets/mobImages/scan-grey/scan.png";
import MicrophoneIcon from "../../../assets/mobImages/microphone-grey/microphone.png";


//images
import FilterIcon from "../../../assets/mobImages/filter-black/filter.png";
import { useHistory } from "react-router-dom";

const HeaderSearchPage = (props) => {
  let history = useHistory();
  const {SearchByProduct, searchByProductResult, SearchBySeller, searchBySellerResult,
    SearchByMolecule, searchByMoleculeResult, SearchByMfc, searchByMfcResult, searchParametersResult, GetSearchParameters} = props;
  const [searchKey, setSearchKey] = useState("");
const result= searchParametersResult.payload;
  const [placeholderValue, setPlaceholder] = useState("Serach for Products")
 
  const handleSearch = (event) => {
    setSearchKey(event.target.value);
    let object={
      searchKey: event.target.value,
      searchby: result.searchby
    }
    
    GetSearchParameters(object)
  };

  useEffect ( () =>{
//  setSearchKey("")
  setPlaceholder(`Search for ${result.searchby}`);
   },[result.searchby]);

  useEffect(() => {
    if (searchKey && searchKey.length >= 3) {
      if (result.searchby === "Products") {
        const body = {
          n_page: 0,
          n_limit: 5,
          c_search_term: searchKey,
        };
        SearchByProduct(body);
      } else if (result.searchby === "Sellers") {
        const body = {
          n_page: 0,
          n_limit: 5,
          c_search_term: searchKey,
        };
        SearchBySeller(body);
      } else if(result.searchby=== "Molecule") {
        const body = {
          n_page: 0,
          n_limit: 5,
          c_search_term: searchKey,
        };
        SearchByMolecule(body)
      } else if(result.searchby === "Manufacturer"){
        const body = {
          n_page: 0,
          n_limit: 5,
          c_search_term: searchKey,
        };
        SearchByMfc(body)
      }
    }
  }, [searchKey,result.searchby]);

  // console.log("searchByProductResult", searchByProductResult)

  return (
    <div className="mob-common-header">
      <div className="mob-header-privatesearch-sec">
        <div className="mob-header-privatesearch">
          <TextField
            name="password"
            type="text"
            margin="normal"
            variant="outlined"
            placeholder={placeholderValue}
            autoComplete="off"
            onChange={handleSearch}
            value={searchKey}
            className="auth-input mob-input m-0"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={SearchIcon} alt="SearchIcon" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <img src={ScanIcon} alt="ScanIcon" className="mr-16" />
                  <img src={MicrophoneIcon} alt="MicrophoneIcon" />
                </InputAdornment>
              )
            }}
          />
        </div>
        <div className="mob-header-cancel-text" onClick={history.goBack} >Cancel</div>
      </div>
    </div>
  )
}

export default HeaderSearchPage;