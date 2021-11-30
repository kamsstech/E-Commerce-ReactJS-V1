import * as React from "react";
import Grow from '@material-ui/core/Grow';
import Zoom from '@material-ui/core/Zoom';

//Images
import onBoarding from "../../../assets/images/on-boarding1.svg";

const ScreenThree = (props) => {
  const { activeStep } = props;
  return (
    // <Grow
    //   in={activeStep === 1}
    //   style={{ transformOrigin: '0 0 0' }}
    //   {...(activeStep === 1 ? { timeout: 1000 } : {})}>
    <Zoom in={activeStep === 2}>
      <div>
        <div className="align-center on-boarding ">
          <img src={onBoarding} alt="on-boarding" />
          <div className="center">
            <h2 className="on-boarding-title">Lorem Ipsum</h2>
            <h3 className="on-boarding-text">
              This App will assist you to ascertain the exact geo location of the
              Doctor. In addition it will also help you to capture the image of
              the documents such as visiting card etc.
          </h3>
          </div>
        </div>
      </div>
    </Zoom>
    // </Grow>
  );
};

export default ScreenThree;
