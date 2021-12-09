import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import FooterImg1 from "../../../assets/images/footer-img1.svg";
import FooterImg2 from "../../../assets/images/footer-img2.svg";
import FooterImg3 from "../../../assets/images/footer-img3.svg";
import siteLogoWhite from "../../../assets/images/main-logo-footer.svg";

import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";


function PaymentFooterPage(props) {
	const {landingPageResult,footerSubscribe,footerSubscribeResult} = props
	const [email, setEMail] = React.useState("");

	const handleSubscribe = (e) => {
		console.log("eeeeee",email)
		//call api
		footerSubscribe(email)
};
const handleInputChange = (event) => {
	setEMail(event.target.value);
};
	return (
		<div>
			
			<div className="">
				<Container fixed>
					<Grid container >
					 
						<Grid item xs={9}>
							<Grid container>
								<Grid item xs={2} className="space">
									 <ul className="footer-list">
										<li>
											<Link to="/">About</Link>
										</li>
									</ul>
								</Grid>
								<Grid item xs={2} className="space">
									<ul className="footer-list">
																			 <li>
											<Link to="/">Terms &amp; Conditions</Link>
										</li>
									 
									</ul>
								</Grid>
								<Grid item xs={2} className="space">
									<ul className="footer-list">
										<li>
											<Link to="/">Refund Policy</Link>
										</li>
									 
									</ul>
								</Grid>
								<Grid item xs={2} className="space">
									<ul className="footer-list">
										<li>
											<Link to="/">Refund &amp; Cancellation</Link>
										</li>
									</ul>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<div>
						<p className="terms-txt">
							Copyright © 2021 KAMSS Tech All rights reserved.
						</p>
					</div>
				</Container>
			</div>
		</div>
	);
}

export default PaymentFooterPage;
