import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import LeftPatternSVG from "../../../assets/images/prepage/terms-left-pattern.svg";
import RightPatternSVG from "../../../assets/images/prepage/terms-right-pattern.svg";
import Aos from "aos";
import "./css/Help.css";
import "aos/dist/aos.css";
import PatternHelp from "../../../assets/images/prepage/pattern-help.svg";

const HelpBanner = () => {
	useEffect(() => {
		Aos.init({
			duration: 1000,
		});
	}, []);
	return (
		<div className="prepageBanner">
			<div className="MainContainer">
				<div className="help-container-welcome MainContainer">
					<div style={{ textAlign: "left" }} className="pt-5">
						<h3
							className="h3 help-heading"
							data-aos="fade-down"
							data-aos-delay="500"
						>
							Namaste!
							<br />
							How can we assist you?
						</h3>
						<p
							className="help-write-to-us help-heading body-copy mb-3"
							data-aos="fade-down"
							data-aos-delay="500"
						>
							Write us on{" "}
							<span className="highlight-purple">liveorder@c2info.com</span>{" "}
							or Call <span className="highlight-purple">080-67657007/8095170000</span>
							<br />
							We would love to hear from you
						</p>
					</div>
					<div>
						{/*<img src={PatternHelp} />*/}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HelpBanner;
