import * as React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

//images
import PhonePeIcon from "../../../assets/mobImages/phone-pe/phone-pe.png"
import GooglePayIcon from "../../../assets/mobImages/google-pay/google-pay.png"


const SelectAddressType = () => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event) => {
    setValue((event.target).value);
  };

  return (
    <div className="mob-newaddress-form-sec">
      <h3 className="mob-price-detail-title">Select Address Type </h3>
      <FormControl component="fieldset" className="sortby-filter payment">
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel
            value="one"
            control={<Radio />}
            label="Warehouse"
          />
          <FormControlLabel
            value="two"
            control={<Radio />}
            label="Shop/Office"
          />
          <FormControlLabel
            value="three"
            control={<Radio />}
            label="Others"
          />
        </RadioGroup>
      </FormControl>

    </div>
  )
}

export default SelectAddressType;