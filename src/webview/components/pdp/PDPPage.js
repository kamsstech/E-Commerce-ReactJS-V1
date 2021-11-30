import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";

import ImageSlider from "./ImageSlider";
import ItemInfo from "./ItemInfo";
import SellerDetails from "./SellerDetails";
import ItemDesc from "./ItemDesc";
import Alternatives from "./Alternatives";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
// import { GetPdpPageItems , GetPdpPageSellerDetails,  GetPdpPageAlternatives} from "../../../common/action";

import { getToken } from "../../../common/components/getToken/getToken";

const PDPPage = (props) => {
	const {
		match,
		GetPdpPageItems,
		pdpPageItemsResult,
		GetPdpPageSellerDetails,
		pdpPageSellerDetailsResult,
		// GetPdpPageAlternatives ,
		// pdpPageAlternativesResult
		AddWatchlistItems,
		addWatchlistResult,
		RemoveWatchlistItems,
		removeWatchlistResult,
		AddShortbookItems,
		addShortbookResult,
		RemoveShortbookItems,
		removeShortbookResult,
		watchlistCountRes,
		shortbookCountRes,
		ShortbookCount,
		WatchlistCount,
		getBranchListAction,
		branchListResult,
		AddToCartAction,
		addToCartResult,
		CartCount,
	} = props;


	
	const [errorMsgItemDetails, SeterrorMsgItemDetails] = useState("");
	const [showProductDetails, SetshowProductDetails] = useState(false);
	const [br_code, setBr_Code] = useState("");
	console.log(showProductDetails,"<<<< showProductDetails")

	console.log(pdpPageItemsResult.payload, "DS React");
	// console.log(pdpPageSellerDetailsResult, "pdpPageSellerDetailsResult");

	useEffect(() => {
		window.scrollTo(0, 0);
		var token = getToken();
		if (token) {
			SetshowProductDetails(true);
		} else {
			SetshowProductDetails(false);
		}
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [match.params.itemCode]);

	// console.log("ITEM_CODE >>>>>>>>",match.params.itemCode)
	useEffect(() => {
		// console.log(match.params.itemCode);
		console.log(match.params.itemCode, "match parms item code");
		GetPdpPageItems(match.params.itemCode);
		GetPdpPageSellerDetails(match.params.itemCode);
	}, [match.params.itemCode]);

	useEffect(() => {
		if (!pdpPageItemsResult.payload) {
			SeterrorMsgItemDetails(pdpPageItemsResult.error);
		}
		// console.log("inside useeffect", pdpPageItemsResult);
	}, [!pdpPageItemsResult.loading]);

	useEffect(() => {
		let temp = {};
		Object.entries(branchListResult.payload).map((entry) => {
		  temp = entry[1];
		});
		setBr_Code(temp.n_branch_id);
	  }, [branchListResult]);

	// console.log(pdpPageItemsResult,"<<<<<<<<<<<<<<<<<<<<<<<pdpPageItemsResult.payload")
	// console.log(pdpPageSellerDetailsResult,"<<<<<<<<<<<<<<<<<<<<<<<pdpPageSellerDetailsResult")

	return (
		<div className="body-spacing">
			<div className="navigation-container ">
				<Container fixed>
					<Breadcrumbs aria-label="breadcrumb" className="navigation-list">
						<Link to="/home">Home</Link>
						<Link className="active-link">Product</Link>
					</Breadcrumbs>
				</Container>
			</div>
			<Container fixed>
				<div className="pdp-flex-container">
					<div className="preview-sec">
						<ImageSlider
							payload={pdpPageItemsResult.payload}
							imageUrls={pdpPageItemsResult.payload}
							thumbNailsUrls={pdpPageItemsResult.payload}
							showProductDetails={showProductDetails}
							AddShortbookItems={AddShortbookItems}
							addShortbookResult={addShortbookResult}
							RemoveShortbookItems={RemoveShortbookItems}
							removeShortbookResult={removeShortbookResult}
							AddWatchlistItems={AddWatchlistItems}
							addWatchlistResult={addWatchlistResult}
							RemoveWatchlistItems={RemoveWatchlistItems}
							removeWatchlistResult={removeWatchlistResult}
						></ImageSlider>
					</div>
					<div className="desc-sec">
						<div className="pl-24">
							<ItemInfo
								errorMsgItemDetails={errorMsgItemDetails}
								GetPdpPageItems={GetPdpPageItems}
								pdpPageItemsResult={pdpPageItemsResult}
							/>

							{/* { 
						 showProductDetails == true ?
							<SellerDetails
							match={match}
							GetPdpPageItems={GetPdpPageItems} 
							
							pdpPageItemsResult ={ pdpPageItemsResult}
							/> : 
							null 
							
						 } */}
							{showProductDetails == true ? (
								<SellerDetails
									match={match}
									br_code={br_code}
									GetPdpPageSellerDetails={GetPdpPageSellerDetails}
									pdpPageSellerDetailsResult={pdpPageSellerDetailsResult}
									pdpPageItemsResult={pdpPageItemsResult}
									AddToCartAction={AddToCartAction}
									addToCartResult={addToCartResult}
									CartCount={CartCount}
								/>
							) : null}

							<ItemDesc pdpPageItemsResult={pdpPageItemsResult} />
						</div>
					</div>
				</div>

				{/* { showProductDetails == true ? 
				<Alternatives
				match={match}
				GetPdpPageItems={GetPdpPageItems}
				GetPdpPageAlternatives={ GetPdpPageAlternatives}
				pdpPageItemsResult={pdpPageItemsResult}
				pdpPageAlternativesResult={pdpPageAlternativesResult} /> : null } */}
			</Container>
		</div>
	);
};

export default PDPPage;
