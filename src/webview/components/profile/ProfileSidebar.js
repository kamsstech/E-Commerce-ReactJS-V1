import * as React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { REACT_APP_BASE_URL } from "../../../common/constant/env";
import axios from "axios";
import { Constants } from "../../../common/constant/localstorage";

import { Link } from "react-router-dom";
import Profile from "../../../assets/images/thumbnail.svg";
import Logout from "../../../assets/images/logout.svg";
import Account from "../../../assets/images/accountsetting.svg";
import Notification from "../../../assets/images/bell-blue.svg";
import Order from "../../../assets/images/order-grey.svg";
import { State } from "../../../rootReducer";
import { getProfileInfo, saveProfileInfo } from "../../../common/action";
import { connect } from "react-redux";

import DeleteProfilePic from './popups/DeleteProfilePic';

import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from "@material-ui/core/FormControlLabel";

const AntSwitch = withStyles((theme) => ({
	root: {
		width: 22,
		height: 9,
		padding: 0,
		display: 'flex',
	},
	switchBase: {
		padding: 2,
		color: theme.palette.grey[500],
		'&$checked': {
			transform: 'translateX(12px)',
			color: theme.palette.common.white,
			'& + $track': {
				opacity: 1,
				backgroundColor: theme.palette.primary.main,
				borderColor: theme.palette.primary.main,
			},
		},
	},
	thumb: {
		width: 8,
		height: 8,
		boxShadow: 'none',
	},
	track: {
		border: `1px solid ${theme.palette.grey[500]}`,
		borderRadius: 16 / 2,
		opacity: 1,
		backgroundColor: theme.palette.common.white,
	},
	checked: {},
}))(Switch);




export const ProfileSidebar = (props) => {
	let history = useHistory();
	const { page, getProfileInfo, getProfileInfoResult, saveProfileInfo, saveProfileInfoResult,imageupload,imageUploadResult,registerDetails } = props;
	
	const [errMsg, setErrMsg] = useState("");
	const [open,setOpen] = useState(false);
	const [checkedoffer, setCheckedoffer] = useState(false);
	const [checkedOrder, setCheckedOrder] = useState(false);


	const handleChange = (event) => {
		setCheckedoffer(event.target.checked);
	};

	const handleChangeorder = (event) => {
		setCheckedOrder(event.target.checked);
	};

	const [inputs, setInputs] = useState({
		c_mobile_no: "",
		c_name: "",
		c_seller: "",
		c_buyer: "",
		c_email: "",
		c_firm_contact_person: "",
		c_firm_address1: "",
		c_firm_address2: "",
		c_state_name: "-1",
		c_city_name: "-1",
		c_area_name: "-1",
		c_pincode: "",
		c_card_holder_name: "",
		c_card_no: "",
		d_card_exp: "",
		c_card_ifsc: "",
		c_druglicense_no1: "",
		c_druglicense_no2: "",
		c_druglicense_expiry_date: "",
		c_gst_type: -1,
		c_gst_no: "",
		c_narcotic_no: "",
		c_status: "",
		c_image_url: "",
		c_druglicense_no1_img: "",
		c_druglicense_no2_img: "",
		c_narcotic_no_img: "",
	})

	useEffect(() => {
		getProfileInfo()
	}, []);

	useEffect(() => {
		if (getProfileInfoResult.error === "") {
			let temp = { ...inputs }

			Object.entries(getProfileInfoResult.payload).map(entry => {
				temp[entry[0]] = entry[1];
			})
			setInputs(temp)
		} else {

		}
	}, [getProfileInfoResult])

const handleUpload = (event) => {
	var file = event.target.files[0];
	var reader = new FileReader();
	
	var filename = event.target.files[0].name;
	var idxDot = filename.lastIndexOf(".") + 1;
			var extFile = filename.substr(idxDot, filename.length).toLowerCase();
	if (extFile == "jpg" || extFile == "jpeg" || extFile == "png" || extFile == "svg" || extFile == "gif") {

	reader.onloadend = function() {

				const form = new FormData();
				form.append("img", file);
				imageupload(form);
				console.log(file,"file")
	}
	
	

	reader.readAsDataURL(file);
}else{
	setErrMsg("Please Select gif/png/jpg/jpeg images only")
}



};


	const handleSubmit = (url) => {
		let body = {};

		Object.entries(inputs).map(entry => {
			if (entry[1] !== "") {
				body[entry[0]] = entry[1]
			}
		})
		body["c_image_url"] = url
		saveProfileInfo(body)
	}

	const removeProfilePic = (imgPath) => {
		const headers = {
			"Content-Type": "application/json",
			"X-csquare-api-key": localStorage.getItem(Constants.KEY),
			"X-csquare-api-token": localStorage.getItem(Constants.TOKEN),
		};
		const body={
			path: imgPath
		}

		axios
			.post(`${REACT_APP_BASE_URL}/lc/ms/c2/blob/delete`,body, { headers })
			.then(response => {
				if (response.data.appStatusCode === 0) {
					// console.log(response, "fhdjhfkjdkfsdk");
					// setInputs({...inputs, c_image_url: ""})
					getProfileInfo()
				}
				else {
					setErrMsg(response.data.messages[0])
				}
			})
			.catch(error => {
				setErrMsg("Something went wrong, Please try again later!")
			});
	}

	// To show the error
	useEffect(() => {
		if (saveProfileInfoResult.error !== "") {
			setErrMsg(saveProfileInfoResult.error)
		} else {
			getProfileInfo();
		}
	}, [saveProfileInfoResult])

	const handleLogout = () => {
		localStorage.clear();
		history.push("/login");
		// window.location.reload(false)
	}
	const openDeleteModal = () => {
		setOpen(!open);
		// i=0;
}
const closeDeleteModal = () => {
	// console.log('khkvdfbj',open)
	setOpen(!open);
	// i=0;
}
const getYesResponse=()=>{
 
		// removeProfilePic(imgPath)
		removeProfilePic()
		setOpen(!open);
}
const getNoResponse=()=>{
	setOpen(!open);
}

	return (
		<div className="mr-16 sideProfileBar">
			<div>
				<div className="myprofile-box p-0 mt-0 non-strip">
					<div className="my-profile-tabs">
						<h5 className="profile-sidebar-headings">
							<img src={Account} alt="Account" />
							<span>Banner</span>{" "}
						</h5>
						<div className="MuiTabs-root profile-tab-options MuiTabs-vertical">
							<div className="MuiTabs-scrollable"></div>
							<div className="MuiTabs-scroller MuiTabs-scrollable mb-0" >
								<div aria-label="Vertical tabs example" className="MuiTabs-flexContainer MuiTabs-flexContainerVertical" role="tablist">
									<Link to="/profile" >
										<button className={page === "profile" ? "Mui-selected MuiButtonBase-root MuiTab-root MuiTab-textColorInherit" : "MuiButtonBase-root MuiTab-root MuiTab-textColorInherit"}>
											<span className="MuiTab-wrapper">Add Banner</span>
											<span className="MuiTouchRipple-root"></span>
										</button>
									</Link>
									
									<Link to="/profile/change-password" >
										<button className={page === "change-password" ? "Mui-selected MuiButtonBase-root MuiTab-root MuiTab-textColorInherit" : "MuiButtonBase-root MuiTab-root MuiTab-textColorInherit"}>
											<span className="MuiTab-wrapper">Manage Banner</span>
											<span className="MuiTouchRipple-root"></span>
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div >
				<DeleteProfilePic 
					openModal={open} 
					closeModal={closeDeleteModal}
					sendYesResponse={getYesResponse}
					sendNoResponse={getNoResponse}
				/>
			</div>
		</div>
		
	);
};

const mapStateToProps = (state) => ({
	saveProfileInfoResult: state.saveProfileInfo,
	getProfileInfoResult: state.getProfileInfoResult,
});

const mapDispatchToProps = (dispatch) => ({
	getProfileInfo: () => dispatch(getProfileInfo()),
	saveProfileInfo: (inputs) => dispatch(saveProfileInfo(inputs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSidebar);
