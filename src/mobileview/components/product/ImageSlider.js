import * as React from "react";
import Slider from "react-slick";
import Image from "../../../common/components/image";
import Skeleton from "@material-ui/lab/Skeleton";

import { useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import SwipeableViews from "react-swipeable-views";

interface Props {
  resultImage: string[];
  loading: boolean;
}
const ImageSlider = (props: Props) => {
 
  const { resultImage, loading  } = props;
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  

  return (
    <>
      <div className="product-imgslider" >
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >

          {loading ? (
            <Skeleton variant="rect" className="product-slider-img" />
          ) : (
               resultImage.map((image, index) => (
                  <div key={index} className="center">
                    <Image
                      src={image}
                      fallbackUrl={image}
                      className="product-slider-img"
                      alt="homeSliderImg"
                    />

                  </div>
                ))
           


           )} 
        </SwipeableViews>
        <MobileStepper
          variant="dots"
          steps={3}
          position="static"
          activeStep={activeStep}
          className="product-imgslider-dots"
          nextButton={<></>}
          backButton={<></>}
        />
      </div>
    </>
  );
};

export default ImageSlider;
