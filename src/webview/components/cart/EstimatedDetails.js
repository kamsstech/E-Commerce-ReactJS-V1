import React, { useState,useEffect } from "react";
import Coupon from './Coupon';
const EstimatedDetails = (props) => {
    const {itemDetail} = props;
    // const [suppliers, setSuppliers] = useState([]);

    // useEffect(() => {
    //     let temp = [];
    //     Object.entries(itemDetail.j_supplier).map(entry => {
    //       temp = entry[1]
    //     })
    //     setSuppliers(temp);

    //   }, [])
console.log(itemDetail,"%%%%%%%%%%%%%%%%%%%%%%%%%%%% itemDetail")
     
  return (
  	<>
	{/* <Coupon itemDetail={itemDetail} /> */}
	
		<div className="mob-price-details-sec pl-0 pr-0">
		<h3 className="mob-price-detail-title">ESTIMATED PRICE DETAILS ({itemDetail.n_cart_item_count} Items)</h3>
		<div className="mob-price-details-flexsec">
			<h4 className="mr-b-16">Cart Total Amount</h4>
			<h4 className="mr-b-16">₹ {itemDetail.n_net_amount}</h4>
		</div>
		<div className="mob-price-details-flexsec">
			<h4 className="mr-b-16">Total GST</h4>
			<h4 className="mr-b-16">₹ {itemDetail.n_net_gst}</h4>
		</div>
		{/* <div className="mob-price-details-flexsec">
			<h4 className="mr-b-16">Coupon Discount</h4>
			<h4 className="mr-b-16 coupon-text">₹ 00.00</h4>
		</div> */}
		{/* <div className="mob-price-details-flexsec">
			<h4 className="mr-b-16">Delivery  Charges</h4>
			<h4 className="mr-b-16 delivery-charge-text">₹ 100.00</h4>
		</div> */}
		{/* <div className="web-delivery-text">To get Free Delivery Add <span>₹ 1000.00</span> In Mahaveer.</div> */}
		<div className="delivery-price-line"></div>
		<div className="mob-price-details-flexsec">
			<h3 className="font-bold font-19">Total</h3>
			<h3 className="delivery-charge-text font-19 font-bold">₹ {(parseFloat(itemDetail.n_net_amount)+parseFloat(itemDetail.n_net_gst)).toFixed(2)   }</h3>
		</div>
	</div>

	
	
	</>
  );
}

export default EstimatedDetails;