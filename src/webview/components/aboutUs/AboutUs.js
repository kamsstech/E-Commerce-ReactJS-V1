import React, { useState, useEffect } from "react";
import Aos from "aos";
import AboutUsBanner from './AboutUsBanner';
import AboutUsContent from './AboutUsContent';

import "aos/dist/aos.css";
const AboutUs = (props) => {
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
	            <AboutUsBanner/>
	            <AboutUsContent/>
	        </div>
        </>
	);
};

export default AboutUs;