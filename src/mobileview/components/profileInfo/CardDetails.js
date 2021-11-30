import * as React from "react"

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";

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

const CardDetails = () => {
    const [optValue, setOptValue] = React.useState("one");
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOptValue(event.target.value);
    };

    function handleDateChange1(date: Date | null) {
        setSelectedDate(date);
    }

    return (
        <div className="mob-profile-sec-space">
            <form>
                <h4 className="mob-profile-sub-title">Card Details</h4>
                <TextField
                  id="cardholderName"
                  name="cardholderName"
                  margin="normal"
                  variant="outlined"
                  placeholder="Card Holder Name "
                  className="auth-input mob-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={User} alt="user" />
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  id="cardNumber"
                  name="cardNumber"
                  margin="normal"
                  variant="outlined"
                  placeholder="Card Number"
                  className="auth-input mob-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Address} alt="Address" />
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
                  id="IFSCcode"
                  name="IFSCcode"
                  margin="normal"
                  variant="outlined"
                  placeholder="IFSC Code"
                  className="auth-input mob-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={Bank} alt="Bank" />
                      </InputAdornment>
                    )
                  }}
                />
            </form>
        </div>
    )
}

export default CardDetails;