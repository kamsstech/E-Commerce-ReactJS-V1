import * as React from "react";
import { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Sidebar from "../sidebar/Sidebar";
import AddPageForm from "./AddPageForm";

export const AddPage = (props) => {
	const {
		AddPageAction,
		addPageResult
	} = props;
	const [value1, setValue1] = React.useState(0);
	const [value2, setValue2] = React.useState({
		c_area_name:""
	  });

	const [step, setStep] = React.useState(value1);
	const [down, setDown] = React.useState(value1);
	const [isEditPrevent, setIsEditPrevent] = React.useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		
		
		let val = value1 + 1;
		let val1 = value1 - 1;
		if(val > value1){
			setStep(val);
		}
		else if(val1 < value1){
			setDown(val1);
		}
	 
		
	}, [value1])



	const handleNext = () => {
		setValue1(step);
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
							isEditPrevent={isEditPrevent}
							setIsEditPrevent={setIsEditPrevent}
							page="add-page"
						/>
					</Grid>
					<Grid item xs={9}>
						<div className="myprofile-box border-botttom-none">
							<AddPageForm
								value1={value1}
								handleNext={handleNext}
								handleBack={handleBack}
								step={step}
								setValue2={setValue2}
								value2={value2}
								isEditPrevent={isEditPrevent}
								setIsEditPrevent={setIsEditPrevent}
								AddPageAction={AddPageAction}
								addPageResult={addPageResult}
							/>
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default AddPage;
