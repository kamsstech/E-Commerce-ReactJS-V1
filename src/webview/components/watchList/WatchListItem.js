import React from "react";
import { useState, useEffect,useRef } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Fade from "@material-ui/core/Fade";
import Snackbar from "@material-ui/core/Snackbar";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";

import { makeStyles, createStyles } from "@material-ui/core/styles";

import blue_eye_icon from "../../../assets/images/blue_eye_icon.svg";
import grey_eye_icon from "../../../assets/images/grey_eye_icon.svg";
import shortbook_icon from "../../../assets/images/shortbook_pdpIcon.svg";
import shortbook_colorIcon from "../../../assets/images/shortbook_colorIcon.svg";
import commerce_offer from "../../../assets/images/commerce-and-shopping_plp_page.svg";

import oral_sus from "../../../assets/images/oral_sus.svg";
import capsules from "../../../assets/images/capsules.svg";
import injectable from "../../../assets/images/injectable.svg";
import tablet from "../../../assets/images/tablet.svg";
import drops from "../../../assets/images/drops.svg";
import CrossImg from "../../../assets/images/cross-sb.svg";
import WatchlistProductVisibility from "./WatchlistProductVisibility";
import SellerDropDown from "../orderHistory/SellerDropDown";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";
function GrowTransition(props) {
	console.log("props", props);
	return <Grow {...props} />;
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
		root: {
			width: "100%",
			maxWidth: 360,
			backgroundColor: theme.palette.background.paper,
			paddingLeft: theme.spacing(0),
		},
		nested: {
			paddingLeft: theme.spacing(0),
			alignItems: "left",
			paddingTop: theme.spacing(0),
		},
		root1: {
			maxWidth: "100%",
			"& > * + *": {
				marginTop: theme.spacing(3),
			},
		},
	})
);
const WatchListItem = (props) => {
	const classes = useStyles();
	const {
		GetWatchlistItems,
		RemoveWatchlistItems,
		watchlistItemsResult,
		AddShortbookItems,
		addShortbookResult,
		RemoveShortbookItems,
		removeShortbookResult,
		watchlistCountRes,
		shortbookCountRes,
		br_code,
		GetPdpPageItems,
		GetPdpPageSellerDetails,
		pdpPageItemsResult,
		pdpPageSellerDetailsResult,
		AddToCartAction,
		addToCartResult,
		totalList,
		setTotalList,
		totalLimit,
		setLimitTotal,
		CartCount
	} = props;

	const [array, setArray] = useState([]);

	const [page, setPage] = useState(0);
	const [loadStatus, setloadStatus] = useState(false);
	const [notFound, setNotFound] = useState(false);
	const loader = useRef(null);
	const [resultCount, setresultCount] = useState(0);
	let pageNumber = 0;
	let limit = 20;
	
	useEffect(() => {
		setShortbookIndex(0);
		setTotalList(0);
		const body = {
			c_type: "1",
			n_page: pageNumber,
			n_limit: limit,
		};
		GetWatchlistItems(body);
	}, []);

	
	const handleLoadMore = (e,nextPage) => { 
		 const body = {
			c_type: "1",
			n_page: nextPage,
			n_limit: limit,
		};
		 GetWatchlistItems(body);
	}
	useEffect(() => {
		setloadStatus(false);
		if(page === 0)
		{
				setArray([]);
		}
		if(watchlistItemsResult.statuscode === 0) {
			setArray([...array, ...watchlistItemsResult.payload?.data]);
			setTotalList(watchlistItemsResult.payload.n_total);
			setresultCount(watchlistItemsResult.payload.data.length)
			setloadStatus(true);
			setNotFound(false);
		}
		else if(watchlistItemsResult.statuscode === 5) {
				setloadStatus(false);
				setNotFound(true);
				if(page === 0)
				{
					setTotalList(0);
				}
		}
		else if(watchlistItemsResult.statuscode === 100) 
		{
			setloadStatus(false);
			setNotFound(true);
			if(page === 0)
			{
				setTotalList(0);
			}
		}
	}, [watchlistItemsResult]);

	// if(watchlistItemsResult.payload.n_total)
	// {
	//   setTotalList(watchlistItemsResult.payload.n_total);
	// }

	setLimitTotal(array.length);
	

	let tempArray = [];
	if (array) {
		for (let i = 0; i <= array.length; i++) {
			tempArray.push(false);
		}
	}

	const [open, setOpen] = React.useState(false);
	
	const [openModal, setOpenModal] = React.useState(true);
	const handleOpen = (item_code) => {
		console.log(item_code, "WL item_code");
		GetPdpPageItems(item_code);
		GetPdpPageSellerDetails(item_code);
		setOpen(true);
	};
	const [state, setState] = useState({
		open: false,
		Transition: Fade,
		message: "",
	});
	const [shortbookIndex, setShortbookIndex] = useState(0);
	const [shortbookItemc, setShortbookItemc] = useState("");
	const [shortLoading, setShortLoading] = useState(tempArray);

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
	};
	const handleCross = (Transition, item_code) => () => {
		const body = {
			c_item_code: item_code,
		};
		RemoveWatchlistItems(body);
		let target = "";
		let nameItem = array.map((item) => {
			if (item.c_item_code == item_code) {
				target = item.c_item_name;
			}
		});

		setTimeout(() => {
			setState({
				open: true,
				Transition,
				message: `${target.toLowerCase()} removed from Watchlist`,
			});
		}, 500);
		let newArray = array.filter((el) => el.c_item_code !== item_code);
		setArray(newArray);
		let sCount = parseInt(watchlistCountRes.payload.data.count) - parseInt(1);
		watchlistCountRes.payload.data.count = sCount;
	 
	};
	const handleCloseButton = () => {
		setState({
			...state,
			open: false,
		});
	};

	const [scan, setScan] = useState(false);

	const closeModal = () => {
		setScan(!scan);
	};
	const [eyeIconColor, setEyeIconColor] = useState(tempArray);
	const handleEyeIconColor = (index) => () => {
		let temp = [...eyeIconColor];
		temp[index] = !temp[index];
		setEyeIconColor(temp);
		setScan(true);
	};
	useEffect(() => {
		let temp = [...shortLoading];

		if (addShortbookResult.payload == "Success") {
			let target = "";
			let nameItem = array.map((item) => {
				if (item.c_item_code == shortbookItemc) {
					target = item.c_item_name;
					item.c_shortbook_status = "Y";
				}
			});
			setTimeout(() => {
				setState({
					open: true,
					message: `${target.toLowerCase()} successfully added to Shortbook`,
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

		if (removeShortbookResult.payload == "Success") {
			let target = "";
			let nameItem = array.map((item) => {
				if (item.c_item_code == shortbookItemc) {
					target = item.c_item_name;
					item.c_shortbook_status = "N";
				}
			});
			setTimeout(() => {
				setState({
					open: true,
					message: `${target.toLowerCase()} removed from Shortbook`,
				});
			}, 500);
			temp[shortbookIndex] = removeShortbookResult.loading;
			setShortLoading(temp);
			removeShortbookResult.payload = "";
			let sCount = parseInt(shortbookCountRes.payload.data.count) - parseInt(1);
			shortbookCountRes.payload.data.count = sCount;
			
		}
	}, [removeShortbookResult]);
	
	return (
		<div>
			<Grid container spacing={0} className="fullList">
				{
					Array.isArray(array) && array.length > 0 ?
					array.map((item, index) => (
						<Grid item xs={6} key={item.c_item_code}>
							<div className={index % 2 ? "evenList" : "oddList"}>
								<div className="box-view-tile-1">
									<div className="box-view-tile-imgsec-1">
										{item.c_item_name.toLowerCase().includes("cap") ? (
											<img
												src={capsules}
												alt="homeSliderImg-1"
												className="imgsec"
											/>
										) : item.c_item_name.toLowerCase().includes("syrup") ? (
											<img
												src={oral_sus}
												alt="homeSliderImg-1"
												className="imgsec"
											/>
										) : item.c_item_name
												.toLowerCase()
												.includes("injectable") ? (
											<img
												src={injectable}
												alt="homeSliderImg-1"
												className="imgsec"
											/>
										) : item.c_item_name.toLowerCase().includes("tab") ? (
											<img
												src={tablet}
												alt="homeSliderImg-1"
												className="imgsec"
											/>
										) : item.c_item_name.toLowerCase().includes("drops") ? (
											<img
												src={drops}
												alt="homeSliderImg-1"
												className="imgsec"
											/>
										) : (
											<img
												src={tablet}
												alt="homeSliderImg-1"
												className="imgsec"
											/>
										)}
									</div>
									<div className="box-view-tile-details-1">
										<div>
										 {/* <img
												src={commerce_offer}
												alt="wishListImg-1"
												className="box-view-tile-wishlist-1"
											/>*/}
											<div
												className="box-view-tile-fav-cross-1 cursor"
												onClick={handleCross(GrowTransition, item.c_item_code)}
											>
												<img src={CrossImg} alt="cross-img" />
											</div>
											<h4 className="medicine-title-1">
												{item.c_item_name.toLowerCase()}
											</h4>
											<h5 className="medicine-packsize-1">
												Pack Size: {item.c_pack}
											</h5>
											<div className="medicine-price">
												<h5 className="medicine-mrp-1">
													<del>
														<span className="mrp-del">
															MRP &#8377; {item.n_mrp}
														</span>
													</del>
												</h5>
												<h6 className="medicine-rate-1">
													{" "}
													Rate &#8377; {item.c_rate}
												</h6>
												{
													item.c_scheme_qty!='' && item.c_scheme_qty!=null ?
													<h6 className="medicine-rate-1">
														{" "}
														Scheme {item.c_scheme_qty}
													</h6> : ""
												}
											</div>
											<p className="medicine-preferred-seller">
												{" "}
												Preferred Seller: <span>
												<Link className="item-mfac-color" to={`/plp/seller?index=0&q=${item.c_seller_code}&n=${item.c_seller_name}`}>
													{item.c_seller_name}
												</Link>
												</span>{" "}
											</p>
											<h5 className="medicine-contains-1">
												Contains{" "}
												<span className="letter-spacing">
													{item.c_contains}
												</span>
											</h5>
										</div>
										<div className="icons">
											<Tooltip
												title="Product Visibility"
												TransitionComponent={Zoom}
											>
												<Button
													variant="contained"
													color="primary"
													className="watchlist"
													onClick={handleEyeIconColor(index)}
												>
													{eyeIconColor[index] === true ? (
														<img
															src={blue_eye_icon}
															alt="eye-icon"
															className="wishList-icon"
														/>
													) : (
														<img
															src={grey_eye_icon}
															alt="eye-icon"
															className="wishList-icon"
														/>
													)}
												</Button>
											</Tooltip>
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
													) : item.c_shortbook_status === "Y" ? (
														<img
															src={shortbook_colorIcon}
															alt="shortBookImg-1"
															className="wishList-icon"
															onClick={handleClickShortBookRemoved(
																item.c_item_name,
																item.c_item_code,
																index
															)}
														/>
													) : (
														<img
															src={shortbook_icon}
															alt="wishLishortBookImg-1"
															className="wishList-icon"
															onClick={handleClickShortBookAdded(
																item.c_item_name,
																item.c_item_code,
																index
															)}
														/>
													)}
												</Button>
											</Tooltip>
											
											<Button
												variant="contained"
												color="primary"
												className="box-view-addtocart-1"
												onClick={() => handleOpen(item.c_item_code)}
											>
												Add To Cart
											</Button>
										</div>
									</div>
								</div>
							</div>
						</Grid>
					))
					:
					<Grid item xs={12}>
						<div className="notFound">
								<Alert severity="error"> <span className="font-weight-bold">Oops..!!!</span> Watchlist products not found.</Alert>
						</div>
					</Grid>
				}
			</Grid>
			{
				Array.isArray(array) && array.length > 0 ?
				<div className="loading" xs={12}>
					{
						loadStatus === false && notFound === false ? (
							<CircularProgress className="mr-l-12" size={32} thickness={4} />
						 ):""
					}
					{
						loadStatus === true && notFound === false && resultCount >= 10 ? (
						<Button
								variant="contained"
								color="primary"
								className="home-title-sectionbtn"
								onClick={(e) => handleLoadMore(e, page)}
							>
								Load More
						 </Button>):""
					 }
				</div> : ""
			}
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

			<div className={classes.root1}>
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
				<WatchlistProductVisibility openModal={scan} closeModal={closeModal} />
			</div>
		</div>
	);
};

export default WatchListItem;
