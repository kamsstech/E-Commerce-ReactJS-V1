import React, { useEffect, useState } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Slider from "react-slick";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Fade from "@material-ui/core/Fade";
import Snackbar from "@material-ui/core/Snackbar";
import Grow from "@material-ui/core/Grow";
import homeSliderImg from "../../../assets/images/home-slider-img.jpg";
import homeSliderImg1 from "../../../assets/images/home-slider-img1.jpg";
import BackArrow from "../../../assets/images/down-arrow-line-grey.svg";
import ForwardArrow from "../../../assets/images/leftarrowline.svg";
import wishlist from "../../../assets/images/wishlist_plp_page.svg";
import wishlist_colorIcon from "../../../assets/images/wishlist_colorIcon.svg";
import commerce_offer from "../../../assets/images/commerce-and-shopping_plp_page.svg";
import SellerDropDown from "../orderHistory/SellerDropDown";
import { Link } from "react-router-dom";
import dolo from "../../../assets/images/dolo.jpg";
import shortbook_icon from "../../../assets/images/shortbook_pdpIcon.svg";
import shortbook_colorIcon from "../../../assets/images/shortbook_colorIcon.svg";
import oral_sus from "../../../assets/images/oral_sus.svg";
import capsules from "../../../assets/images/capsules.svg";
import Injectable from "../../../assets/images/injectable.svg";
import tablet from "../../../assets/images/tablet.svg";
import drops from "../../../assets/images/drops.svg";
import dolo_156 from "../../../assets/images/products/dolo-156-25mg-@3x.png";
import alpha from "../../../assets/images/products/alpha@3x.png";
import dolobalm from "../../../assets/images/products/dolo-balm@3x.png";
import step_syrup from "../../../assets/images/products/Step-Syrup@3x.png";
import voltaren from "../../../assets/images/products/voltaren@3x.png";
import { Constants } from "../../../common/constant/localstorage";
import { convertToSlug } from "../../../util/Helper";

function SampleNextArrow(props) {
	const { style, onClick } = props;
	return (
		<div>
			<img src={BackArrow} alt="arrow" />
		</div>
	);
}
function SamplePrevArrow(props) {
	const { style, onClick } = props;
	return (
		<div>
			<img src={ForwardArrow} alt="arrow" />
		</div>
	);
}
function GrowTransition(props) {
	return <Grow {...props} />;
}
const FastMovingMedicines = (props) => {
	const {
		GetFastMovingItems,
		fastMovingItemsResult,
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
		watchlistCountRes,
		shortbookCountRes,
		br_code,
		AddToCartAction,
		addToCartResult,
		CartCount,
		getProfileInfoResult,
	} = props;
	// console.log(fastMovingItemsResult,"<<fastMovingItemsResult")
	const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
		<span {...props}>{children}</span>
	);

	var settings = {
		infinite: false,
	    speed: 1200,
	    slidesToShow: 4.5,
	    slidesToScroll: 4.5,
	    autoplay: false,
		// onAfterChange: afterChange,
		// autoplaySpeed: 2000,
		nextArrow: (
			<SlickButtonFix>
				<div className="arrowsNext">
					<SampleNextArrow />
				</div>
			</SlickButtonFix>
		),
		prevArrow: (
			<SlickButtonFix>
				<div className="arrowsPrev">
					<SamplePrevArrow />
				</div>
			</SlickButtonFix>
		),
	};

	const [itemCode, setItemCode] = useState("");

	useEffect(() => {
		GetFastMovingItems();
	}, []);
	const [watchListIndex, setWatchListIndex] = useState(0);
	const [watchListItemName, setWatchListItemName] = useState("");
	const [shortbookIndex, setShortbookIndex] = useState(0);
	const [shortbookItemName, setShortbookItemName] = useState("");
	const [processType, setProcessType] = useState("");

	const [open, setOpen] = useState(false);

	const handleOpen = (item_code) => {
		setItemCode(item_code);
		GetPdpPageItems(item_code);
		GetPdpPageSellerDetails(item_code);
		setOpen(true);
	};

	let tempArray = [];
	let payloadLength =
		Array.isArray(fastMovingItemsResult.payload.data?.j_list) &&
		fastMovingItemsResult.payload.data?.j_list.length;
	for (let i = 0; i <= payloadLength; i++) {
		tempArray.push(false);
	}
	// console.log(tempArray)
	const [state, setState] = useState({
		open: false,
		Transition: Fade,
		message: "",
	});
	const [shortLoading, setShortLoading] = useState(tempArray);
	const [watchListLoading, setWatchListLoading] = useState(tempArray);

	const handleClickShortBookAdded = (name, item_code, index) => () => {
		let temp = [...shortLoading];
		temp[index] = !temp[index];
		setShortLoading(temp);
		const body = {
			c_item_code: item_code,
		};
		AddShortbookItems(body);
		setShortbookIndex(index);
		setShortbookItemName(name);
		setProcessType("top");
		// console.log(addShortbookResult,"dddd")
	};
	const handleClickShortBookRemoved = (name, item_code, index) => () => {
		let temp = [...shortLoading];
		temp[index] = !temp[index];
		setShortLoading(temp);
		const body = {
			c_item_code: item_code,
		};
		RemoveShortbookItems(body);
		setShortbookIndex(index);
		setShortbookItemName(name);
		setProcessType("top");
	};

	const handleClickWatchListAdded = (name, item_code, index) => () => {
		let temp = [...watchListLoading];
		temp[index] = !temp[index];
		setWatchListLoading(temp);
		const body = {
			c_item_code: item_code,
		};
		AddWatchlistItems(body);
		setWatchListIndex(index);
		setWatchListItemName(name);
		setProcessType("top");
	};
	const handleClickWatchListRemoved = (name, item_code, index) => () => {
		let temp = [...watchListLoading];
		temp[index] = !temp[index];
		setWatchListLoading(temp);
		const body = {
			c_item_code: item_code,
		};
		RemoveWatchlistItems(body);
		setWatchListIndex(index);
		setWatchListItemName(name);
		setProcessType("top");
	};
	const handleCloseButton = () => {
		setState({
			...state,
			open: false,
		});
	};

	useEffect(() => {
		let temp = [...watchListLoading];
		if (addWatchlistResult.payload == "Success" && processType == "top") {
			fastMovingItemsResult.payload.data.j_list[
				watchListIndex
			].c_watchlist_status = "Y";
			setTimeout(() => {
				setState({
					open: true,
					message: `${watchListItemName.toLowerCase()} successfully added to Watchlist`,
				});
			}, 500);
			temp[watchListIndex] = addWatchlistResult.loading;
			setWatchListLoading(temp);
			addWatchlistResult.payload = "";
			setProcessType("");
			let sCount = parseInt(watchlistCountRes.payload.data.count) + parseInt(1);
			watchlistCountRes.payload.data.count = sCount;
			// localStorage.setItem("watchlistCount", sCount);
			// console.log(sCount);
			// let count = document
			//   .getElementById("watchlistCount")
			//   .getElementsByTagName("span")[0];
			// count.classList.remove("MuiBadge-invisible");
			// count.innerHTML = sCount;
		}
	}, [addWatchlistResult]);
	useEffect(() => {
		let temp = [...watchListLoading];
		if (removeWatchlistResult.payload == "Success" && processType == "top") {
			fastMovingItemsResult.payload.data.j_list[
				watchListIndex
			].c_watchlist_status = "N";
			setTimeout(() => {
				setState({
					open: true,
					message: `${watchListItemName.toLowerCase()} removed from Watchlist`,
				});
			}, 500);
			temp[watchListIndex] = removeWatchlistResult.loading;
			setWatchListLoading(temp);
			removeWatchlistResult.payload = "";
			setProcessType("");
			let sCount = parseInt(watchlistCountRes.payload.data.count) - parseInt(1);
			watchlistCountRes.payload.data.count = sCount;
			// localStorage.setItem("watchlistCount", sCount);
			// console.log(sCount);
			// let count = document
			//   .getElementById("watchlistCount")
			//   .getElementsByTagName("span")[0];
			// if (sCount <= 0) {
			//   count.classList.add("MuiBadge-invisible");
			// }
			// count.innerHTML = sCount;
		}
	}, [removeWatchlistResult]);
	
	useEffect(() => {
		let temp = [...shortLoading];

		if (addShortbookResult.payload == "Success" && processType == "top") {
			fastMovingItemsResult.payload.data.j_list[
				shortbookIndex
			].c_short_book_status = "Y";
			setTimeout(() => {
				setState({
					open: true,
					message: `${shortbookItemName.toLowerCase()} successfully added to Shortbook`,
				});
			}, 500);

			temp[shortbookIndex] = addShortbookResult.loading;
			setShortLoading(temp);
			addShortbookResult.payload = "";
			setProcessType("");

			let sCount = parseInt(shortbookCountRes.payload.data.count) + parseInt(1);
			shortbookCountRes.payload.data.count = sCount;
			// localStorage.setItem("shortBookCount", sCount);
			// console.log(sCount);
			// let count = document.getElementById("shortBookCount").getElementsByTagName("span")[0];
			// count.classList.remove("MuiBadge-invisible");
			// count.innerHTML = sCount;
		}
	}, [addShortbookResult]);
	useEffect(() => {
		let temp = [...shortLoading];

		if (removeShortbookResult.payload == "Success" && processType == "top") {
			fastMovingItemsResult.payload.data.j_list[
				shortbookIndex
			].c_short_book_status = "N";

			// fastMovingItemsResult.payload.j_list[shortbookIndex].c_short_book_status = "N";
			setTimeout(() => {
				setState({
					open: true,
					message: `${shortbookItemName.toLowerCase()} removed from Shortbook`,
				});
			}, 500);

			temp[shortbookIndex] = removeShortbookResult.loading;
			setShortLoading(temp);
			removeShortbookResult.payload = "";
			setProcessType("");

			let sCount = parseInt(shortbookCountRes.payload.data.count) - parseInt(1);
			shortbookCountRes.payload.data.count = sCount;
			// localStorage.setItem("shortBookCount", sCount);
			// console.log(sCount);
			// let count = document
			//   .getElementById("shortBookCount")
			//   .getElementsByTagName("span")[0];
			// if (sCount <= 0) {
			//   count.classList.add("MuiBadge-invisible");
			// }
			// count.innerHTML = sCount;
		}
	}, [removeShortbookResult]);
	useEffect(() => {
		setWatchListIndex(0);
		setWatchListItemName("");
		setShortbookIndex(0);
		setShortbookItemName("");
		setProcessType("");
	}, []);
	return (
		<>
			<div>
				<div className="home-title-section">
					<div>
						<h4>Top Most Ordered Products</h4>
						<h5>
							{" "}
							{getProfileInfoResult.payload.c_city_name
								? "In " + getProfileInfoResult.payload.c_city_name
								: "All over India"}
						</h5>
					</div>
					<div>
						<Link to={`/plp/top-most?index=0`}>
							<Button
								variant="contained"
								color="primary"
								className="home-title-sectionbtn"
							>
								View All
							</Button>
						</Link>
					</div>
				</div>

				<div className="fast-moving-sec">
					<Slider {...settings} className="preferred-seller-slider">
						{Array.isArray(fastMovingItemsResult.payload.data?.j_list) &&
							fastMovingItemsResult.payload.data?.j_list.length > 0 &&
							(fastMovingItemsResult.payload.data?.j_list).map(
								(item, index) => (
									<div key={item.c_item_code}>
										<div className="fast-moving-sec-25" key={item.c_item_code}>
											<div className="fast-moving-tile-offer">
												{
												item.c_discount_status && item.c_discount_status === 'Y' ? 
													<img src={commerce_offer} alt="wishListImg-1" /> 
													:
													null
												}
												{/* <img src={commerce_offer} alt="wishListImg-1" /> */}
											</div>

											<div className="watchlist-wdt">
												{watchListLoading[index] === true ? (
													<CircularProgress size={32} thickness={8} />
												) : (
													<Tooltip title="Watchlist" TransitionComponent={Zoom}>
														{item.c_watchlist_status === "Y" ? (
															<img
																src={wishlist_colorIcon}
																alt="wishListImg-1"
																onClick={handleClickWatchListRemoved(
																	item.c_item_name,
																	item.c_item_code,
																	index
																)}
															/>
														) : (
															<img
																src={wishlist}
																alt="wishListImg-1"
																onClick={handleClickWatchListAdded(
																	item.c_item_name,
																	item.c_item_code,
																	index
																)}
															/>
														)}
													</Tooltip>
												)}
											</div>

											<div className="fast-moving-tile">
												<div className="fast-moving-tile-imgsec">
													<Link
														to={`pdp/${item.c_item_code}/${convertToSlug(
															item.c_item_name
														)}`}
														key={item.c_item_code}
													>
														{   item.ac_thumbnail_images ?    (
															
															item.ac_thumbnail_images === "" ? (
																<img src={capsules} alt="ProductImg" />
															) : (
																<img
																	src={item.ac_thumbnail_images}
																	alt={item.c_item_name}
																	onError={(e) => {
																		e.target.src = capsules;
																	}}
																/>
															)
														):(
															<img src={capsules} alt="ProductImg" />
														)

														
														
														}
													</Link>
												</div>
												<div className="fast-moving-tile-details">
													<div>
														<Link
															to={`pdp/${item.c_item_code}/${convertToSlug(
																item.c_item_name
															)}`}
															key={item.c_item_code}
														>
															<Tooltip
																title={item.c_item_name}
																TransitionComponent={Zoom}
															>
																<h4 className="medicine-title">
																	{item.c_item_name}
																</h4>
															</Tooltip>
															<h5 className="medicine-packsize">
																Pack Size: {item.c_pack_name}
															</h5>
															<h5 className="medicine-mrp">
																MRP &#8377; {item.n_mrp}
															</h5>
															<h5 className="medicine-contains">
																Contains
																<span> {item.c_contains}</span>
															</h5>
														</Link>
													</div>
													<div className="fast-moving-buttons-sec">
														<Button
															variant="contained"
															color="primary"
															className="fast-moving-addtocart"
															onClick={() => handleOpen(item.c_item_code)}
															// onClick={()=>handleOpen()}
														>
															Add To Cart
														</Button>
														{shortLoading[index] === true ? (
															<CircularProgress
																className="mr-l-12"
																size={32}
																thickness={8}
															/>
														) : (
															<Tooltip
																title="Shortbook"
																TransitionComponent={Zoom}
															>
																<div className="addtoshortbook-icon-sec">
																	{item.c_short_book_status === "Y" ? (
																		<img
																			src={shortbook_colorIcon}
																			alt="addtoshortbook-icon-1"
																			className="addtoshortbook-icon"
																			onClick={handleClickShortBookRemoved(
																				item.c_item_name,
																				item.c_item_code,
																				index
																			)}
																		/>
																	) : (
																		<img
																			src={shortbook_icon}
																			alt="addtoshortbook-icon-1"
																			className="addtoshortbook-icon"
																			onClick={handleClickShortBookAdded(
																				item.c_item_name,
																				item.c_item_code,
																				index
																			)}
																		/>
																	)}
																</div>
															</Tooltip>
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								)
							)}
					</Slider>
				</div>
			</div>

			<div>
				<SellerDropDown
					isOpen={open}
					setIsOpen={setOpen}
					br_code={br_code}
					pdpPageItemsResult={pdpPageItemsResult}
					pdpPageSellerDetailsResult={pdpPageSellerDetailsResult}
					AddToCartAction={AddToCartAction}
					addToCartResult={addToCartResult}
					CartCount={CartCount}
				/>
				<Snackbar
					open={state.open}
					onClose={handleCloseButton}
					// TransitionComponent={state.Transition}
					message={state.message}
					// key={state.Transition.name}
					autoHideDuration={5000}
					disabled
					action={
						<React.Fragment>
							<Checkbox
								
								icon={
								<CheckBoxIcon   />
							
							}
								color="primary"
								disabled
								className="msg-checkbox checkbox-listItem"
							/>
						</React.Fragment>
					}
				/>
			</div>
		</>
	);
};

export default FastMovingMedicines;
