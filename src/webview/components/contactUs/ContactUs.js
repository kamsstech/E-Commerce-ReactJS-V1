import React, { useState, useEffect } from "react";
import Aos from "aos";

import FooterPage from '../footerSection/Footer';
import ContactUsBanner from './ContactUsBanner';
import ContactUsContent from './ContactUsContent';

import "aos/dist/aos.css";
const ContactUs = (props) => {
	useEffect(() => {
	    Aos.init({
			offset: 200,
	      duration: 600,
	      easing: 'ease-in-sine',
	      delay: 100,
		});
	}, [])
	return (
		<>
	        <div className="text-center terms-container">
	            <ContactUsBanner/>
	            <ContactUsContent/>
	        </div>
	        <FooterPage/>
        </>
	);
};

export default ContactUs;