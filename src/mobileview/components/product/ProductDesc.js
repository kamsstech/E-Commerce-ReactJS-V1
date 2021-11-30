import * as React from "react";
import { useEffect } from "react";
import ImageSlider from "./ImageSlider";
import { PdpPageItemsEntity } from "../../../common/model";
import Skeleton from "@material-ui/lab/Skeleton";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

//Images
import Share from "../../../assets/images/share.svg";

interface Props {
  GetPdpPageItems(itemCode: string): void;
  pdpPageItemsResult: PdpPageItemsEntity;
  match: any;
}

const ProductDesc = (props: Props) => {

  const { GetPdpPageItems, pdpPageItemsResult, match } = props;
  const [value, setValue] = React.useState(0);


  useEffect(() => {
    GetPdpPageItems(match.params.itemCode);
  }, [])
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
 
  const result = pdpPageItemsResult.payload;
  console.log("payload ",pdpPageItemsResult.payload)
  const loading = pdpPageItemsResult.loading;
  return (
    <div>
    
      {loading ? (
        <Skeleton variant="rect" className="mob-product-title" />
      ) : (result &&
        <div className="mob-product-title">
        
          <h4>{result.c_item_name.toLowerCase()}</h4>
          <img src={Share} alt="Share" />
        </div>
        )}


      <div>
        {loading ? (
          <Skeleton variant="rect" className="mob-product-subtitle" />
        ) : (result &&
          <h5 className="mob-product-subtitle">
          Mfg by <span>{result.j_sub_detail.c_mfac_name.toLowerCase()}</span>
          </h5>
          )}


        {loading ? (
          <Skeleton variant="rect" className="mob-product-subtitle" />
        ) : (result &&
          <h5 className="mob-product-subtitle">
          Contains <span>{result.j_sub_detail.c_cont_name.toLowerCase()}</span>
          </h5>
          )}


        {loading ? (
          <Skeleton variant="rect" className="mob-product-subtitle" />
        ) : (result &&
          <h5 className="mob-product-subtitle">
          HSN Code <span>{result.c_hsn_sac}</span>
          </h5>
          )}

        <ImageSlider resultImage={result ? result.a_image_urls : []} loading={loading} />

        {loading ? (
          <Skeleton variant="rect" className="mob-product-title" />
        ) : (result &&
          <div className="mob-product-title">
            <h4>MRP &#8377; {result.n_mrp}</h4>
          </div>
          )}

        {loading ? (
          <Skeleton variant="rect" className="mob-product-subtitle" />
        ) : (result &&
          <h5 className="mob-product-subtitle">
          GST Rate: {result.n_gst}
          </h5>
          )}
        <div>
          {result &&
            <div>
              <h6 className="mob-product-packaging">
              Packaging: {result.j_sub_detail.c_pack_name}
              </h6>
              <h6 className="mob-product-selectedsize">
              selected size:<span>{
                  value == 0 ? result.j_sub_detail.c_pack_name : result.j_size_variants[value - 1].c_pack_name}</span>

              </h6>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                className="mob-product-select-size"
                aria-label="disabled tabs example"
              >
                <Tab label={result.j_sub_detail.c_pack_name} />
                {result.j_size_variants && result.j_size_variants.map((item: any, index) => (

                  <Tab label={item.c_pack_name} key={index} onClick={() => GetPdpPageItems(item.c_item_code)}/>
                ))}

              </Tabs>
            </div>
          }
        </div>

      </div>

    </div>
  );
};

export default ProductDesc;






