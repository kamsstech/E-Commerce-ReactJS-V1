import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";


//images
import BackArrow from "../../../assets/images/left_arrow.svg";
import cross from "../../../assets/images/cross.svg";

import SearchResultPage from "./SearchResultPage";

const ElevationScroll = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};

const SearchPage = (props) => {
  const searchResult = props.searchResult;
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    if (searchKey.length >= 3) {
      props.search(searchKey);
    }
  }, [searchKey]);

  const getSearchedItem = (item) => {
    // setRecentSearch();
    // var itemArray = [...recentSearch, item];
    // setRecentSearch(itemArray);
    // console.log(itemArray, "searchpage");
  };

  const handleSearch = (e) => {
    setSearchKey(e.target.value);
  };

  const clearSearch = () => {
    setSearchKey("");
  };

  return (
    <div className="mob-search-bar">
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Link to="/landing">
              <IconButton>
                <img src={BackArrow} alt="Back_arrow" />
              </IconButton>
            </Link>
            <InputBase
              name="search"
              id="search"
              autoFocus={true}
              autoComplete="off"
              onChange={e => handleSearch(e)}
              value={searchKey}
              className="mob-search-inp"
              placeholder="Search For Medicines & Health Products"
            />
            <IconButton className="cross-btn" onClick={() => clearSearch()}>
              <img src={cross} alt="Back_arrow" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <div className="mob-spacing">
        {searchResult.payload !== undefined && searchKey.length >= 3
          ? searchResult.payload.map((item) => (
              <SearchResultPage
                key={item.ProductCode}
                item={item}
                getSearchedItem={getSearchedItem}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default SearchPage;
