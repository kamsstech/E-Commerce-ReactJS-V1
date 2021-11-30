import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@material-ui/core/IconButton";
import SearchItem from "./SearchItem";

//images
import BackArrow from "../../../assets/images/left_arrow.svg";
import searchImg from "../../../assets/images/search.svg";


const ElevationScroll = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};

const SearchListPage = (props) => {
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
            <div className="mob-searchlist-header">
              <h4>Top Searched Medicines</h4>
              <p>All over Bangalore</p>
            </div>
            <Link to="/search">
              <IconButton className="search-btn">
                <img src={searchImg} alt="Back_arrow" />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <SearchItem loading={false} />
    </div>
  );
};

export default SearchListPage;
