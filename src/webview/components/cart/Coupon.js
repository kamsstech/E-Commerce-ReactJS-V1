import * as React from "react";
import { useState } from "react";
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

//images
import CouponIcon from "../../../assets/mobImages/coupon-grey/coupon.png";

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		withoutLabel: {
			marginTop: theme.spacing(3),
		},
		textField: {
			width: '100%',
		},
	}),
);

const Coupon = () => {
	const classes = useStyles();

	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle)
	}

	return (
		<div className="cart-items-coupons">
			<h4 className="coupon-title text-uppercase">
				<span>Have Coupon ! Apply Below</span>
			</h4>
			<div className="">
				<TextField
					id="standard-start-adornment"
					placeholder="Apply Multiple Coupon Codes"
					className={`${clsx(classes.textField)} coupon-textfield`}
					InputProps={{
						startAdornment: <InputAdornment position="start">
							<img src={CouponIcon} alt="CouponIcon" />
						</InputAdornment>,
						endAdornment: <InputAdornment position="start" onClick={handleToggle}>
							<span className="delivery-charge-text cursor">{toggle ? "Hide" : "Show"}</span>
						</InputAdornment>
					}}
				/>
				<p className="coupon-red-text">You are eligible for 2 coupons</p>
				{toggle &&
					<div className="coupon-list font-14">
						<div className="coupon-list-sec">
							<div className="mob-price-details-flexsec">
								<div className="couponcode-text">FLAT25</div>
								<h4 className="couponcode-apply-text cursor">Apply</h4>
							</div>
							<h4 className="couponcode-notetext">25% off on minimum purchase of Rs. 2,000.0 Expires on <span>25th March, 2022</span></h4>
						</div>
						<div className="coupon-list-sec">
							<div className="mob-price-details-flexsec">
								<div className="couponcode-text">FLAT25</div>
								<h4 className="couponcode-apply-text cursor">Apply</h4>
							</div>
							<h4 className="couponcode-notetext">25% off on minimum purchase of Rs. 2,000.0 Expires on <span>25th March, 2022</span></h4>
						</div>
					</div>}
			</div>
		</div>
	)
}

export default Coupon;