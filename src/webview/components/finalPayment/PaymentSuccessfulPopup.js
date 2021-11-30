import * as React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CardMedia from '@material-ui/core/CardMedia';

import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import paymentSuccessImg from "../../../assets/images/icons/payment-success.svg";

const PaymentSuccessfulPopup = (props) => {
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
              image={paymentSuccessImg}
              title="Payment Successful!"
            />
            <h1 className="mr-b-12">Payment Successful!</h1>
            <p>Hooray! You have completed your payment for <br/> <span>Mahaveer Medi-sales Pvt. Ltd.</span> Reference ID is <br/> <span>1232212333332</span> </p>
            <h6>Amount Paid</h6>
            <h2>₹ 1,28,818.00</h2>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PaymentSuccessfulPopup;
