import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CrossImg from "../../../assets/images/cross-grey.svg";
import Scan from "../../../assets/images/product-scan.svg";
import SearchIcon from "../../../assets/images/search-icon.svg";
 
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';

const ScanNow = (props) => {
    const {openModal,closeModal} = props;
  
  const [open, setOpen] = React.useState(false);
  const [error1, setError1] = React.useState(true);

  
  React.useEffect(()=>{
    setOpen(openModal);
  },[openModal])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    closeModal();

  };

  
  const toggleErrorText = () => {
    setError1(!error1);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="scanner-popup"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
            <div>
                <div className="scannow-popup-sec">
                    <div className="scanner-popup-header">
                        <p className="scanner-title">Barcode Scanner</p>
                        <div className="cross-img-div">
                          <img src={CrossImg} alt="cross-img" onClick={handleClose} />
                        </div>                    </div>
                    <div className= "scanner-popup-blur">
                        
                    </div>
                </div>
                
               
            </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ScanNow;
