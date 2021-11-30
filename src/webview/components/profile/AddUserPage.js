import * as React from "react";
import { useEffect} from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import ProfileSidebar from "./ProfileSidebar";
import AddUser from "./AddUser";




export const AddUserPage = (props) => {
	const { match,GetStateCityArea,getStateCityAreaResult, getBranchListAction, branchListResult, AddUserAction, addUserResult,GetUserInfoAction, userInfoResult,StateListAction, stateListResult,
		CityListAction, cityListResult, AreaListAction, areaListResult, clearAddUser, clearGetUserInfo,validateREGISTERResult,validateREGISTER} = props;
		useEffect(() => {
			window.scrollTo(0, 0)
	}, [])
	const [value2, setValue2] = React.useState({
		c_area_name:""
	  });
	useEffect(() => {
		const body = {
			n_page: "0",
			n_limit: "10",
		};
		getBranchListAction(body);
	}, [])
	return (
		<div className="body-spacing dSprofile">
			<Container fixed>
				<Grid container spacing={0}>
					<Grid item xs={3}>
						<ProfileSidebar page="add-user" />
					</Grid>
					<Grid item xs={9}>
						<div className="myprofile-box user-mgmt non-strip border-botttom-none">
							<AddUser
								match={match}
								GetStateCityArea={GetStateCityArea}
								getStateCityAreaResult={getStateCityAreaResult}
								validateREGISTERResult={validateREGISTERResult}
								validateREGISTER={validateREGISTER}
								getBranchListAction={getBranchListAction}
								branchListResult={branchListResult}
								AddUserAction={AddUserAction}
								addUserResult={addUserResult}
								GetUserInfoAction={GetUserInfoAction}
								userInfoResult={userInfoResult}
								StateListAction={StateListAction} 
								stateListResult={stateListResult}
								CityListAction={CityListAction}
								cityListResult={cityListResult}
								AreaListAction={AreaListAction}
								areaListResult={areaListResult}
								clearAddUser={clearAddUser}
								clearGetUserInfo={clearGetUserInfo}
								setValue2={setValue2}
								value2={value2}
							/>
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default AddUserPage;
