import * as React from "react";

//images
import Profile from "../../../assets/images/thumbnail.svg";
import LocationIcon from "../../../assets/mobImages/location-pin-white/location.png";


const ProfileInfo = (props) => {
    const {c_image_url, c_name, c_area_name, c_landmark} = props;

    return (
        <div className="mob-profile-info">
            <div className="profile-img-bg">
                {c_image_url === "" ?
                <img src={Profile} alt="ProfileImg" />
                : 
                <img src={c_image_url} alt="ProfileImg" />
                }
            </div>
            <h3 className="mob-profile-name">{c_name}</h3>
            {/* <h5 className="mob-profile-medicalname">Maruti Medicals</h5> */}
            <h5 className="mob-profile-medicallocation mt-10">
                <img src={LocationIcon} alt="LocationIcon" className="mr-16" />
                {c_area_name}{c_landmark !=="" &&<>, {c_landmark}</>}
            </h5>
        </div>
    )
}

export default ProfileInfo;