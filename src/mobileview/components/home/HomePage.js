import React, { useEffect } from "react";
import Fab from "@material-ui/core/Fab";

import RoadblockSlider from "./RoadblockSlider";
import Sellers from "./Sellers";
import TopOrderedProducts from "./TopOrderedProducts";
import ShopByMfc from "./ShopByMfc";
import Offers from "./Offers";
import CsquareSolutions from "./CsquareSolutions";

//images
import Register from "../../../assets/mobImages/register-purple/register.png";
import HideAppBar from "../HideScroll";
import ZoomInHide from "../zoomInHide";
// import { RolePageContainer } from "..";

const HomePage = (props) => {
  const {
    getBranchListAction,
    branchListResult,
    GetFastMovingItems,
    fastMovingItemsResult,
    CityListAction,
    cityListResult,
    submitDemoRequestAction,
    demoRequestResult,
    GetOffers,
    offersResult,
    BannerAction,
    bannerResponse
  } = props;
  console.log(fastMovingItemsResult, "<<<<< fastMovingItemsResult");
  useEffect(() => {
    GetOffers();
    BannerAction();
  }, []);
  return (
    <div>
      <RoadblockSlider 
      // bannerResponse={bannerResponse}
      bannerResponse ={bannerResponse.payload !== [] && bannerResponse}
      />
      {/* <RolePageContainer/>  */}
      <Sellers />
      <TopOrderedProducts
        GetFastMovingItems={GetFastMovingItems}
        fastMovingItemsResult={fastMovingItemsResult}
      />
      <ShopByMfc />
      <Offers GetOffers={GetOffers} offersResult={offersResult} />
      <CsquareSolutions
        CityListAction={CityListAction}
        cityListResult={cityListResult}
        submitDemoRequestAction={submitDemoRequestAction}
        demoRequestResult={demoRequestResult}
      />
      {/* <ZoomInHide>
      <Fab aria-label="register" className="floating-btn">
        <img src={Register} alt="Register" />
      </Fab>
      </ZoomInHide> */}
    </div>
  );
};

export default HomePage;
