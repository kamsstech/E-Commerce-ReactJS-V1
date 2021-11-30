import React from "react";
import { useState, useEffect } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

//images
import CrossImg from "../../../assets/mobImages/cross-grey/cross.png";

const SortbyDrawer = (props) => {
  const { toggleDrawer, openDrawer, GetSearchParameters } = props;

  const [searchby, setSearchby] = React.useState("Products");

  const handleSearchby = (event) => {
    const searchByVal = event.target.value ? event.target.value : "";
    setSearchby(searchByVal);

    let searchObject = {
      searchKey: "",
      searchby: searchByVal,
    };
    console.log(searchObject,"searchObject")
    GetSearchParameters(searchObject);
  };

  return (
    <div>
      <SwipeableDrawer
        anchor="bottom"
        open={openDrawer}
        className="drawerRadius"
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className="mob-profile-sec-space">
          <div className="mob-addbranch-drawer mb-1em">
            <div>
              <h4 className="mob-addbranch-drawer-title">Sort By</h4>
              <p className="mob-addbranch-drawer-subtitle m-0">
                Select sorting according to you
              </p>
            </div>
            <img src={CrossImg} alt="CrossImg" onClick={toggleDrawer(false)} />
          </div>

          <div className="dashed-divider mb-10"></div>
          <FormControl component="fieldset" className="sortby-filter">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={searchby}
              onChange={handleSearchby}
            >
              <FormControlLabel
                value="Products"
                labelPlacement="start"
                control={<Radio />}
                label="Products"
              />
              <div className="sortby-divider"></div>
              <FormControlLabel
                value="Sellers"
                labelPlacement="start"
                control={<Radio />}
                label="Sellers"
              />
              <div className="sortby-divider"></div>
              <FormControlLabel
                value="Manufacturer"
                labelPlacement="start"
                control={<Radio />}
                label="Manufacturer"
              />
              <div className="sortby-divider"></div>
              <FormControlLabel
                value="Molecule"
                labelPlacement="start"
                control={<Radio />}
                label="Molecule/ Generic"
              />
              <div className="sortby-divider"></div>
              <div className="align-center">
                <Button
                  variant="contained"
                  color="primary"
                  className="try-popup-btn"
                  component="span"
                >
                  Apply
                </Button>
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default SortbyDrawer;
