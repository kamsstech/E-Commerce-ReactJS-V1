import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../preLogin/Navbar/Navbar";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

import ScheduleDemoForm1 from "../landing1/ScheduleDemoForm1";
import ImageNASlider from "./ImageNASlider";
import ItemNAInfo from "./ItemNAInfo";
import ItemNADesc from "./ItemNADesc";
import FooterPage from "../footerSection/Footer";


import { getToken } from "../../../common/components/getToken/getToken";


const PDPNAPage = (props) => {
	let history = useHistory();
	const [openPopUp, setOpenPopUp] = React.useState(false);

	const handlePopUpClickOpen = () => {
		setOpenPopUp(true);
	};

	const handlePopUpClose = () => {
		setOpenPopUp(false);
	};

	const [fullWidth, setFullWidth] = React.useState(true);
  	const [maxWidth, setMaxWidth] = React.useState('md');

	const {
		match,
		GetPdpNAPageItems,
		pdpNAPageItemsResult,
		ScheduleDemoAction,
		scheduledemoRequestResult,
		ScheduleDemoEmailAction,
		scheduleDemoEmailResult
		
	} = props;

	console.log(pdpNAPageItemsResult,"<<<< pdpNAPageItemsResult")

	
	const [errorMsgItemDetails, SeterrorMsgItemDetails] = useState("");
	const [showProductDetails, SetshowProductDetails] = useState(false);

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

	useEffect(() => {
		window.scrollTo(0, 0);
		var token = getToken();
		if (token || !token) {
			SetshowProductDetails(true);
		} else {
			SetshowProductDetails(false);
		}

		setTimeout(() => {
			handlePopUpClickOpen();
		}, 3000);
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [match.params.itemCode]);

	useEffect(() => {
		GetPdpNAPageItems(match.params.itemCode);
	}, [match.params.itemCode]);

	useEffect(() => {
		if (!pdpNAPageItemsResult.payload) {
			SeterrorMsgItemDetails(pdpNAPageItemsResult.error);
		}
	}, [!pdpNAPageItemsResult.loading]);

	const getLocation = () => {
	    if (!navigator.geolocation) {
	        setStatus('Geolocation is not supported by your browser');
	    } else {
	        setStatus('Locating...');
	        navigator.geolocation.getCurrentPosition((position) => {
	            setStatus(null);
	            setLat(position.coords.latitude);
	            setLng(position.coords.longitude);
	        }, () => {
	            setStatus('Unable to retrieve your location');
	        });
	    }
	}

	const handlePopUpCancel = (e)=> {
		if(e)
		{
			history.goBack();
		}
		else
		{
			history.push("/");
		}
	}

	useEffect(() => {
	    // getLocation()
	    Aos.init({
			offset: 200,
	      duration: 600,
	      easing: 'ease-in-sine',
	      delay: 100,
		});
	}, [])

	return (
		<>

		<div className="body-spacing">
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
			<Navbar OpenDemoForm={OpenDemoForm} />


			<Container fixed>
				<div className="pdp-flex-container">
					{/*<h1 onClick={handlePopUpClickOpen}>Data</h1>*/}
					<div className="preview-sec">
						<ImageNASlider
							payload={pdpNAPageItemsResult.payload}
							imageUrls={pdpNAPageItemsResult.payload}
							thumbNailsUrls={pdpNAPageItemsResult.payload}
							showProductDetails={showProductDetails}
							
						/>
					</div>
					<div className="desc-sec">
						<div className="pl-24">
							<ItemNAInfo
								errorMsgItemDetails={errorMsgItemDetails}
								GetPdpNAPageItems={GetPdpNAPageItems}
								pdpNAPageItemsResult={pdpNAPageItemsResult}
							/>

							<ItemNADesc pdpNAPageItemsResult={pdpNAPageItemsResult} />
							
						</div>
					</div>
				</div>
			</Container>
			<FooterPage OpenDemoForm={OpenDemoForm} />
		</div>


		<Dialog
			className="pda-popup"
			open={openPopUp}
			fullWidth={fullWidth}
			maxWidth={maxWidth}
			onClose={handlePopUpClose}
			>
			<Dialog
				className="pda-popup NonMuiBackdrop"
				open={openPopUp}
				fullWidth={fullWidth}
				maxWidth={maxWidth}
				data-aos="fade-up"
	     		data-aos-anchor-placement="top-bottom"
				onClose={handlePopUpClose}
				>
				<div>
					<DialogTitle>Please login to continue</DialogTitle>
					<DialogContent>
						<DialogContentText>
							To view details of the sellers and more details of the product, Please Login.
						</DialogContentText>
					</DialogContent>

					<DialogActions>
						<Button className="cancel" onClick={(e) => handlePopUpCancel(e)} color="primary">
							Cancel
						</Button>
						<Link to="/login">
							<Button className="login" onClick={handlePopUpClose} color="primary">
								Login
							</Button>
						</Link>
					</DialogActions>
				</div>
			</Dialog>
		</Dialog>
      </>
	);
};

export default PDPNAPage;