import * as React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";

//images
import search from "../../../assets/images/search.svg";
import Scan from "../../../assets/mobImages/scan-grey/scan.png";
import Microphone from "../../../assets/mobImages/microphone-grey/microphone.png";



 
const SearchButton = (props) => {
  const { GetSearchParameters} = props;
  const handleSearchPara =() =>{
    let searchObject={
      searchKey:"",
      searchby:"Products",
    }
    GetSearchParameters(searchObject)
  }
  return (
    <div className="mob-header-side-spacing">
      <Link to="/home/search">
        <Fab
          variant="extended"
          size="medium"
          color="default"
          className="mob-header-search-button"
          aria-label="add"
          onClick = {handleSearchPara}
        >
          <img src={search} alt="search_icon" className="mr-12" />
          <span className="grow align-left">Search for Medicines</span>
          <img src={Scan} alt="search_icon" className="ml-16" />
          <img src={Microphone} alt="search_icon" className="ml-16" />
        </Fab>
      </Link>
    </div>
  );
};

export default SearchButton;
