import React, { useState, useEffect } from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

import ActiveCart from "../../../assets/images/cart-white.svg";

const BorderLinearProgress = withStyles((theme) =>
	createStyles({
		root: {
			height: 4,
			borderRadius: 5,
		},
		colorPrimary: {
			backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
		},
		bar: {
			borderRadius: 5,
			backgroundColor: '#00d3b4',
		}
	}),
)(LinearProgress);



const Wizard = (props) => {
	const { step, progress } = props;

	const [val, setVal] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setVal(progress);
		}, 2500);

		return () => {
			clearInterval(timer);
		};

	}, [])

	return (
		<div className="wizard-sec">
			<div className="f1-steps cart-progress">
				{/*<div className="f1-progress activated">*/}
				<div className="f1-progress">
					<BorderLinearProgress variant="determinate" value={val} />
				</div>

				<div className={`step ${step > 0 && "activated"}`}>
					<div className="left50minus f1-step">
						<div className="f1-step-icon">
							<div className="small-circle">
								<img src={ActiveCart} alt="ActiveCart" />
							</div>
						</div>
					</div>
					<p className="f1-step-text">Shopping Cart</p>
				</div>

				<div className={`step ${step > 1 && "activated"}`}>
					<div className="f1-step left50plus">
						<div className="f1-step-icon">
								<div className="small-circle"></div>
						</div>
					</div>
					<p className="f2-step-text">Delivery slot</p>
				</div>

			</div>
		</div>
	)
}

export default Wizard;