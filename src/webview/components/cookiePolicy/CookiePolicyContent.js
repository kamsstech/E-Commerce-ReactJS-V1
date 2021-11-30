import React, { useEffect } from "react";
import { Button, Container, Grid } from '@material-ui/core';
import Aos from "aos";
import "aos/dist/aos.css";

import '../privacyAndPolicy/css/PrivacyAndPolicyStyle.css';

const CookiePolicyContent = () => {

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
					className="terms-content-header"
					data-aos="fade-up"
					// data-aos-delay="1750"
				>
					Cookie Policy
				</p>
				<p
					className="terms-content-date"
					data-aos="fade-up"
					// data-aos-delay="1850"
				>
					Last Revised: 15 February, 2021
				</p>

				<p
					className="terms-content-disclaimer"
					data-aos="fade-up"
					// data-aos-delay="1950"
				>
					Please read all the terms &amp; conditions carefully before accepting it.
				</p>
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
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s.
				</p>
				<p
					className="terms-content-point"
					data-aos="fade-up"
					// data-aos-delay="2200"
				>
					{" "}
					2. Credit Limit Introduction
				</p>
				<p
					className="terms-content-paragraph"
					data-aos="fade-up"
					// data-aos-delay="2250"
				>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old. Richard McClintock, a Latin professor at
					Hampden-Sydney College in Virginia, looked up one of the more obscure
					Latin words, consectetur, from a Lorem Ipsum passage, and going
					through the cites of the word in classical literature, discovered the
					undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
					1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
					Evil) by Cicero, written in 45 BC. This book is a treatise on the
					theory of ethics.
				</p>
				<p
					className="terms-content-point"
					data-aos="fade-up"
					// data-aos-delay="2400"
					data-aos-offset="-500"
				>
					2.1 Define Instruction
				</p>
				{/* <ul>
					<li className="terms-content-subpoint">
						The standard chunk of Lorem Ipsum used since the 1500s is
						reproduced.
					</li>
					<li className="terms-content-subpoint">
						1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero.
					</li>
					<li className="terms-content-subpoint">
						The standard chunk of Lorem Ipsum used since the 1500s is
						reproduced.
					</li>
					<li className="terms-content-subpoint">
						1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero.
					</li>
				</ul> */}
				<p
					className="terms-content-subpoint"
					data-aos="fade-up"
					data-aos-offset="-500"
					// data-aos-delay="2450"
				>
					The standard chunk of Lorem Ipsum used since the 1500s is reproduced.
				</p>
				<p
					className="terms-content-subpoint"
					data-aos="fade-up"
					data-aos-offset="-500"
					// data-aos-delay="2600"
					data-aos-offset="-100"
				>
					1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero.
				</p>
				<p
					className="terms-content-subpoint"
					data-aos="fade-up"
					data-aos-offset="-500"
					// data-aos-delay="2650"
					data-aos-offset="-100"
				>
					The standard chunk of Lorem Ipsum used since the 1500s is reproduced.
				</p>
				<p
					className="terms-content-subpoint"
					data-aos="fade-up"
					data-aos-offset="-500"
					// data-aos-delay="200"
				>
					1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero.
				</p>
				<p
					className="terms-content-point"
					data-aos="fade-up"
					data-aos-offset="-500"
					// data-aos-delay="350"
				>
					2.2 Terms &amp; conditions
				</p>
				{/* <ul>
					<li className="terms-content-subpoint">
						The standard chunk of Lorem Ipsum used since the 1500s is
						reproduced.
					</li>
					<li className="terms-content-subpoint">
						1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero.
					</li>
				</ul> */}
				<p
					className="terms-content-subpoint"
					data-aos="fade-up"
					data-aos-offset="-500"
					// data-aos-delay="400"
				>
					The standard chunk of Lorem Ipsum used since the 1500s is reproduced.
				</p>
				<p
					className="terms-content-subpoint"
					data-aos="fade-up"
					data-aos-offset="-500"
					// data-aos-delay="450"
				>
					1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero.
				</p>
				<div className="terms-button-container d-flex align-items-center justify-content-end">
					<Button
						variant="#343a40"
						className="terms-button decline mr-1"
						data-aos="fade-up"
						data-aos-offset="-500"
						// data-aos-delay="500"
					>
						DECLINE
					</Button>
					<Button
						variant="primary"
						className="terms-button agree"
						data-aos="fade-up"
						data-aos-offset="-500"
						// data-aos-delay="550"
					>
						I AGREE
					</Button>
				</div>
				</div>
			</Container>
		)
}
export default CookiePolicyContent;
