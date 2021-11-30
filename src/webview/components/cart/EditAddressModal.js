import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";

import CrossImg from "../../../assets/images/cross-grey.svg";

import EditBg from "../../../assets/images/bg_edit_address.svg";

import User from "../../../assets/images/user.svg";
import Store from "../../../assets/images/store.svg";
import Email from "../../../assets/images/email.svg";
import Phone from "../../../assets/images/phone.svg";
import Address from "../../../assets/images/address.svg";
import Shape from "../../../assets/images/shape.svg";
import City from "../../../assets/images/city.svg";
import State from "../../../assets/images/worldwide.svg";
import Zipcode from "../../../assets/images/zip_code.svg";
import Landmark from "../../../assets/images/landmark.svg";
import { Tooltip, Zoom } from "@material-ui/core";
import { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { makeStyles, MenuItem, CircularProgress } from "@material-ui/core";

const editAddress = [
  {
    "store_id": "00001",
    "store_name": "Maruthi Medicals",
    "name": "sabari",
    "phone": "9123456789",
    "address1": "69, 2nd Floor, Al-ameen towers, Lal Bagh Main",
    "address2": "Hosur Main Road, Sudhama Nagar.",
    "pincode": "641008",
    "state": "Karnadaka",
    "city": "Bangaluru",
    "area": "Al-Ameen College",
    "branchs": [
      {
        "branch_id": "01001",
        "branch_name": "Lalbagh",
      },
      {
        "branch_id": "01002",
        "branch_name": "HSR Layout",
      },
      {
        "branch_id": "01003",
        "branch_name": "Madiwala",
      }
    ],
  }

]

const EditAddressModal = (props) => {

  const address1Value= editAddress[0].address1;
  const address2Value= editAddress[0].address2;
  const pincodeValue= editAddress[0].pincode;
  const stateValue= editAddress[0].state;
  const cityValue= editAddress[0].city;
  const areaValue= editAddress[0].area;
  const { open, handleClose,branchListResult } = props;
  const [optValue, setOptValue] = useState("01001");
  const [address1, setAddress1] = useState(address1Value);
  const [address2, setAddress2] = useState(address2Value);
  const [pincode, setPincode] = useState(pincodeValue)
  const [state, setState] = useState(stateValue)
  const [city, setCity] = useState(cityValue)
  const [area, setArea] = useState(areaValue)
  const [click, setClick] = useState(false)
 
  const handleSelect = (event) => {
    setOptValue(event.target.value);
  };
  
  return (
    <div>
    {
        editAddress && editAddress.map((data, index) => (
          <>
            <Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className="roadblock-popup"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
				timeout: 500
				}}
	            >
				<Fade in={open}>
					<div className="demo-popup-sec cart-edit-address-modal">
						<div className="demopopup-titlesec">
							<div className="imageZickStrip" style={{ backgroundImage: `url(${EditBg})`}}>
								<div className="stripHead">
									<h5 className="m-0">Great! Edit “Store/Firm Address” Below.</h5>
									<h4>Address Information</h4>
				                   	<Tooltip title="Close" TransitionComponent={Zoom}>
										<div className="cross-img-div">
											<img src={CrossImg} alt="cross-img" onClick={handleClose} />
										</div>
									</Tooltip>
								</div>
							</div>
		                </div>
		                <form className="formEditAddress">
		                    <div>
		                    	<h4 className="profile-subtitle">Store Info</h4>
		                    </div>
							
		                    <Grid container spacing={0}>
		                      	<Grid item xs={4}>
			                    	<div className="mr-8">
		                          		<TextField
											name="c_store_name"
											margin="normal"
											variant="outlined"
											value={data.store_name}
											disabled
											className="auth-input"
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<img src={Store} alt="Store" />
													</InputAdornment>
												)
											}}
										/>
		                        	</div>
		                      	</Grid>
		                      	<Grid item xs={4}>
									<div className="mr-8 ml-8">
										<TextField
											name="c_name"
											margin="normal"
											variant="outlined"
											value={data.name}
											disabled
											className="auth-input"
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<img src={User} alt="User" />
													</InputAdornment>
												)
											}}
										/>
									</div>
		                      	</Grid>
								<Grid item xs={4}>
									<div className="ml-8">
										<TextField
											name="c_phone"
											margin="normal"
											variant="outlined"
											value={data.phone}
											disabled
											className="auth-input"
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<img src={Phone} alt="Phone" />
													</InputAdornment>
												)
											}}
										/>
									</div>
								</Grid>
								<Grid item xs={4}>
									<div className="mr-8">
										<TextField
											name="c_phone"
											margin="normal"
											variant="outlined"
											value={data.phone}
											disabled
											className="auth-input"
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<img src={Phone} alt="Phone" />
													</InputAdornment>
												)
											}}
										/>
									</div>
								</Grid>
							</Grid>
			                <div>
			                 	<h4 className="profile-subtitle">Address Info</h4>
			                </div>
			                <Grid container spacing={0}>
			                    <Grid item xs={6}>
									<div className="mr-8">
										<TextField
											name="c_address1"
											margin="normal"
											variant="outlined"
											placeholder={data.address1}
											autoComplete="off"
											value={address1}
											onChange={e=>setAddress1(e.target.value)}
											className="auth-input"
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<img src={Address} alt="Address" />
													</InputAdornment>
												)
											}}
										/>
									</div>
								</Grid>
								<Grid item xs={6}>
									<div className="ml-8">
										<TextField
											name="c_address2"
											margin="normal"
											variant="outlined"
											placeholder={data.address2}
											autoComplete="off"
											value={address2}
											onChange={e=>setAddress2(e.target.value)}
											className="auth-input"
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<img src={Address} alt="Address" />
													</InputAdornment>
												)
											}}
										/>
									</div>
								</Grid>
								<Grid item xs={4}>
									<div className="mr-8">
										<TextField
											name="c_pincode"
											margin="normal"
											variant="outlined"
											placeholder={data.pincode}
											autoComplete="off"
											value={pincode}
											onChange={e=>setPincode(e.target.value)}
											className="auth-input"
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<img src={Zipcode} alt="Zipcode" />
													</InputAdornment>
												)
											}}
										/>
									</div>
								</Grid>
								<Grid item xs={4}>
									<div className="ml-8 mr-8">
										<TextField
											name="c_city"
											margin="normal"
											variant="outlined"
											placeholder={data.city}
											autoComplete="off"
											value={city}
											onChange={e=>setCity(e.target.value)}
											className="auth-input"
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<img src={State} alt="State" />
													</InputAdornment>
												)
											}}
										/>
									</div>
								</Grid>
								<Grid item xs={4}>
									<div className="ml-8">
										<TextField
											name="c_state"
											margin="normal"
											variant="outlined"
											placeholder={data.state}
											autoComplete="off"
											value={state}
											onChange={e=>setState(e.target.value)}
											className="auth-input"
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<img src={City} alt="City" />
													</InputAdornment>
												)
											}}
										/>
									</div>
								</Grid>
								<Grid item xs={4}>
									<div className="mr-8">
										<TextField
											name="c_city_name"
											select
											className="auth-input"
											value={optValue}
											onChange={handleSelect}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<img src={Shape} alt="city" />
													</InputAdornment>
												)
											}}
											margin="normal"
											variant="outlined"
											>
											{
												data.branchs.map((item1,index1)=>(
													<MenuItem value={item1.branch_id}>{item1.branch_name}</MenuItem>
												))
											}
										</TextField>
									</div>
								</Grid>
								<Grid item xs={4}>
									<div className="mr-8 ml-8">
										<TextField
											name="c_area"
											margin="normal"
											variant="outlined"
											placeholder={data.area}
											autoComplete="off"
											value={area}
											onChange={e=>setArea(e.target.value)}
											className="auth-input"
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<img src={Landmark} alt="Landmark" />
													</InputAdornment>
												)
											}}
										/>
									</div>
								</Grid>
								<Grid item xs={12} className="mb-24 text-right">
									<Button
						                className="cancel-demo-btn mr-12"
						                onClick={handleClose}
						              >
						                Close
						            </Button>
					                <Button
										className="save-changes-btn"
										onClick={handleClose}>
										Save Changes
					                </Button>
								</Grid>
			                </Grid>
		            	</form>
		            </div>
	            </Fade>
            </Modal>
          </>
        ))
    }
    </div>
  );
};

export default EditAddressModal;
