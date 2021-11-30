import * as React from "react";
import { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Banner from "./banner";
import PreferredSeller from "./preferredSeller";
import FastMovingMedicines from "./fastMovingMedicines";
import NewLaunches from "./newLaunches";
import ShopByManufacturer from "./shopByMfcResult";
import Offers from "./offers";
import CSquareSolutions from "./csquareSolutions";
import OrderNowModal from "./orderNowModal";
import RoadBlockModal from "./roadBlockModal";
import RoadBlockModalDIS from "./roadBlockModalDis";
import RoadBlockModalMFC from "./roadBlockModalMfc";
import HomePageBanner from "./homepagebanner.js";
import AboutUs from "./aboutUs";
import BannerX from "./bannerx.js";
// import { FastMovingItemsEntity, StateListEntity, DemoRequestInputEntity, DemoRequestEntity, LandingPageListEntity,ShopByMfcEntity ,BannerEntity} from "../../../common/model";
// import { FastMovingItemsEntity, StateListEntity, DemoRequestInputEntity, DemoRequestEntity, BannerEntity } from "../../../common/model";


// const HomePage = (props: Props) => {
//   const {GetFastMovingItems, fastMovingItemsResult,CityListAction,cityListResult,submitDemoRequestAction,demoRequestResult,shopByManfacturer} = props;
//   preferedSellerResult: PreferedSellerReducerEntity;
//   PreferedSellerCall():void
//   landingPageResult: LandingPageListEntity;
//   GetOffers():void;
//   offersResult:OffersReducerEntity;
//   BannerAction() : void;
//   bannerResponse : BannerEntity;
//   bannerimages : any;
// }

const HomePage = (props) => {
	const {GetFastMovingItems, fastMovingItemsResult,CityListAction,cityListResult,submitDemoRequestAction,demoRequestResult,shopByManfacturer, PreferedSellerCall,preferedSellerResult,GetOffers,offersResult,profileDetailsResult} = props;

	const [openOrderNowModal, setOpenOrderNowModal] = React.useState(false);

	const handleOpenOrderNowModal = () => {
		setOpenOrderNowModal(true);
	};

	const handleCloseOrderNowModal = () => {
		setOpenOrderNowModal(false);
	};
console.log("Dhilip",props.shopByMfcRes)

	

	useEffect(() => {
		props.BannerAction()
	}, []);
	const [state, setState] = useState({
		bannerimages: "",
	});
	console.log("profile Details Result is",profileDetailsResult);
	return (
		<>
			<div className="body-spacing1">
			
			
				<Container fixed>
				
					<PreferredSeller handleOpenOrderNowModal={handleOpenOrderNowModal} 
							 preferedSellerResult={preferedSellerResult}
							 PreferedSellerCall={PreferedSellerCall}/>


					<FastMovingMedicines 
						GetFastMovingItems={GetFastMovingItems}
						fastMovingItemsResult={fastMovingItemsResult}
					/>
					<NewLaunches />
					
					<ShopByManufacturer  
						handleOpenOrderNowModal={handleOpenOrderNowModal} 
						shopByMfcRes={props.shopByMfcRes.payload}
						shopByManfacturer={shopByManfacturer}
					/>

					<Offers 
						 GetOffers ={GetOffers}
						 offersResult = {offersResult}
				 	/>

				</Container>
				<AboutUs />
			</div>
		</>
	);
};

export default HomePage;
