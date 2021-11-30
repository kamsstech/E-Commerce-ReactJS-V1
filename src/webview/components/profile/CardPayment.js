import * as React from "react";
import Grid from "@material-ui/core/Grid";
import PhonePe from "../../../assets/images/phone-pe.png";
import Pay from '../../../../src/assets/images/pay.svg';

import Button from "@material-ui/core/Button";
import DeleteImg from "../../../assets/mobImages/delete-red/delete.png";


const CardPayment = () => {

	return (
		<>
		<div className="pd-l-20">
			<div className="profile-title-sec">
				<h4 className="profile-title mr-b-8">Credit &amp; Debit Cards</h4>
				<p className="profile-subtitle">Manage your cards</p>
			</div>
			<div>
				<form className="profile-details-sec">
					<Grid container spacing={0}>
						<Grid item xs={12} className="payment-section add-new-card">
						 <div className="payment-method-name">
								<img src={PhonePe} alt="phonepe"/>
								<div className="payment-desc">
									<span className="name">Add New Card</span>
									<span className="subtitle">Save &amp; Pay via cards</span> 
								</div>
								<div className="cards-action">
									<Button variant="outlined" color="primary">Add new</Button>
								</div>
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
								<div className="cards-action">
								<span className="card-edit-btn">edit</span>

									<div className="cart-delete-icon">
										<img src={DeleteImg} alt="DeleteImg" />
									</div>
								</div>
							</div>
						</Grid>
						<Grid item xs={12} className="payment-section">
						<div className="payment-method-name">
								<img src={Pay} alt="googlepay"/>
								
								<div className="payment-desc">
									<span className="name">Ajay DBS</span>
									<span className="subtitle">Debit Card  |  Valid Till 07 23</span> 
									<span className="payment-sec-card">5678 01** **** ** 4488 </span>
								</div>
								<div className="cards-action">
									<span className="card-edit-btn">edit</span>

									<div className="cart-delete-icon">
										<img src={DeleteImg} alt="DeleteImg" />
									</div>
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

export default CardPayment;
