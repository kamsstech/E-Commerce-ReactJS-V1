import * as React from "react";

//images
import GpsIcon from "../../../assets/mobImages/gps-purple/gps.png";

const GetCurrentLocation = () => {
  return (
    <div className="current-location-wrapper">
      <div className="current-location-sec">
        <img src={GpsIcon} alt="GpsIcon" />
        <div className="current-location-text">
          <h4>Current Location</h4>
          <p>Using GPS</p>
        </div>
      </div>
    </div>
  )
}

export default GetCurrentLocation;