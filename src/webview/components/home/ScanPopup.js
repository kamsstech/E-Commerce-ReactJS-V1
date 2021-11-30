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

const ScanProduct = (props) => {
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
          <div
            className="scanner-popup-sec"
          >
            <div className="align-right">
              <div className="cross-img-div">
                  <img src={CrossImg} alt="cross-img" onClick={handleClose} />
                </div>
            </div>
            <div className="align-center">
                <img src={Scan} alt="Scan" />
                <p className="search-title">Oops !</p>
                
                <p className="orderf-label">
                    Scanned product result not found <br/>You can try with normal text search below. 
                </p>
                <TextField
                name="c_email"
                disabled={false}
                // onChange={e => handleInputChange(e)}
                // error={errors.c_email}
                // onBlur={e => handleBlur(e)}
                // helperText={errors.c_email && "Not a valid E-mail"}
                margin="normal"
                variant="outlined"
                placeholder="Type here for search"
                className="auth-input search-afterscan-product"
                autoComplete="new-password"
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <img src={SearchIcon} alt="search-icon" />
                    </InputAdornment>
                    )
                }}
                />
                <Button variant="contained" color="primary" className="try-popup-btn" onClick={toggleErrorText}>
                    try again
                </Button>
                
            </div>
           
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ScanProduct;
