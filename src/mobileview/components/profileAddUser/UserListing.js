import * as React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// import ProfileSidebar from "./profileSidebar";
import User from "./User";

import { UserListEntity, RegisterEntity } from "../../../common/model";

interface Props {
  getUserListAction(): void;
  userListResult: UserListEntity;
  deleteUserAction(userId:number): void;
  deleteUserResult: RegisterEntity;
  clearGetUserList(): void;
  clearDeleteUser(): void;
}

export const UserListing = (props:Props) => {
  const {getUserListAction, userListResult, deleteUserAction, deleteUserResult,
    clearGetUserList, clearDeleteUser} = props;
  return (
    <div>
      <User 
        getUserListAction={getUserListAction}
        userListResult={userListResult}
        deleteUserAction={deleteUserAction}
        deleteUserResult={deleteUserResult}
        clearGetUserList={clearGetUserList}
        clearDeleteUser={clearDeleteUser}
      />
    </div>
  );
};

export default UserListing;
