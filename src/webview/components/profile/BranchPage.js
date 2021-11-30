import * as React from "react";
import { useEffect} from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Profile from "../../../assets/images/profile.jpeg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import ProfileSidebar from "./ProfileSidebar";
import Branch from "./Branch";


export const BranchPage = (props) => {
	const { getBranchListAction, branchListResult, deleteBranchAction, deleteBranchResult, 
		setDefaultBranch, defaultBranchResult, searchBranchListAction, clearGetBranch, clearDeleteBranch } = props

		useEffect(() => {
			window.scrollTo(0, 0)
	}, [])
	return (
		<div className="body-spacing dSprofile">
			<Container fixed>
				<Grid container spacing={0}>
					<Grid item xs={3}>
						<ProfileSidebar page="add-branch" />
					</Grid>
					<Grid item xs={9}>
						<div className="myprofile-box user-mgmt non-strip pd-l-20 branchMgmt border-botttom-none"> 
								<Branch 
									getBranchListAction={getBranchListAction}
									branchListResult={branchListResult}
									deleteBranchAction={deleteBranchAction}
									deleteBranchResult={deleteBranchResult}
									setDefaultBranch={setDefaultBranch}
									defaultBranchResult={defaultBranchResult}
									searchBranchListAction={searchBranchListAction}
									clearGetBranch={clearGetBranch}
									clearDeleteBranch={clearDeleteBranch}
								/>
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default BranchPage;
