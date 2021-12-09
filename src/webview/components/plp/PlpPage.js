import * as React from "react";

import FilterMedicine from "./FilterMedicine";
import BoxView from "./BoxView";
// import FreqBoxView from "../orderHistory/freqBoxView";
// import FreqListView from "../orderHistory/freqListView";
import ListView from "./ListView";
import { useEffect, useState } from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import medicine from "../../../assets/images/medicine-syrup-plp-page.jpg";
import wishlist from "../../../assets/images/wishlist_plp_page.svg";
import commerce_offer from "../../../assets/images/commerce-and-shopping_plp_page.svg";
import box_to_ListView_Icon from "../../../assets/images/Group_860.svg";
import list_to_boxView_icon from "../../../assets/images/list_to_boxView_icon.svg";
import DownArrow from "../../../assets/images/down-arrow.svg";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";

import { Constants } from "../../../common/constant/localstorage";

const useStyles = makeStyles((theme) =>
	createStyles({
		grow: {
			flexGrow: 1,
		},
		dropdownStyle: {
			borderRadius: "6px",
			backgroundColor: "#fff",
			width: "11.9em",
			marginTop: "3em",
		},
	})
);

const useStylesBranch = makeStyles((theme) => ({
	arrow: {
		color: theme.palette.common.black,
	},
	tooltip: {
		backgroundColor: theme.palette.common.black,
		letterSpacing: ".8px",
		fontFamily: "Quicksand-Medium",
	},
}));

const PlpPage = (props) => {
	const {
		match,
		GetPdpPageItems,
		pdpPageItemsResult,
		GetPdpPageSellerDetails,
		pdpPageSellerDetailsResult,
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
		getBranchListAction,
		branchListResult,
		AddToCartAction,
		addToCartResult,
		CartCount,
	} = props;

	const classes = useStyles();
	const [arrayRes, setArrayRes] = useState([]);
	const [searchKeyArr, setsearchKeyArr] = useState([]);
	const [removeIndex, setRemoveIndex] = useState(0);
	const [searchResultvalue, setSearchResultvalue] = useState("");
	const [pageTitle, setTitle] = useState("");
	const [pageNav, setPageNav] = useState("");
	const [itemLength, setItemLength] = useState(0);
	let { urlPath, codeValue, keyValue, sType } = "";
	const [br_code, setBr_Code] = useState("");
	const [page, setPage] = useState(0);
	const [loadStatus, setloadStatus] = useState(false);
	const [pageNumber, setPageNumber] = useState(0);
	const [notFound, setNotFound] = useState(false);

	const limit = 20;
	let indexValue = 0;
	const [totalList, setTotalList] = useState(0);
	const [totalLimit, setLimitTotal] = useState(10);
	const [totalOffset, settotalOffset] = useState(0);
	const [viewToggle, setViewToggle] = useState(true);
	const handleViewToggle = () => {
		setViewToggle(!viewToggle);
		setPage(0)
		plpPageAtionsResult.payload.data=[]
		setArrayRes([])
	};
	const [open, setOpen] = useState(false);
	const [relevanceValue, setRelevanceValue] = useState("Relevance");

	const anchorRef = React.useRef(null);
	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};
	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		setOpen(false);
	};
	const handleClick = (e, index) => {
		setSearchResultvalue(e);
		setRemoveIndex(index);
		let urlPath = "/c2/lc/ms/mst/search/l/prd";
		const body = {
			page_path: urlPath,
			index_value: index,
			c_code: e,
			key_value: searchResultvalue,
			n_page: pageNumber,
			n_limit: limit,
			type: match.params.type,
		};
	 
		props.GetPlpPageActions(body);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		let temp = {};
		Object.entries(branchListResult.payload).map((entry) => {
			temp = entry[1];
		});
		setBr_Code(temp.n_branch_id);
	}, [branchListResult]);

	return (
		<>
			<div className="navigation-container ">
				<Container fixed>
					<Breadcrumbs aria-label="breadcrumb" className="navigation-list">
						<Link to="/home">Home</Link>
						<Link className="active-link">{pageNav}</Link>
					</Breadcrumbs>
				</Container>
			</div>

			<div className="body-spacing">
				<Container fixed>
					<div className="top-heading">
						<div className="heading plpHeading">
							<div className="heading-sub">
								{match.params.type === "search" ? (
									<p className="products-showing-all">
										Showing all results for
										<span className="selected"> {searchResultvalue} </span>
										<span className="items">({totalList} Items)</span>
									</p>
								) : (
									<div>
										<h3 className="heading-title">{pageTitle} Products</h3>
										<p className="products-count-sec">
											{" "}
											(Showing {0 * limit} - {totalLimit} of {totalList}{" "}
											products)
										</p>
									</div>
								)}
							</div>
							{match.params.type == "search" && searchKeyArr.length > 1 ? (
								<div className="search_kwrd">
									Click here for :
									{searchKeyArr.map((val, index) =>
										index !== removeIndex ? (
											<Link
												to={`/plp/search?index=${index}&q=${val}`}
												key={index}
												onClick={(e, keyval) => handleClick(val, index)}
												cl
											>
												{val}
											</Link>
										) : (
											""
										)
									)}
								</div>
							) : match.params.type != "search" ? (
								<p className="location">
									{/* in */}
									{localStorage.getItem(Constants.CITY)}
								</p>
							) : (
								""
							)}
						</div>
						<div className="rightside_topHeading">
							<h3 className="sort-by"> SORT BY</h3>
							<TextField
								name="Relevance"
								value={relevanceValue}
								onClick={handleToggle}
								disabled={true}
								autoComplete="new-password"
								className="auth-input relevance"
								margin="normal"
								variant="outlined"
								placeholder={relevanceValue}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<img
												src={DownArrow}
												alt="Store"
												className="plpPage-ml-10"
											/>
										</InputAdornment>
									),
								}}
							></TextField>
							<div className="relevance-collapse-div">
								<Popper
									open={open}
									anchorEl={anchorRef.current}
									role={undefined}
									transition
									disablePortal
									className="profile-dropdown zindex1"
								>
									{({ TransitionProps, placement }) => (
										<Grow
											{...TransitionProps}
											style={{
												transformOrigin:
													placement === "bottom"
														? "center top"
														: "center bottom",
											}}
										>
											<Paper>
												<ClickAwayListener onClickAway={handleClose}>
													<MenuList id="split-button-menu">
														<MenuItem
															value={"Relevance"}
															onClick={(value) => {
																setRelevanceValue("Relevance");
															}}
														>
															Relevance
														</MenuItem>
														<MenuItem
															value={"Newest First"}
															onClick={(value) => {
																setRelevanceValue("Newest First");
															}}
														>
															Newest First
														</MenuItem>
														<MenuItem
															value={"Schmed"}
															onClick={(value) => {
																setRelevanceValue("Scheme ");
															}}
														>
															Scheme
														</MenuItem>
														<MenuItem
															value={"Discount"}
															onClick={(value) => {
																setRelevanceValue("Discount");
															}}
														>
															Discount
														</MenuItem>
													</MenuList>
												</ClickAwayListener>
											</Paper>
										</Grow>
									)}
								</Popper>
							</div>
							<div className="view-icon-sec" onClick={handleViewToggle}>
								{!viewToggle ? (
									 <Tooltip title="Grid View" TransitionComponent={Zoom}>
									<img
										src={box_to_ListView_Icon}
										alt="List-to-Tile"
										className="view-icon"
									/>
									</Tooltip>
								) : (
									<Tooltip title="List View" TransitionComponent={Zoom}>
									<img
										src={list_to_boxView_icon}
										alt="List-to-Tile"
										className="view-icon"
									/>
									</Tooltip>
								)}
							</div>
						</div>
					</div>
					
					<Grid container spacing={0}>
						<Grid item xs={3}>
							<div className="sticky-filter">
								<FilterMedicine />
							</div>
						</Grid>
						<Grid item xs={9}>
							{viewToggle ? (
								<BoxView
									page={page}
									limit={limit}
									setPage={setPage}
									loadStatus={loadStatus}
									setloadStatus={setloadStatus}
									pageNumber={pageNumber}
									setPageNumber={setPageNumber}
									arrayRes={arrayRes}
									setArrayRes={setArrayRes}
									match={match}
									searchKeyArr={searchKeyArr}
									setsearchKeyArr={setsearchKeyArr}
									removeIndex={removeIndex}
									setRemoveIndex={setRemoveIndex}
									searchResultvalue={searchResultvalue}
									setSearchResultvalue={setSearchResultvalue}
									pageTitle={pageTitle}
									setTitle={setTitle}
									pageNav={pageNav}
									setPageNav={setPageNav}
									itemLength={itemLength}
									setItemLength={setItemLength}
									totalList={totalList}
									setTotalList={setTotalList}
									totalLimit={totalLimit}
									setLimitTotal={setLimitTotal}
									notFound={notFound}
									setNotFound={setNotFound}
									br_code={br_code}
									GetPlpPageActions={GetPlpPageActions}
									GetPdpPageItems={GetPdpPageItems}
									pdpPageItemsResult={pdpPageItemsResult}
									GetPdpPageSellerDetails={GetPdpPageSellerDetails}
									pdpPageSellerDetailsResult={pdpPageSellerDetailsResult}
									getBranchListAction={getBranchListAction}
									branchListResult={branchListResult}
									plpPageAtionsResult={plpPageAtionsResult}
									AddWatchlistItems={AddWatchlistItems}
									addWatchlistResult={addWatchlistResult}
									RemoveWatchlistItems={RemoveWatchlistItems}
									removeWatchlistResult={removeWatchlistResult}
									AddShortbookItems={AddShortbookItems}
									addShortbookResult={addShortbookResult}
									RemoveShortbookItems={RemoveShortbookItems}
									removeShortbookResult={removeShortbookResult}
									watchlistCountRes={watchlistCountRes}
									shortbookCountRes={shortbookCountRes}
									ShortbookCount={ShortbookCount}
									WatchlistCount={WatchlistCount}
									AddToCartAction={AddToCartAction}
									addToCartResult={addToCartResult}
									CartCount={CartCount}
								/>
							) : (
								
								


								<ListView
									page={page}
									limit={limit}
									setPage={setPage}
									loadStatus={loadStatus}
									setloadStatus={setloadStatus}
									pageNumber={pageNumber}
									setPageNumber={setPageNumber}
									arrayRes={arrayRes}
									setArrayRes={setArrayRes}
									match={match}
									br_code={br_code}
									searchKeyArr={searchKeyArr}
									setsearchKeyArr={setsearchKeyArr}
									removeIndex={removeIndex}
									setRemoveIndex={setRemoveIndex}
									searchResultvalue={searchResultvalue}
									setSearchResultvalue={setSearchResultvalue}
									pageTitle={pageTitle}
									setTitle={setTitle}
									pageNav={pageNav}
									setPageNav={setPageNav}
									itemLength={itemLength}
									setItemLength={setItemLength}
									totalList={totalList}
									setTotalList={setTotalList}
									totalLimit={totalLimit}
									setLimitTotal={setLimitTotal}
									notFound={notFound}
									setNotFound={setNotFound}
									GetPlpPageActions={GetPlpPageActions}
									GetPdpPageItems={GetPdpPageItems}
									pdpPageItemsResult={pdpPageItemsResult}
									GetPdpPageSellerDetails={GetPdpPageSellerDetails}
									pdpPageSellerDetailsResult={pdpPageSellerDetailsResult}
									getBranchListAction={getBranchListAction}
									branchListResult={branchListResult}
									AddToCartAction={AddToCartAction}
									addToCartResult={addToCartResult}
									CartCount={CartCount}
									plpPageAtionsResult={plpPageAtionsResult}
									AddWatchlistItems={AddWatchlistItems}
									addWatchlistResult={addWatchlistResult}
									RemoveWatchlistItems={RemoveWatchlistItems}
									removeWatchlistResult={removeWatchlistResult}
									AddShortbookItems={AddShortbookItems}
									addShortbookResult={addShortbookResult}
									RemoveShortbookItems={RemoveShortbookItems}
									removeShortbookResult={removeShortbookResult}
									watchlistCountRes={watchlistCountRes}
									shortbookCountRes={shortbookCountRes}
									ShortbookCount={ShortbookCount}
									WatchlistCount={WatchlistCount}
								/>
							)}
						</Grid>
					</Grid>
				</Container>
			</div>
		</>
	);
};

export default PlpPage;
