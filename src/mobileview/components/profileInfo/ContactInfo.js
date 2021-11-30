import * as React from "react"
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import { RegisterDetailsInputEntity, RegisterDetailsErrorEntity,GSTListResultEntity, GSTEntity, StateListEntity, StateListResultEntity } from "../../../common/model";
// import { MenuItem } from "@material-ui/core";

//images
// import phone from "../../../assets/images/phone.svg";
import User from "../../../assets/images/user.svg";
// import Email from "../../../assets/images/email.svg";
// import Camera from "../../../assets/images/camera.svg";
// import FirstAidKit from "../../../assets/images/first-aid-kit.svg";
// import Calendar from "../../../assets/images/calendar.svg";
// import Gst from "../../../assets/images/gst.svg";
// import Tax from "../../../assets/images/tax.svg";
// import Drug from "../../../assets/images/drug.svg";
import Address from "../../../assets/images/address.svg";
import Zipcode from "../../../assets/images/zip_code.svg";
import Worldwide from "../../../assets/images/worldwide.svg";
// import City from "../../../assets/images/city.svg";
// import Shape from "../../../assets/images/shape.svg";
// import Bank from "../../../assets/images/bank.svg";
import Landmark from "../../../assets/images/landmark.svg";

import Autocomplete from "@material-ui/lab/Autocomplete";




const ContactInfo = (props) => {
    
  const {inputs, errors, handleInputChange, handleBlur,handleSearchChange, handleSearchOnChange,cityList,areaList,errMsg} = props;

    return (
        <div className="mob-profile-sec-space">
            <form>
            <p className="login-error-msg min-height-none mb-10">{errMsg}</p>

                <h4 className="mob-profile-sub-title">Firm Contact Information</h4>
                <TextField
                  name="c_firm_contact_person"
                  disabled={false}
                  value={inputs.c_firm_contact_person}
                  onChange={e => handleInputChange(e)}
                  error={errors.c_firm_contact_person}
                  onBlur={e => handleBlur(e)}
                  helperText={errors.c_firm_contact_person && "Not a valid name"}
                  margin="normal"
                  variant="outlined"
                  placeholder="Contact Person Name *"
                  className="auth-input mob-input mob-input"
                  autoComplete="new-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={User} alt="user" />
                      </InputAdornment>
                    )
                  }}
                />
            
            
               <TextField
                  name="c_firm_address1"
                  disabled={false}
                  value={inputs.c_firm_address1}
                  onChange={e => handleInputChange(e)}
                  onBlur={e => handleBlur(e)}
                  error={errors.c_firm_address1}
                  helperText={errors.c_firm_address1 && "Not a valid address"}
                  margin="normal"
                  variant="outlined"
                  placeholder="Address Line 1 *"
                  className="auth-input mob-input"
                  autoComplete="new-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Address} alt="Address" />
                      </InputAdornment>
                    )
                  }}
                />
            
            
                <TextField
                  name="c_firm_address2"
                  disabled={false}
                  value={inputs.c_firm_address2}
                  onChange={e => handleInputChange(e)}
                  onBlur={e => handleBlur(e)}
                  error={errors.c_firm_address2}
                  helperText={errors.c_firm_address2 && "Not a valid address"}
                  margin="normal"
                  variant="outlined"
                  placeholder="Address Line 2 *"
                  className="auth-input mob-input"
                  autoComplete="new-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Address} alt="Address" />
                      </InputAdornment>
                    )
                  }}
                />
            
                <TextField
                  name="c_pincode"
                  disabled={false}
                  value={inputs.c_pincode}
                  onChange={e => handleInputChange(e)}
                  error={errors.c_pincode}
                  onBlur={e => handleBlur(e)}
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
                    )
                  }}
                />

                <TextField
                  name="c_state_name"
                  disabled
                  value={inputs.c_state_name}
                  onChange={e => handleInputChange(e)}
                  error={errors.c_state_name}
                  autoComplete="new-password"
                  margin="normal"
                  variant="outlined"
                  className="auth-input mob-input auth-input mob-input"
                  placeholder="State"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Worldwide} alt="Worldwide" />
                      </InputAdornment>
                    )
                  }}
                />
            
                <Autocomplete
                  disabled={false}
                  inputValue={inputs.c_city_name}
                  onInputChange={(e, newValue) => 
                    handleSearchChange(e, newValue, "c_city_name") }
                  onChange={(e, newValue) => 
                    handleSearchOnChange(e, newValue, "c_city_code")}
                  options={cityList}
                  className="auth-input mob-input"
                  getOptionLabel={(option) => option.c_name}
                  renderInput={(params) => 
                    <TextField 
                      {...params}  
                      error={errors.c_city_name}
                      margin="normal"
                      variant="outlined"
                      placeholder="City *"
                      className="auth-input mob-input"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                      }}
                    />
                  }
                />
                <Autocomplete
                  disabled={false}
                  inputValue={inputs.c_area_name}
                  
                  onInputChange={(e, newValue) => 
                    handleSearchChange(e, newValue, "c_area_name") }
                  onChange={(e, newValue) => 
                    handleSearchOnChange(e, newValue, "c_area_code")}
                  options={areaList}
                  className="auth-input mob-input"
                  getOptionLabel={(option) => option.c_name}
                  renderInput={(params) => 
                    <TextField 
                      {...params} 
                      error={errors.c_area_name}
                      margin="normal"
                      variant="outlined"
                      placeholder="Area *"
                      className="auth-input mob-input"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                      }}
                    />
                  }
                />

                <TextField
                  disabled={false}
                  name="c_landmark"
                  value={inputs.c_landmark}
                  onChange={e => handleInputChange(e)}
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
                />
            
            
            </form>
        </div>
    )
}

export default ContactInfo;