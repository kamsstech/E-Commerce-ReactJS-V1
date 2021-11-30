import * as React from "react";
import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../assets/images/cross-grey.svg";
import OrderNowImg from "../../../assets/images/order-now.svg";

interface Props {
  openDeleteUserModal: boolean;
  handleCloseDeleteUserModal(): void;
  deleteUserId: number;
  deleteUserAction(branchId:number): void;
}

const DeleteUserModal = (props: Props) => {
  const { openDeleteUserModal, handleCloseDeleteUserModal, deleteUserId, deleteUserAction } = props;

  // console.log(deleteBranchId, "deleteBranchId")
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="ordernow-modal"
        open={openDeleteUserModal}
        onClose={handleCloseDeleteUserModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openDeleteUserModal}>
          <div className="openmodal-sec">
            <div className="align-right">
              <img
                src={CrossImg}
                alt="cross-img"
                onClick={handleCloseDeleteUserModal}
              />
            </div>
            <div className="align-center">
              {/* <img
                src={OrderNowImg}
                alt="OrderNowImg"
                className="ordernow-img"
              /> */}
              <h3 className="ordernow-title">Are you sure you want to delete User? </h3>
              <div className="mt-20">
                <Button
                    variant="contained"
                    color="primary"
                    className="feedback-send-btn"
                    component="span"
                    onClick={() => deleteUserAction(deleteUserId)}
                    >
                    YES
                </Button>
                <Button
                    variant="contained"
                    className="feedback-clear-btn"
                    component="span"
                    onClick={handleCloseDeleteUserModal}
                    >
                    CANCEL
                </Button>
            </div>
              {/* <Button
                variant="contained"
                color="primary"
                className="ordernow-modal-btn"
                onClick={handleCloseDeleteUserModal}
              >
                DONE
              </Button> */}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default DeleteUserModal;
