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
						Jersey
					</p>
					<p
						className="terms-content-paragraph"
						// data-aos="fade-up"
						// data-aos-delay="2000"
					>
						2/409, P.N Road, New Bustand Knit City, 
						Tirupur -641603
						Landmark : New Bustand <br/>
					</p>

					<div className="contact-mobile mr-t-12">
						<p className="terms-content-paragraph d-flex">
							<img className="mr-r-8" src={Phone} alt="mobile-phone" /> 9629884897
						</p>
					</div>
					<div className="contact-email mr-t-12">
						<p className="terms-content-paragraph d-flex">
							<img className="mr-r-8" src={Email} alt="Email" /> info@jersey.com
						</p>
					</div>
				</div>
			</Container>
		)
}
export default ContactUsContent;
