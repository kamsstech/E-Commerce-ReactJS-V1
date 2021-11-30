import React, { useEffect, useState } from "react";
// import { Button, Col, Form, Row } from "react-bootstrap";

import { Button, Checkbox, Snackbar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import { Modal, ModalBody } from "reactstrap";

import DemoBGC2 from "../../../../assets/images/bg_of_demo.png";
import ShopSVG from "../../../../assets/images/shop.svg";
import SmartphoneSVG from "../../../../assets/images/smartphone_1.svg";
import ZipcodeSVG from "../../../../assets/images/zip-code.svg";
import UserSVG from "../../../../assets/images/user.svg";
// import "./ScheduleADemo.css";

function ScheduleADemo(props) {
	const [modal, setModal] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [errorName, setErrorName] = useState(false);

	const [ownerName, setOwnerName] = useState("");
	const [errorOwner, setErrorOwner] = useState(false);

	const [phone, setPhone] = useState("");
	const [errorPhone, setErrorPhone] = useState(false);

	const [pinCode, setPinCode] = useState("");
	const [errorPincode, setErrorPincode] = useState(false);

	const [description, setDescription] = useState(
		"Yes, I am interested in a demo."
	);
	const [errorDescription, setErrorDescription] = useState(false);
	const [isSeller, setIsSeller] = useState(false);

	useEffect(() => {
		setModal(props.isOpen);
	}, [props.isOpen]);

	function dataHandler() {
		// if (firstName === "") {
		//   setErrorName(true);
		// }

		// if (ownerName === "") {
		//   setErrorOwner(true);
		// }

		// if (phone === "") {
		//   setErrorPhone(true);
		// }

		// if (pinCode === "") {
		//   setErrorPincode(true);
		// }

		// if (description === "") {
		//   setErrorDescription(true);
		// }

		let data = {
			firstName,
			ownerName,
			phone,
			pinCode,
			description,
			isSeller,
		};

		// if (
		//   errorName === false &&
		//   errorOwner === false &&
		//   errorPhone === false &&
		//   errorPincode === false &&
		//   errorDescription === false
		// ) {
		props.scheduleDataHandler(data);
		setModal(false);
		props.scheduleDemoHandler();
		resetFormData();
		// }
	}

	const resetFormData = () => {
		setFirstName("");
		setOwnerName("");
		setPhone("");
		setPinCode("");
		setDescription("");
		setIsSeller(false);
	};

	const handleNumberChange = (e, type) => {
		let telephone = e.target.value;

		if (telephone.length > 0) {
			if (!Number(telephone)) {
				if (type === "pincode") {
					// return setInvalidPincode(true);
					return;
				} else if (type === "phone") {
					// return setInvalidPhone(true);
					return;
				} else {
					return;
				}
			}

			if (type === "pincode") {
				setPinCode(e.target.value);
				// setInvalidPincode(false);
			} else if (type === "phone") {
				setPhone(e.target.value);
				// setInvalidPhone(false);
			}
		} else {
			if (type === "pincode") {
				setPinCode("");
				// setInvalidPincode(false);
			} else if (type === "phone") {
				setPhone("");
				// setInvalidPhone(false);
			}
		}
	};

	return (
		<></>
		// <h1>D</h1>
	);
}

export default ScheduleADemo;
