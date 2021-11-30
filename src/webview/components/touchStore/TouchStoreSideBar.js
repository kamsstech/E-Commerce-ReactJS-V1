import * as React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { REACT_APP_BASE_URL } from "../../../common/constant/env";
import axios from "axios";
import { Constants } from "../../../common/constant/localstorage";

import { Link } from "react-router-dom";
import Profile from "../../../assets/images/thumbnail.svg";
import Logout from "../../../assets/images/logout.svg";
import Account from "../../../assets/images/accountsetting.svg";
import Notification from "../../../assets/images/bell-blue.svg";
import Order from "../../../assets/images/order-grey.svg";
import { State } from "../../../rootReducer";
import { getProfileInfo, saveProfileInfo } from "../../../common/action";
import { connect } from "react-redux";

import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from "@material-ui/core/FormControlLabel";

/**
* @author
* @function TouchStoreSideBar
**/

export const TouchStoreSideBar = (props) => {
    let history = useHistory();
    const {page} = props;

    const handleLogout = () => {
        localStorage.clear();
        history.push("/login");
        // window.location.reload(false)
      }
  return(
    <div className="myprofile-box p-0 mt-0 non-strip">
    <div className="my-profile-tabs">
      <h5 className="profile-sidebar-headings">
        <img src={Account} alt="Account" />
        <span>ACCOUNT SETTING</span>{" "}
      </h5>
      <div className="MuiTabs-root profile-tab-options MuiTabs-vertical">
        <div className="MuiTabs-scrollable"></div>
        <div className="MuiTabs-scroller MuiTabs-scrollable mb-0" >
          <div aria-label="Vertical tabs example" className="MuiTabs-flexContainer MuiTabs-flexContainerVertical" role="tablist">
            <Link to="/auto-publish" >
              <button className={page === "auto-publish" ? "Mui-selected MuiButtonBase-root MuiTab-root MuiTab-textColorInherit" : "MuiButtonBase-root MuiTab-root MuiTab-textColorInherit"}>
                <span className="MuiTab-wrapper">Auto Publish Information</span>
                <span className="MuiTouchRipple-root"></span>
              </button>
            </Link>
            <Link to="/auto-complile">
              <button className={page === "auto-complile" ? "Mui-selected MuiButtonBase-root MuiTab-root MuiTab-textColorInherit" : "MuiButtonBase-root MuiTab-root MuiTab-textColorInherit"} >
                <span className="MuiTab-wrapper">Auto Compile Information</span>
                <span className="MuiTouchRipple-root"></span>
              </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
    
   

    <div className="my-profile-tabs" onClick={handleLogout}>
      <h5 className="profile-logout pointer">
        <img src={Logout} alt="logout" />
        <span>Logout</span>{" "}
      </h5>
    </div>
  </div>
   )

 }



 