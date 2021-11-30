import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { Checkbox } from "@material-ui/core";
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import PhonePe from "../../../assets/images/phone-pe.png";
import GooglePay from "../../../assets/images/Google-Pay.png";
import Pay from '../../../../src/assets/images/pay.svg';

const PreferredPayment = () => {

	return (
		<>
			<div className="pd-l-20">
				<div className="profile-title-sec">
					<h4 className="profile-title mr-b-8">Preferred Payments</h4>
					<p className="profile-subtitle">Choose your preferred payment section</p>
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
									<Checkbox
										icon={<CircleUnchecked style={{ fontSize: "17px" }} />}
										checkedIcon={< RadioButtonCheckedIcon style={{ fontSize: "17px" }} />}
										color="primary"
										className="checkbox-payment"
									/>
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
									<Checkbox
										icon={<CircleUnchecked style={{ fontSize: "17px" }} />}
										checkedIcon={< RadioButtonCheckedIcon style={{ fontSize: "17px" }} />}
										color="primary"
										className="checkbox-payment"
									/>
								</div>
							</Grid>
							<Grid item xs={12} className="payment-section">
							<div className="payment-method-name">
									<img src={Pay} alt="card"/>
									
									<div className="payment-desc">
										<span className="name">Ajay Dadhich Axis Bank</span>
										<span className="subtitle">Debit Card  |  Valid Till 07 23</span> 
										<span className="payment-sec-card">5366 10** **** ** 6789 </span>
									</div>
									<Checkbox
										icon={<CircleUnchecked style={{ fontSize: "17px" }} />}
										checkedIcon={< RadioButtonCheckedIcon style={{ fontSize: "17px" }} />}
										color="primary"
										className="checkbox-payment"
									/>
								</div>
							</Grid>
						</Grid>
					</form>
				</div>
			</div>
		</>
	);
};

export default PreferredPayment;
