import React, { useEffect } from "react";
import { Container, Grid } from '@material-ui/core';
import LeftPatternSVG from "../../../assets/images/prepage/terms-left-pattern.svg";
import RightPatternSVG from "../../../assets/images/prepage/terms-right-pattern.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const TermsConditionsBanner = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000,
        });
    }, []);
    
    return (

        <div className="prepageBanner">
            <img src={LeftPatternSVG} className="left-pattern" alt="" />
            <img src={RightPatternSVG} className="right-pattern" alt="" />
            <Container className="terms-container-fluid">
                <Container className="terms-heading-container">
                      <div className="terms-container-welcome">
                        <div className="div-center">
                              <p
                                className="mt-1 mb-3 terms-heading"
                                data-aos="fade-up"
                                data-aos-delay="250"
                              >
                                Terms &amp; Conditions
                              </p>
                            <p
                                className="h3 terms-subheading"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                Version: 22.02.2021
                            </p>
                        </div>
                      </div>
                </Container>
              </Container>
          </div>
    )
}
export default TermsConditionsBanner;
