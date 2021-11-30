import React, { useState, useEffect } from "react";
import { Constants } from "../../../common/constant/localstorage";
import Container from "@material-ui/core/Container";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

import FooterPage from '../footerSection/Footer';
import "./css/ComingSoon.css";
import UnderConstruction from "../../../assets/images/under-construction-illustration.svg";

const ComingSoon = (props) => {

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
			<div className="website-body">
				<div className="navigation-container ">
					<Container fixed>
						<Breadcrumbs aria-label="breadcrumb" className="navigation-list">
							<Link to="/home">Home</Link>
							<Link className="active-link">{localStorage.getItem(Constants.COMING_SOON_ACTIVE_PAGE) }</Link>
						</Breadcrumbs>
					</Container>
				</div>
				{/*data-aos="fade-up" data-aos-anchor-placement="top-bottom"*/}
				<div className="UnderConstruction text-center">
					<img src={UnderConstruction} alt="UnderConstruction"/>
					<h1>{localStorage.getItem(Constants.COMING_SOON_ACTIVE_PAGE) } is in under construction!</h1>
					<p>Sorry for inconvenience, we will be back soon.</p>
				</div>

				{/*<div className="termsAndCondi">
					<Container fixed>
						Copyright ©️ 2021 C-Square Info Solutions Pvt. Ltd. All rights reserved.
					</Container>
				</div>*/}
			</div>
		</>
	);
};

export default ComingSoon;