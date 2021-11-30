import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";

import ContactInformation from "./ContactInfo";

export default function BDPage() {
  return (
    <div className="registration mt-36">
      <h2 className="registration-title">
        Sign Up <Link to="/home">Skip</Link>
      </h2>
      <p className="registration-subtitle">
        Please fill Business Information for next step.
      </p>
      <ContactInformation />
      <div className="registration-bothgt"></div>
      <AppBar
        position="fixed"
        color="primary"
        className="registration-bottombar"
      >
        <Link to="/home">
          <Button
            variant="contained"
            className="registration-donebtn"
          >
            DONE
          </Button>
        </Link>
      </AppBar>
    </div>
  );
}
