import * as React from "react";
import Button from "@material-ui/core/Button";

import GetCurrentLocation from "./GetCurrentLocation";
import AddressForm from "./AddressForm";
import SelectAddressType from "./SelectAddressType";
import { useHistory } from "react-router-dom";

const EditAddressPage = () => {
  let history = useHistory();
  return (
    <div>
      <GetCurrentLocation />
      <AddressForm />
      <SelectAddressType />
      <div className="save-address-sec">
        <Button variant="outlined" className="mob-changePass-btn" onClick={history.goBack}>
          Save Address
        </Button>
      </div>
    </div>
  )
}

export default EditAddressPage;