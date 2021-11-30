import React from "react";
import { useEffect} from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ProfileSidebar from "./ProfileSidebar";
import PreferredPayment from "./PreferredPayment";

export const PreferredPaymentPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <div className="body-spacing dSprofile">
      <Container fixed>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <ProfileSidebar page="preferred-payment"/>
          </Grid>
          <Grid item xs={9}>
            <div className="myprofile-box border-botttom-none">
                <PreferredPayment/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PreferredPaymentPage;
