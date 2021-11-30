import React from "react";
import { Link} from "react-router-dom";
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import AreYouSurePopup from "./AreYouSurePopup";
import backArrow from "../../../assets/images/icons/back.svg";

export default function PaymentHeaderWithoutLogo(props) {
    let history = useHistory();
    const [areYouSurePopupModal, setAreYouSureModal] = React.useState(false);
    
    const handleAreYouSureModal = () => {
        setAreYouSureModal(true);
    };

    const handleCloseAreYouSureModal = () => {
        setAreYouSureModal(false);
    };
     
    const handleYes = () => {
        history.push("/payment");
    };

  return (
    <>
        <div className="web-header paymentWithoutLogo">
            <AppBar position="static">
                <Container fixed>
                    <Toolbar className="header-top-sec">
                        <Button onClick={handleAreYouSureModal} className="cursor" variant="contained" color="primary">
                            <img className="mr-r-8" src={backArrow} alt />
                                Back
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>

        <AreYouSurePopup 
          open={areYouSurePopupModal}
          handleClose={handleCloseAreYouSureModal}
          handleYes={handleYes}
          /> 
    </>
  );
}
