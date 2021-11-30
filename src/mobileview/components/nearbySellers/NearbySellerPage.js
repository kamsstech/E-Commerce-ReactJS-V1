import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@material-ui/core/IconButton";

//images 
import BackArrow from "../../../assets/images/left_arrow.svg";
import searchImg from "../../../assets/images/search.svg";

import SellerList from "./SellerList";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const ElevationScroll = (props: Props) => {
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

const NearbySellersPage = (props: Props) => {
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
              <h4>Near By Sellers</h4>
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
      <SellerList loading={false} />
    </div>
  );
};

export default NearbySellersPage;
