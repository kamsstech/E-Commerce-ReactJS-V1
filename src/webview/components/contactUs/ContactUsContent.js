import React, { useEffect } from "react";
import { Button, Container, Grid } from '@material-ui/core';
import Aos from "aos";
import "aos/dist/aos.css";
import '../privacyAndPolicy/css/PrivacyAndPolicyStyle.css';
import Phone from "../../../assets/images/icons/smartphone.svg";
import Email from "../../../assets/images/email.svg";

const ContactUsContent = () => {
		useEffect(() => {
			// window.scrollTo(0, 0)
			window.scrollTo({
				top: 0, 
				behavior: 'smooth' /* you can also use 'auto' behaviour in place of 'smooth' */
				});
				Aos.init({
					duration: 1000,
				});
		}, []);
		
		return (
			<Container
				data-aos="fade-up"
				data-aos-delay="1500"
			>
				<div className="terms-content-container">
					<p
						className="terms-content-point"
						// data-aos="fade-up"
						// data-aos-delay="2000"
					>
						C-Square Info-Solutions Private Limited
					</p>
					<p
						className="terms-content-paragraph"
						// data-aos="fade-up"
						// data-aos-delay="2000"
					>
						69, 2nd Floor, Al-Ameen Towers,<br/>
						Hosur Main Road, Near Lal Bagh Main Rd, Sudhama Nagar,<br/>
						Bengaluru, Karnataka – 560027 <br/>
					</p>

					<div className="contact-mobile mr-t-12">
						<p className="terms-content-paragraph d-flex">
							<img className="mr-r-8" src={Phone} alt="mobile-phone" /> 08067657007, 8095170000, 7406830000
						</p>
					</div>
					<div className="contact-email mr-t-12">
						<p className="terms-content-paragraph d-flex">
							<img className="mr-r-8" src={Email} alt="Email" /> liveorder@c2info.com
						</p>
					</div>
				</div>
			</Container>
		)
}
export default ContactUsContent;
