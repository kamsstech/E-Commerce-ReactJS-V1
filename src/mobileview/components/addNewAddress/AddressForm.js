import * as React from "react";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

//images
import ShopIcon from "../../../assets/mobImages/shop-grey/shop.png";
import PhoneIcon from "../../../assets/mobImages/phone-grey/phone.png";
import AddressIcon from "../../../assets/mobImages/address-grey/address.png";
import LandmarkIcon from "../../../assets/mobImages/landmark-grey/landmark.png";
import ZipCodeIcon from "../../../assets/mobImages/zip-code-grey/zip-code.png";
import WorldWideIcon from "../../../assets/mobImages/worldwide-grey/worldwide.png";
import CityIcon from "../../../assets/mobImages/city-grey/city.png"
import AreaIcon from "../../../assets/mobImages/area-grey/area.png";

const AddressForm = () => {
  return (
    <div className="mob-newaddress-form-wrapper">
      <form className="mob-newaddress-form-sec">
        <TextField
          name="cardholderName"
          margin="normal"
          variant="outlined"
          placeholder="Name/shop Name"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={ShopIcon} alt="ShopIcon" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          name="cardholderName"
          margin="normal"
          variant="outlined"
          placeholder="Mobile Number"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={PhoneIcon} alt="PhoneIcon" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          name="cardholderName"
          margin="normal"
          variant="outlined"
          placeholder="Address Line 1"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={AddressIcon} alt="AddressIcon" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          name="cardholderName"
          margin="normal"
          variant="outlined"
          placeholder="Address Line 2"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={AddressIcon} alt="AddressIcon" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          name="cardholderName"
          margin="normal"
          variant="outlined"
          placeholder="Landmark"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={LandmarkIcon} alt="LandmarkIcon" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          name="cardholderName"
          margin="normal"
          variant="outlined"
          placeholder="Pin Code"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={ZipCodeIcon} alt="ZipCodeIcon" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          name="cardholderName"
          margin="normal"
          variant="outlined"
          placeholder="State"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={WorldWideIcon} alt="WorldWideIcon" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          name="cardholderName"
          margin="normal"
          variant="outlined"
          placeholder="City"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={CityIcon} alt="CityIcon" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          name="cardholderName"
          margin="normal"
          variant="outlined"
          placeholder="Search or Select Area"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={AreaIcon} alt="AreaIcon" />
              </InputAdornment>
            )
          }}
        />
      </form>
    </div>
  );
}

export default AddressForm;