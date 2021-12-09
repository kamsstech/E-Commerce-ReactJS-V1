import React from "react";
import { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Alert from "@material-ui/lab/Alert";
import SellerDropDown from "../orderHistory/SellerDropDown";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Fade from "@material-ui/core/Fade";
import Snackbar from "@material-ui/core/Snackbar";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";

import medicine from "../../../assets/images/medicine-syrup-plp-page.jpg";
import wishlist from "../../../assets/images/wishlist_plp_page.svg";
import wishlist_colorIcon from "../../../assets/images/wishlist_colorIcon.svg";
import commerce_offer from "../../../assets/images/commerce-and-shopping_plp_page.svg";
import ViewIcon from "../../../assets/images/Group_860.svg";
import DownArrow from "../../../assets/images/down-arrow.svg";
import shortbook_icon from "../../../assets/images/shortbook_pdpIcon.svg";
import shortbook_colorIcon from "../../../assets/images/shortbook_colorIcon.svg";
import oral_sus from "../../../assets/images/oral_sus.svg";
import capsules from "../../../assets/images/capsules.svg";
import injectable from "../../../assets/images/injectable.svg";
import dressicon from "../../../assets/images/dressicon.png";
import tablet from "../../../assets/images/tablet.svg";
import drops from "../../../assets/images/drops.svg";
import { convertToSlug } from '../../../util/Helper';
import { Constants } from "../../../common/constant/localstorage";

function GrowTransition(props) {
	return <Grow {...props} />;
}
const ListView = (props) => {
	const {
		match,
		searchKeyArr,
		setsearchKeyArr,
		removeIndex,
		setRemoveIndex,
		searchResultvalue,
		setSearchResultvalue,
		pageTitle,
		setTitle,
		pageNav,
		setPageNav,
		itemLength,
		GetPlpPageActions,
		plpPageAtionsResult,
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
		br_code,
		setItemLength,
		GetPdpPageItems,
		pdpPageItemsResult,
		GetPdpPageSellerDetails,
		pdpPageSellerDetailsResult,
		AddToCartAction,
		addToCartResult,
		CartCount,
		totalList,
		setTotalList,
		totalLimit,
		setLimitTotal,
		page,
		setPage,
		loadStatus,
		setloadStatus,
		pageNumber,
		setPageNumber,
		arrayRes,
		setArrayRes,
		limit,
		notFound,
		setNotFound
	} = props;

	const [resultCount, setresultCount] = useState(0);

	useEffect(() => {
		if (
			addShortbookResult.payload === "Success" ||
			removeShortbookResult.payload === "Success" ||
			addWatchlistResult.payload === "Success" ||
			removeWatchlistResult.payload === "Success"
		) {
			ShortbookCount();
			WatchlistCount();
		}
	}, [
		addShortbookResult.payload === "Success",
		removeShortbookResult.payload === "Success",
		addWatchlistResult.payload === "Success",
		removeWatchlistResult.payload === "Success",
	]);

	const [open, setOpen] = React.useState(false);
	const handleOpen = (itemCode) => {
		GetPdpPageItems(itemCode);
		GetPdpPageSellerDetails(itemCode)
		setOpen(true);
	};
	let { urlPath, codeValue, keyValue, sType } = "";
	// const loader = useRef(null);
	let indexValue = 0;
	useEffect(() => {
		setPage(0)
		setArrayRes([])
		setTotalList(0);
		plpPageAtionsResult.payload.j_list=[]
		let url_string = window.location;
		let url = new URL(url_string);

		if (match.params.type == "best-selling") {
			setPageNav("Best Selling");
			setTitle("Best Selling");
			urlPath = "/api/v1/items/bestsellingitems";
			indexValue = url.searchParams.get("index");
		}
		else if (match.params.type == "new") {
			setPageNav("New Arrivals");
			setTitle("New Arrivals");
			urlPath = "/api/v1/items/newitems";
			indexValue = url.searchParams.get("index");
		}
		else if (match.params.type == "all") {
			setPageNav("All");
			setTitle("All");
			urlPath = "/api/v1/items/allitems";
			indexValue = url.searchParams.get("index");
		}
		else if (match.params.type == "search") {
			setPageNav("Search With List");
			urlPath = "/c2/lc/ms/mst/search/l/prd";
			sType = url.searchParams.get("t");
			if (sType == "1") {
				urlPath = "/c2/lc/ms/mst/search/l/prd";
			} else if (sType == "3") {
				urlPath = "/c2/lc/ms/mst/mol/list";
			}
			indexValue = url.searchParams.get("index");
			setRemoveIndex(parseInt(indexValue));
			codeValue = url.searchParams.get("q");
			let searchKeyValue = localStorage.getItem(Constants.LIST_SEARCH_KEY);
			setsearchKeyArr(searchKeyValue.split(","));
			setSearchResultvalue(codeValue);
		}
		else if (match.params.type == "category") {
			setPageNav("Category");
			urlPath = "/api/v1/items/categoryitems";
			indexValue = url.searchParams.get("index");
			codeValue = url.searchParams.get("q");
			let categoryName = url.searchParams.get("n");
			setTitle(categoryName);
		}
		const body = {
			page_path: urlPath,
			index_value: indexValue,
			key_value: keyValue,
			n_offset: 0,
			n_limit: limit,
			c_code: codeValue,
			type: match.params.type,
			c_process:"1"
		};
		GetPlpPageActions(body);
		
	}, [match]);

	const handleLoadMore = (e,nextPage) => { 
		let url_string = window.location;
		let url = new URL(url_string);
		if (match.params.type == "best-selling") {
			setPageNav("Best Selling");
			setTitle("Best Selling");
			urlPath = "/api/v1/items/bestsellingitems";
			indexValue = url.searchParams.get("index");
		}
		else if (match.params.type == "new") {
			setPageNav("New Arrivals");
			setTitle("New Arrivals");
			urlPath = "/api/v1/items/newitems";
			indexValue = url.searchParams.get("index");
		}
		else if (match.params.type == "all") {
			setPageNav("All");
			setTitle("All");
			urlPath = "/api/v1/items/allitems";
			indexValue = url.searchParams.get("index");
		}
		else if (match.params.type == "search") {
			setPageNav("Search With List");
			urlPath = "/c2/lc/ms/mst/search/l/prd";
			sType = url.searchParams.get("t");
			if (sType == "1") {
				urlPath = "/c2/lc/ms/mst/search/l/prd";
			} else if (sType == "3") {
				urlPath = "/c2/lc/ms/mst/mol/list";
			}
			indexValue = url.searchParams.get("index");
			setRemoveIndex(parseInt(indexValue));
			codeValue = url.searchParams.get("q");
			let searchKeyValue = localStorage.getItem(Constants.LIST_SEARCH_KEY);
			setsearchKeyArr(searchKeyValue.split(","));
			setSearchResultvalue(codeValue);
		}
		else if (match.params.type == "category") {
			setPageNav("Category");
			urlPath = "/api/v1/items/categoryitems";
			indexValue = url.searchParams.get("index");
			codeValue = url.searchParams.get("q");
			let categoryName = url.searchParams.get("n");
			setTitle(categoryName);
		}
		const body = {
			page_path: urlPath,
			index_value: indexValue,
			key_value: keyValue,
			n_offset: nextPage,
			n_limit: limit,
			c_code: codeValue,
			type: match.params.type,
		};
		GetPlpPageActions(body);
	}

	useEffect(() => {
		setloadStatus(false);
		if (plpPageAtionsResult.statuscode === 1) {
			if(page === 0)
			{
				setArrayRes([])
			}
			
			setArrayRes([...arrayRes, ...plpPageAtionsResult.payload.data]);
			setTotalList(plpPageAtionsResult.payload.total);
			setPage(plpPageAtionsResult.payload.offset);
			setresultCount(plpPageAtionsResult.payload.data.length)
			setloadStatus(true);
			setNotFound(false);
		}
		else if(plpPageAtionsResult.statuscode === 5) {
			setloadStatus(false);
			setNotFound(true);
			if(page === 0)
			{
				setTotalList(0);
			}
			
		}
		else if(plpPageAtionsResult.statuscode === 100)
		{
			setloadStatus(false);
			setNotFound(true);
			if(page === 0)
			{
				setTotalList(0);
			}
		}
	}, [plpPageAtionsResult]);
	// if(plpPageAtionsResult.payload.n_total)
	// {
	//    setTotalList(plpPageAtionsResult.payload.n_total);
	// }

	setLimitTotal(arrayRes.length);

	let tempArray = [];
	if (arrayRes) {
		for (let i = 0; i <= arrayRes.length; i++) {
			tempArray.push(false);
		}
	}
	const [state, setState] = useState({
		open: false,
		Transition: Fade,
		message: "",
	});
	const [watchListIndex, setWatchListIndex] = useState(0);
	const [shortbookIndex, setShortbookIndex] = useState(0);
	const [shortbookItemc, setShortbookItemc] = useState("");
	const [shortLoading, setShortLoading] = useState(tempArray);
	const [watchListLoading, setWatchListLoading] = useState(tempArray);
	const [watchListItemc, setWatchListItemc] = useState("");
	const [watchListItemName, setWatchListItemName] = useState("");
	const [shortbookItemName, setShortbookItemName] = useState("");
	const [processType, setProcessType] = useState("");

	const handleClickShortBookAdded = (name, item_code, index) => () => {
		let temp = [...shortLoading];
		temp[index] = !temp[index];
		setShortLoading(temp);
		const body = {
			c_item_code: item_code,
		};
		AddShortbookItems(body);
		setShortbookIndex(index);
		setShortbookItemc(item_code);
		setShortbookItemName(name);
		setProcessType("new");

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
		setShortbookItemc(item_code);
		setShortbookItemName(name);
		setProcessType("new");
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
		setWatchListItemc(item_code);
		setWatchListItemName(name);
		setProcessType("new");
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
		setWatchListItemc(item_code);
		setWatchListItemName(name);
		setProcessType("new");
	};
	const handleCloseButton = () => {
		setState({
			...state,
			open: false,
		});
	};

	useEffect(() => {
		let temp = [...watchListLoading];
		if (addWatchlistResult.payload == "Success" && processType == "new") {
			let target = "";
			let nameItem = arrayRes.map((item) => {
				if (item.c_item_code == watchListItemc) {
					target = item.c_item_name;
					item.c_watchlist_status = "Y";
				}
			});

			setTimeout(() => {
				setState({
					open: true,
					message: `${target} successfully added to Watchlist`,
				});
			}, 500);
			temp[watchListIndex] = addWatchlistResult.loading;
			setWatchListLoading(temp);
			addWatchlistResult.payload = "";
			let sCount = parseInt(watchlistCountRes.payload.data.count) + parseInt(1);
			watchlistCountRes.payload.data.count = sCount;

		}
	}, [addWatchlistResult]);
	useEffect(() => {
		let temp = [...watchListLoading];
		if (removeWatchlistResult.payload == "Success" && processType == "new") {
			let target = "";
			let nameItem = arrayRes.map((item) => {
				if (item.c_item_code == watchListItemc) {
					target = item.c_item_name;
					item.c_watchlist_status = "N";
				}
			});
			setTimeout(() => {
				setState({
					open: true,
					message: `${target} removed from Watchlist`,
				});
			}, 500);
			temp[watchListIndex] = removeWatchlistResult.loading;
			setWatchListLoading(temp);
			removeWatchlistResult.payload = "";
			let sCount = parseInt(watchlistCountRes.payload.data.count) - parseInt(1);
			watchlistCountRes.payload.data.count = sCount;

		}
	}, [removeWatchlistResult]);

	useEffect(() => {
		let temp = [...shortLoading];

		if (addShortbookResult.payload == "Success" && processType == "new") {
			let target = "";
			let nameItem = arrayRes.map((item) => {
				if (item.c_item_code == shortbookItemc) {
					target = item.c_item_name;
					item.c_short_book_status = "Y";
				}
			});
			setTimeout(() => {
				setState({
					open: true,
					message: `${target} successfully added to Shortbook`,
				});
			}, 500);
			temp[shortbookIndex] = addShortbookResult.loading;
			setShortLoading(temp);
			addShortbookResult.payload = "";
			let sCount = parseInt(shortbookCountRes.payload.data.count) + parseInt(1);
			shortbookCountRes.payload.data.count = sCount;

		}
	}, [addShortbookResult]);
	useEffect(() => {
		let temp = [...shortLoading];

		if (removeShortbookResult.payload == "Success" && processType == "new") {
			let target = "";
			let nameItem = arrayRes.map((item) => {
				if (item.c_item_code == shortbookItemc) {
					target = item.c_item_name;
					item.c_short_book_status = "N";
				}
			});
			setTimeout(() => {
				setState({
					open: true,
					message: `${target} removed from Shortbook`,
				});
			}, 500);
			temp[shortbookIndex] = removeShortbookResult.loading;
			setShortLoading(temp);
			removeShortbookResult.payload = "";
			let sCount = parseInt(shortbookCountRes.payload.data.count) - parseInt(1);
			shortbookCountRes.payload.data.count = sCount;

		}
	}, [removeShortbookResult]);

	useEffect(() => {
		setWatchListIndex(0);
		setShortbookIndex(0);

	}, []);

	return (
		<div>
			<div className="list-view-sec-1">
				{
					Array.isArray(arrayRes) && arrayRes.length > 0 ? arrayRes.map((item, index) => (
						<div className="list-view-sec-25-1" key={item.c_item_code}>
							<div className="list-view-tile-1">
								<div className="list-view-tile-imgsec-1">
									<Link to={`/pdp/${item.c_item_code}/${convertToSlug(item.c_item_name)}`}>
										{   item.images.length>0 ?    (
													
													item.images[0].c_item_image === "" ? (
														<img width="150px" height="100px" src={dressicon} alt="ProductImg" />
													) : (
														<img
															src={'http://35.224.80.84/apiaction/'+item.images[0].c_item_image}
															// src={tablet}	
															width="150px"
															height="100px"
															alt={item.c_item_name}
															onError={(e) => {
																e.target.src = dressicon;
															}}
														/>
													)
												):(
													<img width="150px" height="100px" src={dressicon} alt="ProductImg" />
												)

												
												
												}
									</Link>
								</div>
								<div className="list-view-tile-details-1">
									<div>
										<Link to={`/pdp/${item.c_item_code}/${convertToSlug(item.c_item_name)}`}>
											{item.c_scheme_status === "Y" ? (
												<img
													src={commerce_offer}
													alt="wishListImg-1"
													className="list-view-tile-fav-1"
												/>
											) : (
												""
											)}

											<h4 className="medicine-title-1">{item.c_item_name}</h4>
											<h5 className="medicine-packsize-1">
												Brand: {item.brand[0].c_brand_name}
											</h5>
											<h5 className="medicine-mrp-1">
												MRP &#8377; {item.variations[0].n_item_offer_price}
											</h5>
											<h5 className="medicine-contains-1">
												Category <span> {item.category[0].c_category_name}</span>
											</h5>
										</Link>
									</div>
									<div className="list-view-right-side-sec plp-icons">
										<Tooltip title="Shortbook" TransitionComponent={Zoom}>
											<Button
												variant="contained"
												color="primary"
												className="shortbook"
											>
												{shortLoading[index] === true ? (
													<CircularProgress 
															size={32}
															thickness={8}/>
												) : item.c_short_book_status === "Y" ? (
													<img
														src={shortbook_colorIcon}
														alt="addtoshortbook-icon-1"
														className="addtoshortbook-icon"
														// onClick={handleClickShortBookRemoved(
														// 	item.c_item_name,
														// 	item.c_item_code,
														// 	index
														// )}
													/>
												) : (
													<img
														src={shortbook_icon}
														alt="addtoshortbook-icon-1"
														className="addtoshortbook-icon"
														// onClick={handleClickShortBookAdded(
														// 	item.c_item_name,
														// 	item.c_item_code,
														// 	index
														// )}
													/>
												)}
											</Button>
										</Tooltip>
										<Tooltip title="Watchlist" TransitionComponent={Zoom}>
											<Button
												variant="contained"
												color="primary"
												className="watchlist"
											>
												{watchListLoading[index] === true ? (
													<CircularProgress 
															size={32}
															thickness={8}/>
												) : item.c_watchlist_status === "Y" ? (
													<img
														src={wishlist_colorIcon}
														alt="wishListImg-1"
														className="wishList-icon"
														// onClick={handleClickWatchListRemoved(
														// 	item.c_item_name,
														// 	item.c_item_code,
														// 	index
														// )}
													/>
												) : (
													<img
														src={wishlist}
														alt="wishListImg-1"
														className="wishList-icon"
														// onClick={handleClickWatchListAdded(
														// 	item.c_item_name,
														// 	item.c_item_code,
														// 	index
														// )}
													/>
												)}
											</Button>
										</Tooltip>
										<Button
											variant="contained"
											color="primary"
											className="addtocart"
											onClick={()=>handleOpen(item.c_item_code)}
										>
											Add To Cart
										</Button>
									</div>
								</div>
							</div>
						</div>
					))
					:
					""
				}
			</div>
			{
				Array.isArray(arrayRes) && arrayRes.length > 0 ?
				<div className="loading" xs={12}>
					{
						loadStatus === false && notFound === false ? (
							<CircularProgress className="mr-l-12" size={32} thickness={4} />
						 ):""
					}
					{
						loadStatus === true && notFound === false && resultCount >= 20 ? (
						<Button
								variant="contained"
								color="primary"
								className="home-title-sectionbtn"
								onClick={(e) => handleLoadMore(e, page)}
							>
								Load More
						 </Button>):""
					 }
				</div>
				:""
			}
			<SellerDropDown 
			isOpen={open} 
			setIsOpen={setOpen} 
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
				action={
					<React.Fragment>
						<Checkbox
							icon={<CheckBoxIcon />}
			              	color="primary"
			              	disabled
			              	className="msg-checkbox checkbox-listItem"
						/>
					</React.Fragment>
				}
			/>
		</div>
	);
};

export default ListView;
