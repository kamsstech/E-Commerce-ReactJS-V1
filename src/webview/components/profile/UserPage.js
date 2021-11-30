import * as React from "react";
import { useEffect} from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import ProfileSidebar from "./ProfileSidebar";
import User from "./User";





export const UserPage = (props) => {
  const {getUserListAction, userListResult, deleteUserAction, deleteUserResult,
    clearGetUserList, clearDeleteUser} = props;
    
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="body-spacing dSprofile">
      <Container fixed>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <ProfileSidebar page="add-user" />
          </Grid>
          <Grid item xs={9}>
            <div className="myprofile-box user-mgmt non-strip">
                <User 
                  getUserListAction={getUserListAction}
                  userListResult={userListResult}
                  deleteUserAction={deleteUserAction}
                  deleteUserResult={deleteUserResult}
                  clearGetUserList={clearGetUserList}
                  clearDeleteUser={clearDeleteUser}
                />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default UserPage;
