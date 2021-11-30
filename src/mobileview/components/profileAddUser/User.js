import * as React from "react";
import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import Button from "@material-ui/core/Button";
import PlusWhite from "../../../assets/images/plus-white.svg";
import EditUser from "../../../assets/mobImages/list-user/edit.png";
import DeleteUser from "../../../assets/mobImages/list-user/delete.png";

import DeleteUserModal from "./DeleteUserModal";
import Swipeout from 'rc-swipeout';
import 'rc-swipeout/assets/index.css';


const User = (props) => {
  const { getUserListAction, userListResult, deleteUserAction, deleteUserResult,
    clearGetUserList, clearDeleteUser } = props;

  const [errorMsg, setErrorMsg] = useState("");

  const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(0);
  const [redirect, setRedirect] = useState(false);

  const handleOpenDeleteUserModal = (branchId) => {
    setErrorMsg("")
    setDeleteUserId(branchId)
    setOpenDeleteUserModal(true);
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

  // console.log(userListResult, "pay")
  // const deleteUser = (branchId:number) => {
  //   setErrorMsg("")
  //   deleteUserAction(branchId)
  // }
  
  // console.log(userListResult, 'userListResult')

  return (
    <>
      {redirect && <Redirect to="/add-user" /> }
      <DeleteUserModal 
        openDeleteUserModal={openDeleteUserModal}
        handleCloseDeleteUserModal={handleCloseDeleteUserModal}
        deleteUserId={deleteUserId}
        deleteUserAction={deleteUserAction}
      />
      <div className="users-list-sec">
        <p className="login-error-msg min-height-none mb-10">{errorMsg.toLowerCase()}</p>
        {/* list of users */}
        {userListResult.payload !== undefined && (
        <>
          {(userListResult.payload).map((item, index) => (
              <div key={index}>
                <Swipeout
                    style={{ backgroundColor: 'white' }}
                    autoClose
                    right={[
                        {
                        text: <Link to={`/edit-user/${item.c_user_id}`}><img src={EditUser} alt="Edit" /></Link>,
                        className: 'edit-user'
                        },
                        {
                        text: <img src={DeleteUser} alt="Delete" />,
                        onPress: ()=> handleOpenDeleteUserModal(item.c_user_id),
                        className: 'delete-user'
                        },
                    ]}
                >
                    <div className="user-row" key={index}>
                        <div className="user-row-profileimg">
                            {(item.c_user_name.match(/\b\w/g) || []).shift() || ''}{(item.c_user_name.match(/\b\w/g) || [])[1] || ''}
                        </div>
                        <div className="user-details-sec">
                            <h4 className="user-row-proname">{item.c_user_name}</h4>
                            <h4 className="user-row-prodetails">
                            {item.c_mobile_no}<span>|</span>{item.c_email_id}
                            </h4>
                        </div>
                    </div>
                </Swipeout>
              </div>
          
          ))}
        </>
        )}
      </div>
    </>
  );
};

export default User;
