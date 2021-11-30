import * as React from "react";
// import "swiper/css/swiper.css";
import 'swiper/swiper-bundle.css';

import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

import Banner from "./Banner";
import SearchButton from "./SearchButton";
import TopSearchedMadicines from "./TopSearched";
import KeyHighlights from "./KeyHighlights";
import NearBySellers from "./NearbySellers";

//images
// import siteLogo from "../../../assets/images/site-logo.svg";
import siteLogo from "../../../assets/mobImages/main_logo.svg";

const LandingPage = () => {
  return (
    <>
      <div className="mob-home">
        <div className="center">
          <img src={siteLogo} alt="onBoarding" className="mob-home-logo" />
        </div>
        <SearchButton />
        <Banner />
        <TopSearchedMadicines loading={false} />
        {/* <OfficersAndPromotions /> */}
        <NearBySellers />
        <KeyHighlights />
      </div>
      <div className="mob-bottom-height"></div>
      <AppBar position="fixed" color="primary" className="mob-bottombar">
        <Link to="/login">
          <Button variant="contained" className="bottom-mobile-btn purple">
            Login
          </Button>
        </Link>
        <Link to="/register/buyer">
          <Button variant="contained" className="bottom-mobile-btn green">
            Register With Us
          </Button>
        </Link>
      </AppBar>
    </>
  );
};

export default LandingPage;
