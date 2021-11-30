import * as React from "react";
import Swiper from "react-id-swiper";
import Button from "@material-ui/core/Button";

//images
import PSLogo from "../../../assets/images/pharmsoft-logo.png";
import EcogreenLogo from "../../../assets/images/ecogreen-logo.png";
import PALogo from "../../../assets/images/pharmassist-logo.png";
import SolutionImg1 from "../../../assets/images/solution-bg1.jpg";
import SolutionImg2 from "../../../assets/images/Illus.svg";
import SolutionImg3 from "../../../assets/images/solution-bg3.svg";

import DemoForm from "./DemoFormBottomSheet";

const CsquareSolutions = (props) => {
  const params = {
    slidesPerView: 1.3,
    spaceBetween: 12,
    freeMode: true,
  };
  const {
    CityListAction,
    cityListResult,
    submitDemoRequestAction,
    demoRequestResult,
  } = props;

  const [open, setOpen] = React.useState(false);
  const [heading, setHeading] = React.useState("");
  const [productValue, setProductValue] = React.useState("");

  const openDemoForm = (demoFor, proVal) => {
    setHeading(demoFor);
    setProductValue(proVal);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <div className="home-grey-bg pt-0">
      <div className="mob-home-seller-slider-sec">
        <div className="mob-slider-sec">
          <div>
            <h3 className="mob-slider-title">
              C-Square Solutions helpful for you
            </h3>
            <h5 className="mob-slider-subtitle">Increase your Business </h5>
          </div>
        </div>
        <Swiper {...params}>
          <div style={{ width: "100%" }}>
            <div
              className="mob-home-solutions-slider"
              style={{ backgroundImage: `url(${SolutionImg1})` }}
            >
              <img src={PSLogo} alt="PSLogo" />
              <p>
                Manage your store inventory,
                <br />
                Stock & Sales, Billing, Rack <br />
                Management etc...
              </p>
              <Button
                variant="contained"
                color="primary"
                className="solution-get-btn"
                onClick={() => {
                  openDemoForm("Pharmsoft", "sfa360");
                }}
              >
                Get
              </Button>
            </div>
          </div>
          <div>
            <div
              className="mob-home-solutions-slider sencond-bgimg"
              style={{ backgroundImage: `url(${SolutionImg2})` }}
            >
              <img src={EcogreenLogo} alt="EcogreenLogo" />
              <p>
                Grow Your Distribution <br />
                Business
              </p>
              <Button
                variant="contained"
                color="primary"
                className="solution-get-btn"
                onClick={() => {
                  openDemoForm("Ecogreen", "ecogreen");
                }}
              >
                Get
              </Button>
            </div>
          </div>
          <div>
            <div
              className="mob-home-solutions-slider"
              style={{ backgroundImage: `url(${SolutionImg3})` }}
            >
              <img src={PALogo} alt="PALogo" />
              <p>
                One Stop Solution To Manage <br />
                Your Retail Chains.
              </p>
              <Button
                variant="contained"
                color="primary"
                className="solution-get-btn"
                onClick={() => {
                  openDemoForm("Pharm Assist", "pharmassist");
                }}
              >
                Get
              </Button>
            </div>
          </div>
        </Swiper>
        <DemoForm
          toggleDrawer={toggleDrawer}
          demoFor={heading}
          open={open}
          handleClose={handleClose}
          productValue={productValue}
          CityListAction={CityListAction}
          cityListResult={cityListResult}
          submitDemoRequestAction={submitDemoRequestAction}
          demoRequestResult={demoRequestResult}
        />
      </div>
    </div>
  );
};

export default CsquareSolutions;
