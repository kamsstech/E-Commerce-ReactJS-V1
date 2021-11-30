import * as React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

//images
import User from "../../../assets/images/user.svg";
import Calendar from "../../../assets/images/calendar.svg";
import Bank from "../../../assets/images/bank.svg";
import Cvv from "../../../assets/images/cvv.svg";

const BankDetails = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  function handleDateChange1(date: Date | null) {
    setSelectedDate(date);
  }
  return (
    <div>
      <p className="step-title">Firm Bank Details</p>
      <form>
        <TextField
          // error={false}
          // id="firmname"
          // name="firmname"
          margin="normal"
          variant="outlined"
          placeholder="Account Holder Name "
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
          placeholder="Bank Name"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Bank} alt="user-img" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          margin="normal"
          type="number"
          variant="outlined"
          placeholder="Account Number"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Bank} alt="user-img" />
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
            format="MM / yy"
            views={["month", "year"]}
            placeholder="Month(MM)/Year(YY)"
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
          margin="normal"
          variant="outlined"
          type="number"
          placeholder="CVV"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Cvv} alt="user-img" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          margin="normal"
          type="number"
          variant="outlined"
          placeholder="IFSC Code"
          className="auth-input mob-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Bank} alt="user-img" />
              </InputAdornment>
            )
          }}
        />
      </form>
    </div>
  );
};

export default BankDetails;
