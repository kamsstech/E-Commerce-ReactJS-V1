import React,{useState} from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

//images
import FirstAidKit from "../../../assets/images/first-aid-kit.svg";
import Calendar from "../../../assets/images/calendar.svg";
import GST from "../../../assets/images/gst.svg";
import Tax from "../../../assets/images/tax.svg";
import Drug from "../../../assets/images/drug.svg";
import Camera from "../../../assets/images/camera.svg";

const LegalIdentities = () => {
  const [optValue, setOptValue] = useState("one");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelect = (event) => {
    setOptValue(event.target.value);
  };

  function handleDateChange1(date) {
    setSelectedDate(date);
  }

  return (
    <div>
      <p className="step-title">Firm legal Identities</p>
      <form>
        <TextField
          // error={false}
          // id="firmname"
          // name="firmname"
          margin="normal"
          type="number"
          variant="outlined"
          placeholder="Drug License Number 1"
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
                <input type="file" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          margin="normal"
          type="number"
          variant="outlined"
          placeholder="Drug License Number 2"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={FirstAidKit} alt="user-img" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <img src={Camera} alt="user-img" />
                <input type="file" />
              </InputAdornment>
            )
          }}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            value={selectedDate}
            className="auth-input mob-input"
            onChange={handleDateChange1}
            inputVariant="outlined"
            margin="normal"
            format="dd/MM/yyyy"
            placeholder="Valid Till"
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
        </TextField>

        <TextField
          margin="normal"
          type="number"
          variant="outlined"
          placeholder="GSTIN Number"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Tax} alt="user-img" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          margin="normal"
          type="number"
          variant="outlined"
          placeholder="Narcotic Number"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Drug} alt="user-img" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <img src={Camera} alt="user-img" />
                <input type="file" />
              </InputAdornment>
            )
          }}
        />
      </form>
    </div>
  );
};

export default LegalIdentities;
