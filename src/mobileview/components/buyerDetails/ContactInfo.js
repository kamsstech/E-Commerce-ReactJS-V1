import * as React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

//images
import User from "../../../assets/images/user.svg";
import Address from "../../../assets/images/address.svg";
import City from "../../../assets/images/city.svg";
import Worldwide from "../../../assets/images/worldwide.svg";
import Zipcode from "../../../assets/images/zip_code.svg";

const ContactInformation = () => {
  const [state, setState] = React.useState("one");
  const [city, setCity] = React.useState("one");

  const handleState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const handleCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <p className="step-title">Firm Contact Information</p>
      <form>
        <TextField
          // error={false}
          // id="firmname"
          // name="firmname"
          margin="normal"
          variant="outlined"
          placeholder="Contact Person Name"
          className="auth-input mob-input"
          // value={inputs.mobile_name}
          // onChange={e => handleChange(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={User} alt="user-img" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          margin="normal"
          variant="outlined"
          placeholder="Address Line 1"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Address} alt="user-img" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          margin="normal"
          variant="outlined"
          placeholder="Address Line 2"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Address} alt="user-img" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          select
          className="auth-input mob-input"
          value={state}
          onChange={handleState}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Worldwide} alt="user-img" />
              </InputAdornment>
            )
          }}
          margin="normal"
          variant="outlined"
        >
          <option value={"one"}>State</option>
          <option value={"two"}>State1</option>
          <option value={"three"}>State2</option>
        </TextField>
        <TextField
          select
          className="auth-input mob-input"
          value={city}
          onChange={handleCity}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={City} alt="user-img" />
              </InputAdornment>
            )
          }}
          margin="normal"
          variant="outlined"
        >
          <option value={"one"}>City</option>
          <option value={"two"}>City1</option>
          <option value={"three"}>City2</option>
        </TextField>
        <TextField
          margin="normal"
          variant="outlined"
          type="number"
          placeholder="Pin Code"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Zipcode} alt="user-img" />
              </InputAdornment>
            )
          }}
        />
      </form>
    </div>
  );
};

export default ContactInformation;
