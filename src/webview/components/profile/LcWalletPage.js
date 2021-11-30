import React from "react";
import { useEffect} from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import ProfileSidebar from "./ProfileSidebar";
import LcWallet from "./LcWallet";


export const LcWalletPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <div className="body-spacing dSprofile">
      <Container fixed>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <ProfileSidebar page="lc-wallet"/>
          </Grid>
          <Grid item xs={9}>
            <div className="myprofile-box border-botttom-none">
                <LcWallet/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LcWalletPage;
