import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import DeliverTo from "./DeliverTo";
import OrderingBranch from "./OrderingBranch";
import ProductDetails from "./ProductDetails";
import PriceDetails from "./PriceDetails";
import SuggestedProduct from "./SuggestedProduct";
import Wizard from "./Wizard";

//popups
import OrderPlaced from "./order-popups/OrderPlaced";
import PartialOrderPlaced from "./order-popups/PartialOrderPlaced";
import OrderFailed from "./order-popups/OrderFailed";
import DeleteCart from "./order-popups/DeleteCart";
//images
import ProductImg1 from "../../../assets/mobImages/item1.png";
import ProductImg2 from "../../../assets/mobImages/item2.png";
import ProductImg3 from "../../../assets/mobImages/item3.png";
import ProductImg4 from "../../../assets/mobImages/item4.png";
import ProductImg5 from "../../../assets/mobImages/item5.png";
import SelectDeliveryAlert from "./order-popups/SelectDeliveryAlert";
import BranchChangeScenario from "./order-popups/BranchChangeScenario";
import Reassign from "./order-popups/Reassign";

var i = 0;
function removeByAttr(arr, attr, value) {
	var i = arr.length;
	while (i--) {
		if (
			arr[i] &&
			arr[i].hasOwnProperty(attr) &&
			arguments.length > 2 &&
			arr[i][attr] === value
		) {
			arr.splice(i, 1);
		}
	}
	return arr;
}
const CartPage = (props) => {
	const {
		GetCartItemAction,
		getCartItemResult,
		getProfileInfo,
		getProfileInfoResult,
		getBranchListAction,
		branchListResult,
		CartCount,
		WatchlistCount,
		ShortbookCount,
		DeleteBySellerAction,
		deleteBySellerResult,
		DeleteByIdAction,
		deleteByIdResult,
		MoveToShortAction,
		moveToShortResult,
		UpdateCartItemAction,
		updateCartItemResult,
		PlaceOrder,
		placeOrderResult,
		OrderCreditLimit,
		orderCreditLimitResult,
	} = props;
	const [branchId, setBranchId] = useState("");
console.log(branchId,"<<<< Cart Page branchId");
console.log(branchListResult,"<<<< branchListResult");
	useEffect(() => {
		getBranchListAction();
	}, []);

	useEffect(() => {
		let temp = {};
		Object.entries(branchListResult.payload).map((entry) => {
			if(entry[1].c_default_status === "Y"){
				temp = entry[1];
			}
			setBranchId(temp.c_br_code);
			const body = {
				n_branch_id: temp.c_br_code,
			};
			GetCartItemAction(body);
		});
		
	}, [branchListResult]);

	useEffect(() => {
		const body = {
			n_branch_id: branchId,
		};
		GetCartItemAction(body);
	}, [branchId]);

	const cartResultLength = getCartItemResult.payload.length;
	// console.log(cartResultLength,"<<<cartResultLength")
	// console.log(getCartItemResult.payload,"<<<getCartItemResult")

	const [open, setOpen] = useState(false);
	const [backgroundRed, setBackgroundRed] = useState(false);

	const openDeleteModal = () => {
		setOpen(!open);
		i = 0;
	};

	const closeDeleteModal = () => {
		// console.log('khkvdfbj',open)
		setOpen(!open);
		i = 0;
	};

	const handleChangeBranch = () => {
		setBackgroundRed(true);
		i = 0;
	};

	// const handleDeleteItem = (itemName, index, cart_code,item_code,seller_code) => {
	//   console.log(itemName, "<< name");
	//   console.log(index, "<< index");
	//   console.log(cart_code, "<< cart_code");
	//   console.log(item_code, "<< item_code");
	//   console.log(seller_code, "<< seller_code");

	// };

	return (
		<>
			{/*<DeliverTo
				getCartItemResult={getCartItemResult}
				branchListResult={branchListResult}
			/>*/}

			<div className="bggrey">
				<div className="orderFromContaine mr-t-16">
					<Container fixed>
						<Grid container>
							<Grid item xs={8}>
							</Grid>
							<Grid item xs={4}>
							</Grid>
						</Grid>
					</Container>
				</div>
				<div className="orderFromContainer background-white">
					<Container fixed>
						<Grid container>
							<Grid item xs={8} className="bggrey">
								<div className="orderFrom mr-16 background-white border-radius-r-tb">
									<OrderingBranch
										handleChangeBranch={handleChangeBranch}
										branchListResult={branchListResult}
									/>
								</div>
							</Grid>
							<Grid item xs={4} className="bggrey">
								<div className="orderFromWizard background-white border-radius-l-tb">
									<div className="deliver-to-add-wrapper cart-wizard-wrapper">
										<div className="wizard-sec">
											<Wizard 
												step="1"
												progress="100"
												/>
										</div>
									</div>
								</div>
							</Grid>
						</Grid>
					</Container>
				</div>
				<div className="orderCartContainer mr-t-16 background-white">
					<Container fixed>
						<Grid container>
							<Grid item xs={8} className="bggrey">
							</Grid>
							<Grid item xs={4} className="bggrey">
							</Grid>
						</Grid>
					</Container>
					<Container fixed>
						<Grid container>
							<Grid item xs={8} className="bggrey">
								<div className="orderCartItem mr-16 background-white border-radius-r-tb">
									{/*<div className="DataSense"></div>
									<div className="DataSense"></div>
									<div className="DataSense"></div>
									<div className="DataSense"></div>
									<div className="DataSense"></div>
									<div className="DataSense"></div>*/}
									{getCartItemResult.payload !== "" && (
										<ProductDetails
											branchId={branchId}
											itemDetail={getCartItemResult.payload}
											openDeleteModal={openDeleteModal}
											index={i++}
											backgroundRed={backgroundRed}
											DeleteBySellerAction={DeleteBySellerAction}
											deleteBySellerResult={deleteBySellerResult}
											DeleteByIdAction={DeleteByIdAction}
											deleteByIdResult={deleteByIdResult}
											GetCartItemAction={GetCartItemAction}
											MoveToShortAction={MoveToShortAction}
											moveToShortResult={moveToShortResult}
											UpdateCartItemAction={UpdateCartItemAction}
											updateCartItemResult={updateCartItemResult}
											CartCount={CartCount}
											WatchlistCount={WatchlistCount}
											ShortbookCount={ShortbookCount}
										/>
									)}
								</div>
							</Grid>
							<Grid item xs={4} className="bggrey">
								<div className="orderPayment background-white border-radius-l-tb">
									{getCartItemResult.payload !== "" && (
										<PriceDetails
											branchId={branchId}
											GetCartItemAction={GetCartItemAction}
											itemDetail={getCartItemResult.payload}
											PlaceOrder={PlaceOrder}
											placeOrderResult={placeOrderResult}
											CartCount={CartCount}
											OrderCreditLimit={OrderCreditLimit}
											orderCreditLimitResult={orderCreditLimitResult}
										/>
									)}
								</div>
							</Grid>
						</Grid>
					</Container>
				</div>
				<Container fixed>
					<div className="cart-products">
						<div className="cart-product-details">
							<div className="mr-16">
								{/* {getCartItemResult.payload.map((item, index) => (
									
								))} */}
								
							</div>
						</div>

						<div className="cart-price-details">
							
						</div>
					</div>
				</Container>
			</div>

			{/* <SuggestedProduct /> */}

			{/* <div style={{display:"flex",justifyContent:"center"}}>
								<OrderPlaced/>
								<OrderFailed/>
								<PartialOrderPlaced/>
								<SelectDeliveryAlert/>
								<BranchChangeScenario/>
								<DeleteCart openModal={open} closeModal={closeDeleteModal}/>
								<Reassign/>
				</div> */}
		</>
	);
};

export default CartPage;
