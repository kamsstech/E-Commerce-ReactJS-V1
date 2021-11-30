import * as React from "react";
import { useState,useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import SwipeableViews from "react-swipeable-views";
import Grow from '@material-ui/core/Grow';
import { createBrowserHistory } from "history";
import ScreenOne from "./ScreenOne";
import ScreenTwo from "./ScreenTwo";
import SiteLoader from "../siteLoader/SiteLoader";
import ScreenThree from "./ScreenThree";
import ScreenFour from "./ScreenFour";
import ScreenFive from "./ScreenFive";


let history = createBrowserHistory();
const OnBoardingPage = () => {
  const [secondTime, setSecondTime] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    if (activeStep === 4) {
      hideSecTime();
    }
  };

  const handlePrev = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step)
  };

  const hideSecTime = () => {
    // localStorage.setItem("SECOND_TIME", "true");
    setSecondTime(true);
  };

  useEffect(() => {
		if (history.location.pathname === "/" && history.location.hash === "") {
			setTimeout(() => {
				setShowLoader(true);
			}, 5000);
		} else {
			setShowLoader(true);
		}
	}, [history.location.pathname]);



  if (secondTime === true || localStorage.getItem("SECOND_TIME") === "true") {
    // return <Redirect to="/landing" />;
    return <Redirect to="/login" />;
  } else
    return (
      <>
      {history.location.pathname === "/" &&
						history.location.hash === "" && (
							<SiteLoader showLoader={showLoader} />
						)}
            {
              showLoader === true && (
                <div className="onboarding-sec">
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                  className="onboarding-slider"
                >
                  <ScreenOne activeStep={activeStep} />
                  <ScreenTwo activeStep={activeStep} />
                  <ScreenThree activeStep={activeStep} />
                  <ScreenFour activeStep={activeStep} />
                  <ScreenFive activeStep={activeStep} />
                </SwipeableViews>
                <AppBar
                  position="fixed"
                  color="primary"
                  className="onboarding-bottombar"
                >
                  <MobileStepper
                    variant="dots"
                    steps={5}
                    position="static"
                    activeStep={activeStep}
                    className="onboarding-steps"
                    nextButton={
                      <Button
                        size="small"
                        className="onboarding-bottombar-next"
                        onClick={handleNext}
                      >
                        {activeStep < 1 ? <>next</> : <>finish</>}
                      </Button>
                    }
                    backButton={
                      <Button size="small">
                        {activeStep < 1 ? <span onClick={() => hideSecTime()}>Skip</span> : <span onClick={handlePrev}>Previous</span>}
                      </Button>
                    }
                  />
                </AppBar>
              </div>
              )
            }
       
      </>
    );
};

export default OnBoardingPage;
