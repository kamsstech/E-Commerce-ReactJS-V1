import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
// import { FooterPageContainer } from "../index";
import FooterPage from "../footerSection/Footer";
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

	console.log(branchListResult, "<<< %%% branchListResult");
	console.log(br_code, "<<< %%% br_code");
	

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
		PreferedSellerCall();
		props.BannerAction();
		getBranchListAction();
	}, []);

	useEffect(() => {
		let temp = {};
		Object.entries(branchListResult.payload).map((entry,index) => {
			console.log(entry[1].c_default_status, "<<< entry.c_BR_Code")
			if(entry[1].c_default_status === "Y"){
				temp = entry[1];
			}
			
			setBr_Code(temp.c_br_code);
		});

		
	}, [branchListResult]);

	useEffect(() => {
		const body={
			n_branch_id:br_code
		}
		console.log(body,"<<<<<<< Cart Count Body")
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
					{/* <BannerNew /> */}
					{/* <HomePageBanner 
				bannerResponse ={bannerResponse}
				/> */}
					{/* <Banner1 /> */}
					{/* <div style={{ display: "flex" }}>
						{
							openBlockModal && (
							 
								<RoadBlockModalMFC
									roadBlockModalResult={roadBlockModalResult}
								/>
							)
						 
						}
						
					</div> */}
			{/* 
			<RoadBlockModalDIS />
			<RoadBlockModal />
			<RoadBlockModalMFC /> 
			*/}
					{preferedSellerResult.payload?.j_list &&
						preferedSellerResult.payload?.j_list.length > 0 && (
							<PreferredSeller
								handleOpenOrderNowModal={handleOpenOrderNowModal}
								preferedSellerResult={preferedSellerResult}
								PreferedSellerCall={PreferedSellerCall}
							/>
						)}

					{/* {Array.isArray(preferedSellerResult.payload?.j_list) && preferedSellerResult.payload?.j_list.length > 0  ?
						<>
						<PreferredSeller
						handleOpenOrderNowModal={handleOpenOrderNowModal}
						preferedSellerResult={preferedSellerResult}
						PreferedSellerCall={PreferedSellerCall}
						/>
						</> 
						:
						<>
						<PreferredSeller
						handleOpenOrderNowModal={handleOpenOrderNowModal}
						preferedSellerResult={preferedSellerResult}
						PreferedSellerCall={PreferedSellerCall}
						/>
						</>
					}	 */}

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

					<CSquareSolutions
						CityListAction={CityListAction}
						cityListResult={cityListResult}
						submitDemoRequestAction={submitDemoRequestAction}
						demoRequestResult={demoRequestResult}
						ScheduleDemoEmailAction={ScheduleDemoEmailAction}
						scheduleDemoEmailResult={scheduleDemoEmailResult}
					/>
				</Container>
				<AboutUs />
				{<FooterPage />}
			</div>

			{/*<FooterPageContainer
				landingPageResult={props.landingPageResult.payload}
			/>*/}
		</>
	);
};

export default HomePage;
