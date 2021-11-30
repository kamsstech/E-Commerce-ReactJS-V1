import * as React from "react";
import { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Slider from "react-slick";
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Fade from '@material-ui/core/Fade';
import Snackbar from '@material-ui/core/Snackbar';
import Grow from "@material-ui/core/Grow";

import homeSliderImg from "../../../assets/images/home-slider-img.jpg";
import homeSliderImg1 from "../../../assets/images/home-slider-img1.jpg";
import BackArrow from "../../../assets/images/down-arrow-line-grey.svg";
import ForwardArrow from "../../../assets/images/leftarrowline.svg";
import wishlist from "../../../assets/images/wishlist_plp_page.svg"
import wishlist_colorIcon from "../../../assets/images/wishlist_colorIcon.svg";
import commerce_offer from "../../../assets/images/commerce-and-shopping_plp_page.svg"

import { FastMovingItemsEntity, FastMovingItemsResultEntity } from "../../../common/model";
import SellerDropDown from "../orderHistory/sellerDropDown";
import { Link } from "react-router-dom";


import dolo from "../../../assets/images/dolo.jpg";
import shortbook_icon from "../../../assets/images/shortbook_pdpIcon.svg";
import shortbook_colorIcon from "../../../assets/images/shortbook_colorIcon.svg";

import oral_sus from "../../../assets/images/oral_sus.svg";
import capsules from "../../../assets/images/capsules.svg";
import injectable from "../../../assets/images/injectable.svg";
import tablet from "../../../assets/images/tablet.svg";
import drops from "../../../assets/images/drops.svg";
import dolo_156 from "../../../assets/images/products/dolo-156-25mg-@3x.png";
import alpha from "../../../assets/images/products/alpha@3x.png";
import dolobalm from "../../../assets/images/products/dolo-balm@3x.png";
import step_syrup from "../../../assets/images/products/Step-Syrup@3x.png";
import voltaren from "../../../assets/images/products/voltaren@3x.png";
// interface Props {
//   GetFastMovingItems(): void;
//   fastMovingItemsResult: FastMovingItemsEntity;
// }

function SampleNextArrow(props) {
	const { style, onClick } = props;
	return (
		<div >
			<img src={BackArrow} alt="arrow" />
		</div>
	);
}
function SamplePrevArrow(props) {
	const { style, onClick } = props;
	return (
		<div >
			<img src={ForwardArrow} alt="arrow" />
		</div>
	);
}
function GrowTransition(props) {
	return <Grow {...props} />;
}
const FastMovingMedicines = (props) => {
	const { GetFastMovingItems, fastMovingItemsResult } = props;

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
		nextArrow: (<SlickButtonFix><div className="arrowsNext" ><SampleNextArrow /></div></SlickButtonFix>),
		prevArrow: (<SlickButtonFix><div className="arrowsPrev"><SamplePrevArrow /></div></SlickButtonFix>)
	};
	let payload = [
		{
				c_item_img: `${dolo_156}`,
				c_item_name: "Dolo 250 mg Syrup",
				c_item_code: "1",
				c_pack_name: " 60ml syrup",
				c_cont_name: "Paracetamol",
				n_mrp: 38.50,
		},
		{
				c_item_img: `${alpha}`,
				c_item_name: "Alpha-HA Syrup",
				c_item_code: "2",
				c_pack_name: " 60ml syrup",
				c_cont_name: "Paracetamol",
				n_mrp: 95.50,
		},
		{
				c_item_img: `${dolobalm}`,
				c_item_name: "DoloBalm 25gm Tube",
				c_item_code: "3",
				c_pack_name: " 25 gm tube",
				c_cont_name: "Paracetamol",
				n_mrp: 65.50,
		},
		{
				c_item_img: `${voltaren}`,
				c_item_name: "Voltaren Dolo 25 mg...",
				c_item_code: "4",
				c_pack_name: " Strip of 15 tablets",
				c_cont_name: "Paracetamol",
				n_mrp: 95.50,
		},
		{
			c_item_img: `${step_syrup}`,
			c_item_name: "Step Syrup 25 mg...",
			c_item_code: "5",
			c_pack_name: " Strip of 15 tablets",
			c_cont_name: "Paracetamol",
			n_mrp: 95.50,
		},
		{
				c_item_img: `${dolo_156}`,
				c_item_name: "Voltaren Dolo 25 mg...",
				c_item_code: "6",
				c_pack_name: " Strip of 10 tablets",
				c_cont_name: "Paracetamol",
				n_mrp: 95.50,
		}
];

	useEffect(() => {
		GetFastMovingItems()
	}, [])
	console.log(fastMovingItemsResult.payload, "fastmoving")
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};

	let tempArray = [];
	let payloadLength = Array.isArray(fastMovingItemsResult.payload) && fastMovingItemsResult.payload.length
	for (let i = 0; i <= payloadLength; i++) {
		tempArray.push(false)
	}

	const [state, setState] = useState({
		open: false,
		Transition: Fade,
		message: "",
	});
	// console.log(fastMovingItemsResult, Array.isArray(fastMovingItemsResult.payload) && fastMovingItemsResult.payload.length, "fastMovingItemsResult");
	const [iconColor, setIconColor] = useState(tempArray);
	const handleIconColor = (index) => () => {
		let temp = [...iconColor]
		temp[index] = !temp[index];
		setIconColor(temp);
		console.log(index, iconColor)
	}
	const [wishListColor, setWishListColor] = useState(tempArray);
	const handleWishListColor = (index) => () => {
		let temp = [...wishListColor]
		temp[index] = !temp[index];
		setWishListColor(temp);
	}
	const handleClickShortBookAdded = (Transition, name) => () => {
		setTimeout(() => {
			setState({
				open: true,
				Transition,
				message: `${name.toLowerCase()} successfully added to Shortbook`,
			});

		}, 500)

	};
	const handleClickShortBookRemoved = (Transition, name) => () => {
		setTimeout(() => {
			setState({
				open: true,
				Transition,
				message: `${name.toLowerCase()} removed from Shortbook`,
			});

		}, 500)

	};
	const handleClickWatchListAdded = (Transition, name) => () => {
		setTimeout(() => {
			setState({
				open: true,
				Transition,
				message: `${name.toLowerCase()} successfully added to Watchlist`,
			});
		}, 500)
	}
	const handleClickWatchListRemoved = (Transition, name) => () => {
		setTimeout(() => {
			setState({
				open: true,
				Transition,
				message: `${name.toLowerCase()} removed from Watchlist`,
			});
		}, 500)
	}
	const handleCloseButton = () => {
		setState({
			...state,
			open: false,
		});
	};

	// console.log(fastMovingItemsResult,"fastMovingItemsResult>>>>")
	return (
		<>

<div>
				<div className="home-title-section">
				<div>
										<h4>Top/Most Ordered Products</h4>
										<h5>In Bangalore</h5>
								</div>
								<div>

										<Link to="/" >
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
				{(payload).map((item, index) => (
												<div key={item.c_item_code} >
														<div className="fast-moving-sec-25" key={item.c_item_code} >
																<div className="fast-moving-tile">
																		<div className="fast-moving-tile-imgsec" >
																				<Link to={`/${item.c_item_code}/${item.c_item_name}`} key={item.c_item_code}>
																						<img 
																						src={`${item.c_item_img}`}
																						alt="homeSliderImg" 
																						/>
																						<img src={commerce_offer} alt="wishListImg-1" className="fast-moving-tile-offer" />
																				</Link>
																				
																								<div onClick={handleWishListColor(index)}   >
																								<Tooltip title="Watchlist" TransitionComponent={Zoom}>
																										{wishListColor[index] === true ?
																												<img src={wishlist_colorIcon} alt="wishListImg-1" className="fast-moving-tile-fav color"  onClick={handleClickWatchListRemoved(GrowTransition,  item.c_item_name)} /> :
																												<img src={wishlist} alt="wishListImg-1" className="fast-moving-tile-fav" onClick={handleClickWatchListAdded(GrowTransition,  item.c_item_name)} />}
																							 </Tooltip>
																								</div>
																						
																		</div>
																		<div className="fast-moving-tile-details">
																				<div >
																						<Link to={`/${item.c_item_code}/${item.c_item_name}`} key={item.c_item_code}>
																						<Tooltip title={item.c_item_name} TransitionComponent={Zoom}>
																								<h4 className="medicine-title">{item.c_item_name.toLowerCase()}</h4>
																								</Tooltip>
																								<h5 className="medicine-packsize">Pack Size: {item.c_pack_name}</h5>
																								<h5 className="medicine-mrp">MRP &#8377; {item.n_mrp.toFixed(2)}</h5>
																								<h5 className="medicine-contains">
																										Contains<span> {item.c_cont_name.toLowerCase()}</span>
																								</h5>
																						</Link>
																				</div>
																				<div className="fast-moving-buttons-sec">
																						<Button
																								variant="contained"
																								color="primary"
																								className="fast-moving-addtocart"
																								onClick={handleOpen}
																						>
																								Add To Cart
														 </Button>
																						<Tooltip title="Shortbook" TransitionComponent={Zoom}>
																								<div className="addtoshortbook-icon-sec" onClick={handleIconColor(index)} >
																										{iconColor[index] === true ? <img src={shortbook_colorIcon} alt="addtoshortbook-icon-1" className="addtoshortbook-icon" onClick={handleClickShortBookRemoved(GrowTransition, item.c_item_name)} />
																												: <img src={shortbook_icon} alt="addtoshortbook-icon-1" className="addtoshortbook-icon" onClick={handleClickShortBookAdded(GrowTransition, item.c_item_name)} />}
																								</div>
																						</Tooltip>
																				</div>


																		</div>
																</div>
														</div>
												</div>
												
										))}
				</Slider>

				</div>

		</div>




		<div>
			{Array.isArray(fastMovingItemsResult.payload) && fastMovingItemsResult.payload.length !== 0 &&
				<>
					<div className="home-title-section">
						<div>
							<h4>Top/Most Ordered Products</h4>
							<h5>In Bangalore</h5>
						</div>
						<div>

							<Link to="/plp" >
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

				 


					{/* <div className="fast-moving-sec">
						<Slider {...settings} className="preferred-seller-slider">
							{(fastMovingItemsResult.payload).map((item, index) => (
								<div key={item.c_item_code} >
									<div className="fast-moving-sec-25" key={item.c_item_code} >
										<div className="fast-moving-tile">
											<div className="fast-moving-tile-imgsec" >
												<Link to={`/pdp/${item.c_item_code}/${item.c_item_name}`} key={item.c_item_code}>
													{item.ac_thumbnail_images && item.ac_thumbnail_images.length > 0 &&
													<img src={item.ac_thumbnail_images[0] == "-" ? tablet : item.ac_thumbnail_images[0]  } alt="homeSliderImg" className="imgsec top-img" /> 
														// item.c_item_name.includes("TAB") ? <img src={tablet} alt="homeSliderImg-1" className="imgsec top-img" /> : item.c_item_name.includes("CAP") ? <img src={capsules} alt="homeSliderImg-1" className="imgsec top-img" /> :item.c_item_name.toLowerCase().includes("oral_sus") ? <img src={oral_sus} alt="homeSliderImg-1" className="imgsec top-img" /> : item.c_item_name.toLowerCase().includes("injectable") ? <img src={injectable} alt="homeSliderImg-1" className="imgsec top-img" /> :item.c_item_name.toLowerCase().includes("drops") ? <img src={drops} alt="homeSliderImg-1" className="imgsec top-img" /> : <img src={drops} alt="homeSliderImg-1" className="imgsec top-img"/>
													}
																 <img src={ac_thumbnail_images} alt="homeSliderImg" />
													<div className="fast-moving-tile-gst">GST {item.c_gst_code}%</div>

													<img src={commerce_offer} alt="wishListImg-1" className="fast-moving-tile-offer" />
												</Link>

												<div onClick={handleWishListColor(index)}   >
													<Tooltip title="Watchlist" TransitionComponent={Zoom}>
														{wishListColor[index] === true ?
															<img src={wishlist_colorIcon} alt="wishListImg-1" className="fast-moving-tile-fav color" onClick={handleClickWatchListRemoved(GrowTransition, item.c_item_name)} /> :
															<img src={wishlist} alt="wishListImg-1" className="fast-moving-tile-fav" onClick={handleClickWatchListAdded(GrowTransition, item.c_item_name)} />}
													</Tooltip>
												</div>

											</div>
											<div className="fast-moving-tile-details">
												<div >
													<Link to={`/pdp/${item.c_item_ucode}/${item.c_item_name}`} key={item.c_item_ucode}>
														<Tooltip title={item.c_item_name.toLowerCase()} TransitionComponent={Zoom} className="capital-tooltip">
															<h4 className="medicine-title">{item.c_item_name.toLowerCase()}</h4>
														</Tooltip>
														<h5 className="medicine-packsize">Pack Size: {item.c_pack_size}</h5>
														<h5 className="medicine-mrp">MRP &#8377; {item.n_max_mrp.toFixed(2)}</h5>
														<h5 className="medicine-contains">
															Contains<span> {item.c_contains}</span>
														</h5>
													</Link>
												</div>
												<div className="fast-moving-buttons-sec">
													<Button
														variant="contained"
														color="primary"
														className="fast-moving-addtocart"
														onClick={handleOpen}
													>
														Add To Cart
														 </Button>
													<Tooltip title="Shortbook" TransitionComponent={Zoom}>
														<div className="addtoshortbook-icon-sec" onClick={handleIconColor(index)} >
															{iconColor[index] === true ? <img src={shortbook_colorIcon} alt="addtoshortbook-icon-1" className="addtoshortbook-icon" onClick={handleClickShortBookRemoved(GrowTransition, item.c_item_name)} />
																: <img src={shortbook_icon} alt="addtoshortbook-icon-1" className="addtoshortbook-icon" onClick={handleClickShortBookAdded(GrowTransition, item.c_item_name)} />}
														</div>
													</Tooltip>
												</div>


											</div>
										</div>
									</div>
								</div>
								// </Link>
							))}

						</Slider>
					</div> */}
				</>}

			<SellerDropDown isOpen={open} setIsOpen={setOpen} />
			<Snackbar
				open={state.open}
				onClose={handleCloseButton}
				TransitionComponent={state.Transition}
				message={state.message}
				key={state.Transition.name}
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
		</>
	);
};

export default FastMovingMedicines;
