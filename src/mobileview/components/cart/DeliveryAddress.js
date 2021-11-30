import * as React from "react";
import Button from "@material-ui/core/Button";

//images
import LocationPinIcon from "../../../assets/mobImages/location-pin-grey/location-pin.png"

import SelectDeliveryAddress from "./SelectDeliveryAddress";

export const DeliveryAddress = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (
    event,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event).key === 'Tab' ||
        (event).key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <div className="mob-delivery-address-wrapper">
      <div className="mob-delivery-address-sec">
        <img src={LocationPinIcon} alt="LocationPinIcon" />
        <div className="mob-delivery-address-text">
          <h4><span>Deliver to</span> Maruti Medi-560027</h4>
          <p>69, 2nd Floor, Al-ameen towers, Lal Bagh</p>
        </div>
        <div>
          <Button variant="outlined" className="mob-addressChange-btn" onClick={toggleDrawer(true)}>
            Change
                    </Button>
        </div>
      </div>
      <SelectDeliveryAddress toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
    </div>
  )
}

export default DeliveryAddress;