import * as React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Autocomplete from "@material-ui/lab/Autocomplete";

//images
import Email from "../../../assets/images/email.svg";
import User from "../../../assets/images/user.svg";
import Address from "../../../assets/images/address.svg";
import City from "../../../assets/images/city.svg";
import Worldwide from "../../../assets/images/worldwide.svg";
import Landmark from "../../../assets/images/landmark.svg";
import Zipcode from "../../../assets/images/zip_code.svg";
import MenuItem from "@material-ui/core/MenuItem";

const ContactInformation = (props) => {
  const {
    inputs,
    errors,
    handleInputs,
    handleBlur,
    stateList,
    cityList,
    areaList,
    handleSearchChange,
    handleSearchOnChange,
    handleChanges,
    errMsg,
    state,
    city,
    area,
    gstType,
  } = props;

  return (
    <div>
      <p className="step-title">Firm Contact Information</p>
      <p className="login-error-msg">{errMsg}</p>

      <form>
        <TextField
          error={errors.c_firm_contact_person}
          value={inputs.c_firm_contact_person}
          onChange={(e) => handleInputs(e)}
          onBlur={(e) => handleBlur(e)}
          helperText={errors.c_firm_contact_person && "Not a valid name"}
          name="c_firm_contact_person"
          type="text"
          autoComplete="off"
          margin="normal"
          variant="outlined"
          placeholder="Contact Person Name *"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={User} alt="user-img" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          error={errors.c_email}
          value={inputs.c_email}
          onChange={(e) => handleInputs(e)}
          onBlur={(e) => handleBlur(e)}
          helperText={errors.c_email && "Not a valid E-mail"}
          name="c_email"
          type="text"
          autoComplete="off"
          margin="normal"
          variant="outlined"
          placeholder="E-mail Address *"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Email} alt="Email" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          error={errors.c_firm_address1}
          value={inputs.c_firm_address1}
          onChange={(e) => handleInputs(e)}
          onBlur={(e) => handleBlur(e)}
          helperText={errors.c_firm_address1 && "Not a valid address"}
          name="c_firm_address1"
          type="text"
          autoComplete="off"
          margin="normal"
          variant="outlined"
          placeholder="Address Line 1 *"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Address} alt="user-img" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          error={errors.c_firm_address2}
          value={inputs.c_firm_address2}
          onChange={(e) => handleInputs(e)}
          onBlur={(e) => handleBlur(e)}
          helperText={errors.c_firm_address2 && "Not a valid address"}
          name="c_firm_address2"
          type="text"
          autoComplete="off"
          margin="normal"
          variant="outlined"
          placeholder="Address Line 2 *"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Address} alt="user-img" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          name="c_pincode"
          value={inputs.c_pincode}
          onChange={(e) => handleInputs(e)}
          error={errors.c_pincode}
          onBlur={(e) => handleBlur(e)}
          helperText={errors.c_pincode && "Not a valid pincode"}
          type="number"
          margin="normal"
          variant="outlined"
          placeholder="Pin Code *"
          className="auth-input mob-input"
          autoComplete="new-password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Zipcode} alt="user" />
              </InputAdornment>
            ),
          }}
        />
        {/* <TextField
          
          error={errors.c_state_name}
          value={inputs.c_state_name}
          onChange={e => handleInputs(e)}
          name="c_state_name"
          type="text"
          autoComplete="off"
          margin="normal"
          variant="outlined"
          placeholder="State"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Worldwide} alt="Worldwide" />
              </InputAdornment>
            )
          }}
        /> */}

        <TextField
          name="c_state_name"
          onChange={(e) => handleInputs(e)}
          error={errors.state}
          onBlur={(e) => handleBlur(e)}
          helperText={errors.state && "Not a valid state"}
          // inputValue={inputs.c_state_name}
          margin="normal"
          variant="outlined"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Zipcode} alt="user" />
              </InputAdornment>
            ),
          }}
          select
          value={state}
          onChange={(e) => handleChanges(e)}
        >
          <MenuItem key={""} value={"00000"}>
            <div className="opacity-05">Select the state</div>
          </MenuItem>
          {stateList.map((option) => (
            <MenuItem
              key={option.c_state_code}
              value={option.c_state_code + `,` + option.c_state_name}
            >
              {option.c_state_name}
            </MenuItem>
          ))}
        </TextField>
        {/* <Autocomplete
          inputValue={inputs.c_state_name}
          onInputChange={(e, newValue) =>
            handleSearchChange(e, newValue, "c_state_name")
          }
          onChange={(e, newValue) =>
            handleSearchOnChange(e, newValue, "c_state_code")
          }
          options={stateList}
          className="auth-input mob-input"
          getOptionLabel={(option) => option.c_name}
          renderInput={(params) => (
            <TextField
              {...params}
              error={errors.c_state_name}
              margin="normal"
              variant="outlined"
              placeholder="State *"
              className="auth-input mob-input"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password",
              }}
            />
          )}
        /> */}
        <TextField
          name="c_city_name"
          onChange={(e) => handleInputs(e)}
          error={errors.city}
          onBlur={(e) => handleBlur(e)}
          helperText={errors.city && "Not a valid city"}
          // inputValue={inputs.c_state_name}
          margin="normal"
          variant="outlined"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Zipcode} alt="user" />
              </InputAdornment>
            ),
          }}
          select
          value={city}
          onChange={(e) => handleChanges(e)}
        >
          <MenuItem key={""} value={"00000"}>
            <div className="opacity-05">Select the city</div>
          </MenuItem>
          {cityList.map((option) => (
            <MenuItem
              key={option.c_city_code}
              value={option.c_city_code + `,` + option.c_city_name}
            >
              {option.c_city_name}
            </MenuItem>
          ))}
        </TextField>
        {/* <Autocomplete
          inputValue={inputs.c_city_name}
          onInputChange={(e, newValue) =>
            handleSearchChange(e, newValue, "c_city_name")
          }
          onChange={(e, newValue) =>
            handleSearchOnChange(e, newValue, "c_city_code")
          }
          options={cityList}
          className="auth-input mob-input"
          getOptionLabel={(option) => option.c_name}
          renderInput={(params) => (
            <TextField
              {...params}
              error={errors.c_city_name}
              margin="normal"
              variant="outlined"
              placeholder="City *"
              className="auth-input mob-input"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password",
              }}
            />
          )}
        /> */}

        <TextField
          name="c_area_name"
          onChange={(e) => handleInputs(e)}
          error={errors.city}
          onBlur={(e) => handleBlur(e)}
          helperText={errors.area && "Not a valid area"}
          // inputValue={inputs.c_state_name}
          margin="normal"
          variant="outlined"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Zipcode} alt="user" />
              </InputAdornment>
            ),
          }}
          select
          value={area}
          onChange={(e) => handleChanges(e)}
        >
          <MenuItem key={""} value={"00000"}>
            <div className="opacity-05">Select the area</div>
          </MenuItem>
          {areaList.map((option) => (
            <MenuItem
              key={option.c_area_code}
              value={option.c_area_code + `,` + option.c_area_name}
            >
              {option.c_area_name}
            </MenuItem>
          ))}
        </TextField>

        {/* <Autocomplete
          inputValue={inputs.c_area_name}
          onInputChange={(e, newValue) =>
            handleSearchChange(e, newValue, "c_area_name")
          }
          onChange={(e, newValue) =>
            handleSearchOnChange(e, newValue, "c_area_code")
          }
          options={areaList}
          className="auth-input mob-input"
          getOptionLabel={(option) => option.c_name}
          renderInput={(params) => (
            <TextField
              {...params}
              error={errors.c_area_name}
              margin="normal"
              variant="outlined"
              placeholder="Area *"
              className="auth-input mob-input"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password",
              }}
            />
          )}
        /> */}
        {/* <TextField
            name="c_landmark"
            value={inputs.c_landmark}
            onChange={e => handleInputs(e)}
            autoComplete="new-password"
            margin="normal"
            variant="outlined"
            placeholder="Landmark"
            className="auth-input mob-input"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={Landmark} alt="shape" />
                </InputAdornment>
              )
            }}
          /> */}
      </form>
    </div>
  );
};

export default ContactInformation;
