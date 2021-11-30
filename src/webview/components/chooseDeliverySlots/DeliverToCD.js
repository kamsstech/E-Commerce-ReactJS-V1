import React from "react";
import Container from "@material-ui/core/Container";

import LocationImg from "../../../assets/images/location-purple.svg";

//DeliverToCD means DeliverToChooseDeliverySlots page
const DeliverToCD = () => {
  return (
    <div>
      <Container fixed>
        <div className="deliver-to-sec">
          <h4>Choose Delivery Slots (5 Items)</h4>
          <div className="deliver-to-add-sec">
            <img src={LocationImg} alt="LocationImg" className="mr-10"/>
            <p>Deliver to</p>
            <div className="default-address-sec">
              <p className="sel-add"><span>Maruthi Medical</span>, 69, 2nd Floor, Al-ameen tower...</p>
              <p className="edit-link">Edit</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default DeliverToCD;