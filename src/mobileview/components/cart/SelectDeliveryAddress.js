import React from 'react';
import { Link } from "react-router-dom";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from "@material-ui/core/Button";

//images
import CrossImg from "../../../assets/mobImages/cross-grey/cross.png";

// interface Props {
//   toggleDrawer(open: boolean): any;
//   openDrawer: boolean;
// }

const SelectDeliveryAddress = (props) => {
  const { toggleDrawer, openDrawer } = props;
  const [value, setValue] = React.useState('one');

  const handleChange = (event) => {
    setValue((event.target).value);
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
              <h4 className="mob-addbranch-drawer-title">Select Seller For Vasu Step Syrup 100 ml</h4>
              <p className="mob-addbranch-drawer-subtitle mb-0">select address from below</p>
            </div>
            <img src={CrossImg} alt="CrossImg" onClick={toggleDrawer(false)} />
          </div>

          <div className="dashed-divider"></div>
          <div className="add-new-address-link-sec">
            <Link to="/add-new-address">Add New Address</Link>
          </div>
          <div className="adderess-list-height">
            <FormControl component="fieldset" className="select-address-sec">
              <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel
                  value="one"
                  control={<Radio />}
                  label={
                    <div className="select-address-label-sec">
                      <div className="select-address-label-title">
                        <div className="select-address-label-title">
                          <h4>Maruti Medicals -560027</h4>
                          <div className="address-label">Warehouse</div>
                        </div>
                        {value === "one" &&
                          <Link to="/edit-address">
                            <Button variant="outlined" className="edit-address-btn">Edit</Button>
                          </Link>}
                      </div>
                      <p>69, 2nd Floor, Al-ameen towers, Lal Bagh Main Road, Near, Hosur Main Road, Sudhama Nagar, Bengaluru-560027, Karnataka </p>
                    </div>
                  }
                />
                <div className="dashed-divider"></div>
                <FormControlLabel
                  value="two"
                  control={<Radio />}
                  label={
                    <div className="select-address-label-sec">
                      <div className="select-address-label-title">
                        <div className="select-address-label-title">
                          <h4>Maruti Medicals -560102</h4>
                        </div>
                        {value === "two" &&
                          <Link to="/edit-address">
                            <Button variant="outlined" className="edit-address-btn">Edit</Button>
                          </Link>}
                      </div>
                      <p>39/14, Sarjapur Main Rd, Iblur Village, Bellandur, Bengaluru- 560102 Karnataka</p>
                    </div>
                  }
                />
                <div className="dashed-divider"></div>
                <FormControlLabel
                  value="three"
                  control={<Radio />}
                  label={
                    <div className="select-address-label-sec">
                      <div className="select-address-label-title">
                        <div className="select-address-label-title">
                          <h4>Maruti Medicals -560104</h4>
                        </div>
                        {value === "three" &&
                          <Link to="/edit-address">
                            <Button variant="outlined" className="edit-address-btn">Edit</Button>
                          </Link>}
                      </div>
                      <p>13, 14, Service Rd, Remco Layout, Hampi Nagar, RPC Layout, Vijayanagar, Bengaluru- 560104 Karnataka </p>
                    </div>
                  }
                />
                <div className="dashed-divider"></div>
              </RadioGroup>
            </FormControl>
          </div>
          <div className="mt-16">
            <Button variant="outlined" className="mob-changePass-btn m-0" onClick={toggleDrawer(false)}>
              Delivery Here
            </Button>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default SelectDeliveryAddress;