import * as React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import ProfileSidebar from "./ProfileSidebar";
import AddBranch from "./AddBranch";




export const AddBranchPage = (props) => {
  const { match,GetStateCityArea,getStateCityAreaResult,getBranchListUsersResult,
    GetBranchListUsersAction, AddBranchAction, addBranchResult, getBranchInfo, branchInfoResult,StateListAction,stateListResult, imageupload, imageUploadResult,
    CityListAction, cityListResult, AreaListAction, areaListResult,
    GSTListAction, gstListResult, clearGetBranchInfo, clearAddBranchInfo,AddUserAction,getBranchListAction } = props;

    const [value2, setValue2] = React.useState({
      c_area_name:""
      });

  return (
    <div className="body-spacing dSprofile">
      <Container fixed>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <ProfileSidebar page="add-branch" />
          </Grid>
          <Grid item xs={9}>
            <div className="myprofile-box user-mgmt non-strip border-botttom-none">
                <AddBranch 
                  match={match}
                  getBranchListUsersResult={getBranchListUsersResult}
                  GetBranchListUsersAction={GetBranchListUsersAction}
                  GetStateCityArea={GetStateCityArea}
                  getStateCityAreaResult={getStateCityAreaResult}
                  AddBranchAction={AddBranchAction}
                  addBranchResult={addBranchResult}
                  getBranchInfo={getBranchInfo}
                  branchInfoResult={branchInfoResult}
                  StateListAction={StateListAction}
                  stateListResult={stateListResult}
                  imageupload={imageupload}
                  imageUploadResult={imageUploadResult}
                  CityListAction={CityListAction}
                  cityListResult={cityListResult}
                  AreaListAction={AreaListAction}
                  areaListResult={areaListResult}
                  GSTListAction={GSTListAction}
                  gstListResult={gstListResult}
                  clearGetBranchInfo={clearGetBranchInfo}
                  clearAddBranchInfo={clearAddBranchInfo}
                  AddUserAction={AddUserAction}
                  getBranchListAction={getBranchListAction}
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

export default AddBranchPage;
