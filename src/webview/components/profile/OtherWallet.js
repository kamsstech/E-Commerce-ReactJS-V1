import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import PhonePe from "../../../assets/images/phone-pe.png";
import GooglePay from "../../../assets/images/Google-Pay.png";
import Pay from '../../../../src/assets/images/pay.svg';

import Button from "@material-ui/core/Button";
import { SendOTPEntity } from "../../../common/model";


import { Checkbox, FormControlLabel, Radio } from "@material-ui/core";

import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';


const OtherWallet = () => {

	return (
		<>
			<div className="pd-l-20">
				<div className="profile-title-sec">
					<h4 className="profile-title mr-b-8">Other Wallets</h4>
					<p className="profile-subtitle">Manage your wallets</p>
				</div>
				<div>
					<form className="profile-details-sec">
						<Grid container spacing={0}>
							<Grid item xs={12} className="payment-section">
							 <div className="payment-method-name">
									<img src={PhonePe} alt="phonepe"/>
									
									<div className="payment-desc">
										<span className="name">Phone Pay</span>
										<span className="subtitle">Payment hua easy with Wallet/UPI</span> 
										<span className="payment-sec-btn">Activate phone pay</span>
									</div>
								</div>
							</Grid>
							<Grid item xs={12} className="payment-section">
								<div className="payment-method-name">
										<img src={GooglePay} alt="googlepay"/>
										
										<div className="payment-desc">
											<span className="name">Google Pay(Tez)</span>
											<span className="subtitle">Get easy payment with Gpay UPI</span> 
											<span className="payment-sec-btn">Activate google pay</span>
										</div>
									</div>
							</Grid>
							<Grid item xs={12} className="payment-section">
								<div className="payment-method-name">
										<img src={GooglePay} alt="googlepay"/>
										
										<div className="payment-desc">
											<span className="name">Paytm</span>
											<span className="subtitle">Seal of trust we care </span> 
											<span className="payment-sec-btn">Activate paytm</span>
										</div>
									</div>
							</Grid>
						</Grid>
					</form>
				</div>
			</div>
		</>
	);
};

export default OtherWallet;
