import React, { useEffect } from "react";
import { Button, Container, Grid } from '@material-ui/core';
import Aos from "aos";
import "aos/dist/aos.css";

import './css/PrivacyAndPolicyStyle.css';

const PrivacyContent = () => {
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
				// data-aos-delay="1500"
			>
			<div className="terms-content-container">

				<p
					className="terms-content-point"
					data-aos="fade-up"
					// data-aos-delay="2000"
				>
					1. General
				</p>
				<p
					className="terms-content-paragraph"
					data-aos="fade-up"
					// data-aos-delay="2050"
				>
					PRIVACY & POLICYJERSEYE is an online portal of  India. In this Privacy Policy, references to “you” mean any person submitting any data to us or our agent or the Site.
					If you have any comments or suggestions for online purchases through www.pantaloons.com, we would be pleased to receive them at our Mumbai address or by emailing us at 
					JERSEYE believes strongly in protecting the privacy of the personally identifiable information you share with us. We also believe it is important to inform you about how we will use your personal data, and to give you choices about how those data will be used. Therefore, we encourage you to read this Privacy Policy carefully.
					WHY SHOULD YOU SHARE YOUR PERSONAL DATA WITH JERSEYE?
					Sharing your personally identifiable information enables us to offer you a number of benefits. It will make it easier and more convenient for you to:
					1) Request information specific to your interests;
					2) Participate in online communities;
					3) Receive personalized messages and special offers that are relevant to your interests;
					4) Save time by storing your preferences
				</p>
				
				</div>
			</Container>
		)
}
export default PrivacyContent;
