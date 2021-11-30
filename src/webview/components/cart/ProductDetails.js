import React, { useEffect, useState } from "react";
import Fade from "@material-ui/core/Fade";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Snackbar from "@material-ui/core/Snackbar";
import TextField from "@material-ui/core/TextField";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Grow from "@material-ui/core/Grow";
import Injectable from "../../../assets/images/injectable.svg";
//images
import DeleteImg from "../../../assets/mobImages/delete-red/delete.png";
import { Button } from "@material-ui/core";

const ExpansionPanel = withStyles({
	root: {
		border: "1px solid rgba(0, 0, 0, .125)",
		boxShadow: "none",
		"&:not(:last-child)": {
			borderBottom: 0,
		},
		"&:before": {
			display: "none",
		},
		"&$expanded": {
			margin: "auto",
		},
	},
	expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
	root: {
		backgroundColor: "rgba(0, 0, 0, .03)",
		borderBottom: "1px solid rgba(0, 0, 0, .125)",
		marginBottom: -1,
		minHeight: 56,
		"&$expanded": {
			minHeight: 56,
		},
	},
	content: {
		"&$expanded": {
			margin: "12px 0",
		},
	},
	expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiExpansionPanelDetails);

function GrowTransition(props) {
	return <Grow {...props} />;
}

const ProductDetails = (props) => {
	const {
		itemDetail,
		openDeleteModal,
		branchId,
		index,
		backgroundRed,
		DeleteBySellerAction,
		deleteBySellerResult,
		CartCount,
		DeleteByIdAction,
		deleteByIdResult,
		GetCartItemAction,
		MoveToShortAction,
		moveToShortResult,
		UpdateCartItemAction,
		updateCartItemResult,
	} = props;


console.log(deleteByIdResult,"<<<<<<<<<<<<<&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& deleteByIdResult")

	const [optValue, setOptValue] = React.useState("one");
	const [gstAmt, setGstAmt] = React.useState(0);
	const [totalAmt, setTotalAmt] = React.useState(0);

	//   useEffect(() => {
	//     let temp = [];

	//     Object.entries(itemDetail.j_supplier).map((entry) => {

	//       temp = entry
	//     });

	//     setSuppliers(temp);
	//   }, []);

	// let totalAmt=  itemDetail.totalAmount;
	//   useEffect(() => {
	//     let totalAmt = 0;
	//     for (let i = 0; i < itemDetail.j_supplier.length; i++) {
	//       totalAmt += parseFloat(itemDetail.j_supplier[i].total);
	//     }
	//     setTotalAmt(totalAmt);
	//     setGstAmt(totalAmt * 0.12);
	//   }, [itemDetail.j_supplier]);

	const [state, setState] = useState({
		open: false,
		Transition: Fade,
		message: "",
	});

	const handleClickButton = (event, Transition, name, index, cart_code,item_code,seller_code) => {
	 
		
		event.stopPropagation();
		setState({
			open: true,
			Transition,
			message: `${name} deleted from cart`,
		});
			
		const body = {
			c_item_code: item_code,
			c_seller_code:seller_code
		};
		DeleteByIdAction(body);

		// const body1 = {
		//   n_branch_id: branchId,
		// };
		// GetCartItemAction(body1);


		// handleDeleteItem(name, index, cart_code,item_code,seller_code);
		// const body = {
		//   c_item_code: item_code,
		//   c_seller_code:seller_code
		// };
		// DeleteByIdAction(body);
		// GetCartItemAction();
		return false;
	};

	

	const handleClickShortButton = (
		e,
		Transition,
		name,
		item_code,
		cart_code,
		seller_code
	) => {
		e.stopPropagation();

		const body = {
			c_seller_code:seller_code,
			c_item_code: item_code,
		};
		MoveToShortAction(body);

		setState({
			open: true,
			Transition,
			message: `${name} Moved to Shortbook`,
		});

	 
	};
	const handleCloseButton = () => {
		setState({
			...state,
			open: false,
		});
	};

	const handleSelect = (event, qty, item_code,seller_code) => {
		setOptValue(event.target.value);

		console.log(event.target.value, "HANDLE CHANGE");
		console.log(qty, "<<qty");
		console.log(item_code, "<<item_code");
		console.log(seller_code, "<< sellercode");

		const body = {
			c_seller_code: seller_code,
			c_item_code:item_code,
			n_qty: event.target.value,
		};
		UpdateCartItemAction(body);
		
	};



	const [toggle, setToggle] = React.useState(false);
	const handleToggle = () => {
		console.log("toggle");
		setToggle(!toggle);
	};

	const handleDelete = (e,seller_code) => {
		console.log(e,"<<e")
		const body={
			c_seller_code:seller_code
		}
		DeleteBySellerAction(body)
		e.stopPropagation();
		openDeleteModal();
		// const body ={
		//   n_branch_id:branchId
		// }
		// GetCartItemAction(body);
		return false;
	};

useEffect(() => {
		if(moveToShortResult.message !== "" && moveToShortResult.statuscode === 0){
			
			const body ={
				n_branch_id:branchId
			}
			CartCount(body);
			GetCartItemAction(body);
		}
}, [moveToShortResult])

useEffect(() => {
	if(deleteByIdResult.message !== "" && deleteByIdResult.statuscode === 0){
		const body ={
			n_branch_id:branchId
		}
		CartCount(body);
		GetCartItemAction(body);
	}
}, [deleteByIdResult])

useEffect(() => {
	console.log(updateCartItemResult,"<<<<< updateCartItemResult")
	if(updateCartItemResult.statuscode === 0){
		const body ={
			n_branch_id:branchId
		}
		GetCartItemAction();
		
	}
}, [updateCartItemResult])
	return (
		<>
			{/* <Snackbar
				open={state.open}
				onClose={handleCloseButton}
				TransitionComponent={state.Transition}
				message={state.message}
				key={state.Transition.name}
				autoHideDuration={2000}
				action={
					<React.Fragment>
						<Checkbox
							icon={<CheckBoxIcon />}
							color="primary"
							className="msg-checkbox checkbox-listItem"
						/>
					</React.Fragment>
				}
			/> */}
			{itemDetail.j_supplier &&
				itemDetail.j_supplier.map((data, index) => (
					<div key={index}>
						<div
									className={
										index == 0 && backgroundRed
											? "deliver-to-add-wrapper pt-0 pd-0 bg-red"
											: "deliver-to-add-wrapper pt-0 pd-0 relative"
								}
							>
								<div
									className={
										index == 0 && backgroundRed
											? "mob-cart-items-wrapper web-cart-items-wrapper bg-red"
											: "mob-cart-items-wrapper web-cart-items-wrapper"
									}
								>
									<ExpansionPanel defaultExpanded>
										<ExpansionPanelSummary
											aria-controls="panel1a-content"
											id="panel1a-header"
										>
											<div
												className="mob-cartitems-flex-sec mob-cartitems-flex-sec1"
												onClick={handleToggle}
											>
												{index == 0 && backgroundRed ? (
													<>
														{toggle ? <AddIcon /> : <RemoveIcon />}
														<h4>{data.c_seller_name} ({data.c_seller_wise_cart_count} Items)</h4>
														<div className="cart-action-btn">
															<Button
																variant="outlined"
																className="delete-cart-button"
																onClick={(e) => handleDelete(e,data.c_seller_code)}
															>
																Delete Cart
															</Button>
															<Button variant="outlined" className="reassign-btn">
																Reassign
															</Button>
														</div>
													</>
												) : (
													<>
														{toggle ? <AddIcon /> : <RemoveIcon />}
														{/* {
															itemDetail.j_supplier.map((item, index)=>(
																<h4>{item.c_supplier_name} </h4>
															))
														} */}
														<h4>
															{data.c_seller_name} (
															{data.n_seller_cart_count} items)
														</h4>
													</>
												)}
											</div>
										</ExpansionPanelSummary>

										<ExpansionPanelDetails>
											<div
												className={
													index == 0 && backgroundRed
														? "mob-cartitems-sec bg-red"
														: "mob-cartitems-sec"
												}
											>
												<div className="cart-items-list b-0 pt-0 pb-0">
													<div className="cart-items-list-productimg price-left">
														<h4 className="cart-products-list-title">
															Product Details
														</h4>
													</div>
													<div className="cart-items-list-productdetails">
														<div className="cart-item-list-left"></div>
														<div className="cart-item-list-right p-0">
															<h4 className="cart-products-list-title width-33">
																Quantity
															</h4>
															<h4 className="cart-products-list-title width-33 text-right">
																Total
															</h4>
														</div>
													</div>
												</div>

												{data.j_items &&
													data.j_items.map((item, index) => (
														<div>
															<div className="cart-items-list" key={index}>
																<div className="cart-items-list-productimg">
																	{item.ac_thumbnail_images === "" ? (
																		<img src={Injectable} alt="ProductImg" />
																	) : (
																		<img
																			src={item.ac_thumbnail_images}
																			alt="ProductImg"
																		/>
																	)}
																</div>
																<div className="cart-items-list-productdetails">
																	<div className="cart-item-list-left">
																		<div className="cart-items-list-productdetails-title">
																			<h4>{item.c_item_name}</h4>
																		</div>
																		<h5 className="cart-items-list-productdetails-packsize">
																			Pack Size: {item.c_pack_name}
																		</h5>
																		<h5 className="cart-items-list-productdetails-mrp">
																			<span
																				style={{
																					textDecorationLine: "line-through",
																					textDecorationStyle: "solid",
																					textDecorationColor: "#ef2b4a",
																				}}
																			>
																				MRP ₹ {item.n_mrp}
																			</span>
																			<span>PTR ₹ {item.c_sale_rate}</span>
																			<span>GST: {item.c_gst_code}%</span>
																			<span style={{ color: "#2ec4b6" }}>
																				Scheme {item.c_scheme_qty}
																			</span>
																		</h5>
																		<h5 className="cart-items-list-productdetails-packsize">
																			Contains<span>{item.c_contain_name}</span>
																		</h5>
																		<div className="display-flex align-middle mt-10">
																			<div
																				className="cart-delete-icon"
																				onClick={(e) => {
																					handleClickButton(
																						e,
																						GrowTransition,
																						item.c_item_name,
																						index,
																						item.c_cart_code,
																						item.c_item_code,
																						data.c_seller_code
																					);
																				}}
																			>
																				<img src={DeleteImg} alt="DeleteImg" />
																			</div>

																			<h4
																				className="move-toshort-link"
																				onClick={(e) =>
																					handleClickShortButton(
																						e,
																						GrowTransition,
																						item.c_item_name,
																						item.c_item_code,
																						item.c_cart_code,
																						data.c_seller_code
																						// itemDetail.c_cart_code
																					)
																				}
																			>
																				Move to Shortbook
																			</h4>
																		</div>
																	</div>

																	<div className="cart-item-list-right">
																		<div className="width-33">
																			<TextField
																				name="email"
																				select
																				autoComplete="off"
																				margin="normal"
																				variant="outlined"
																				value={item.n_qty}
																				onChange={handleSelect}
																				defaultValue={item.n_qty}
																				onChange={(e) =>
																					handleSelect(
																						e,
																						item.n_qty,
																						item.c_item_code,
																						data.c_seller_code
																					)
																				}
																				className="mob-pro-drugcount"
																			>
																			 
																				<option value={10}>10</option>
																				<option value={20}>20</option>
																				<option value={30}>30</option>
																				<option value={40}>40</option>
																				<option value={50}>50</option>
																				<option value={60}>60</option>
																				<option value={70}>70</option>
																				<option value={80}>80</option>
																				<option value={90}>90</option>
																				<option value={100}>100</option>
																			</TextField>
																		</div>
																		<h3 className="web-scheme width-33 text-right">
																			{item.n_total}
																		</h3>
																	</div>
																</div>
															</div>

															
														</div>
													))}

												
														<div >
															<div className="cart-items-list b-0">
																<div className="cart-items-list-productimg price-left"></div>
																<div className="cart-items-list-productdetails">

																	<div className="width-100">
																		<h4 className="cart-price">
																			Price Details ({data.n_seller_cart_count} Items)
																		</h4>

																		<div className="mob-price-details-flexsec">
																			<h4>Total Amount</h4>
																			<h4>₹ {data.n_seller_item_amount}</h4>
																		</div>
																		<div className="mob-price-details-flexsec">
																			<h4>Total GST</h4>
																			<h4>₹ {data.n_seller_gst_amount}</h4>
																		</div>
																		<div className="mob-price-details-flexsec">
																			<h3 className="m-0">
																				Total Amount + Total GST
																			</h3>
																			<h3 className="delivery-charge-text m-0">
																				₹{" "} {data.n_seller_net_amount}
																				{/* {parseFloat( data.c_total_amount
																				)} */}
																			</h3>
																		</div>
																	</div>
																</div>
															</div>
														</div>
												 
											</div>
										</ExpansionPanelDetails>
									</ExpansionPanel>
								</div>
								<div className="cartBorderBottom">
								</div>
							</div>
					</div>
				))}
		</>
	);
};

export default ProductDetails;
