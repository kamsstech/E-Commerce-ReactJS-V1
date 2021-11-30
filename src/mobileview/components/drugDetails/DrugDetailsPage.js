import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Cross from "../../../assets/images/cross.svg";
import searchImg from "../../../assets/images/search.svg";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Banner from "./Banner";

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

const DrugDetailsPage = (props: Props) => {
  return (
    <div className="mob-search-bar">
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Link to="/landing">
              <IconButton>
                <img src={Cross} alt="Back_arrow" />
              </IconButton>
            </Link>
            <div className="mob-searchlist-header"></div>
            <Link to="/search">
              <IconButton className="search-btn">
                <img src={searchImg} alt="Back_arrow" />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className="mob-product-spacing mob-top-spacing">
        <Banner />
        <h2 className="product-about-title">Paracetamol</h2>
        <h5 className="product-adout-desc">Description:</h5>
        {/* <h6 className="product-adout-desc grey-clr">
        A drug that lowers tension and stress without side effects
      </h6> */}
        <ul className="product-desc-list">
          A drug that lowers tension and stress without side effects
          <li>Contains internationally acknowledged, natural anxiolytic</li>
          <li>Has sedative and calming effect</li>
          <li>Controls depression</li>
          <li>Reduces melancholia.</li>
        </ul>
        <h5 className="product-adout-desc quick-link-space">Quick Links:</h5>
        <Button variant="contained" className="quick-links">
          Usage
        </Button>
        <Button variant="contained" className="quick-links">
          Side Effect
        </Button>
        <Button variant="contained" className="quick-links">
          Contra-indications
        </Button>
        <div className="solid-line"></div>
        <div className="about-subsec">
          <h4 className="subsec-title">Usage:</h4>
          <p className="subsec-desc">
            Unless otherwise prescribed by the physician, 10 - 20 drops 3 times
            per day. If complaints are not relieved, consult a specialist.
          </p>
          <p className="subsec-desc">
            <span>Note :</span> The product contains alcohol. In the case of
            children, pregnant and lactating ladies and in certain serious liver
            and alcohol problems, consult a specialist.
          </p>
        </div>
        <div className="about-subsec">
          <h4 className="subsec-title">Side Effect:</h4>
          <p className="subsec-desc">
            No side effects of AlphaTM-TS are known.
          </p>
        </div>
        <div className="about-subsec">
          <h4 className="subsec-title">Contra-indications:</h4>
          <p className="subsec-desc">
            No contra-indications for the use of AlphaTM-TS are known.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrugDetailsPage;
