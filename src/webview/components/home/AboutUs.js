import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import AboutImg1 from "../../../assets/images/af1.svg";
import AboutImg2 from "../../../assets/images/af2.svg";
import AboutImg3 from "../../../assets/images/af3.svg";
import AboutImg4 from "../../../assets/images/af4.svg";
const AboutUs = () => {
	return(
		<>
	<div className="home-aboutus-sec">
		<Container fixed className="aboutus-sec">
		<Grid container spacing={0}>
			<Grid item xs={3}>
			<div className="aboutus-each-sec">
				<div className="aboutus-each-sec-left">
				<img src={AboutImg1} alt="AboutImg1" />
				</div>
				<div className="aboutus-each-sec-right">
				<h2>10K + Trusted <span>Customers</span> </h2>
				</div>
			</div>
			</Grid>
			<Grid item xs={3}>
			<div className="aboutus-each-sec">
				<div className="aboutus-each-sec-left">
				<img src={AboutImg2} alt="AboutImg1" />
				</div>
				<div className="aboutus-each-sec-right">
				<h2>22 Cr + <span>Transactions</span> </h2>
				</div>
			</div>
			</Grid>
			<Grid item xs={3}>
			<div className="aboutus-each-sec">
				<div className="aboutus-each-sec-left">
				<img src={AboutImg3} alt="AboutImg1" />
				</div>
				<div className="aboutus-each-sec-right">
				<h2>4 Lac + <span>Products</span> </h2>
				</div>
			</div>
			</Grid>
			<Grid item xs={3}>
			<div className="aboutus-each-sec">
				<div className="aboutus-each-sec-left">
				<img src={AboutImg4} alt="AboutImg1" />
				</div>
				<div className="aboutus-each-sec-right">
				<h2>India's B2B <span>'Pharma System'</span></h2>
				</div>
			</div>
			</Grid>
		</Grid>
		</Container>
	</div>
	<div className="stay-updated">
		<Container fixed className="aboutus-sec">
			<Grid container spacing={0}>
			<Grid item xs={3}></Grid>
				<Grid item xs={3}>
					<div className="footer-above-text">
						<span>Stay Updated</span>
					</div>
				</Grid>
				{/* <Grid item xs={6}>
					<div className="footer-above-subscribe">
						<div className="footer-above">
							<input className="footer-above-input" type="" name="" placeholder="Your E-mail Address"/>
							<button className="footer-above-button" type="button">Subscribe</button>
						</div>
					</div>
				</Grid> */}
				<Grid item xs={3}>
					<div className="social-media-button">
						<div className="footer-above-social-media">
							<div className="footer-social-sec">
								<div className="social-sec facebook">
									<Link to={{ pathname: "https://www.facebook.com/c2info/" }} target="_blank">
										<svg viewBox="0 0 24 24">
											<path className="social-hover" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>
										</svg>
									</Link>
								</div>
								<div className="social-sec twitter">
									<Link to={{ pathname: "https://twitter.com/c_square_info" }} target="_blank">
										<svg viewBox="0 0 24 24">
											<path className="social-hover" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path>
										</svg>
									</Link>
								</div>
								<div className="social-sec linkedin">
									<Link to={{ pathname: "https://www.linkedin.com/company/c2info" }} target="_blank">
										<svg viewBox="0 0 24 24">
											<path className="social-hover" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"></path>
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</Grid>
				<Grid item xs={3}></Grid>
			</Grid>
		</Container>
	</div>
	</>
	)
}
export default AboutUs;