import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import AuthIllustration from "../../../assets/images/login-Illustration.svg";

import Avatar from "../../../assets/images/user.svg";
import address from "../../../assets/images/address.svg";
import Worldwide from "../../../assets/images/worldwide.svg";
import City from "../../../assets/images/city.svg";
import Email from "../../../assets/images/email.svg";
import Camera from "../../../assets/images/camera.svg";
import FirstAidKit from "../../../assets/images/first-aid-kit.svg";
import Calendar from "../../../assets/images/calendar.svg";
import Gst from "../../../assets/images/gst.svg";
import Tax from "../../../assets/images/tax.svg";
import Drug from "../../../assets/images/drug.svg";
import CircularProgress from "@material-ui/core/CircularProgress";

import Landmark from "../../../assets/images/landmark.svg";
import Zipcode from "../../../assets/images/zip_code.svg";
import CrossImg from "../../../assets/images/cross-grey.svg";

import Autocomplete from '@material-ui/lab/Autocomplete';

 
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`
    };
  }
const RegisterDetailsModal = (props) => {
    const {open, handleOpen, handleClose } = props;


  const [openDemo, setOpenDemo] = React.useState(false);

  const handleOpenDemo = () => {
    setOpenDemo(true);
    handleClose();
  };

  const handleCloseDemo = () => {
    setOpenDemo(false);
  };

  const [value, setValue] = React.useState(0);

  const handleTabChange = (event , newValue) => {
    setValue(newValue);
  };

  const handleNext = () => {
    setValue(1);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="roadblock-popup"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >

        <Fade in={open}>
            <div className="wantToSellModalSec">
                <div className="wantToSellModalSec-left">
                    {/* <div className="space-3"> */}
                    <img src={AuthIllustration} alt="AuthIllustration" />
                    {/* </div> */}
                </div>
                <div className="wantToSellModalSec-right">
                    <div className="want-to-sell-details-form">
                    <div className="registration-details">
                        <div>
                        <h3 className="auth-title">Register With 'Live Order'</h3>
                        <h5 className="auth-subtitle">
                            Please fill Business Information for next step.
                        </h5>
                        <p className="login-error-msg min-height-none"></p>
                        </div>
                        <div>
                        <Link to="/login">
                            <h4 className="skip">Skip</h4>
                        </Link>
                        </div>
                    </div>
                    <p className="login-error-msg min-height-none"></p>
                    <Paper className="forgot-paper">
                        <Tabs
                        value={value}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        className="forgot-tabs"
                        >
                        <Tab label="Firm Contact Information" {...a11yProps(0)} />
                        <Tab label="Firm legal Identities" {...a11yProps(1)} />
                        </Tabs>
                    </Paper> 

                    <div id="forgot-pass">
                        <TabPanel value={value} index={0}>
                            <form>
                                <Grid container spacing={0}>
                                <Grid item xs={6}>
                                    <TextField
                                    //   error={errors.c_firm_contact_person}
                                    //   value={inputs.c_firm_contact_person}
                                    //   onChange={e => handleInputs(e)}
                                    //   onBlur={e => handleBlur(e)}
                                    //   helperText={errors.c_firm_contact_person && "Not a valid name"}
                                    name="c_firm_contact_person"
                                    type="text"
                                    autoComplete="off"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Contact Person Name *"
                                    className="auth-input mr-6"
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={Avatar} alt="Avatar" />
                                        </InputAdornment>
                                        )
                                    }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                    //   error={errors.c_email}
                                    //   value={inputs.c_email}
                                    //   onChange={e => handleInputs(e)}
                                    //   onBlur={e => handleBlur(e)}
                                    //   helperText={errors.c_email && "Not a valid E-mail"}
                                    name="c_email"
                                    type="text"
                                    autoComplete="off"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="E-mail Address *"
                                    className="auth-input ml-6"
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={Email} alt="Email" />
                                        </InputAdornment>
                                        )
                                    }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                    //   error={errors.c_firm_address1}
                                    //   value={inputs.c_firm_address1}
                                    //   onChange={e => handleInputs(e)}
                                    //   onBlur={e => handleBlur(e)}
                                    //   helperText={errors.c_firm_address1 && "Not a valid address"}
                                    name="c_firm_address1"
                                    type="text"
                                    autoComplete="off"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Address Line 1 *"
                                    className="auth-input mr-6"
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={address} alt="address" />
                                        </InputAdornment>
                                        )
                                    }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                    //   error={errors.c_firm_address2}
                                    //   value={inputs.c_firm_address2}
                                    //   onChange={e => handleInputs(e)}
                                    //   onBlur={e => handleBlur(e)}
                                    //   helperText={errors.c_firm_address2 && "Not a valid address"}
                                    name="c_firm_address2"
                                    type="text"
                                    autoComplete="off"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Address Line 2 *"
                                    className="auth-input ml-6"
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={address} alt="address" />
                                        </InputAdornment>
                                        )
                                    }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                    name="c_pincode"
                                    //   value={inputs.c_pincode}
                                    //   onChange={e => handleInputs(e)}
                                    //   error={errors.c_pincode}
                                    //   onBlur={e => handleBlur(e)}
                                    //   helperText={errors.c_pincode && "Not a valid pincode"}
                                    type="number"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Pin Code *"
                                    className="auth-input mr-6"
                                    autoComplete="new-password"
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={Zipcode} alt="user" />
                                        </InputAdornment>
                                        )
                                    }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                    disabled
                                    //   error={errors.c_state_name}
                                    //   value={inputs.c_state_name}
                                    //   onChange={e => handleInputs(e)}
                                    name="c_state_name"
                                    type="text"
                                    autoComplete="off"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="State"
                                    className="auth-input toCatp ml-6"
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={Worldwide} alt="Worldwide" />
                                        </InputAdornment>
                                        )
                                    }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Autocomplete
                                    //   inputValue={inputs.c_city_name}
                                    //   onInputChange={(e, newValue) => 
                                    //     handleSearchChange(e, newValue, "c_city_name") }
                                    //   onChange={(e, newValue) => 
                                    //     handleSearchOnChange(e, newValue, "c_city_code")}
                                    options={["cityList"]}
                                    className="toCatp"
                                    //   getOptionLabel={(option) => option.c_name}
                                    renderInput={(params) => 
                                        <TextField 
                                        {...params}  
                                        //   error={errors.c_city_name}
                                        margin="normal"
                                        variant="outlined"
                                        placeholder="City *"
                                        className="toCatp auth-input mr-6"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password',
                                        }}
                                        />
                                    }
                                    />
                                </Grid>
                                {/* <Grid item xs={6}>
                                    <Autocomplete
                                    //   inputValue={inputs.c_area_name}
                                    //   onInputChange={(e, newValue) => 
                                    //     handleSearchChange(e, newValue, "c_area_name") }
                                    //   onChange={(e, newValue) => 
                                    //       handleSearchOnChange(e, newValue, "c_area_code")}
                                    options={["areaList"]}
                                    className="toCatp"
                                    //   getOptionLabel={(option) => option.c_name}
                                    renderInput={(params) => 
                                        <TextField 
                                        {...params} 
                                        //   error={errors.c_area_name}
                                        margin="normal"
                                        variant="outlined"
                                        placeholder="Area *"
                                        className="toCatp auth-input ml-6"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password',
                                        }}
                                        />
                                    }
                                    />
                                </Grid>
                                */}
                                {/* <Grid item xs={6}>
                                    <TextField
                                    name="c_landmark"
                                    //   value={inputs.c_landmark}
                                    //   onChange={e => handleInputs(e)}
                                    autoComplete="new-password"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Landmark"
                                    className="auth-input mr-6"
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={Landmark} alt="shape" />
                                        </InputAdornment>
                                        )
                                    }}
                                    />
                                </Grid>
                                */}
                                </Grid>
                                
                                <Button
                                variant="contained"
                                color="primary"
                                className="theme-btn"
                                onClick={handleNext}
                                >
                                Next
                                </Button> 
                            </form>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                        <form>
                            <Grid container spacing={0}>
                            <Grid item xs={6}>
                                <TextField
                                // error={errors.c_druglicense_no1}
                                // value={inputs.c_druglicense_no1}
                                // onChange={e => handleInputs(e)}
                                // onBlur={e => handleBlur(e)}
                                // helperText={(errors.c_druglicense_no1 && inputs.c_druglicense_no1_img === "") && "Please upload a license image"}
                                name="c_druglicense_no1"
                                type="text"
                                autoComplete="off"
                                margin="normal"
                                variant="outlined"
                                placeholder="Drug License Number 1 *"
                                className="auth-input mr-6"
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={FirstAidKit} alt="firstAidKit" />
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
                                        // onChange={e => handleUpload(e, "dl1")}
                                        multiple={false} 
                                        />
                                    </InputAdornment>
                                    )
                                }}
                                />
                                {/* {inputs.c_druglicense_no1_img &&
                                <h4 className="profile-upload uploaded-imagename" onClick={() => setOpenImgViewD1(true)}>
                                <span>{inputs.c_druglicense_no1_img_name}</span>
                                </h4> } */}
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                // error={errors.c_druglicense_no2}
                                // value={inputs.c_druglicense_no2}
                                // onChange={e => handleInputs(e)}
                                // onBlur={e => handleBlur(e)}
                                // helperText={(errors.c_druglicense_no2 && inputs.c_druglicense_no2_img === "") && "Please upload a license image"}
                                name="c_druglicense_no2"
                                type="text"
                                autoComplete="off"
                                margin="normal"
                                variant="outlined"
                                placeholder="Drug License Number 2"
                                className="auth-input ml-6"
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={FirstAidKit} alt="firstAidKit" />
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
                                        // onChange={e => handleUpload(e, "dl2")}
                                        multiple={false} 
                                        />
                                    </InputAdornment>
                                    )
                                }}
                                />
                                {/* {inputs.c_druglicense_no2_img &&
                                <h4 className="profile-upload uploaded-imagename" onClick={() => setOpenImgViewD2(true)}>
                                <span>{inputs.c_druglicense_no2_img_name}</span>
                                </h4> } */}
                            </Grid>
                            <Grid item xs={6}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    // error={errors.c_druglicense_expiry_date}
                                    name="c_druglicense_expiry_date"
                                    value="{drugExpiryDate}"
                                    onChange={()=>{}}
                                    className="auth-input mr-6"
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
                                {/* <TextField
                                error={errors.c_druglicense_expiry_date}
                                value={inputs.c_druglicense_expiry_date}
                                onChange={e => handleInputs(e)}
                                name="c_druglicense_expiry_date"
                                type="text"
                                autoComplete="off"
                                margin="normal"
                                variant="outlined"
                                placeholder="Valid till"
                                className="auth-input mr-6"
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={Calendar} alt="Calendar" />
                                    </InputAdornment>
                                    )
                                }}
                                /> */}
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                // error={errors.c_gst_type}
                                // value={inputs.c_gst_type}
                                // onChange={e => handleInputs(e)}
                                name="c_gst_type"
                                type="text"
                                autoComplete="off"
                                margin="normal"
                                variant="outlined"
                                placeholder="GST Type *"
                                className="toCatp auth-input ml-6"
                                select
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={Gst} alt="tax" />
                                    </InputAdornment>
                                    )
                                }}
                                >
                                <MenuItem value={-1}>Gst Type *</MenuItem>
                                {/* {(gstListResult.payload as Array<any>).map((item: GSTEntity) => (
                                    <MenuItem className="toCatp" key={item.n_id} value={item.n_id} >{item.c_gst_type.toLowerCase()}</MenuItem>
                                ))} */}
                                </TextField>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                // error={errors.c_gst_no}
                                // value={inputs.c_gst_no}
                                // onChange={e => handleInputs(e)}
                                // onBlur={e => handleBlur(e)}
                                // helperText={errors.c_gst_no && "Not a valid GSTIN number"}
                                name="c_gst_no"
                                type="text"
                                autoComplete="off"
                                margin="normal"
                                variant="outlined"
                                placeholder="GSTIN Number *"
                                className="auth-input mr-6"
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={Tax} alt="tax" />
                                    </InputAdornment>
                                    )
                                }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                // error={errors.c_narcotic_no}
                                // value={inputs.c_narcotic_no}
                                // onChange={e => handleInputs(e)}
                                // onBlur={e => handleBlur(e)}
                                // helperText={(errors.c_narcotic_no && inputs.c_narcotic_no_img === "") && "Please upload a image"}
                                name="c_narcotic_no"
                                type="text"
                                autoComplete="off"
                                margin="normal"
                                variant="outlined"
                                placeholder="Narcotic Number"
                                className="auth-input ml-6"
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={Drug} alt="city" />
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
                                        // onChange={e => handleUpload(e, "nn")}
                                        multiple={false} 
                                        />
                                    </InputAdornment>
                                    )
                                }}
                                />
                                {/* {inputs.c_narcotic_no_img &&
                                <h4 className="profile-upload uploaded-imagename" onClick={() => setOpenImgViewNN(true)}>
                                <span>{inputs.c_narcotic_no_img_name}</span>
                                </h4> } */}
                            </Grid>
                            </Grid>
                            <Button 
                            variant="contained" color="primary" className="theme-btn">
                            {/* {loading ? <CircularProgress className="spining-icon" /> : null}{" "} */}
                            done
                            </Button>
                        </form>
                        </TabPanel>
                    </div>
                
                </div>
                
            </div>
            <div className="cross-icon-modal">
                <img src={CrossImg} alt="cross-img" onClick={handleClose} />
            </div>
        </div>
    </Fade>
</Modal>
      {/* <DemoPharmsoft open={openDemo} handleClose={handleCloseDemo} /> */}
    </div>
  );
};

export default RegisterDetailsModal;
