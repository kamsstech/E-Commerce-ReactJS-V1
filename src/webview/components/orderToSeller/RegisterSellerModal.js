// salesenquiries@csquare.in
import React,{useState} from 'react'
import { Modal } from '@material-ui/core'
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import SuccessImg from "../../../assets/images/icons/payment-success.svg";

import CardMedia from '@material-ui/core/CardMedia';
import Button from "@material-ui/core/Button";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";


const RegisterSellerModal=(props)=>{ 

	const {sellerName,respModalOpen, handleCloseRespModal} = props;
   
	return(
		<div>
			
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className="roadblock-popup"
				open={respModalOpen}
				onClose={handleCloseRespModal}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={respModalOpen}>
					<div className="demoresult-popup-sec demoresult-success p-0">
						<div className="exclamation text-center">
							<img src={SuccessImg} alt="great" className="exclamationImg" />
						</div>
						<h1 class="text-center">Successful!</h1>
						<div className="demoresultpopup-titlesec text-center">
							<p>Thank You For Showing interest, Our Team Will Contact You Shortly!</p>
						</div>
						<div className="align-center">
							<Button
								variant="contained"
								color="primary"
								className="cancel-demo-btn"
								component="span"
								onClick={handleCloseRespModal}
							>
								Close
							</Button>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	)
}

export default RegisterSellerModal