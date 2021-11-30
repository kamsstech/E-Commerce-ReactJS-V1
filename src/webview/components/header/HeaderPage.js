import React, { useState, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { ENV } from "../../../common/constant/env";
import axios from "axios";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { useLocation } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
// import AppLogo from "../../../assets/images/site-logo-white.svg";
// import AppLogo from "../../../assets/images/logo.svg";
import AppLogo from "../../../assets/images/LOGO_W_1.svg";

import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import Checkbox from "@material-ui/core/Checkbox";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import Bell from "../../../assets/images/bell.svg";
import Watchlist from "../../../assets/images/watchlist.svg";
import Order from "../../../assets/images/order.svg";
import Cart from "../../../assets/images/cart.svg";
import Shortbook from "../../../assets/images/shortbook.svg";
import LiveOrderGold from "../../../assets/images/Live_order_gold.svg";
import SmartCart from "../../../assets/images/smart_cart.svg";
import DownArrowLine from "../../../assets/images/down-arrow-line.svg";
import Profile from "../../../assets/images/thumbnail.svg";
import Client from "../../../assets/images/clientprofile.png";
import Menu from "../../../assets/images/menu.svg";
import Package from "../../../assets/images/package.svg";
import Avatar from "../../../assets/images/avatar.svg";
import Return from "../../../assets/images/return.svg";
import Signout from "../../../assets/images/sign-out.svg";
import Store from "../../../assets/images/store-purple.svg";
import DownArrow from "../../../assets/images/down-arrow.svg";
import Feedback from "../../../assets/images/feedback-purple.svg";
import Role from "../../../assets/images/user-interface.svg";
import EmptyCart from "../../../assets/images/empty-cart.svg";

import Search from "./Search";
import CategoryMenuLists from "./CategoryLists";
import { Constants } from "../../../common/constant/localstorage";

import RegisterModal from "../home/RegisterModal";
import RegisterDetailsModal from "../home/RegisterDetailsModal";

import { getToken } from "../../../common/components/getToken/getToken";
import NotificationDropDown from "./NotificationDropDown";
import OnePharmaPopup from "./OnePharmaPopup";
import ComingSoonPopup from "./ComingSoonPopup";

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

function BranchTooltip(props) {
	const classes = useStylesBranch();

	return <Tooltip arrow classes={classes} {...props} />;
}

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

export default function HeaderPage(props) {
	const location = useLocation();

	let history = useHistory();

	const handleComingSoonPage = (e) => {
		localStorage.setItem(Constants.COMING_SOON_ACTIVE_PAGE, e ? e : "Page");
		history.push("/coming-soon");
	};

	const {
		getProfileInfoResult,
		getBranchListAction,
		branchListResult,
		GetOrderHistoryIndexParameters,
		CategoryListsResult,
		CategoryListsAction,
		NotificationCount,
		notificationCountRes,
		ShortbookCount,
		shortbookCountRes,
		WatchlistCount,
		watchlistCountRes,
		addToCartResultRes,
		GetPdpPageItems,
		pdpPageItemsResult,
		GetPdpPageSellerDetails,
		pdpPageSellerDetailsResult,
		CartCount,
		cartCountRes,
		AddToCartAction,
		addToCartResult,
		barcodeSearchResult,
		BarcodeSearch,
	} = props;

	

	const classes = useStyles();

	const [open, setOpen] = useState(false);
	const [openComingSoon, setOpenComingSoon] = useState(false);
	const [isOpen, setIsOpen] = React.useState(false);
	const [openRegModal, setOpenRegModal] = React.useState(false);
	const [openOnePharmaModal, setOpenOnePharmaModal] = React.useState(false);
	const [roleName, setRoleName] = useState("buyer");
	const [openEmptyCart, setOpenEmptyCart] = useState(false);
	const [cartCount, setCartCount] = useState(0);
	const [notifiCount, setNotifiCount] = useState(0);
	const [shortbookCounts, setShortbookCounts] = useState(0);
	const [watchlistCount, setWatchlistCount] = useState(0);
	const [br_code, setBr_Code] = useState("");

	const handleIsOpen = () => {
		setIsOpen(true);
	};
	const handleIsClose = () => {
		setIsOpen(false);
	};
	const [openCat, setCatOpen] = useState(false);
	const [inputs, setInputs] = useState({
		c_image_url: "",
		c_name: "",
		c_area_name: "",
		c_landmark: "",
	});
	const anchorRef = React.useRef(null);
	const [showProductDetails, SetshowProductDetails] = useState(false);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleCatToggle = () => {
		setCatOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		setOpen(false);
	};

	const handleCatClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		setCatOpen(false);
	};

	const signout = () => {
		localStorage.clear();
		history.push("/login");
		localStorage.setItem("SECOND_TIME", true);
		// window.location.reload(false)
		// window.location.href = window.location.href
	};

	useEffect(() => {
		var token = getToken();
		if (token) {
			SetshowProductDetails(true);
		} else {
			SetshowProductDetails(false);
		}
		props.getProfileInfo();
		props.getBranchListAction();

		// const branchId = localStorage.getItem(Constants.DEFAULT_FIRM_ID);
		setDefaultBranch(br_code);

		// const curBranchId = localStorage.getItem(Constants.FIRM_ID);
		setCurBranch(br_code);

		NotificationCount();
		ShortbookCount();
		WatchlistCount();
	}, []);

	// const [notifiCount, setNotifiCount] = React.useState(0);
	// useEffect(() => {
	//   console.log('dddddddddddddddddd',notificationCountRes)
	//   // let count=notificationCountRes.payload.data.count?notificationCountRes.payload.data.count:0;
	//   // setNotifiCount(count)
	// }, [notificationCountRes])

	useEffect(() => {
		let temp = { ...inputs };

		Object.entries(props.getProfileInfoResult.payload).map((entry) => {
			temp[entry[0]] = entry[1];
		});
		// localStorage.setItem(Constants.C2_CODE, props.getProfileInfoResult.payload.data.c_c2code);
		localStorage.setItem(Constants.C2_CODE, "000123");
		setInputs(temp);
	}, [props.getProfileInfoResult]);

	const [toggleBranch, setToggleBranch] = React.useState(false);
	const [toggleRole, setToggleRole] = React.useState(false);

	const handleToggleBranch = () => {
		setToggleBranch(!toggleBranch);
	};

	const handleToggleRole = () => {
		setToggleRole(!toggleRole);
	};

	const [makeDefault, setMakeDefault] = React.useState(false);
	const handleMakeDefault = (event) => {
		setMakeDefault(event.target.checked);
	};

	const [defaultBranch, setDefaultBranch] = React.useState("");
	const [curBranch, setCurBranch] = React.useState("");

	const handleDefaultBranch = (event, makeDefault) => {
		// console.log(makeDefault)
		if (makeDefault) {
			setDefaultBranch(event.target.value);
			setCurBranch(event.target.value);
			localStorage.setItem(Constants.DEFAULT_FIRM_ID, event.target.value);
			localStorage.setItem(Constants.FIRM_ID, event.target.value);
			props.setDefaultBranch(event.target.value);
		} else {
			setCurBranch(event.target.value);
			localStorage.setItem(Constants.FIRM_ID, event.target.value);
			// window.location.reload(false);
			window.location.href = window.location.href;
		}
	};

	useEffect(() => {
		if (props.defaultBranchResult.payload.message !== "") {
			// window.location.reload(false);
			window.location.href = window.location.href;
		}
	}, [props.defaultBranchResult.payload]);

	const [openDetailsModal, setOpenDetailsModal] = React.useState(false);

	const handleOpenDetailsModal = () => {
		setOpenDetailsModal(true);
	};

	const handleCloseDetailsModal = () => {
		setOpenDetailsModal(false);
	};

	const handleOpenRegModal = () => {
		setOpenRegModal(true);
	};

	const handleCloseRegModal = () => {
		setOpenRegModal(false);
	};

	const handleOpenOnePharmaModal = () => {
		setOpenOnePharmaModal(true);
	};

	const handleCloseOnePharmaModal = () => {
		setOpenOnePharmaModal(false);
	};
	const handleCloseComingSoon = () => {
		setOpenComingSoon(false);
	};

	const handleRoleChange = (event) => {
		let role = event.target.value;
		// console.log(role);

		if (role === "seller") {
			setOpenRegModal(true);
			setOpen(!open);
			setToggleRole(!toggleRole);
		}
	};

	const handleRegister = () => {
		setOpenRegModal(false);
		setOpenDetailsModal(true);
	};

	const handleIndexSmartOrder = () => {
		GetOrderHistoryIndexParameters(1);
	};
	const handleIndexMyOrders = () => {
		GetOrderHistoryIndexParameters(0);
	};

	useEffect(() => {
		
		if (cartCountRes.statuscode === 0) {
			let count =
				cartCountRes.payload.data.count > 0
					? cartCountRes.payload.data.count
					: 0;
			setCartCount(count);
			// localStorage.setItem("notifiCount", count);
		}else if(cartCountRes.statuscode === 5){
			let count = 0
			setCartCount(count);
		}
	}, [cartCountRes]);
	// console.log(cartCountRes.payload,"<<< cartCountRes.payload")

	useEffect(() => {
		if (notificationCountRes.payload != "") {
			let count =
				notificationCountRes.payload.data.count > 0
					? notificationCountRes.payload.data.count
					: 0;
			setNotifiCount(count);

			// localStorage.setItem("notifiCount", count);
		}
	}, [notificationCountRes]);

	useEffect(() => {
		if (shortbookCountRes.payload != "") {
			let count =
				shortbookCountRes.payload.data.count > 0
					? shortbookCountRes.payload.data.count
					: 0;
			setShortbookCounts(count);

			// window.location.href = window.location.href
			// localStorage.setItem("shortbookCount", count);
		}
	}, [shortbookCountRes]);
	useEffect(() => {
		if (watchlistCountRes.payload != "") {
			let count =
				watchlistCountRes.payload.data.count > 0
					? watchlistCountRes.payload.data.count
					: 0;
			setWatchlistCount(count);
			// localStorage.setItem("watchlistCount", count);
		}
	}, [watchlistCountRes]);
	// useEffect(() => {
	//   profileDetails();
	//   getBranchListAction();
	// }, []);

	useEffect(() => {
		getBranchListAction();
	}, []);

	useEffect(() => {
		let temp = {};
		Object.entries(branchListResult.payload).map((entry) => {
			if (entry[1].c_default_status === "Y") {
				temp = entry[1];
			}
			setBr_Code(temp.c_br_code);
		});
	}, [branchListResult]);

	// console.log(branchListResult,"<<<< branchListResult")

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior:
				"smooth" /* you can also use 'auto' behaviour in place of 'smooth' */,
		});
	};
	useEffect(() => {
		const body = {
			n_branch_id: br_code,
		};
		CartCount(body);
	}, [br_code]);

	return (
		<>
			{showProductDetails == true ? (
				<>
					<div className="web-header">
						<AppBar position="static">
							<Container fixed>
								<Toolbar className="header-top-sec">
									{location.pathname == "/home" ? (
										<img
											onClick={scrollToTop}
											src={AppLogo}
											alt={AppLogo}
											className="website-logo"
										/>
									) : (
										<Link to="/home">
											<img
												src={AppLogo}
												alt={AppLogo}
												className="website-logo"
											/>
										</Link>
									)}
									<Search
										GetPdpPageItems={props.GetPdpPageItems}
										GetPdpPageSellerDetails={props.GetPdpPageSellerDetails}
										SearchByProduct={props.SearchByProduct}
										SearchBySeller={props.SearchBySeller}
										SearchByMolecule={props.SearchByMolecule}
										SearchByMfc={props.SearchByMfc}
										searchByProductResult={props.searchByProductResult}
										searchBySellerResult={props.searchBySellerResult}
										searchByMoleculeResult={props.searchByMoleculeResult}
										searchByMfcResult={props.searchByMfcResult}
										br_code={br_code}
										pdpPageItemsResult={pdpPageItemsResult}
										pdpPageSellerDetailsResult={pdpPageSellerDetailsResult}
										AddToCartAction={AddToCartAction}
										addToCartResult={addToCartResult}
										CartCount={CartCount}
									/>
									<div className={classes.grow} />
									<div>
										<Tooltip title="Notifications" TransitionComponent={Zoom}>
											<IconButton
												className="web-header-icons"
												color="inherit"
												onClick={handleIsOpen}
											>
												<Badge badgeContent={notifiCount} color="secondary">
													<img src={Bell} alt="Bell" />
												</Badge>
											</IconButton>
										</Tooltip>

										<Tooltip title="My Orders" TransitionComponent={Zoom}>
											<Link to="/order-history">
												{/* <Link to="/home"> */}

												<IconButton
													className="web-header-icons"
													color="inherit"
													onClick={handleIndexMyOrders}
												>
													<Badge badgeContent={0} color="secondary">
														<img src={Order} alt="Order" />
													</Badge>
												</IconButton>
											</Link>
										</Tooltip>

										<Tooltip title="Cart" TransitionComponent={Zoom}>
											{cartCount === 0 ? (
												<IconButton
													className="web-header-icons relative"
													// onClick={() => setOpenEmptyCart(!openEmptyCart)}
													onClick={() =>
														setOpenEmptyCart(cartCount === 0 ? true : false)
													}
													color="inherit"
												>
													<Badge badgeContent={cartCount} color="secondary">
														<img src={Cart} alt="cart" />
													</Badge>

													{openEmptyCart && (
														<ClickAwayListener
															onClickAway={() => setOpenEmptyCart(false)}
														>
															<div className="empty-cart">
																<img src={EmptyCart} alt="empty-cart" />
																<h4>Unfortunately! It feels so light</h4>
																<p>Let's add some medicines.</p>
															</div>
														</ClickAwayListener>
													)}
												</IconButton>
											) : (
												<Link to="/cart">
													<IconButton
														className="web-header-icons relative"
														// onClick={() => setOpenEmptyCart(!openEmptyCart)}
														onClick={() =>
															setOpenEmptyCart(cartCount === 0 ? true : false)
														}
														color="inherit"
													>
														<Badge badgeContent={cartCount} color="secondary">
															<img src={Cart} alt="cart" />
														</Badge>

														{openEmptyCart && (
															<ClickAwayListener
																onClickAway={() => setOpenEmptyCart(false)}
															>
																<div className="empty-cart">
																	<img src={EmptyCart} alt="empty-cart" />
																	<h4>Unfortunately! It feels so light</h4>
																	<p>Let's add some medicines.</p>
																</div>
															</ClickAwayListener>
														)}
													</IconButton>
												</Link>
											)}
										</Tooltip>
										<Tooltip title="Shortbook" TransitionComponent={Zoom}>
											<Link to="/shortbook">
												<IconButton
													className="web-header-icons"
													color="inherit"
												>
													{/*<Badge
														badgeContent={shortbookCounts}
														color="secondary"
														id="shortBookCount"
													>
													</Badge>*/}
													<img src={Shortbook} alt="Shortbook" />
												</IconButton>
											</Link>
										</Tooltip>
										<Tooltip title="Watchlist" TransitionComponent={Zoom}>
											<Link to="/watchlist">
												<IconButton
													className="web-header-icons"
													color="inherit"
												>
													{/*<Badge
														badgeContent={watchlistCount}
														color="secondary"
														id="watchlistCount"
													>
													</Badge>*/}
													<img src={Watchlist} alt="Watchlist" />
												</IconButton>
											</Link>
										</Tooltip>
										{/* <Tooltip title="Live Order Gold" TransitionComponent={Zoom}>
									<IconButton className="web-header-icons" color="inherit">
										<img src={LiveOrderGold} alt="Live_order_gold" />
									</IconButton>
								</Tooltip>*/}

										{/* <Tooltip title="Smart Order" TransitionComponent={Zoom}>
											<Link to="/home">
												<IconButton
													className="web-header-icons"
													color="inherit"
													onClick={handleIndexSmartOrder}
												>
													<Badge badgeContent={null} color="secondary">
														<img src={SmartCart} alt="SmartCart" />
													</Badge>
												</IconButton>
											</Link>
										</Tooltip> */}
									</div>
									<div className="relative">
										<ListItem
											// button
											className="web-header-profile"
											onClick={handleToggle}
											color="inherit"
										>
											{inputs.c_image_url === "" ||
											inputs.c_image_url === null ? (
												<div className="profile-head-thumb">
													<h6>
														{(inputs.c_name.match(/\b\w/g) || []).shift() || ""}
														{(inputs.c_name.match(/\b\w/g) || [])[1] || ""}
													</h6>
													{/*<img
														src={Profile}
														className="web-header-profile-img"
														alt="pic"
													/>*/}
												</div>
											) : (
												<img
													src={inputs.c_image_url}
													className="web-header-profile-img"
													alt="pic"
												/>
											)}
											{/* <div className="web-profile-details">
										<h4 className="web-profile-name">
											<Tooltip className="toCatp" title={inputs.c_name} TransitionComponent={Zoom}>
												<><div>{inputs.c_name}</div><img src={DownArrowLine} alt="DownArrowLine" /> </>
											</Tooltip>
										</h4>
										<Tooltip className="toCatp" title={<>{inputs.c_area_name} {inputs.c_landmark !=="" && <>,{inputs.c_landmark}</>}</>} TransitionComponent={Zoom}>
											<h5 className="web-profile-location">{inputs.c_area_name} {inputs.c_landmark !=="" && <>,{inputs.c_landmark}</>}</h5>
										</Tooltip>
									</div> */}

											<div className="web-profile-details">
												<h4 className="web-profile-name">
													<Tooltip
														className="toCatp"
														title={inputs.c_name}
														TransitionComponent={Zoom}
													>
														<>
															<div>
																{/* {inputs.c_name} */}
																<div className="header_profile">
																	{/* {localStorage.getItem(Constants.NAME)} */}

																	{getProfileInfoResult.payload.c_name}
									
																</div>
															</div>
															<img src={DownArrowLine} alt="DownArrowLine" />{" "}
														</>
													</Tooltip>
												</h4>

												{/* <Tooltip
										className="toCatp" 
										title={<>{inputs.c_area_name} 
										{inputs.c_landmark !=="" && <>,{inputs.c_landmark}</>}</>} 
										TransitionComponent={Zoom}>
										 
											<h5 className="web-profile-location">{localStorage.getItem(Constants.CITY)}</h5>
										 
										</Tooltip> */}

												<h5 className="web-profile-location">
													{/* {localStorage.getItem(Constants.CITY)} */}
													<div>
														{getProfileInfoResult.payload.c_city_name} (
														{getProfileInfoResult.payload.c_area_name})
													</div>
												</h5>
											</div>
										</ListItem>
										<Popper
											open={open}
											anchorEl={anchorRef.current}
											role={undefined}
											transition
											disablePortal
											className="profile-dropdown"
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
																<Link
																	to="/profile"
																	onClick={() => setOpen(false)}
																>
																	<MenuItem>
																		<img src={Avatar} alt="Avatar" />
																		My Profile
																	</MenuItem>
																</Link>
																<Link
																	to="/feedback"
																	onClick={() => setOpen(false)}
																>
																	<MenuItem>
																		<img src={Feedback} alt="Return" />
																		Feedback
																	</MenuItem>
																</Link>
																<MenuItem
																	onClick={() =>
																		handleComingSoonPage("Returns")
																	}
																>
																	<img src={Return} alt="Return" />
																	Returns
																</MenuItem>
																{Array.isArray(
																	props.branchListResult.payload
																) &&
																	props.branchListResult.payload.length > 1 && (
																		<div
																			className={toggleBranch ? "light-bg" : ""}
																		>
																			<MenuItem onClick={handleToggleBranch}>
																				<img src={Store} alt="Return" />
																				Change Branch (
																				{Array.isArray(
																					props.branchListResult.payload
																				) &&
																					props.branchListResult.payload.length}
																				)
																				<img
																					src={DownArrow}
																					alt="Store"
																					className="ml-10"
																				/>
																			</MenuItem>
																			<Collapse in={toggleBranch}>
																				<div className="change-branch-sec">
																					{makeDefault ? (
																						<FormControl
																							component="fieldset"
																							className={
																								"sortby-filter payment login-select-branch"
																							}
																						>
																							<RadioGroup
																								aria-label="gender"
																								name="gender1"
																								value={defaultBranch}
																								onChange={(e) =>
																									handleDefaultBranch(
																										e,
																										makeDefault
																									)
																								}
																							>
																								{props.branchListResult.payload.map(
																									(item, index) => (
																										<>
																											{index < 8 && (
																												<BranchTooltip
																													title={
																														item.c_city_name !==
																														undefined ? (
																															<>
																																{item.c_br_name.toString()}
																																,{" "}
																																{
																																	item.c_city_name
																																}{" "}
																																{item.c_pincode !==
																																	undefined && (
																																	<>
																																		,{" "}
																																		{
																																			item.c_pincode
																																		}
																																	</>
																																)}
																															</>
																														) : (
																															<>
																																{item.c_br_name.toString()}
																															</>
																														)
																													}
																													placement="top"
																													TransitionComponent={
																														Zoom
																													}
																												>
																													<FormControlLabel
																														// disabled={!makeDefault}
																														value={
																															item.c_br_code
																														}
																														control={
																															<Radio color="primary" />
																														}
																														label={
																															item.c_city_name !==
																															undefined ? (
																																<>
																																	{item.c_br_name.toString()}
																																	,{" "}
																																	{
																																		item.c_city_name
																																	}
																																 
																																</>
																															) : (
																																<>
																																	{/* {item.c_br_name.toString()} */}
																	<h1>welcome</h1>
																																</>
																															)
																														}
																														className="p-0"
																													/>
																												</BranchTooltip>
																											)}
																										</>
																									)
																								)}
																							</RadioGroup>
																						</FormControl>
																					) : (
											//   without make defult
																						<FormControl
																							component="fieldset"
																							className={
																								"visibility sortby-filter payment login-select-branch"
																							}
																						>
																							<RadioGroup
																								aria-label="gender"
																								name="gender1"
																								value={curBranch}
																								// onChange={(e) =>
																								//   handleDefaultBranch(
																								//     e,
																								//     makeDefault
																								//   )
																								// }
																							>
																								{props.branchListResult.payload.map(
																									(item, index) => (
																										<>
																											{index < 8 && (
																												<BranchTooltip
																													title={
																														item.c_city_name !==
																														undefined ? (
																															<>
																																{item.c_br_name.toString()}
																																,{" "}
																																{item.c_pincode !==
																																	undefined && (
																																	<>
																																		{
																																			item.c_city_name
																																		}
																																		,{" "}
																																		{
																																			item.c_pincode
																																		}
																																	</>
																																)}
																															</>
																														) : (
																															<>
																																{item.c_br_name.toString()}
																															</>
																														)
																													}
																													placement="top"
																													TransitionComponent={
																														Zoom
																													}
																												>
																													<FormControlLabel
																														value={
																															item.c_br_code
																														}
																														control={
																															<Radio color="primary" />
																														}
																														label={
																															item.c_city_name !==
																															undefined ? (
																																<>
																																	{item.c_br_name.toString()}
																																	{", "}{" "}
																																	{
																																		item.c_city_name
																																	}
																																</>
																															) : (
																																<>
																																	{item.c_br_name.toString()}
																																	{","}
																																	{
																																		item.c_city_name
																																	}
																																</>
																															)
																														}
																														className={
																															item.c_br_code ===
																															curBranch
																																? "highlight-branch p-0"
																																: "p-0"
																														}
																													/>
																												</BranchTooltip>
																											)}
																										</>
																									)
																								)}
																							</RadioGroup>
																						</FormControl>
																					)}

																					{Array.isArray(
																						props.branchListResult.payload
																					) &&
																						props.branchListResult.payload
																							.length >= 8 && (
																							<Link
																								to="/profile/branch"
																								className="view-more-link"
																							>
																								View More
																							</Link>
																						)}
																					<div>
																						<FormControlLabel
																							className="make-default"
																							control={
																								<Checkbox
																									name="checkedB"
																									color="primary"
																									checked={makeDefault}
																									onChange={(e) =>
																										handleMakeDefault(e)
																									}
																								/>
																							}
																							label="Make Default"
																						/>
																					</div>
																				</div>
																			</Collapse>
																		</div>
																	)}

																{/* {Array.isArray(
																	props.branchListResult.payload
																) &&
																	props.branchListResult.payload.length > 1 && (
																		<div
																			className={toggleBranch ? "light-bg" : ""}
																		>
																			<MenuItem onClick={handleToggleBranch}>
																				<img src={Store} alt="Return" />
																				Change Branch (
																				{Array.isArray(
																					props.branchListResult.payload
																				) &&
																					props.branchListResult.payload.length}
																				)
																				<img
																					src={DownArrow}
																					alt="Store"
																					className="ml-10"
																				/>
																			</MenuItem>
																			<Collapse in={toggleBranch}>
																				<div className="change-branch-sec">
																					{makeDefault ? (
																						<FormControl
																							component="fieldset"
																							className={
																								"sortby-filter payment login-select-branch"
																							}
																						>
																							<RadioGroup
																								aria-label="gender"
																								name="gender1"
																								value={defaultBranch}
																								onChange={(e) =>
																									handleDefaultBranch(
																										e,
																										makeDefault
																									)
																								}
																							>
																								{props.branchListResult.payload.map(
																									(item, index) => (
																										<>
																											{index < 8 && (
																												<BranchTooltip
																													title={
																														item.c_city_name !==
																														undefined ? (
																															<>
																																{
																																	item.c_city_name
																																}{" "}
																																{item.c_pincode !==
																																	undefined && (
																																	<>
																																		,{" "}
																																		{
																																			item.c_pincode
																																		}
																																	</>
																																)}
																															</>
																														) : (
																															<>

																															{item.c_br_name.toString()}

																															</>
																														)
																													}
																													placement="top"
																													TransitionComponent={
																														Zoom
																													}
																												>
																													<FormControlLabel
																														// disabled={!makeDefault}
																														value={item.c_br_code}
																														control={
																															<Radio color="primary" />
																														}
																														label={
																															item.c_city_name !==
																															undefined ? (
																																<>
																																	{
																																		item.c_city_name
																																	}{" "}
																																	{item.c_pincode !==
																																		undefined && (
																																		<>
																																			,{" "}
																																			{
																																				item.c_pincode
																																			}
																																		</>
																																	)}
																																</>
																															) : (
																																<>
																																	{item.c_br_name}
																																</>
																															)
																														}
																														className="p-0"
																													/>
																												</BranchTooltip>
																											)}
																										</>
																									)
																								)}
																							</RadioGroup>
																						</FormControl>
																					) : (
																						<FormControl
																							component="fieldset"
																							className={
																								"visibility-hidden sortby-filter payment login-select-branch"
																							}
																						>
																							<RadioGroup
																								aria-label="gender"
																								name="gender1"
																								value={curBranch}
																								onChange={(e) =>
																									handleDefaultBranch(
																										e,
																										makeDefault
																									)
																								}
																							>
																								{props.branchListResult.payload.map(
																									(item, index) => (
																										<>
																											{index < 8 && (
																												<BranchTooltip
																													title={
																														item.c_city_name !==
																														undefined ? (
																															<>
																																{
																																	item.c_city_name
																																}{" "}
																																{item.c_pincode !==
																																	undefined && (
																																	<>
																																		{
																																		item.c_br_name.toString()
																																	},{" "}
																																		{
																																			item.c_pincode
																																		}
																																	</>
																																)}
																															</>
																														) : (
																															<>{item.c_br_name.toString()}</>
																														)
																													}
																													placement="top"
																													TransitionComponent={
																														Zoom
																													}
																												>
																													<FormControlLabel

																														value={item.c_br_code}
																														control={
																															<Radio color="primary" />
																														}
																														label={
																															item.c_city_name !==
																															undefined ? (
																																<>
																																{
																																		item.c_br_name.toString()
																																	}{" "}
																																	{
																																		item.c_city_name
																																	}{" "}
																																	{item.c_pincode !==
																																		undefined && (
																																		<>
																																			{
																																		item.c_br_name.toString()
																																	},{" "}
																																			{
																																				item.c_pincode
																																			}
																																		</>
																																	)}
																																</>
																															) : (
																																<>
																																	{item.c_br_name}
																																</>
																															)
																														}
																														className={
																															item.c_br_code.toString() ===
																															curBranch
																																? "highlight-branch p-0"
																																: "p-0"
																														}
																													/>
																												</BranchTooltip>
																											)}
																										</>
																									)
																								)}
																							</RadioGroup>
																						</FormControl>
																					)}
																					{Array.isArray(
																						props.branchListResult.payload
																					) &&
																						props.branchListResult.payload
																							.length >= 8 && (
																							<Link
																								to="/profile/branch"
																								className="view-more-link"
																							>
																								View More
																							</Link>
																						)}
																					<div>
																						<FormControlLabel
																							className="make-default"
																							control={
																								<Checkbox
																									name="checkedB"
																									color="primary"
																									checked={makeDefault}
																									onChange={(e) =>
																										handleMakeDefault(e)
																									}
																								/>
																							}
																							label="Make Default"
																						/>
																					</div>
																				</div>
																			</Collapse>
																		</div>
																	)} */}

																{/* <div className={toggleRole ? "light-bg" : ""}>
															<MenuItem onClick={handleToggleRole}>
																<img src={Role} alt="Return" />
																Change Role (4)
																<img src={DownArrow} alt="Store" className="ml-10" />
															</MenuItem>
															<Collapse in={toggleRole}>
																<div className="change-branch-sec">
																	<FormControl component="fieldset" className="visibility-hidden sortby-filter payment login-select-branch">    
																		<RadioGroup aria-label="gender" name="gender1" value={roleName} onChange={e=>handleRoleChange(e)}>

																			<BranchTooltip title="Want to Buy" placement="top" TransitionComponent={Zoom}>
																				<FormControlLabel
																					value="buyer"
																					control={<Radio color="primary" />}
																					label="Want to Buy"
																					className="highlight-branch p-0"
																				/>
																			</BranchTooltip>
																			
																			<BranchTooltip title="Want to Sell" placement="top" TransitionComponent={Zoom}>
																				<FormControlLabel
																					value="seller"
																					control={<Radio color="primary" />}
																					label="Want to Sell"
																					className="p-0"
																				/>
																			</BranchTooltip>
																			<BranchTooltip title="P.O.B" placement="top" TransitionComponent={Zoom}>
																				<FormControlLabel
																					value="pob"
																					control={<Radio color="primary" />}
																					label="P.O.B"
																					className="p-0"
																				/>
																			</BranchTooltip>
																			<BranchTooltip title="Route Order" placement="top" TransitionComponent={Zoom}>
																				<FormControlLabel
																					value="ro"
																					control={<Radio color="primary" />}
																					label="Route Order"
																					className="p-0"
																				/>
																			</BranchTooltip>
																		</RadioGroup>
																	</FormControl>                               
																</div>
															</Collapse>
														</div>  */}

																<MenuItem onClick={signout}>
																	<img src={Signout} alt="signout" />
																	Sign Out
																</MenuItem>
															</MenuList>
														</ClickAwayListener>
													</Paper>
												</Grow>
											)}
										</Popper>
									</div>
								</Toolbar>
							</Container>
							<div className="web-header position-unset">
								<AppBar position="static" className="_2x-white-layout">
									<Container fixed>
										<Toolbar className="header-bottom-sec">
											<div>
												<CategoryMenuLists
													CategoryListsAction={CategoryListsAction}
													CategoryListsResult={CategoryListsResult}
												/>
												<Button
													variant="contained"
													color="primary"
													className="header-quick-link mr-r-32"
													onClick={() => handleComingSoonPage("Dashboard")}
												>
													Dashboard
												</Button>
												<Button
													variant="contained"
													color="primary"
													className="header-quick-link mr-r-32"
													onClick={() =>
														handleComingSoonPage("Offers & Promotion")
													}
												>
													Offers &amp; Promotion
												</Button>
												<Button
													variant="contained"
													color="primary"
													className="header-quick-link"
													onClick={() =>
														handleComingSoonPage("LC Wallet & Payments")
													}
												>
													LC Wallet &amp; Payments
												</Button>

												{/*<Link to="/home" className="header-bottom-sec-links">
													Dashboard
												</Link>
												<Link to="/home" className="header-bottom-sec-links">
													Offers & Promotion
												</Link>
												<Link to="/home" className="header-bottom-sec-links">
													LC Wallet & Payments
												</Link>*/}
											</div>
											<div>
												{/*{<Link to="/one-pharma">}*/}
												{/* <Link to="/auto-publish">
													<Button
														color="primary"
														className="onepharma-btn mr-r-24"
													>Touch store
												</Button>
													</Link> */}

												<Button
													color="primary"
													className="onepharma-btn mr-r-24"
													onClick={() => handleComingSoonPage("1 Pharma")}
													// onClick={()=>setOpenComingSoon(true)}
													// onClick={handleOpenOnePharmaModal}
												>
													1Pharma
												</Button>

												{/*{</Link>}*/}
												<Link to="/order-to-seller">
													<Button
														variant="contained"
														color="primary"
														className="stockist animate"
													>
														{/*<img src={Package} alt="Package" />*/}
														Order To Seller
													</Button>
												</Link>
											</div>
										</Toolbar>
									</Container>
								</AppBar>
							</div>
						</AppBar>
					</div>
					<NotificationDropDown openModal={isOpen} closeModal={handleIsClose} />
					<RegisterDetailsModal
						open={openDetailsModal}
						handleOpen={handleOpenDetailsModal}
						handleClose={handleCloseDetailsModal}
					/>
					<RegisterModal
						open={openRegModal}
						handleOpen={handleOpenRegModal}
						handleClose={handleCloseRegModal}
						handleRegister={handleRegister}
					/>
					<OnePharmaPopup
						open={openOnePharmaModal}
						handleClose={handleCloseOnePharmaModal}
					/>
					<ComingSoonPopup
						open={openComingSoon}
						handleClose={handleCloseComingSoon}
					/>
				</>
			) : null}
		</>
	);
}
