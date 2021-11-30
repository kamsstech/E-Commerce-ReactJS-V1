import * as React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import ImageView from "../profile/ImageView";

//Images
import FirstAidKit from "../../../assets/images/first-aid-kit.svg";
import Calendar from "../../../assets/images/calendar.svg";
import Tax from "../../../assets/images/tax.svg";
import Drug from "../../../assets/images/drug.svg";
import Camera from "../../../assets/images/camera.svg";
import Gst from "../../../assets/images/gst.svg";

import { MenuItem } from "@material-ui/core";

const LegalIdentities = (props) => {
  const {
    inputs,
    errors,
    errMsg,
    handleInputs,
    handleBlur,
    drugExpiryDate,
    handleDrugExpiryDate,
    handleUpload,
    gstListResult,
  } = props;

  const [openImgViewD1, setOpenImgViewD1] = React.useState(false);
  const [openImgViewD2, setOpenImgViewD2] = React.useState(false);
  const [openImgViewNN, setOpenImgViewNN] = React.useState(false);
  return (
    <div>
      <p className="step-title">Firm legal Identities</p>
      <p className="login-error-msg">{errMsg}</p>

      <ImageView
        open={openImgViewD1}
        handleClose={() => setOpenImgViewD1(false)}
        imgUrl={inputs.c_druglicense_no1_img}
      />
      <ImageView
        open={openImgViewD2}
        handleClose={() => setOpenImgViewD2(false)}
        imgUrl={inputs.c_druglicense_no2_img}
      />
      <ImageView
        open={openImgViewNN}
        handleClose={() => setOpenImgViewNN(false)}
        imgUrl={inputs.c_narcotic_no_img}
      />
      <form>
        <TextField
          error={errors.c_druglicense_no1}
          value={inputs.c_druglicense_no1}
          onChange={(e) => handleInputs(e)}
          onBlur={(e) => handleBlur(e)}
          // helperText={(errors.c_druglicense_no1 && inputs.c_druglicense_no1_img === "") && "Please upload a license image"}
          name="c_druglicense_no1"
          type="text"
          autoComplete="off"
          margin="normal"
          variant="outlined"
          placeholder="Drug License Number 1 *"
          className="auth-input mob-input"
          // value={inputs.mobile_name}
          // onChange={e => handleChange(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={FirstAidKit} alt="user-img" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <img src={Camera} alt="user-img" />
                <input
                  type="file"
                  name="c_druglicense_no1_img"
                  id="c_druglicense_no1"
                  accept="image/jpeg, image/png, image/jpg, image/webp"
                  onChange={(e) => handleUpload(e, "dl1")}
                  multiple={false}
                />
              </InputAdornment>
            ),
          }}
        />
        {inputs.c_druglicense_no1_img && (
          <h4
            className="uploaded-image-name"
            onClick={() => setOpenImgViewD1(true)}
          >
            <span>{inputs.c_druglicense_no1_img_name}</span>
          </h4>
        )}
        <TextField
          error={errors.c_druglicense_no2}
          value={inputs.c_druglicense_no2}
          onChange={(e) => handleInputs(e)}
          onBlur={(e) => handleBlur(e)}
          // helperText={(errors.c_druglicense_no2 && inputs.c_druglicense_no2_img === "") && "Please upload a license image"}
          name="c_druglicense_no2"
          type="text"
          autoComplete="off"
          margin="normal"
          variant="outlined"
          placeholder="Drug License Number 2"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={FirstAidKit} alt="firstAidKit" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <img src={Camera} alt="firstAidKit" />
                <input
                  type="file"
                  name="c_druglicense_no2_img"
                  id="c_druglicense_no2"
                  accept="image/jpeg, image/png, image/jpg, image/webp"
                  onChange={(e) => handleUpload(e, "dl2")}
                  multiple={false}
                />
              </InputAdornment>
            ),
          }}
        />
        {inputs.c_druglicense_no2_img && (
          <h4
            className="uploaded-image-name"
            onClick={() => setOpenImgViewD2(true)}
          >
            <span>{inputs.c_druglicense_no2_img_name}</span>
          </h4>
        )}
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            className="auth-input mob-input"
            error={errors.c_druglicense_expiry_date}
            name="c_druglicense_expiry_date"
            value={drugExpiryDate}
            onChange={handleDrugExpiryDate}
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
              ),
            }}
          />
        </MuiPickersUtilsProvider>
        <TextField
          error={errors.c_gst_type}
          value={inputs.c_gst_type}
          onChange={(e) => handleInputs(e)}
          name="c_gst_type"
          type="text"
          autoComplete="off"
          margin="normal"
          variant="outlined"
          placeholder="GST Type *"
          className="auth-input mob-input"
          select
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Gst} alt="tax" />
              </InputAdornment>
            ),
          }}
        >
          <MenuItem value={-1}>Gst Type *</MenuItem>
          {gstListResult.payload.map((item) => (
            <MenuItem
              className="auth-input mob-input"
              key={item.n_id}
              value={item.n_id}
            >
              {item.c_gst_type.toLowerCase()}
            </MenuItem>
          ))}
        </TextField>
        {/* <TextField
          select
          className="auth-input mob-input"
          value={optValue}
          onChange={handleSelect}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Calendar} alt="user-img" />
              </InputAdornment>
            )
          }}
          margin="normal"
          variant="outlined"
        >
          <option value={"one"}>GST Type</option>
          <option value={"two"}>GST Type1</option>
          <option value={"three"}>GST Type2</option>
        </TextField> */}

        <TextField
          error={errors.c_gst_no}
          value={inputs.c_gst_no}
          onChange={(e) => handleInputs(e)}
          onBlur={(e) => handleBlur(e)}
          helperText={errors.c_gst_no && "Not a valid GST number"}
          name="c_gst_no"
          type="text"
          autoComplete="off"
          margin="normal"
          variant="outlined"
          placeholder="GSTIN Number *"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Tax} alt="user-img" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          error={errors.c_narcotic_no}
          value={inputs.c_narcotic_no}
          onChange={(e) => handleInputs(e)}
          onBlur={(e) => handleBlur(e)}
          // helperText={(errors.c_narcotic_no && inputs.c_narcotic_no_img === "") && "Please upload a image"}
          name="c_narcotic_no"
          type="text"
          autoComplete="off"
          margin="normal"
          variant="outlined"
          placeholder="Narcotic Number"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Drug} alt="drug" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <img src={Camera} alt="drug" />
                <input
                  type="file"
                  name="c_narcotic_no_img"
                  id="c_narcotic_no"
                  accept="image/jpeg, image/png, image/jpg, image/webp"
                  onChange={(e) => handleUpload(e, "nn")}
                  multiple={false}
                />
              </InputAdornment>
            ),
          }}
        />
        {inputs.c_narcotic_no_img && (
          <h4
            className="uploaded-image-name"
            onClick={() => setOpenImgViewNN(true)}
          >
            <span>{inputs.c_narcotic_no_img_name}</span>
          </h4>
        )}
      </form>
    </div>
  );
};

export default LegalIdentities;
