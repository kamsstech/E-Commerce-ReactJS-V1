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


const DeleteBranchModal = (props) => {
  const { openDeleteBranchModal, handleCloseDeleteBranchModal, deleteBranchId, 
    deleteBranchAction, isDefault } = props;

  // console.log(deleteBranchId, "deleteBranchId")
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="ordernow-modal"
        open={openDeleteBranchModal}
        onClose={handleCloseDeleteBranchModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openDeleteBranchModal}>
          <div className="openmodal-sec">
            <div className="align-right">
              <img
                src={CrossImg}
                alt="cross-img"
                onClick={handleCloseDeleteBranchModal}
              />
            </div>
            {isDefault ?
            <div className="align-center">
              <h3 className="ordernow-title branch-msg">Before deleting this branch, Please choose another branch as your default branch.</h3>
              <Button
                variant="contained"
                color="primary"
                className="feedback-send-btn"
                component="span"
                onClick={handleCloseDeleteBranchModal}
                >
                DONE
              </Button>
            </div>
            :
            <div className="align-center">
              <h3 className="ordernow-title branch-msg">Are you sure you want to delete branch? </h3>
              <div className="mt-20">
                <Button
                    variant="contained"
                    color="primary"
                    className="feedback-send-btn"
                    component="span"
                    // onClick={() => deleteBranchAction(deleteBranchId)}
                    >
                    YES
                </Button>
                <Button
                    variant="contained"
                    className="feedback-clear-btn"
                    component="span"
                    onClick={handleCloseDeleteBranchModal}
                    >
                    CANCEL
                </Button>
            </div>
              {/* <Button
                variant="contained"
                color="primary"
                className="ordernow-modal-btn"
                onClick={handleCloseDeleteBranchModal}
              >
                DONE
              </Button> */}
            </div>
            }
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default DeleteBranchModal;
