import * as React from "react";
import { useState, useEffect } from "react";
import {Link, Redirect} from "react-router-dom";
import PlusWhite from "../../../assets/images/plus-white.svg";
import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Constants } from "../../../common/constant/localstorage";
import { ENV } from "../../../common/constant/env";
import axios from "axios";

import DeleteBranchModal from "./DeleteBranchModal";


const Branch = (props) => {
	const { getBranchListAction, branchListResult, deleteBranchAction, deleteBranchResult,
		searchBranchListAction, clearGetBranch, clearDeleteBranch } = props;
	
	const [errorMsg, setErrorMsg] = useState("");
	const [searchKey, setSearchKey] = useState("");
	const [openDeleteBranchModal, setOpenDeleteBranchModal] = useState(false);
	const [deleteBranchId, setDeleteBranchId] = useState(0);
	const [isDefault, setIsDefault] = useState(false);
	const [defaultBranch1, setDefaultBranch1] = React.useState("");
	const [br_code, setBr_Code] = useState("");
	
	const handleOpenDeleteBranchModal = (branchId) => {
		
		setErrorMsg("")
		setDeleteBranchId(branchId)
		setOpenDeleteBranchModal(true);
		if(defaultBranch1 === branchId.toString()){
			setIsDefault(true);
		} else {
			setIsDefault(false);
		}
	};

	const handleCloseDeleteBranchModal = () => {
		setOpenDeleteBranchModal(false);
	};

	useEffect(() => {
		const body={
			"n_page":"0",
			"n_limit":"10"
		}
		getBranchListAction(body);

		// const branchId = localStorage.getItem(Constants.DEFAULT_FIRM_ID)
		// setDefaultBranch1(branchId);

		return () => {
			// clearGetBranch();
			clearDeleteBranch();
		}
	}, []);

	useEffect(() => {
		if(branchListResult.error !== ""){
			setErrorMsg(branchListResult.error);
		}
		else{
			
				let temp = {};
				Object.entries(branchListResult.payload).map((entry,index) => {
					console.log(entry[1].c_default_status, "<<< entry.c_BR_Code")
					if(entry[1].c_default_status === "Y"){
						temp = entry[1];
					}
					
					setBr_Code(temp.c_br_code);
					setDefaultBranch1(temp.c_br_code)
				});
		
		}
	}, [branchListResult])

	useEffect(() => {
		setOpenDeleteBranchModal(false);
		if(deleteBranchResult.error !== ""){
			setErrorMsg(deleteBranchResult.error);
		} 
	}, [deleteBranchResult])

	

	const handleDefaultBranch = (event) => {
		setDefaultBranch1((event.target).value);
		localStorage.setItem(Constants.DEFAULT_FIRM_ID, (event.target).value);
		localStorage.setItem(Constants.FIRM_ID, (event.target).value);
		props.setDefaultBranch((event.target).value)
	};

	const handleChange = (e) => {
		var regex = /^[A-Za-z0-9]+$/;
		setSearchKey(e.target.value);
		setErrorMsg("");

		if(e.target.value.length === 0){
			getBranchListAction();
		} else if(regex.test(e.target.value)){
			searchBranchListAction(e.target.value)
		} else {
			setErrorMsg("Special characters are not allowed")
		}
	} 

	// console.log(branchListResult.payload, "jhagja")
	return (
		<>  
			<DeleteBranchModal 
				openDeleteBranchModal={openDeleteBranchModal}
				handleCloseDeleteBranchModal={handleCloseDeleteBranchModal}
				deleteBranchId={deleteBranchId}
				deleteBranchAction={deleteBranchAction}
				isDefault={isDefault}
			/>
			<div className="profile-title-sec">
				<div>
				<h4 className="profile-title">Branch Management</h4>
				<p className="profile-subtitle">Manage your all branches at one place.</p>
				</div>

				<div className="profile-title-sec absolute-profile b-0">
					<Link to="/profile/add-branch" >
					<Button
						variant="contained"
						color="primary"
						className="profile-addnewuser"
						component="span"
					>
						<img src={PlusWhite} alt="PlusWhite" className="mr-10" />
						Add new Branch
					</Button>
					</Link>
				</div>
			</div>
			<div className="profile-details-sec">

				<p className="login-error-msg mb-10 min-height-none">{errorMsg.toLowerCase()}</p>
				<div className="change-branch-sec p-0">
					<FormControl component="fieldset" className="width-100">
						<RadioGroup aria-label="gender" name="gender1" value={defaultBranch1} onChange={handleDefaultBranch}>
							{(branchListResult.payload).sort(function(bItem,bItem1){
									if((bItem1.c_br_code.toString() === defaultBranch1) && (bItem.c_br_code.toString() !== defaultBranch1) ) {
										return 1;
									}else{
										return -1;
									}
							}).map((item, index) => (
								<div className="added-user" key={item.c_br_code}>
									<div className="adduser-details">
										<div className="adduser-profileimg">
											{/* {item.c_name.charAt(0).toUpperCase()} */}
											{(item.c_br_name.match(/\b\w/g) || []).shift() || ''}{(item.c_br_name.match(/\b\w/g) || [])[1] || ''}
										</div>
										<div>
											<h4 className="adduser-proname">{<>
													<>{item.c_br_name}</>
													<>{(item.c_area_name!==undefined && item.c_area_name!=="") && <> ({item.c_area_name} {(item.c_landmark !==undefined && item.c_landmark !=="") && <>, {item.c_landmark}</>})</>}</>
												</>
											}</h4>
											<h4 className="adduser-prodetails">
												{item.c_city_name}{(item.c_pincode!== undefined && item.c_pincode!=="") && <><span>|</span>({item.c_pincode})</> }
											</h4>
										</div>
									</div>
									<div className="width-35">
										<div className="display-flex">
											<FormControlLabel
												value={item.c_br_code.toString()}
												control={
												<Radio color="primary" 
												// checked={item.c_default_status === "Y" ? true : false}
												/>}
												label="Set default"
												className="p-0 mr-10 font-12"
											/>
											{searchKey.length === 0 ? <>
												{Array.isArray(props.branchListResult.payload) && props.branchListResult.payload.length > 1 &&
													<Button
														variant="contained"
														color="primary"
														className="addbranch-btn delete"
														component="span"
														onClick={()=>handleOpenDeleteBranchModal(item.c_br_code)}
													>
														delete
													</Button> 
												} </>
											: 
											<Button
												variant="contained"
												color="primary"
												className="addbranch-btn delete"
												component="span"
												onClick={()=>handleOpenDeleteBranchModal(item.c_br_code)}
											>
												delete
											</Button> 
											}
											<Link to={`/profile/edit-branch/${item.c_br_code}`}>
												<Button
													variant="contained"
													color="primary"
													className="addbranch-btn"
													component="span"
												>
													Edit
												</Button>
											</Link>
										</div>
									</div>
								</div>
							))}
						</RadioGroup>
					</FormControl>
				</div>
				
				{/* {Array.isArray(branchListResult.payload) && branchListResult.payload.length === 0 && <Redirect to="/profile/add-branch" /> } */}
			</div>
		</>
	);
};

export default Branch;
