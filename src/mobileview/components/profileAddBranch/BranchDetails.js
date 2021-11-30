import * as React from "react"
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import ImageView from "../../../webview/components/profile/ImageView";

//images
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
import Phone from "../../../assets/images/phone.svg";
import Shape from "../../../assets/images/shape.svg";





const BranchDetails = (props) => {
    const {inputs, errors, handleInputChange, handleUpload, handleBlur,
        drugExpiryDate, handleDrugExpiryDate, gstListResult} = props;

    const [openImgViewD1, setOpenImgViewD1] = React.useState(false);
    const [openImgViewD2, setOpenImgViewD2] = React.useState(false);
    const [openImgViewNN, setOpenImgViewNN] = React.useState(false);

    return(
    <>
        <ImageView open={openImgViewD1} handleClose={()=> setOpenImgViewD1(false)} imgUrl={inputs.c_druglicense_no1_img} />
        <ImageView open={openImgViewD2} handleClose={()=> setOpenImgViewD2(false)} imgUrl={inputs.c_druglicense_no2_img} />
        <ImageView open={openImgViewNN} handleClose={()=> setOpenImgViewNN(false)} imgUrl={inputs.c_narcotic_no_img} />

        <div className="mob-profile-sec-space">
            <form>
                <h4 className="mob-profile-sub-title">Firm legal Identities</h4>
                <div>
                    <TextField
                        name="c_druglicense_no1"
                        value={inputs.c_druglicense_no1}
                        onChange={e => handleInputChange(e)}
                        error={errors.c_druglicense_no1}
                        onBlur={e => handleBlur(e)}
                        autoComplete="new-password"
                        margin="normal"
                        variant="outlined"
                        placeholder="Drug License Number 1 *"
                        className="auth-input"
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
                    <h4 className="profile-upload uploaded-imagename mt--10" onClick={() => setOpenImgViewD1(true)}>
                        <span>{inputs.c_druglicense_no1_img_name}</span>
                    </h4> }
                    <TextField
                        name="c_druglicense_no2"
                        value={inputs.c_druglicense_no2}
                        onChange={e => handleInputChange(e)}
                        error={errors.c_druglicense_no2}
                        onBlur={e => handleBlur(e)}
                        autoComplete="new-password"
                        margin="normal"
                        variant="outlined"
                        placeholder="Drug License Number 2 "
                        className="auth-input"
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
                    <h4 className="profile-upload uploaded-imagename mt--10" onClick={() => setOpenImgViewD2(true)}>
                        <span>{inputs.c_druglicense_no2_img_name}</span>
                    </h4> }
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            value={drugExpiryDate}
                            className="auth-input"
                            onChange={handleDrugExpiryDate}
                            error={errors.c_druglicense_expiry_date}
                            inputVariant="outlined"
                            margin="normal"
                            format="dd/MM/yyyy"
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
                        value={inputs.c_gst_type}
                        onChange={e => handleInputChange(e)}
                        onBlur={e => handleBlur(e)}
                        error={errors.c_gst_type}
                        autoComplete="new-password"
                        margin="normal"
                        variant="outlined"
                        placeholder="Gst type *"
                        className="toCatp auth-input"
                        select
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <img src={Gst} alt="gst" />
                            </InputAdornment>
                            )
                        }}
                        >
                        <MenuItem value={-1}>Gst Type *</MenuItem>
                        {(gstListResult.payload).map((item) => (
                            <MenuItem className="toCatp" key={item.n_id} value={item.n_id} >{item.c_gst_type.toLowerCase()}</MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        name="c_gst_no"
                        value={inputs.c_gst_no}
                        onChange={e => handleInputChange(e)}
                        error={errors.c_gst_no}
                        onBlur={e => handleBlur(e)}
                        helperText={errors.c_gst_no && "Not a valid GST number"}
                        autoComplete="new-password"
                        margin="normal"
                        variant="outlined"
                        placeholder="GSTIN Number *"
                        className="auth-input"
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
                        value={inputs.c_narcotic_no}
                        onChange={e => handleInputChange(e)}
                        error={errors.c_narcotic_no}
                        onBlur={e => handleBlur(e)}
                        autoComplete="new-password"
                        margin="normal"
                        variant="outlined"
                        placeholder="Narcotic Number"
                        className="auth-input"
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
                    <h4 className="profile-upload uploaded-imagename mt--10" onClick={() => setOpenImgViewNN(true)}>
                    <span>{inputs.c_narcotic_no_img_name}</span>
                    </h4> }
                </div>
                <h4 className="mob-profile-sub-title">Firm Contact Information</h4>
                <div>
                    <TextField
                        name="c_firm_contact_person"
                        value={inputs.c_firm_contact_person}
                        onChange={e => handleInputChange(e)}
                        error={errors.c_firm_contact_person}
                        onBlur={e => handleBlur(e)}
                        helperText={errors.c_firm_contact_person && "Not a valid name"}
                        autoComplete="new-password"
                        margin="normal"
                        variant="outlined"
                        placeholder="Contact Person Name *"
                        className="auth-input"
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
                        value={inputs.c_firm_address1}
                        onChange={e => handleInputChange(e)}
                        onBlur={e => handleBlur(e)}
                        error={errors.c_firm_address1}
                        helperText={errors.c_firm_address1 && "Not a valid address"}
                        autoComplete="new-password"
                        margin="normal"
                        variant="outlined"
                        placeholder="Address Line 1 *"
                        className="auth-input"
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
                        value={inputs.c_firm_address2}
                        onChange={e => handleInputChange(e)}
                        onBlur={e => handleBlur(e)}
                        error={errors.c_firm_address2}
                        helperText={errors.c_firm_address2 && "Not a valid address"}
                        autoComplete="new-password"
                        margin="normal"
                        variant="outlined"
                        placeholder="Address Line 2 *"
                        className="auth-input"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <img src={Address} alt="Address" />
                            </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        name="c_mobile_no"
                        value={inputs.c_mobile_no}
                        onChange={e => handleInputChange(e)}
                        error={errors.c_mobile_no}
                        onBlur={e => handleBlur(e)}
                        helperText={errors.c_mobile_no && "Not a valid mobile number"}
                        autoComplete="new-password"
                        type="number"
                        margin="normal"
                        variant="outlined"
                        placeholder="Mobile Number *"
                        className="auth-input"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <img src={Phone} alt="user" />
                            </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        name="c_email"
                        value={inputs.c_email}
                        onChange={e => handleInputChange(e)}
                        error={errors.c_email}
                        onBlur={e => handleBlur(e)}
                        helperText={errors.c_email && "Not a valid E-mail"}
                        autoComplete="new-password"
                        margin="normal"
                        variant="outlined"
                        placeholder="Enter Email Address *"
                        className="auth-input"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <img src={Email} alt="user" />
                            </InputAdornment>
                            )
                        }}
                    />
                </div>
            </form>
        </div>
    </>
    )
}

export default BranchDetails;