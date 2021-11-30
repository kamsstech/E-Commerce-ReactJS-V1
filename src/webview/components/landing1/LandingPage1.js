import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import SiteLoader from "./SiteLoader/SiteLoader";
// import siteLogo from "../../../assets/images/landing_logo.svg";
// import Button from "@material-ui/core/Button";

import Navbar from "../preLogin/Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import WhyLiveSection from "./WhyLiveSection/WhyLiveSection";
import NewVideo from "./VideoSection/NewVideo";
import PartnerSection from "./PartnerSection/PartnerSection";
import Testimonials from "./Testimonials/Testimonials";
import LetsStartSection from "./LetsStartSection/LetsStartSection";
import FooterPage from "../footerSection/Footer";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

import SuccessModal from "./SuccessModal/SuccessModal";
// import ScheduleDemoForm from "../home/ScheduleDemoForm";
import ScheduleDemoForm1 from "./ScheduleDemoForm1";
// import getLocation from "../getLocation/GeoLocat";

let history = createBrowserHistory();

function LandingPage1(props) {
	const {
		demoRequestResult,
		submitDemoRequestAction,
		ScheduleDemoAction,
		scheduledemoRequestResult,
		SearchByNAProduct,
		searchByNAProductResult,
		ScheduleDemoEmailAction,
		scheduleDemoEmailResult


	} = props;
	const [state, setState] = useState({
		scroll: false,
	});
	const [open, setOpen] = useState(false);
	const [heading, setHeading] = useState("");
	const [productValue, setProductValue] = useState("");

	const [lat, setLat] = useState(null);
	const [lng, setLng] = useState(null);
	const [status, setStatus] = useState(null);


	const handleClose = () => {
		setOpen(false);
	};
	const OpenDemoForm = (demoFor, proVal) => {
		setOpen(true);
		console.log(demoFor, "<<<demoFor");
		console.log(proVal, "<<<proVal");
		setHeading(demoFor);
		setProductValue(proVal);
	};

	const [showLoader, setShowLoader] = useState(false);
	const [successModal, setSuccessModal] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [_, setSchedulerData] = useState({
		firmName: "",
		ownerName: "",
		phone: "",
		pinCode: "",
		description: "",
		isSeller: false,
	});


	function scheduleDemoHandler() {
		setShowModal((prev) => !prev);
		setSchedulerData({
			firmName: "",
			ownerName: "",
			phone: "",
			pinCode: "",
			description: "",
			isSeller: false,
		});
		setSuccessModal(true);
		setTimeout(() => {
			setSuccessModal(false);
		}, 3000);
	}
	function scheduleDataHandler(data) {
		setSchedulerData((prev) => ({ ...prev, data }));
	}

	function autoDisable() {
		localStorage.setItem("WEB_LOAD_INITIATE","INITIATED");

	}
	useEffect(() => {
		if (history.location.pathname === "/" && history.location.hash === "") 
		{
			setTimeout(() => {
				setShowLoader(true);
				autoDisable();
			}, 2000);

			// setTimeout(() => {
			// }, 3000);

			// if(localStorage.getItem("DHANA")=="loaded")
			// {
			// 	setShowLoader(true);
			// }
			// else
			// {
			// 	setTimeout(() => {
			// 		setShowLoader(true);
			// 	}, 2000);
			// }
		} else {
			setShowLoader(true);
			autoDisable();
		}
	}, [history.location.pathname]);

	// const getLocation = () => {
	// 	if (!navigator.geolocation) {
	// 	  setStatus('Geolocation is not supported by your browser');
	// 	} else {
	// 	  setStatus('Locating...');
	// 	  navigator.geolocation.getCurrentPosition((position) => {
	// 		setStatus(null);
	// 		setLat(position.coords.latitude);
	// 		setLng(position.coords.longitude);
	// 	  }, () => {
	// 		setStatus('Unable to retrieve your location');
	// 	  });
	// 	}
	//   }


	// useEffect(() => {
	// 	getLocation()
		
	//   }, [])
	return (
		
		<>
			<ScrollToTop />

			<ScheduleDemoForm1
				open={open}
				handleClose={handleClose}
				demoFor={heading}
				productValue={productValue}
				ScheduleDemoAction={ScheduleDemoAction}
				scheduledemoRequestResult={scheduledemoRequestResult}
				ScheduleDemoEmailAction={ScheduleDemoEmailAction}
				scheduleDemoEmailResult={scheduleDemoEmailResult}
			/>
			
			<SuccessModal
				isOpen={successModal}
				closeModal={() => setSuccessModal(false)}
			/>
			<div className="mainpage-header1">
				
				
				{
					localStorage.getItem("WEB_LOAD_INITIATE")!="INITIATED" ? 
					history.location.pathname === "/" && history.location.hash === ""  && (
						<SiteLoader showLoader={showLoader} />
					) : ""
				}
				
				
				{/*showLoader === true && */}
				{(
					<>
						<Navbar OpenDemoForm={OpenDemoForm} />
						<HeroSection
						SearchByNAProduct={SearchByNAProduct}
						searchByNAProductResult={searchByNAProductResult}
						/>
						<WhyLiveSection OpenDemoForm={OpenDemoForm} />
						<NewVideo />
						{/*<PartnerSection />
						<Testimonials />
						<LetsStartSection OpenDemoForm={OpenDemoForm} />*/}
						<FooterPage OpenDemoForm={OpenDemoForm} />
					</>
				)}
			</div>
		</>
	);
}

export default LandingPage1;