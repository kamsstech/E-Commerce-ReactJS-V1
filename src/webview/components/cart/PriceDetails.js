import React, { useState,useEffect } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import InfoIcon from "../../../assets/images/info.svg";

import Coupon from "./Coupon";
import EstimatedDetails from "./EstimatedDetails";
import OrderPlaced from "./order-popups/OrderPlaced";
import PartialOrderPlaced from "./order-popups/PartialOrderPlaced";
import SelectDeliveryAlert from "./order-popups/SelectDeliveryAlert";

const PriceDetails = (props) => {
	const {
		itemDetail,
		GetCartItemAction,
		branchId,
		CartCount,
		PlaceOrder,
		placeOrderResult,
		OrderCreditLimit,
		orderCreditLimitResult
	} = props;
	console.log(placeOrderResult, "&&&&&&& placeOrderResult")
	const [open, setOpen] = useState(false);
	const [paymentSuccess, setPaymentSuccess] = useState(false);
	const [creditSuccess, setCreditSuccess] = useState(false);
	const [errorMsg, setErrorMessage] = useState(false);
	const [checkList, setCheckList] = useState({
		one: true,
		two: false
	})
	const [suppliers, setSuppliers] = useState([]);
	console.log(creditSuccess, "<<<< creditSuccess")
	const [sbranchId, setSBranchId] = useState("");
	const [sSellercode, setSSellercode] = useState([]);
	const [sDelveryBranchId, setSDelveryBranchId] = useState("");
	const [sTotalAmount, setSTotalAmount] = useState("");
	
	const anchorRef = React.useRef(null);

	// useEffect(() => {
	//   let temp = [];
	//   Object.entries(itemDetail.j_supplier).map(entry => {
	//     temp = entry[1]
	//   })
	//   setSuppliers(temp);
	 
	// }, [])
	

	const handleToggle = () => {
	 
		setOpen(prevOpen => !prevOpen);

	};
	const handleClose = (event) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target)
		) {
			return;
		}
		setOpen(false);
	};

	
	const paymentHandle = (bId,sCode,dBId) =>{
		try{
			// setPaymentSuccess(true)
			const br_code= bId;
			const seller_code = sCode
			// const deliver_to_branch_id=dBId
			const deliver_to_branch_id=br_code
			// const mobile="1111111111"
			const mobile=localStorage.getItem("MOBILE_NO")

			// const ORDERId= "ORDERID-"+(new Date().getTime());
			const body ={
				c_br_code : br_code,
				j_seller_code:[seller_code],
				c_deliver_to_branch_id:deliver_to_branch_id,
				// c_mobile:mobile
			}
			PlaceOrder(body);
			// OrderCreditLimit(body);

			// const body ={
			//   c_br_code : sbranchId,
			//   j_seller_code:[sSellercode],
			//   c_deliver_to_branch_id:deliver_to_branch_id,
			// }
			// console.log(body,"Place order body")
			// PlaceOrder(body)
			
			// console.log(paymentSuccess,"paymentSuccess ")

			// const body1={
				
			//   c_br_code : br_code,
			//   j_seller_code:[seller_code],
			//   c_deliver_to_branch_id:deliver_to_branch_id,
				
			// }
			// PlaceOrder(body1);






		}catch (error){
			console.log(error,"Place order error")
		}
		
	}
	

useEffect(() => {

	if(orderCreditLimitResult.statuscode === 0){
		
		let credit_limit = parseFloat(orderCreditLimitResult.payload[0]?.n_credit_limit)
		console.log(sTotalAmount,"<<< Check Total Amount")
		console.log(credit_limit,"<<<< Credit limit")
		if(sTotalAmount <= credit_limit){
			// alert("allow buyer")
			const body ={
				c_br_code : sbranchId,
				j_seller_code:[sSellercode],
				c_deliver_to_branch_id:sbranchId,
			}
			// console.log(body,"Place order body")
			PlaceOrder(body)
			// setPaymentSuccess(true)
		}else{
			// alert("Not allow buyer")
			setCreditSuccess(true)
		}
		
	}else if(orderCreditLimitResult.statuscode === 5){
		setErrorMessage(true)
	}
	
}, [orderCreditLimitResult])


useEffect(() => {
 
	if(placeOrderResult.statuscode === 0){
	 
		const body={
			n_branch_id:branchId
		}

		CartCount(body);
		GetCartItemAction();
	 
		setPaymentSuccess(true);
	}
}, [placeOrderResult.statuscode === 0])

	const handleCheckbox = (name,branchId,sellercode,deliverBranchId,total_amt) => (event) => {
	 
		setCheckList({
			...checkList,
			[name]: event.target.checked
		})
		
		console.log(event.target.checked,"<<<event.target.checked")
		if(event.target.checked){
			setSBranchId(branchId)
			setSSellercode(sellercode)
			setSDelveryBranchId(deliverBranchId)
			setSTotalAmount(total_amt)
		}else{
			setSBranchId("")
			setSSellercode([])
			setSDelveryBranchId("")
			setSTotalAmount("")
		}
	 
		

	};
	// console.log(checkList.one,"<<<checkList true")
	return (
		<> 
		<div className="cart-price-details-wrapper border-radius-l-tb">
			<h4 className="cart-price-details-title">Cart Value Details</h4>
			{itemDetail.j_supplier && itemDetail.j_supplier.map((data, index)=>(
			<div key={index}>
				<div className="cart-price-seller-sec">
					<FormControlLabel
						control={
							<Checkbox
								icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
								checkedIcon={<CheckBoxIcon fontSize="large" />}
								checked={checkList.two}
								onChange={handleCheckbox("two",itemDetail.n_branch_id,data.c_seller_code,itemDetail.n_deliver_to_branch_id,(parseFloat(itemDetail.c_net_amount)+parseFloat(itemDetail.c_net_gst)))}
								color="primary"
								className="adduser-checkbox-icon"
							/>
						}
						label={data.c_seller_name}
						className="adduser-checkbox cart-check"
					/>
					<div className="display-flex">
						<img src={InfoIcon} alt="InfoIcon" className="cart-info-icon cursor" 
						onClick={handleToggle} 
						/>
						<div className="cart-info-icon-collapse-div">
							<Popper
								open={open}
								anchorEl={anchorRef.current}
								role={undefined}
								transition
								disablePortal
								className="profile-dropdown"
							>
								{({ TransitionProps, placement }) => (
									<Paper>
										<ClickAwayListener onClickAway={handleClose}>
											<MenuList id="split-button-menu" >
												<div className=" cart-info-price-details">
													<div className="b-05">
														<div className="line-display">
															<p className="m-0"> Cart Total Price </p>
															<p className="m-0"> ₹ {data.n_seller_item_amount}</p>
														</div>
														<div className="line-display">
															<p className="mt-10 mb-0"> Total GST </p>
															<p className="mt-10 mb-0"> ₹ {data.n_seller_gst_amount}</p>
														</div>
													</div>

													<div className="line-display pt-10 ">
														<p className="m-0 bold"> Total</p>
														<p className="m-0 bold"> ₹ {data.n_seller_net_amount}</p>
													</div>
												</div>
											</MenuList>
										</ClickAwayListener>
									</Paper>
								)}
							</Popper>
						</div>
						<h4 className="cart-seller-price">₹ {data.n_seller_net_amount}</h4>
					</div>
				</div>

				{/*<div className="cart-price-seller-sec">
					<h4 className="cart-seller-price cart-blue-color">Delivery  Charges</h4>
					<h4 className="cart-seller-price cart-purle-color">₹ 100.00</h4>
				</div>
				<div className="cart-price-seller-sec">
					<h4 className="cart-seller-price cart-blue-color">Total</h4>
					<h4 className="cart-seller-price cart-black-color bold">₹ {data.n_seller_net_amount}</h4>
				</div>*/}
				<div className="cart-dashed-line"></div>
			</div>
				))}
			<div>
				{/* <h3 className="cart-coupon-title">Have Coupon ! Apply Below</h3> */}
				{/* <Coupon /> */}
				{
					itemDetail !=="" && 
					<EstimatedDetails  itemDetail={itemDetail} />
				}
				
			 
				
				{/* <Link to="/cart/chooseDeliverySlots" >
					<Button
						variant="contained"
						color="primary"
						className="ordernow-modal-btn width-100 continue-to-btn"
						// onClick={handleCloseOrderNowModal}
					>
						Continue To Place Order
					</Button>
				</Link> */}
				{
					itemDetail !=="" && 
					<Button
						variant="contained"
						color="primary"
						disabled={!checkList.two}
						className="ordernow-modal-btn width-100 continue-to-btn"
						onClick={()=>paymentHandle(sbranchId,sSellercode,sDelveryBranchId)}
					>
						 Continue To Place Order
					</Button>
				}
				{
					paymentSuccess && <OrderPlaced/>
				}
					{
					 creditSuccess && <PartialOrderPlaced 
					 openModal ={creditSuccess}
					 />
					}
					{
					 errorMsg &&  <SelectDeliveryAlert 
					 openModal ={errorMsg}
					 orderCreditLimitResult={orderCreditLimitResult}
					 />
					}
			</div>
		</div>
		</>
	)
}

export default PriceDetails