import React from 'react'
import { Modal } from '@material-ui/core'
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import CrossImg from "../../../assets/images/cross-grey.svg";
import loop from "../../../assets/images/icons/loop.svg";
import Button from "@material-ui/core/Button";



const ValidationPopup =(props)=>{
    const {open, handleClose,textField} = props;

    return(
        <div>
            <Modal 
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="roadblock-popup"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500
            }}
            >
                <Fade in={open}>
                    <div className="validation-popup">
                        <div className="align-right">
                            <img src={CrossImg} alt="cross-img" onClick={handleClose} />
                        </div>
                        <div className="align-center">
                            <img src={loop} className="loop-pad" />
                            <div className="uhText">Uh Oh!</div>
                            <div className="validation-text">Entered <span className="orange-Text">{textField}</span> is already Exists</div>
                            <div className="validation-text">Click below to add this seller</div>
                            <div className="pad-top">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="feedback-send-btn"
                                    component="span"
                                > 
                                    {/* {addBranchResult.loading ? <CircularProgress className="spining-icon" /> : null}{" "} */}
                                    Add Seller
                                </Button>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default ValidationPopup