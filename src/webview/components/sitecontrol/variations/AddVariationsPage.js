import * as React from "react";
import { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Sidebar from "../sidebar/Sidebar";
import AddVariationsForm from "./AddVariationsForm";
// import "./css/ProfileStyles.css";

export const AddVariationsPage = (props) => {
	const {
		addVariationsPageResult,AddVariationsPageAction
	} = props;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="body-spacing dSprofile ProfileInfo">
			<Container fixed>
				<Grid container spacing={0}>
					<Grid item xs={3}>
						<Sidebar
							page="add-variations"
						/>
					</Grid>
					<Grid item xs={9}>
						<div className="myprofile-box border-botttom-none">
							<AddVariationsForm
							AddVariationsPageAction={AddVariationsPageAction}
							addVariationsPageResult={addVariationsPageResult}
							/>
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default AddVariationsPage;
