import * as React from "react"

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

//images
import phone from "../../../assets/images/phone.svg";
import User from "../../../assets/images/user.svg";
import Email from "../../../assets/images/email.svg";
import Camera from "../../../assets/images/camera.svg";
import FirstAidKit from "../../../assets/images/first-aid-kit.svg";
import Calendar from "../../../assets/images/calendar.svg";
import Gst from "../../../assets/images/gst.svg";
import Tax from "../../../assets/images/tax.svg";
import Drug from "../../../assets/images/drug.svg";
import Address from "../../../assets/images/address.svg";
import Zipcode from "../../../assets/images/zip_code.svg";
import Worldwide from "../../../assets/images/worldwide.svg";
import City from "../../../assets/images/city.svg";
import Shape from "../../../assets/images/shape.svg";
import Bank from "../../../assets/images/bank.svg";
import ImageView from '../profile/ImageView';
import { useState } from "react";

// import { RegisterDetailsInputEntity, RegisterDetailsErrorEntity,GSTListResultEntity, GSTEntity } from "../../../common/model";
import { MenuItem } from "@material-ui/core";

// interface Props{
//   inputs: RegisterDetailsInputEntity;
//   errors: RegisterDetailsErrorEntity;
//   handleInputChange(e:any): void;
//   handleBlur(e: any): void;
//   drugExpiryDate: Date | null;
//   handleDrugExpiryDate(date: Date | null): void;
//   handleUpload(event:any, url:string ): void;
//   gstListResult: GSTListResultEntity;
//   errMsg: string;

// }

const ProfileInfo = (props) => {
  
  
  const {inputs, errors, handleInputChange, handleBlur,
    drugExpiryDate, handleDrugExpiryDate,  handleUpload, gstListResult,errMsg} = props;

    const [openImgViewD1, setOpenImgViewD1] = useState(false);
    const [openImgViewD2, setOpenImgViewD2] = useState(false);
    const [openImgViewNN, setOpenImgViewNN] = useState(false);

    return (
      <>
        <ImageView open={openImgViewD1} handleClose={()=> setOpenImgViewD1(false)} imgUrl={inputs.c_druglicense_no1_img} />
        <ImageView open={openImgViewD2} handleClose={()=> setOpenImgViewD2(false)} imgUrl={inputs.c_druglicense_no2_img} />
        <ImageView open={openImgViewNN} handleClose={()=> setOpenImgViewNN(false)} imgUrl={inputs.c_narcotic_no_img} />
        <div className="mob-profile-sec-space">
            <form>
                <h4 className="mob-profile-info-title">Store Information</h4>
                <p className="login-error-msg min-height-none mb-10">{errMsg}</p>
                
                <TextField
                    name="c_mobile_no"
                    disabled={true}
                    value={inputs.c_mobile_no}
                    onChange={e => handleInputChange(e)}
                    margin="normal"
                    variant="outlined"
                    placeholder="Mobile Number *"
                    className="auth-input mob-input"
                    autoComplete="new-password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={phone} alt="mobile-phone" />
                        </InputAdornment>
                      )
                    }}
                />
                <TextField
                  name="c_name"
                  disabled={true}
                  value={inputs.c_name}
                  onChange={e => handleInputChange(e)}
                  margin="normal"
                  variant="outlined"
                  placeholder="Username *"
                  className="auth-input mob-input"
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
                  name="c_email"
                  disabled={false}
                  value={inputs.c_email}
                  onChange={e => handleInputChange(e)}
                  error={errors.c_email}
                  onBlur={e => handleBlur(e)}
                  helperText={errors.c_email && "Not a valid E-mail"}
                  margin="normal"
                  variant="outlined"
                  placeholder="E-mail *"
                  className="auth-input mob-input"
                  autoComplete="new-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Email} alt="Email" />
                      </InputAdornment>
                    )
                  }}
                />
                <h4 className="mob-profile-info-title">Business Information</h4>
                <h4 className="mob-profile-sub-title">Firm legal Identities</h4>
                <TextField
                  name="c_druglicense_no1"
                  disabled={false}
                  value={inputs.c_druglicense_no1}
                  onChange={e => handleInputChange(e)}
                  error={errors.c_druglicense_no1}
                  onBlur={e => handleBlur(e)}
                  autoComplete="new-password"
                  // helperText={(errors.c_druglicense_no1 && inputs.c_druglicense_no1_img === "") && "Please upload a license image"}
                  margin="normal"
                  variant="outlined"
                  placeholder="Drug License Number 1 *"
                  className="auth-input  mob-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={FirstAidKit} alt="mobile-phone" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <img src={Camera} alt="Camera" />
                        <input 
                          type="file" 
                          name="c_druglicense_no1_img"
                          id="c_druglicense_no1"
                          accept="image/jpeg, image/png, image/jpg, image/webp"
                          onChange={e => handleUpload(e, "dl1")}
                          multiple={false} 
                        />
                      </InputAdornment>
                    )
                  }}
                />
                {inputs.c_druglicense_no1_img &&
                <h4 className="uploaded-image-name" onClick={() => setOpenImgViewD1(true)}>
                  <span>{inputs.c_druglicense_no1_img_name}</span>
                </h4> }
                <TextField
                  name="c_druglicense_no2"
                  disabled={false}
                  value={inputs.c_druglicense_no2}
                  onChange={e => handleInputChange(e)}
                  error={errors.c_druglicense_no2}
                  onBlur={e => handleBlur(e)}
                  // helperText={(errors.c_druglicense_no2 && inputs.c_druglicense_no2_img === "") && "Please upload a license image"}
                  margin="normal"
                  variant="outlined"
                  placeholder="Drug License Number 2"
                  className="auth-input  mob-input"
                  autoComplete="new-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={FirstAidKit} alt="mobile-phone" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <img src={Camera} alt="Camera" />
                        <input
                          type="file" 
                          name="c_druglicense_no2_img"
                          id="c_druglicense_no2"
                          accept="image/jpeg, image/png, image/jpg, image/webp"
                          onChange={e => handleUpload(e, "dl2")}
                          multiple={false} 
                        />
                      </InputAdornment>
                    )
                  }}
                />
                {inputs.c_druglicense_no2_img &&
                <h4 className="uploaded-image-name" onClick={() => setOpenImgViewD2(true)}>
                  <span>{inputs.c_druglicense_no2_img_name}</span>
                </h4> }
                
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    name="c_druglicense_expiry_date"
                    disabled={false}
                    value={drugExpiryDate}
                    onChange={handleDrugExpiryDate}
                    error={errors.c_druglicense_expiry_date}
                    className="auth-input mob-input"
                    inputVariant="outlined"
                    margin="normal"
                    format="yyyy/MM/dd"
                    placeholder="Valid Till *"
                    minDate={new Date()}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={Calendar} alt="user-img" />
                        </InputAdornment>
                      )
                    }}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  name="c_gst_type"
                  autoComplete="new-password"
                  disabled={false}
                  value={inputs.c_gst_type}
                  onChange={e => handleInputChange(e)}
                  onBlur={e => handleBlur(e)}
                  error={errors.c_gst_type}
                  className="auth-input mob-input"
                  placeholder="Gst type *"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Gst} alt="gst" />
                      </InputAdornment>
                    )
                  }}
                  margin="normal"
                  variant="outlined"
                  select
                >
                  <MenuItem value={-1}>Gst Type *</MenuItem>
                  {(gstListResult.payload).map((item) => (
                    <MenuItem className="toCatp" key={item.n_id} value={item.n_id} >{item.c_gst_type.toLowerCase()}</MenuItem>
                  ))}
                </TextField>
              
                <TextField
                  name="c_gst_no"
                  disabled={false}
                  value={inputs.c_gst_no}
                  onChange={e => handleInputChange(e)}
                  error={errors.c_gst_no}
                  onBlur={e => handleBlur(e)}
                  helperText={errors.c_gst_no && "Not a valid GST number"}
                  margin="normal"
                  variant="outlined"
                  placeholder="GSTIN Number *"
                  className="auth-input mob-input"
                  autoComplete="new-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Tax} alt="tax" />
                      </InputAdornment>
                    )
                  }}
                />
              <TextField
                  name="c_narcotic_no"
                  disabled={false}
                  value={inputs.c_narcotic_no}
                  onChange={e => handleInputChange(e)}
                  error={errors.c_narcotic_no}
                  onBlur={e => handleBlur(e)}
                  autoComplete="new-password"
                  // helperText={(errors.c_narcotic_no && inputs.c_narcotic_no_img === "") && "Please upload a image"}
                  margin="normal"
                  variant="outlined"
                  placeholder="Narcotic Number"
                  className="auth-input mob-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Drug} alt="Drug" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <img src={Camera} alt="Camera" />
                        <input
                          type="file" 
                          name="c_narcotic_no_img"
                          id="c_narcotic_no"
                          accept="image/jpeg, image/png, image/jpg, image/webp"
                          onChange={e => handleUpload(e, "nn")}
                          multiple={false} 
                        />
                      </InputAdornment>
                    )
                  }}
                />
                {inputs.c_narcotic_no_img &&
                <h4 className="uploaded-image-name" onClick={() => setOpenImgViewNN(true)}>
                  <span>{inputs.c_narcotic_no_img_name}</span>
                </h4> }
            </form>
        </div>
      </>
    )
}

export default ProfileInfo;