import * as React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CardMedia from '@material-ui/core/CardMedia';

import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import paymentCanceledImg from "../../../../assets/images/icons/payment-canceled.svg";

const PaymentSuccessfulPopup = (props) => {
	const {open, handleClose, handleYes } = props;
	const [scroll, setScroll] = React.useState('paper');
	const [maxWidth, setMaxWidth] = React.useState('md');
	const [fullWidth, setFullWidth] = React.useState(true);

	return (
		<div>
			<Dialog
				className="PaymentSuccessful"
				open={open}
				onClose={handleClose}
				handleYes={handleYes}
				scroll={scroll}
				fullWidth={fullWidth}
				maxWidth={maxWidth}
			>
				<DialogContent className="text-center">
					<Tooltip title="Close" placement="bottom">
						<Button className="CloseBtn" onClick={handleClose}><CloseOutlinedIcon/></Button>
					</Tooltip>
					<CardMedia
						component="img"
						alt="Payment Successful!"
						image={paymentCanceledImg}
						title="Payment Successful!"
					/>
					<h1 className="mr-b-12">Are you sure?</h1>
					<p className="custompp">Are you sure you want to cancel.</p>
					<div className="mr-t-12 pd-b-16">
						<Button variant="outlined" className="cancel mr-r-12" color="primary" onClick={handleClose}>Close</Button>
						<Button variant="contained" className="yes" color="primary" onClick={handleYes}>Yes</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default PaymentSuccessfulPopup;
