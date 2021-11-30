import React from "react";
import { useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import SwipeableViews from "react-swipeable-views";

//images
import BannerImg from "../../../assets/images/banner.jpg";

const Banner = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className="mobile-banner-sec">
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        <img
          src={BannerImg}
          alt="BannerImg"
          className="mobile-landing-banner"
        />
        <img
          src={BannerImg}
          alt="BannerImg"
          className="mobile-landing-banner"
        />
        <img
          src={BannerImg}
          alt="BannerImg"
          className="mobile-landing-banner"
        />
        <img
          src={BannerImg}
          alt="BannerImg"
          className="mobile-landing-banner"
        />
      </SwipeableViews>
      <MobileStepper
        variant="dots"
        steps={4}
        position="static"
        activeStep={activeStep}
        className="mobile-banner-dots"
        nextButton={<></>}
        backButton={<></>}
      />
    </div>
  );
};

export default Banner;
