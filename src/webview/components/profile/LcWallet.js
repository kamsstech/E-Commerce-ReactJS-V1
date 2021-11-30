import * as React from "react";
import Grid from "@material-ui/core/Grid";
import PhonePe from "../../../assets/images/phone-pe.png";
import GooglePay from "../../../assets/images/Google-Pay.png";

const LcWallet = () => {
	return (
		<>
			<div className="pd-l-20">
				<div className="profile-title-sec">
					<h4 className="profile-title mr-b-8">LC Wallet</h4>
					<p className="profile-subtitle">Manage your LC Credit</p>
				</div>
				<div>
					<form className="profile-details-sec">
						<Grid container spacing={0}>
							<Grid item xs={12} className="payment-section">
								<div className="payment-method-name">
									<img src={PhonePe} alt="phonepe" />

									<div className="payment-desc">
										<span className="name">Live Order Credit</span>
										<span className="subtitle">Pay with your own wallet</span>
										<span className="payment-sec-btn lc-wallet">
											Balance ₹ 900.00
										</span>
									</div>
								</div>
							</Grid>
							<Grid item xs={12} className="payment-section">
								<div className="payment-method-name">
									<img src={GooglePay} alt="phonepe" />

									<div className="payment-desc">
										<span className="name">Live Order Credit</span>
										<span className="subtitle">Pay with your own wallet</span>
										<span className="payment-sec-btn lc-wallet">
											Balance ₹ 500.00
										</span>
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

export default LcWallet;
