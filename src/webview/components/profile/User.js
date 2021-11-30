import * as React from "react";
import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import Button from "@material-ui/core/Button";
import PlusWhite from "../../../assets/images/plus-white.svg";

import DeleteUserModal from "./DeleteUserModal";


const User = (props) => {
  const { getUserListAction, userListResult, deleteUserAction, deleteUserResult,
    clearGetUserList, clearDeleteUser } = props;


  const [errorMsg, setErrorMsg] = useState("");

  const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(0);
  const [redirect, setRedirect] = useState(false);

  const handleOpenDeleteUserModal = (userId) => {
    setErrorMsg("")
    setOpenDeleteUserModal(true);
    setDeleteUserId(userId)
    
  };

  const handleCloseDeleteUserModal = () => {
    setOpenDeleteUserModal(false);
  };

  useEffect(() => {
    getUserListAction()
    return () => {
      clearGetUserList();
      clearDeleteUser();
    }
  }, [])

  useEffect(() => {
    setRedirect(false)
    if(userListResult.error !== ""){
      setErrorMsg(userListResult.error);
    } else {
      if(userListResult.message === "success"){
        if(Array.isArray(userListResult.payload) && userListResult.payload.length === 0){
          setRedirect(true)
        }
      }
    }
  }, [userListResult])

  useEffect(() => {
    setOpenDeleteUserModal(false);
    if(deleteUserResult.error !== ""){
      setErrorMsg(deleteUserResult.error);
    } 
  }, [deleteUserResult])

  console.log(deleteUserResult, "deleteUserResult")
  // console.log(userListResult, "pay")
  // const deleteUser = (branchId:number) => {
  //   setErrorMsg("")
  //   deleteUserAction(branchId)
  // }
  
  // console.log(userListResult, 'userListResult')

  return (
    <>
      {redirect && <Redirect to="/profile/add-user" /> }
      <DeleteUserModal 
        openDeleteUserModal={openDeleteUserModal}
        handleCloseDeleteUserModal={handleCloseDeleteUserModal}
        deleteUserId={deleteUserId}
        deleteUserAction={deleteUserAction}
      />
      <div className="profile-title-sec">
        <h4 className="profile-title init-line-height">User Management </h4>
        <div className="profile-title-sec b-0">
          <Link to="/profile/add-user">
            <Button
              variant="contained"
              color="primary"
              className="profile-addnewuser"
              component="span"
            >
              <img src={PlusWhite} alt="PlusWhite" className="mr-10" />
              add new user
            </Button>
          </Link>
        </div>
      </div>





      <div className="profile-details-sec">
        {/* <p className="login-error-msg min-height-none mb-10">{errorMsg.toLowerCase()}</p> */}
        {/* list of users */}
        {userListResult.payload !== undefined && (
        <>
          {(userListResult.payload).map((item, index) => (
          <div className="added-user" key={index}>
            <div className="adduser-details">
              <div className="adduser-profileimg">

                {(item.c_name.match(/\b\w/g) || []).shift() || ''}{(item.c_name.match(/\b\w/g) || [])[1] || ''}
                
              </div>
              <div>
                <h4 className="adduser-proname">{item.c_name}</h4>
                <h4 className="adduser-prodetails">
                  {item.c_mobile_no}<span>|</span>{item.c_email_id}
                  {/* {item.c_mobile_no} */}
                </h4>
              </div>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                className="addbranch-btn delete"
                component="span"
                onClick={() => handleOpenDeleteUserModal(item.n_user_id)}
              >
                delete
              </Button>
              <Link to={`/profile/edit-user/${item.n_user_id}`}>
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
          ))}



        </>
        )}
      </div>




    </>
  );
};

export default User;
