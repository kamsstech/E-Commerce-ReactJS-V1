import * as React from "react";
import PSLogo from "../../../assets/images/pharmsoft-logo.png";
import EcogreenLogo from "../../../assets/images/ecogreen-logo.png";
// import PALogo from "../../../assets/images/pharmassist-logo.png";
import PALogo from "../../../assets/images/pharmassist.jpg";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import SolutionImg1 from "../../../assets/images/solution-bg1.jpg";
import SolutionImg2 from "../../../assets/images/solution-bg2.svg";
import SolutionImg3 from "../../../assets/images/solution-bg3.svg";
import EcoExpress from "../../../assets/images/eco-express.svg";
import Checklist from "../../../assets/images/pharmsoftWholesaleIllustration.svg";

import PharmWow from "../../../assets/images/pharmsoftWowIllustration.svg";
import EcoExpressLogo from "../../../assets/images/ecoexpress-logo.svg";
import PharmWholesaleLogo from "../../../assets/images/pharmsoft-wholsesale-logo.png";
import PharmWowLogo from "../../../assets/images/pharmsoftwow-logo.png";
import ScheduleDemoForm from "./ScheduleDemoForm";
import {
	StateListEntity,
	DemoRequestInputEntity,
	DemoRequestEntity,
} from "../../../common/model";
import Slider from "react-slick";
import BackArrow from "../../../assets/images/down-arrow-line-grey.svg";
import ForwardArrow from "../../../assets/images/leftarrowline.svg";

function SampleNextArrow(props) {
	const { style, onClick } = props;
	return (
		<div>
			<img src={BackArrow} alt="arrow" />
		</div>
	);
}
function SamplePrevArrow(props) {
	const { style, onClick } = props;
	return (
		<div>
			<img src={ForwardArrow} alt="arrow" />
		</div>
	);
}
const CSquareSolutions = (props) => {
	const {
		CityListAction,
		cityListResult,
		submitDemoRequestAction,
		demoRequestResult,
		ScheduleDemoEmailAction,
		scheduleDemoEmailResult
	} = props;

	const [open, setOpen] = React.useState(false);
	const [heading, setHeading] = React.useState("");
	const [productValue, setProductValue] = React.useState("");

	const openDemoForm = (demoFor, proVal) => {
		setHeading(demoFor);
		setProductValue(proVal);
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
		<span {...props}>{children}</span>
	);

	var settings = {
		infinite: false,
		speed: 1200,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		// onAfterChange: afterChange,
		// autoplaySpeed: 2000,
		// nextArrow: (<SlickButtonFix><div className="arrowsNext" ><SampleNextArrow  /></div></SlickButtonFix>),
		// prevArrow: (<SlickButtonFix><div className="arrowsPrev"><SamplePrevArrow  /></div></SlickButtonFix>)
	};

	return (
		<div>
			<div className="home-title-section">
				<div>
					<h4>C-Square Solutions helpful for you</h4>
					<h5>Increase your Business </h5>
				</div>
			</div>
			<div className="home-solutions-sec-slide">
				<Slider {...settings} className="advertisements-slide">
					<div className="home-solutions-sec-main">
						<div
							className="home-solutions-sec num1"
							style={{ backgroundImage: `url(${SolutionImg1})` }}
						>
							<img src={PSLogo} alt="PSLogo" />
							<h4>
								The <span className="green">End To End Solution</span> For{" "}
								<br />
								All Pharmacies.
							</h4>
							<p>
								Manage your store inventory,
								<br />
								Stock & Sales, Billing, Rack <br />
								Management etc...
							</p>
							{
								<Button
									variant="contained"
									color="primary"
									className="home-solution-getbtn"
									onClick={() => {
										openDemoForm("Pharmsoft", "PS");
									}}
								>
									Ask for Demo
								</Button>
							}
						</div>
					</div>
					<div className="home-solutions-sec-main">
						<div
							className="home-solutions-sec num2"
							style={{ backgroundImage: `url(${SolutionImg2})` }}
						>
							<img src={EcogreenLogo} alt="EcogreenLogo" />
							<h4>
								<span className="purple">One Stop Solution</span> To Manage{" "}
								<br />
								Your Retail Chains.
							</h4>

							<p>
								EcoGreen will help in "Several <br />
								Management" Inventory, Order, <br />
								Warehouse, Vender, Payroll Etc.
							</p>
							{
								<Button
									variant="contained"
									color="primary"
									className="home-solution-getbtn"
									onClick={()=>{openDemoForm("Ecogreen","EG")}}
								>
									Ask for Demo
								</Button>
							}
						</div>
					</div>
					<div className="home-solutions-sec-main">
						<div
							className="home-solutions-sec num3"
							style={{ backgroundImage: `url(${SolutionImg3})` }}
						>
							<img src={PALogo} alt="PALogo" />
							<h4>
								Grow Your<span className="orange"> Distribution</span> <br />
								Business
							</h4>
							<p>
								Helps in "Several Management" <br />
								Sales, Purchase, Inventory,
								<br />
								Accounts etc...
								<br />
							</p>
							{
								<Button
									variant="contained"
									color="primary"
									className="home-solution-getbtn"
									onClick={()=>{openDemoForm("Pharm Assist","PA")}}
								>
									Ask for Demo
								</Button>
							}
						</div>
					</div>
					<div className="home-solutions-sec-main">
						<div
							className="home-solutions-sec num4"
							style={{ backgroundImage: `url(${EcoExpress})` }}
						>
							<img src={EcoExpressLogo} alt="PALogo" />
							<h4>
								The <span className="purple">End To End Solution</span> For{" "}
								<br />
								All Pharmacies.
							</h4>
							<p>
								Manage your store inventory,
								<br />
								Stock & Sales, Billing, Rack <br />
								Management etc...
							</p>
							{
								<Button
									variant="contained"
									color="primary"
									className="home-solution-getbtn"
									onClick={()=>{openDemoForm("Pharm Assist","EG")}}
								>
									Ask for Demo
								</Button>
							}
						</div>
					</div>
				</Slider>
			</div>

			<ScheduleDemoForm
				demoFor={heading}
				open={open}
				handleClose={handleClose}
				productValue={productValue}
				
				submitDemoRequestAction={submitDemoRequestAction}
				demoRequestResult={demoRequestResult}
				ScheduleDemoEmailAction={ScheduleDemoEmailAction}
						scheduleDemoEmailResult={scheduleDemoEmailResult}
			/>
			{/* <DemoPharmsoft open = {open} handleClose={handleClose} /> */}
		</div>
	);
};

export default CSquareSolutions;
