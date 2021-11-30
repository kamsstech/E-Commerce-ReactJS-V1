import * as React from "react";
import Image from "../../../common/components/image";
import { Link } from "react-router-dom";



const AlternativeItem = (props) => {
  // console.log(props.alternate);
  const { alternate } = props;
  return (
    <div>
      <Link to={`/pdp/${alternate.c_item_code}`}>
      <div className="alernative-prod">
        
        <div className="alprod-image">
          <Image
            src="https://liveconnectpwa.z29.web.core.windows.net//static/media/home-slider-img1.6cde06a1.webp"
            fallbackUrl="https://liveconnectpwa.z29.web.core.windows.net/static/media/home-slider-img1.71910543.jpg"
            className="alprod-img"
            alt="product-image"
          />
        </div>
        <div className="alprod-desc">
          <h5>{alternate.c_item_name.toLowerCase()}</h5>
          <h6>Mfg: {alternate.j_sub_detail.c_mfac_name.toLowerCase()}</h6>
          <h6>Pack Size: {alternate.j_sub_detail.c_pack_name}</h6>
          <h6>
            HSN Code: {alternate.c_hsn_sac}{" "}
            <span>GST- Rate: {alternate.n_gst}</span>
          </h6>
          <h6 className="marine_blue">MRP {alternate.n_mrp}</h6>
          <h6>
            Contains{" "}
            <span className="marine_blue ">
              {alternate.j_sub_detail.c_cont_name.toLowerCase()}
            </span>
          </h6>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default AlternativeItem;
