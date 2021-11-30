import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import "./css/OnePharmaPopup.css";
const OnePharmaPopup = (props) => {
  const {open, handleClose } = props;
  const [scroll, setScroll] = React.useState('paper');
  const [maxWidth, setMaxWidth] = React.useState('md');
  const [fullWidth, setFullWidth] = React.useState(true);

  return (
    <div>
      <Dialog
        className="onePharmaPopup"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
          {/*dividers={scroll === 'paper'}*/}
        <DialogContent>
            <h1>😐 Sorry! </h1>
            <h4 className="mr-b-32">You have not registered with 1 Pharma</h4>
            <h2>Please read below about 1 Pharma before raise a request.</h2>
            <div className="onePharamaContent">
                <h3>1. About 1 Pharma</h3>
                <p>1 Pharma is a e-mail Engine orem Ipsum is simply dummy text of the print and ypesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>
            <div className="onePharamaContent">
                <h3>2. How It Works ?</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure.</p>
            </div>
        </DialogContent>
        <DialogActions>
            <Button className="text-capitalize reqReg-cbtn" onClick={handleClose} color="primary">
            Cancel
            </Button>
            <Button className="text-capitalize reqReg-btn" variant="contained" color="primary">
            Request to Register
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OnePharmaPopup;
