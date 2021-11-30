import * as React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CardMedia from '@material-ui/core/CardMedia';

import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import paymentCanceledImg from "../../../assets/images/icons/payment-canceled.svg";

const PaymentCanceledPopup = (props) => {
  const {open, handleClose } = props;
  const [scroll, setScroll] = React.useState('paper');
  const [maxWidth, setMaxWidth] = React.useState('md');
  const [fullWidth, setFullWidth] = React.useState(true);

  return (
    <div>
      <Dialog
        className="PaymentSuccessful"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogContent className="text-center">
            <Tooltip title="Close" placement="bottom">
                <Button className="CloseBtn" onClick={handleClose}><CloseOutlinedIcon/></Button>
            </Tooltip>
            <CardMedia
              component="img"
              alt="Payment Successful!"
              image={paymentCanceledImg}
              title="Payment Successful!"
            />
            <h1 className="mr-b-12">Payment Canceled!</h1>
            <p>Your payment ₹ 1,28,818.00 has been canceled. Reference ID is <br/> <span>1232212333332</span> </p>
            <h6>Click Below For</h6>
            <div className="mr-t-12 mr-b-16 dashed pd-b-16">
                <Button variant="outlined" className="outstanding mr-r-12" color="primary" onClick={handleClose}>Outstanding</Button>
                <Button variant="contained" className="retryAgain" color="primary" onClick={handleClose}>Retry Again</Button>
            </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PaymentCanceledPopup;
