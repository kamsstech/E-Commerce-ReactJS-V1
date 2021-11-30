import { Button, Checkbox, Snackbar } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import delete_icon from "../../../assets/images/icons/delete.svg";
import shortbook_icon from "../../../assets/images/shortbook_pdpIcon.svg";
import shortbook_colorIcon from "../../../assets/images/shortbook_colorIcon.svg";
import SellerDropDown from "../orderHistory/SellerDropDown";
import Fade from "@material-ui/core/Fade";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { convertToSlug } from '../../../util/Helper';
// const reactStringReplace = require('react-string-replace');
const SearchByProductResult = (props) => {
	const {
		searchKey,
		setSearchKey,
		searchByProductResult,
		click,
		deleteSearch,
		GetPdpPageItems,
		GetPdpPageSellerDetails,
		br_code,
		pdpPageItemsResult,
		pdpPageSellerDetailsResult,
		AddToCartAction,
		addToCartResult,
		CartCount,
		setSearchList
	} = props;



	console.log(searchByProductResult, "<<<<< searchByProductResult")

	// const searchProducts = (text) => {

	//   let matches = searchKey.filter((pro) => {

	//     const regex = new RegExp(`${text}`, "gi");
	//     return pro.product.match(regex);

	//   });
	//   searchByProductResult(matches);
	// };

	let tempArray = [];

	const [open, setOpen] = useState(false);

	const handleOpen = (itemCode) => {
		console.log(itemCode, "ITEMCODE");
		GetPdpPageSellerDetails(itemCode);
		GetPdpPageItems(itemCode)
		setOpen(true);
	};
	const [state, setState] = useState({
		open: false,
		Transition: Fade,
		message: "",
	});

	const [iconColor, setIconColor] = useState(tempArray);
	const handleIconColor = (index) => () => {
		let temp = [...iconColor];
		temp[index] = !temp[index];
		setIconColor(temp);
	};
	const [wishListColor, setWishListColor] = useState(tempArray);
	const handleWishListColor = (index) => () => {
		let temp = [...wishListColor];
		temp[index] = !temp[index];
		setWishListColor(temp);
	};
	const handleClickShortBookAdded = (Transition, name) => () => {
		setTimeout(() => {
			setState({
				open: true,
				Transition,
				message: `${name.toLowerCase()} successfully added to Shortbook`,
			});
		}, 500);
	};
	const handleClickShortBookRemoved = (Transition, name) => () => {
		setTimeout(() => {
			setState({
				open: true,
				Transition,
				message: `${name.toLowerCase()} removed from Shortbook`,
			});
		}, 500);
	};
	const handleClickWatchListAdded = (Transition, name) => () => {
		setTimeout(() => {
			setState({
				open: true,
				Transition,
				message: `${name.toLowerCase()} successfully added to Watchlist`,
			});
		}, 500);
	};
	const handleClickWatchListRemoved = (Transition, name) => () => {
		setTimeout(() => {
			setState({
				open: true,
				Transition,
				message: `${name.toLowerCase()} removed from Watchlist`,
			});
		}, 500);
	};
	const handleCloseButton = () => {
		setState({
			...state,
			open: false,
		});
	};

	const localStoreFunction = (itemname) => {
		// console.log(itemname,"^^^^^^^^^^^^^^^^^^^^^^^^^ itemname")
		if(itemname){
			return (
				// setSearchKey("")
				setSearchList(false)
			)
		}
		// setSearchKey("")
		// localStorage.setItem('prd', itemname);
		// localStorage.setItem('prd', itemname);
		// sessionStorage.setItem('prd', itemname);
		// localStorage['prd'] = itemname;

	};

	return (
		<>
			{/* {click && searchKey === "" &&
				<>
				<div className="recent-search-div">
						<p className="recent-search-title">RECENT SEARCHES</p>
						<p className="recent-search-title">Clear all
							<Button className="span-delete">
								<img src={delete_icon} alt="delete icon" onClick={deleteSearch}/>
							</Button>
						</p>
				</div>

				{searchByProductResult !== undefined && searchByProductResult.map(item => (
						<div className="web-search-result-list" key={item.c_item_code}>
				<Grid container>
					<Grid item xs={8}>
						<div className="web-search-sec">
							<h4 className="web-search-proname mb-8">{item.c_item_name}</h4>
						</div>
						<div className="web-search-sec">
							{
								item.c_variant_count === "0" ?
								<h5 className="web-search-pack mb-6">Pack Size: {item.c_pack_name}</h5> :
								null
							}
							
						</div>
						<div className="web-search-sec">
							<h5 className="web-search-manufature">{item.c_item_mfg_name}</h5>
						</div>
					</Grid>
					<Grid item xs={4} align="right">
						{
							item.c_variant_count === "0" ? <h4 className="web-search-price mb-12">₹ {item.n_max_mrp.toFixed(2)}</h4> :
							<h5 className="web-search-variant"> {item.c_variant_count} Varients</h5>
						}
						<div className="web-search-btn">
							{
								item.c_variant_count === "0" ?
							<Button className="shortbook">
							<img
							
								src={item.c_short_book_status !== "Y" ? shortbook_icon : shortbook_colorIcon}
								alt="addtoshortbook-icon-1"
								className="addtoshortbook-icon"
								//  onClick={handleClickShortBookAdded(GrowTransition, item.c_item_name)} 
								/>
							</Button>
							: ""
							}
							{
							item.c_variant_count === "0" ? <Button
								variant="contained"
								color="primary"
								className="fast-moving-addtocart"
								onClick={handleOpen}
							> add</Button> : null
							}
							
						</div>
					</Grid>
				</Grid>
						</div>
					))}
				</> 
			} */}

			{searchKey.length >= 3 && searchByProductResult.payload && (
				<>
					{searchByProductResult.payload &&  searchByProductResult.payload.length >0 ?  searchByProductResult.payload.map((item) => (
						<div className="web-search-result-list" key={item.c_item_code}>
							<Grid container>
								{item.c_sponsored === "Y" ? (
									<Grid item xs={12}>
										<p className="sponsor-text">Sponsored</p>
									</Grid>
								) : null}
								<Grid item xs={8}>
									<div className="web-search-sec">
										<Link to={`/pdp/${item.c_item_code}/${convertToSlug(item.c_item_name)}`}>
											<h4
												className="web-search-proname"
												onClick={() => localStoreFunction(item.c_item_name)}
											>
												{/* <span style={{ fontWeight: "900" }}>{searchKey}</span> */}
												{/* {item.c_item_name.slice(searchKey.length).toLowerCase()} */}
												{item.c_item_name.replace(searchKey.length).toLowerCase()}
											</h4>
										</Link>
									</div>
									<div className="web-search-sec">
										{item.c_variant_count === "N" ? (
											<h5 className="web-search-pack mb-6">
												Pack Size: {item.c_pack_name}
											</h5>
										) : null}
									</div>
									<div className="web-search-sec">
										<h5 className="web-search-manufature">
											{item.c_item_mfg_name}
										</h5>
									</div>
								</Grid>
								<Grid item xs={4} align="right">
									{/* {
										item.c_variant_count === "N" ? <h4 className="web-search-price mb-12">₹ {item.n_max_mrp.toFixed(2)}</h4> :
										<h5 className="web-search-variant"> {item.c_variant_count} Varients</h5>
									} */}

									{item.c_variant_count === "N" ? (
										<h4 className="web-search-price mb-12">
											₹ {item.n_max_mrp}
										</h4>
									) : (
										<h5 className="web-search-variant">
											{" "}
											{item.c_variant_count} Varients
										</h5>
									)}

									<div className="web-search-btn">
										{item.c_variant_count === "N" ? (
											<Button className="shortbook" >
												<img
													src={
														item.c_short_book_status === "N"
															? shortbook_icon : shortbook_colorIcon
													}
													alt="addtoshortbook-icon-1"
													className="addtoshortbook-icon"
													//  onClick={handleClickShortBookAdded(GrowTransition, item.c_item_name)}
												/>
											</Button>
										) : (
											""
										)}

										{item.c_variant_count === "N" ? (
											<Button
												variant="contained"
												color="primary"
												className="fast-moving-addtocart"
												onClick={() => handleOpen(item.c_item_code)}
											>
												{" "}
												add
											</Button>
										) : null}
									</div>
								</Grid>
							</Grid>
						</div>
					))
				:

				searchByProductResult.error  && (
					<h4 className="text-center">{searchByProductResult.error !=="" && searchByProductResult.error}</h4>
				)
				}


				 
				</>
			)}

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
		</>
	);
};

export default SearchByProductResult;
