import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import AboutImg1 from "../../../assets/images/af1.svg";
import AboutImg2 from "../../../assets/images/af2.svg";
import AboutImg3 from "../../../assets/images/af3.svg";
import AboutImg4 from "../../../assets/images/af4.svg";

const AboutUs = () => {
  return(
    <div className="home-aboutus-sec">
      <Container fixed>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <div className="aboutus-each-sec">
              <div className="aboutus-each-sec-left">
                <img src={AboutImg1} alt="AboutImg1" />
              </div>
              <div className="aboutus-each-sec-right">
                <h2>10K + Trusted</h2>
                <h4>Customers</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="aboutus-each-sec">
              <div className="aboutus-each-sec-left">
                <img src={AboutImg2} alt="AboutImg1" />
              </div>
              <div className="aboutus-each-sec-right">
                <h2>22 Cr +</h2>
                <h4>Transactions</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="aboutus-each-sec">
              <div className="aboutus-each-sec-left">
                <img src={AboutImg3} alt="AboutImg1" />
              </div>
              <div className="aboutus-each-sec-right">
                <h2>4 Lac +</h2>
                <h4>Products</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="aboutus-each-sec">
              <div className="aboutus-each-sec-left">
                <img src={AboutImg4} alt="AboutImg1" />
              </div>
              <div className="aboutus-each-sec-right">
                <h2>India's B2B</h2>
                <h4>'Pharma System'</h4>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default AboutUs;