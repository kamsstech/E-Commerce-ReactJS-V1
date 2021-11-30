import * as React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";

//images
import search from "../../../assets/images/search.svg";
import microphone from "../../../assets/images/microphone.svg";

const SearchButton = () => {
  return (
    <div className="mob-home-side-spacing">
      <Link to="/search">
        <Fab
          variant="extended"
          size="medium"
          color="default"
          className="mob-search-button"
          aria-label="add"
        >
          <img src={search} alt="search_icon" />
          <span className="grow">Search for Medicines</span>
          <img src={microphone} alt="microphone_icon" className="microphone" />
        </Fab>
      </Link>
    </div>
  );
};

export default SearchButton;
