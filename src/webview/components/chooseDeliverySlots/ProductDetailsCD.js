import React, {useState} from 'react';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grow from "@material-ui/core/Grow";
import Snackbar from '@material-ui/core/Snackbar';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from "@material-ui/icons/CheckBox";
//images
import DeleteImg from "../../../assets/mobImages/delete-red/delete.png";
import CouponIcon from "../../../assets/mobImages/coupon-grey/coupon.png";

const useStyles = makeStyles((theme) =>
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


function GrowTransition(props) {
    return <Grow {...props} />;
  }

const ProductDetailsCD = (props) => {
    const { itemDetail } = props;
    const classes = useStyles();
    const [optValue, setOptValue] = React.useState("one");

    const handleSelect = (event) => {
        setOptValue(event.target.value);
    };

    const [state, setState] = useState({
        open: false,
        Transition: Fade,
        message: "",
      });
    
      const handleClickButton = (Transition, name) => () => {
        setState({
          open: true,
          Transition,
          message: `${name} deleted from cart`,
        });
      };
      const handleClickShortButton = (Transition, name) => () => {
        setState({
          open: true,
          Transition,
          message: `${name} Moved to Shortbook`,
        });
      };
      const handleCloseButton = () => {
        setState({
          ...state,
          open: false,
        });
      };
      const [toggle, setToggle] = React.useState(false)
      const handleToggle = () => {
        setToggle(!toggle)
      }
    
    //   const handleDelete = (e:any) => {
    //     e.stopPropagation();
    //     openDeleteModal();
    //   }
    return (
        <>
         <Snackbar
    open={state.open}
    onClose={handleCloseButton}
    TransitionComponent={state.Transition}
    message={state.message}
    key={state.Transition.name}
    autoHideDuration={2000}
    action={
      <React.Fragment>
        <Checkbox
          icon={<CheckBoxIcon />}
          color="primary"
          disabled
          className="msg-checkbox checkbox-listItem"
        />

      </React.Fragment>
    }
  />
        <div className="chooseDelivery-productDetials">
            <div className="deliver-to-add-wrapper pt-0 pd-0" >
                <div className="mob-cart-items-wrapper web-cart-items-wrapper">
                    <ExpansionPanel defaultExpanded>
                        {/* <ExpansionPanelSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="mob-cartitems-flex-sec">
            <h4>{itemDetail.sellerName}</h4>
            <h4>{itemDetail.items.length} Items</h4>
          </div>
        </ExpansionPanelSummary> */}
                        <ExpansionPanelDetails>
                            <div className="mob-cartitems-sec">
                                <div className="cart-items-list b-0 pb-0 po-R">
                                    <div className="cart-items-list-productimg price-left">
                                        <h4 className="cart-products-list-title">Product Details</h4>
                                    </div>
                                    <div className="cart-items-list-productdetails">
                                        <div className="cart-item-list-left">

                                        </div>
                                        <div className="cart-item-list-right p-0">
                                            <h4 className="cart-products-list-title width-33">Scheme</h4>
                                            <h4 className="cart-products-list-title width-33">Quantity</h4>
                                            <h4 className="cart-products-list-title width-33">Total</h4>
                                        </div>
                                    </div>
                                </div>
                                {itemDetail.items.map((item) => (
                                    <div className="cart-items-list" key={item.id}>
                                        <div className="cart-items-list-productimg">
                                            <img src={item.id} alt="ProductImg" />
                                        </div>
                                        <div className="cart-items-list-productdetails">
                                            <div className="cart-item-list-left">
                                                <div className="cart-items-list-productdetails-title">
                                                    <h4>{item.name}</h4>
                                                </div>
                                                <h5 className="cart-items-list-productdetails-packsize">Pack Size: 100ml syrup</h5>
                                                <h5 className="cart-items-list-productdetails-mrp"><span>MRP {item.mrp}</span><span>PTR {item.ptr}</span><span>GST: 12%</span></h5>
                                                <h5 className="cart-items-list-productdetails-packsize">Contains<span>Paracetamol</span></h5>
                                                <div className="display-flex align-middle mt-10">
                                                    <div className="cart-delete-icon" onClick={handleClickButton(GrowTransition, item.name)}>
                                                        <img src={DeleteImg} alt="DeleteImg" />
                                                    </div>
                                                    <h4 className="move-toshort-link"  onClick={handleClickShortButton(GrowTransition, item.name)}>Move to Shortbook</h4>
                                                </div>
                                            </div>

                                            <div className="cart-item-list-right">
                                                <h3 className="web-scheme width-33">10+1</h3>
                                                <div className="width-33">
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
                                                <h3 className="web-scheme width-33">{item.total}.00</h3>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                                <div className="cart-items-list b-0">
                                    <div className="cart-items-list-productimg price-left">

                                    </div>
                                    <div className="cart-items-list-productdetails">
                                        <div className="width-100">
                                            <h4 className="cart-price">Price Details ({itemDetail.items.length} Items)</h4>
                                            <div className="mob-price-details-flexsec">
                                                <h4>Total Amount</h4>
                                                <h4>Rs. {itemDetail.total}</h4>
                                            </div>
                                            <div className="mob-price-details-flexsec">
                                                <h4>Total GST</h4>
                                                <h4>Rs. {itemDetail.gst}</h4>
                                            </div>
                                            <div className="mob-price-details-flexsec">
                                                <h3 className="m-0">Total Amount + Total GST</h3>
                                                <h3 className="delivery-charge-text m-0">Rs. {itemDetail.totalAmount}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetailsCD