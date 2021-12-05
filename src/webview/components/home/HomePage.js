import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Banner from "./Banner";
import PreferredSeller from "./PreferredSeller";
import FastMovingMedicines from "./FastMovingMedicines";
import NewLaunches from "./NewLaunches";
import ShopByManufacturer from "./ShopByMfcResult";
import Offers from "./Offers";
import CSquareSolutions from "./CsquareSolutions";
import OrderNowModal from "./OrderNowModal";
import RoadBlockModal from "./RoadBlockModal";
import RoadBlockModalDIS from "./RoadBlockModalDis";
import RoadBlockModalMFC from "./RoadBlockModalMfc";
import HomePageBanner from "./Homepagebanner.js";
import AboutUs from "./AboutUs";
import BannerX from "./Bannerx.js";
import Banner1 from "./Banner1.js";
import BannerNew from "./BannerNew";

const HomePage = (props) => {
	const {
		loginResult,
		BannerAction,
		bannerResponse,
		GetNewLaunchesItems,
		newLaunchesItemsResult,
		GetFastMovingItems,
		fastMovingItemsResult,
		CityListAction,
		cityListResult,
		submitDemoRequestAction,
		demoRequestResult,
		shopByManfacturer,
		PreferedSellerCall,
		preferedSellerResult,
		GetOffers,
		offersResult,
		AddWatchlistItems,
		addWatchlistResult,
		RemoveWatchlistItems,
		removeWatchlistResult,
		AddShortbookItems,
		addShortbookResult,
		RemoveShortbookItems,
		removeShortbookResult,
		notificationCountRes,
		GetPdpPageItems,
		GetPdpPageSellerDetails,
		pdpPageItemsResult,
		pdpPageSellerDetailsResult,
		ShortbookCount,
		WatchlistCount,
		watchlistCountRes,
		shortbookCountRes,
		branchListResult,
		getBranchListAction,
		AddToCartAction,
		addToCartResult,
		CartCount,
		RoadBlockModal,
		roadBlockModalResult,
		getProfileInfoResult,
		ScheduleDemoAction,
		scheduledemoRequestResult,
		ScheduleDemoEmailAction,
		scheduleDemoEmailResult
	} = props;

	// useEffect(() => {
	//   console.log(window.scrollY,"<<<<< WINDOW SCROLL Y")
	//   window.scrollTo(0,(window.scrollY-50))
	// }, [window.scrollY])

	// roadBlockModalResult
	// RoadBlockModal
	const [openOrderNowModal, setOpenOrderNowModal] = useState(false);
	const [openBlockModal, setOpenBlockModal] = useState(false);
	const [br_code, setBr_Code] = useState("");
	const hideSecTime = () => {
		localStorage.setItem("POPUP", "true");
	};
	

	useEffect(() => {
		if (
			loginResult.statuscode === 0 &&
			localStorage.getItem("POPUP") === null
		) {
			hideSecTime();
			setOpenBlockModal(true);
		}
	}, [loginResult.message !== ""]);

	const handleOpenOrderNowModal = () => {
		setOpenOrderNowModal(true);
	};

	const handleCloseOrderNowModal = () => {
		setOpenOrderNowModal(false);
	};

	useEffect(() => {
		// RoadBlockModal();
		props.BannerAction();
	}, []);


	useEffect(() => {
		const body={
			n_branch_id:br_code
		}
		
		CartCount(body)
	}, [br_code])





	const [state, setState] = useState({
		bannerimages: "",
	});
	return (
		<>
			<div>
				{/* <BannerNew /> */}

				<HomePageBanner
					bannerResponse={
						bannerResponse.payload.j_list !== [] && bannerResponse
					}
				/>

				{/* <BannerX /> */}
				<Container fixed>
				
					

					<FastMovingMedicines
						br_code={br_code}
						watchlistCountRes={watchlistCountRes}
						shortbookCountRes={shortbookCountRes}
						GetPdpPageItems={GetPdpPageItems}
						GetPdpPageSellerDetails={GetPdpPageSellerDetails}
						pdpPageItemsResult={pdpPageItemsResult}
						pdpPageSellerDetailsResult={pdpPageSellerDetailsResult}
						GetFastMovingItems={GetFastMovingItems}
						fastMovingItemsResult={fastMovingItemsResult}
						AddWatchlistItems={AddWatchlistItems}
						addWatchlistResult={addWatchlistResult}
						RemoveWatchlistItems={RemoveWatchlistItems}
						removeWatchlistResult={removeWatchlistResult}
						AddShortbookItems={AddShortbookItems}
						addShortbookResult={addShortbookResult}
						RemoveShortbookItems={RemoveShortbookItems}
						removeShortbookResult={removeShortbookResult}
						notificationCountRes={notificationCountRes}
						AddToCartAction={AddToCartAction}
						addToCartResult={addToCartResult}
						// AddToCartAction={AddToCartAction}
						// addToCartResult={addToCartResult}
						CartCount={CartCount}
						getProfileInfoResult={getProfileInfoResult}
					/>

					<NewLaunches
						br_code={br_code}
						GetPdpPageItems={GetPdpPageItems}
						pdpPageItemsResult={pdpPageItemsResult}
						GetPdpPageSellerDetails={GetPdpPageSellerDetails}
						pdpPageSellerDetailsResult={pdpPageSellerDetailsResult}
						GetNewLaunchesItems={GetNewLaunchesItems}
						newLaunchesItemsResult={newLaunchesItemsResult}
						AddWatchlistItems={AddWatchlistItems}
						addWatchlistResult={addWatchlistResult}
						RemoveWatchlistItems={RemoveWatchlistItems}
						removeWatchlistResult={removeWatchlistResult}
						AddShortbookItems={AddShortbookItems}
						addShortbookResult={addShortbookResult}
						RemoveShortbookItems={RemoveShortbookItems}
						removeShortbookResult={removeShortbookResult}
						notificationCountRes={notificationCountRes}
						ShortbookCount={ShortbookCount}
						WatchlistCount={WatchlistCount}
						watchlistCountRes={watchlistCountRes}
						shortbookCountRes={shortbookCountRes}
						AddToCartAction={AddToCartAction}
						addToCartResult={addToCartResult}
						CartCount={CartCount}
					/>

					<ShopByManufacturer
						handleOpenOrderNowModal={handleOpenOrderNowModal}
						shopByMfcRes={props.shopByMfcRes.payload}
						shopByManfacturer={shopByManfacturer}
					/>

					<Offers GetOffers={GetOffers} offersResult={offersResult} />

				</Container>
			</div>
		</>
	);
};

export default HomePage;
