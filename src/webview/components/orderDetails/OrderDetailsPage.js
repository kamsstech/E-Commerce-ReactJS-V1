import React, { useEffect, useRef } from 'react';
import './css/OrderDetails.css';
import BillingInfo from './BillingInfo';
import PurchasedProductDetails from './ProductDetails';
import PaymentBreakup from './PaymentBreakup';
import Ad from '../../../../src/assets/images/Group.png';
import Ad2x from '../../../../src/assets/images/Group@2x.png';
import Ad3x from '../../../../src/assets/images/Group@3x.png';
import { Container } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/lab/TabPanel';

const OrderDetailsPage = (props) => {

	const {OrderDetailCall,OrderDetailResult,match} = props;
	console.log(OrderDetailResult,"<<<<< OrderDetailResult")

	const [value, setValue] = React.useState(2);
	const [orderId, setOrderId] = React.useState(match.params.type);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

	useEffect(()=>{
		const body={
			c_order_id:orderId
		}
		OrderDetailCall(body)
	},[])
   
	const componentRef = useRef(null);
	return(
		<div>
			<Container fixed>
			<div className="details-container"  ref={componentRef}>
				<div className="details-sec">
					<BillingInfo 
					OrderDetailResult= {OrderDetailResult}
					/>
					<PurchasedProductDetails 
					  OrderDetailResult= {OrderDetailResult.payload}
					/>
					<div  className="ad-sec">
						{/*<img src={Ad} alt="ad" />*/}
					</div>
					{/* srcSet={`${Ad2x},${Ad3x}`} */}
					{/* <div className="ad-section">
						<img className="ad-sec" src={Ad} alt="ad"/>
					</div> */}
					<PaymentBreakup componentRef = {componentRef}
					  OrderDetailResult= {OrderDetailResult}/>
				</div>
			</div>
			</Container>
		</div>
	)
}
export default OrderDetailsPage;