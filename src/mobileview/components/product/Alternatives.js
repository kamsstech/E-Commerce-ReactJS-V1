import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import Image from "../../../common/components/image";
import { AlternativesEntity, PdpPageItemsEntity, AlternativesResultEntity } from "../../../common/model";


// interface Props {
//   match: any;
//   GetPdpPageItems(itemCode: string): void;
//   GetPdpPageAlternatives(c_cont_code: string, limitNumber:number): void;
//   pdpPageItemsResult: PdpPageItemsEntity;
//   pdpPageAlternativesResult: AlternativesEntity;

// }
const Alternatives = (props) => {
 
  const { match, GetPdpPageItems, GetPdpPageAlternatives, pdpPageItemsResult, pdpPageAlternativesResult } = props;

  useEffect(() => {
    GetPdpPageItems(match.params.itemCode);
  }, []);
  const mockData = pdpPageItemsResult.payload;
  const c_cont_code = (mockData && mockData.j_sub_detail.c_cont_code);
const c_item_name = (mockData && mockData.c_item_name)
 
const limitNumber= 2;
  useEffect(() => {
    c_cont_code && GetPdpPageAlternatives(c_cont_code, limitNumber);
  }, [c_cont_code])

const headerObject = {
  itemName :c_item_name,
  contCode: c_cont_code
}
 
  return (
    <div>

      {(mockData && pdpPageAlternativesResult.payload) &&
        <div className="alternatives-sec">
          <div>
            <h5 className="alternatives-sec-title">
              327 Alternates found for {mockData.c_item_name.toLowerCase()}
            </h5>
          </div>
          <div>
            <Link to={`/PLP/${c_cont_code}/${c_item_name}`}>
              <Fab
                variant="extended"
                size="small"
                color="default"
                className="mob-viewall-button"
                aria-label="add"
              >
                View All
                </Fab>
              </Link>
        </div>
          </div>

    }
      {Array.isArray(pdpPageAlternativesResult.payload) && pdpPageAlternativesResult.payload.length !== 0 &&
            <div>
              {(pdpPageAlternativesResult.payload).slice(0, 4).map((alternate, index) => (
            
                <div key={index} onClick={() => GetPdpPageItems(alternate.c_item_code)}  >
                    <Link to={`/pdp/${alternate.c_item_code}`} >
                    <div className="alernative-prod">
                      <div className="alprod-image">
                        <Image
                          src={alternate.a_image_urls[0]}
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
                        <div className="mob-profile-sel-title-sec-contains">
                          <h6>
                            Contains
                      </h6>
                          <h6>
                            <span className="marine_blue ">
                              {alternate.j_sub_detail.c_cont_name.toLowerCase()}
                            </span>
                          </h6>
                        </div>

                      </div>
                    </div>
                    </Link>
                </div>
              ))}

            </div>}
        </div>
  );
};

export default Alternatives;

