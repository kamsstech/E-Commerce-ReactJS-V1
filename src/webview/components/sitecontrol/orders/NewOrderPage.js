import * as React from "react";
import { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Sidebar from "../sidebar/Sidebar";
import NewOrderListPage from "./NewOrderListPage";
// import "./css/ProfileStyles.css";

export const NewOrderPage = (props) => {
	const {
		registerDetails,
		getProfileInfo,
		saveProfileInfo,
		saveProfileInfoResult,
		getProfileInfoResult,
		StateListAction,
		stateListResult,
		CityListAction,
		cityListResult,
		AreaListAction,
		areaListResult,
		GSTListAction,
		gstListResult,
		imageupload,
		imageUploadResult,
		branchListResult,
		getBranchListAction,
		GetStateCityArea,
		getStateCityAreaResult
	} = props;
	// console.log(getProfileInfoResult,"<<< getProfileInfoResult")
	const [value1, setValue1] = React.useState(0);
	const [value2, setValue2] = React.useState({
		c_area_name:""
	  });

	const [step, setStep] = React.useState(value1);
	const [down, setDown] = React.useState(value1);
	const [isEditPrevent, setIsEditPrevent] = React.useState(false);

	

	// console.log(getProfileInfo, "<<getProfileInfo");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		
		
		let val = value1 + 1;
		let val1 = value1 - 1;
		// console.log(value,"value")
		// console.log(val,"val")
		if(val > value1){
			setStep(val);
		}
		else if(val1 < value1){
			setDown(val1);
		}
	 
		
	}, [value1])



	const handleNext = () => {
		
		setValue1(step);
		// if (match.params.type === "seller" &&inputs.c_firm_contact_person === "" || 
		// match.params.type === "seller" && errors.c_firm_contact_person === true ) {
		//   setErrors({ ...errors, c_firm_contact_person: true });
		//   setValue(0);
		// }else if (match.params.type === "seller" &&inputs.c_email === "" || 
		// match.params.type === "seller" && errors.c_email === true ) {
		//   setErrors({ ...errors, c_email: true });
		//   setValue(0);
		// }else if (match.params.type === "seller" &&inputs.c_firm_address1 === "" || 
		// match.params.type === "seller" && errors.c_firm_address1 === true ) {
		//   setErrors({ ...errors, c_firm_address1: true });
		//   setValue(0);
		// }
		// else if (match.params.type === "seller" &&inputs.c_firm_address2 === "" || 
		// match.params.type === "seller" && errors.c_firm_address2 === true ) {
		//   setErrors({ ...errors, c_firm_address2: true });
		//   setValue(0);
		// }else if (match.params.type === "seller" &&inputs.c_pincode === "" || 
		// match.params.type === "seller" && errors.c_pincode === true ) {
		//   setErrors({ ...errors, c_pincode: true });
		//   setValue(0);
		// }
		
		
		// else{
		//   setValue(1);
		// }
	 
	};
const handleBack=()=>{
	setValue1(down);
}

	return (
		<div className="body-spacing dSprofile ProfileInfo">
			<Container fixed>
				<Grid container spacing={0}>
					<Grid item xs={3}>
						<Sidebar
							registerDetails={registerDetails}
							imageupload={imageupload}
							imageUploadResult={imageUploadResult}
							getProfileInfo={getProfileInfo}
							getProfileInfoResult={getProfileInfoResult}
							isEditPrevent={isEditPrevent}
							setIsEditPrevent={setIsEditPrevent}
							page="profile"
						/>
					</Grid>
					<Grid item xs={9}>
						<div className="myprofile-box border-botttom-none">
							<NewOrderListPage
								GetStateCityArea={GetStateCityArea}
								getStateCityAreaResult={getStateCityAreaResult}
								getProfileInfo={getProfileInfo}
								getProfileInfoResult={getProfileInfoResult}
								saveProfileInfo={saveProfileInfo}
								saveProfileInfoResult={saveProfileInfoResult}
								StateListAction={StateListAction}
								stateListResult={stateListResult}
								CityListAction={CityListAction}
								cityListResult={cityListResult}
								AreaListAction={AreaListAction}
								areaListResult={areaListResult}
								GSTListAction={GSTListAction}
								gstListResult={gstListResult}
								imageupload={imageupload}
								value1={value1}
								handleNext={handleNext}
								handleBack={handleBack}
								step={step}
								imageUploadResult={imageUploadResult}
								branchListResult={branchListResult}
								getBranchListAction={getBranchListAction}
								setValue2={setValue2}
								value2={value2}
								isEditPrevent={isEditPrevent}
								setIsEditPrevent={setIsEditPrevent}
							/>
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default NewOrderPage;
