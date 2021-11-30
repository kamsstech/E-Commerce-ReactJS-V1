import React, { useEffect } from "react";
import { Button, Container, Grid } from '@material-ui/core';
import Aos from "aos";
import "aos/dist/aos.css";
import '../privacyAndPolicy/css/PrivacyAndPolicyStyle.css';
const AboutUsContent = () => {
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
						1. INCEPTION
					</p>
					<p
						className="terms-content-paragraph"
						// data-aos="fade-up"
						// data-aos-delay="2000"
					>
						Early 2000s witnessed the existence of two strong competitors, Covenant PharmAssist Inc. &amp; Cybix Info Systems, offering a complete range of solutions to the pharmaceutical industry across all segments. Covenant PharmAssist Inc. founded by Sripal Bachawat, was the pioneer in providing solutions on Windows platform, whereas Cybix Info Systems founded by Sajith T, was one of the first software solution providers for Pharmaceutical Industry. Going by the adage that the best way to beat the competition is to collaborate, the two organizations realised the synergistic effects of unison and joined hands in 2002 to create C-Square &amp; positioned themselves as leaders in the industry. This combination now provides a one stop solution to Indian Pharmaceutical companies for their automation needs. C-Square with its ability to create advance technology solutions, which bridge the requirement gaps, has emerged as the leading solution provider of enterprise-resource-planning (ERP) software &amp; business intelligence (BI) tool for the pharmaceutical industry in India.
					</p>
					<p
						className="terms-content-point"
						// data-aos="fade-up"
						// data-aos-delay="2000"
					>
						2. OUR VISSION
					</p>
					<p
						className="terms-content-paragraph"
						// data-aos="fade-up"
						// data-aos-delay="2000"
					>
						To be recognised as a leading CTO (Chief Transformation Organisation) providing value based, innovative &amp; sustainable services to its clients.
					</p>
					<p className="terms-content-point">
						3. OUR MISSION
					</p>
					<p className="terms-content-paragraph">
						To streamline, automate &amp; optimize workflow of our clients, primarily in the pharmaceutical &amp; healthcare sectors, by using proactive &amp; collaborative approach.
					</p>
					<p className="terms-content-point">
						4. CLAIRVOYANCE &amp; COMPETENCY VALUE PROPOSITION
					</p>

					<p className="terms-content-paragraph">
						Clairvoyance is the ability to understand clearly the customers’ vision &amp; their requirements, their problems to which the solution can lead to an extraordinary growth. Covenant PharmAssist Inc., brought this strength to the collaboration owing to its rich experience in running pharmaceutical distribution business. Cybix Info Systems with its penchant for developing innovative software solutions added competency, which is the ability to convert the solution into a value based offering, to the pool of organisations strengths.
					</p>

					<p className="terms-content-point">
						5. AT YOUR FINGERTIPS  ERP &amp; BI TRAINING
					</p>
					<p className="terms-content-paragraph">
						As our prime focus is to help pharmaceutical companies manage the logistics of their distribution &amp; retail operations. This includes tracking the entire sales life cycle of pharmaceutical products – beginning from the manufacturer through the distributor and retailer &amp; finally ending with the customer. We developed &amp; deployed enterprise-process software for automation of routine transactions. We also provide managers &amp; decision makers to visualise &amp; analyse the performance of entire businesses in real time. As a result, 100% of our customers has seen business growth, as they could analyze historical data to draw meaningful inferences, improve workflow &amp; drive innovation. With its customer centric approach, we have been growing leaps &amp; bounds. We are successful in retaining our old customers &amp; attracting new ones. We also provides related consultancy, education &amp; support services for the same across the country.
					</p>
				</div>
			</Container>
		)
}
export default AboutUsContent;
