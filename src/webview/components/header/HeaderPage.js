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
import AppLogo from "../../../assets/images/logo.jpg";

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
		if(e == "Home")
		{
			history.push("/");
		}
		else if(e == "About")
		{
			history.push("/about-us");
		}
		else if(e == "Shop")
		{
			history.push("/plp/all?index=0");
		}
		else if(e == "Contact")
		{
			history.push("/contact-us");
		}
		else
		{
			history.push("/coming-soon");
		}
		
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
		history.push("/site-control/");
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
			{/*{showProductDetails == true ? (*/}
				<>
					<div className="web-header">
						<AppBar position="static">
							<Container fixed>
								<Toolbar className="header-top-sec">
									{location.pathname == "/" ? (
										<img
											onClick={scrollToTop}
											src={AppLogo}
											alt={AppLogo}
											className="website-logo"
										/>
									) : (
										<Link to="/">
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
									
									</div>
									<div className="relative">

									{
												localStorage.getItem("USER_ID")===null ? 
												"" :
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
																		KAMSS 
																		{/*{getProfileInfoResult.payload.c_name}*/}
										
																	</div>
																</div>
																<img src={DownArrowLine} alt="DownArrowLine" />{" "}
															</>
														</Tooltip>
													</h4>

													

													<h5 className="web-profile-location">
														{/* {localStorage.getItem(Constants.CITY)} */}
														<div>
															{/*KAMSS Admin*/}
															{/*{getProfileInfoResult.payload.c_city_name} (
															{getProfileInfoResult.payload.c_area_name})*/}
														</div>
													</h5>
												</div>
										</ListItem>
									}
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
													onClick={() => handleComingSoonPage("Home")}
												>
													Home
												</Button>

												<Button
													variant="contained"
													color="primary"
													className="header-quick-link mr-r-32"
													onClick={() => handleComingSoonPage("About")}
												>
													About Us
												</Button>
												<Button
													variant="contained"
													color="primary"
													className="header-quick-link mr-r-32"
													onClick={() => handleComingSoonPage("Shop")}
												>
													Shop
												</Button>
												<Button
													variant="contained"
													color="primary"
													className="header-quick-link mr-r-32"
													onClick={() => handleComingSoonPage("Contact")}
												>
													Contact Us
												</Button>
											</div>
											<div>
												
												<Link to="">
													<Button
														variant="contained"
														color="primary"
														className="stockist animate"
														onClick={() => handleComingSoonPage("Deal Of Day")}
													>
														{/*<img src={Package} alt="Package" />*/}
														Deal Of Day
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
			{/*) : null}*/}
		</>
	);
}
