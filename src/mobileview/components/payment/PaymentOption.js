import * as React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

//images
import PhonePeIcon from "../../../assets/mobImages/phone-pe/phone-pe.png"
import GooglePayIcon from "../../../assets/mobImages/google-pay/google-pay.png"

// interface Props {
//   sellerName: string;
// }

const PaymentOption = (props) => {
  const { sellerName } = props;
  const [value, setValue] = React.useState('one');

  const handleChange = (event) => {
    setValue((event.target).value);
  };

  return (
    <div>
      <h3 className="mob-price-detail-title">Select Payment Option For {sellerName}</h3>
      <FormControl component="fieldset" className="sortby-filter payment">
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel
            value="one"
            control={<Radio />}
            label="On Credit"
          />
          <FormControlLabel
            value="two"
            control={<Radio />}
            label={<span>Phone Pe <img src={PhonePeIcon} alt="PhonePeIcon" /></span>}
          />
          <FormControlLabel
            value="three"
            control={<Radio />}
            label={<span>Google Pay <img src={GooglePayIcon} alt="GooglePayIcon" /></span>}
          />
          <FormControlLabel
            value="four"
            control={<Radio />}
            label="Credit/Debit Card"
          />
          <FormControlLabel
            value="five"
            control={<Radio />}
            label="Net Banking"
          />
          <FormControlLabel
            value="six"
            control={<Radio />}
            label="Cash On Delivery"
          />
        </RadioGroup>
      </FormControl>

    </div>
  )
}

export default PaymentOption;