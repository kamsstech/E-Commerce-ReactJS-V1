import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

//images
import DeleteImg from "../../../assets/mobImages/delete-red/delete.png";
import CouponIcon from "../../../assets/mobImages/coupon-grey/coupon.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '100%',
    },
  }),
);

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

interface Props {
  itemDetail: any;
}

const CartItems = (props: Props) => {
  const { itemDetail } = props;
  const classes = useStyles();
  const [optValue, setOptValue] = React.useState("one");

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptValue(event.target.value);
  };

  return (
    <div className="mob-cart-items-wrapper">
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="mob-cartitems-flex-sec">
            <h4>{itemDetail.sellerName}</h4>
            <h4>{itemDetail.items.length} Items</h4>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="mob-cartitems-sec">
            {itemDetail.items.map((item: any) => (
              <div className="cart-items-list" key={item.id}>
                <div className="cart-items-list-productimg">
                  <img src={item.id} alt="ProductImg" />
                </div>
                <div className="cart-items-list-productdetails">
                  <div className="cart-items-list-productdetails-title">
                    <h4>{item.name}</h4>
                    <img src={DeleteImg} alt="DeleteImg" />
                  </div>
                  <h5 className="cart-items-list-productdetails-packsize">Pack Size: 100ml syrup</h5>
                  <h5 className="cart-items-list-productdetails-mrp"><span>MRP ₹ {item.mrp}</span><span>PTR ₹ {item.ptr}</span><span>GST: 12%</span></h5>
                  <h5 className="cart-items-list-productdetails-packsize">Contains<span>Paracetamol</span></h5>
                  <div className="cart-items-list-productdetails-title">
                    <h3 className="scheme">Scheme: 10+1<span>Total: ₹ {item.total}</span></h3>
                    <TextField
                      name="email"
                      select
                      autoComplete="off"
                      margin="normal"
                      variant="outlined"
                      value={optValue}
                      onChange={handleSelect}
                      className="mob-pro-drugcount"
                    >
                      <option value={"one"}>10</option>
                      <option value={"two"}>20</option>
                      <option value={"three"}>30</option>
                    </TextField>
                  </div>
                </div>
              </div>
            ))}
            <div className="pt-16">
              <div className="mob-price-details-flexsec">
                <h4>Total Amount</h4>
                <h4>Rs. {itemDetail.total}</h4>
              </div>
              <div className="mob-price-details-flexsec">
                <h4>Total GST</h4>
                <h4>Rs. {itemDetail.gst}</h4>
              </div>
              {/* <div className="delivery-price-line"></div> */}
              <div className="mob-price-details-flexsec">
                <h3 className="m-0">Total Amount + Total GST</h3>
                <h3 className="delivery-charge-text m-0">Rs. {itemDetail.totalAmount}</h3>
              </div>
            </div>
            <div className="pt-16">
              <TextField
                id="standard-start-adornment"
                placeholder="Coupon Code"
                className={`${clsx(classes.textField)} coupon-textfield`}
                InputProps={{
                  startAdornment: <InputAdornment position="start">
                    <img src={CouponIcon} alt="CouponIcon" />
                  </InputAdornment>,
                  endAdornment: <InputAdornment position="start">
                    <span className="coupon-text">Apply</span>
                  </InputAdornment>
                }}
              />
            </div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default CartItems;