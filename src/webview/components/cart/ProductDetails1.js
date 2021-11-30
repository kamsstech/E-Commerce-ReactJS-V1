import React, { useEffect, useState } from "react";
import Fade from "@material-ui/core/Fade";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Snackbar from "@material-ui/core/Snackbar";
import TextField from "@material-ui/core/TextField";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Grow from "@material-ui/core/Grow";

//images
import DeleteImg from "../../../assets/mobImages/delete-red/delete.png";
import { Button } from "@material-ui/core";

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
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

const ProductDetails = (props) => {
  const {
    itemDetail,
    openDeleteModal,
    index,
    backgroundRed,
    handleDeleteItem,
    DeleteBySellerAction,
    deleteBySellerResult,
    DeleteByIdAction,
    deleteByIdResult,
    GetCartItemAction,
    MoveToShortAction,
    moveToShortResult,
    UpdateCartItemAction,
    updateCartItemResult
  } = props;
  const [optValue, setOptValue] = React.useState("one");
  const [gstAmt, setGstAmt] = React.useState(0);
  const [totalAmt, setTotalAmt] = React.useState(0);

  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    let temp = [];

    Object.entries(itemDetail.j_supplier).map((entry) => {
      temp = entry[1];
    });

    setSuppliers(temp.c_seller_name);
  }, []);
  console.log(itemDetail,"itemDetail")
  console.log(suppliers,"suppliers")

  useEffect(() => {
    // let totalAmt=  itemDetail.totalAmount;
    let totalAmt = 0;
    for (let i = 0; i < itemDetail.j_supplier.length; i++) {
      totalAmt += parseFloat(itemDetail.j_supplier[i].total);
    }
    setTotalAmt(totalAmt);
    setGstAmt(totalAmt * 0.12);
  }, [itemDetail.j_supplier.length]);

  const [state, setState] = useState({
    open: false,
    Transition: Fade,
    message: "",
  });

  const handleClickButton = (event, Transition, name, index,cart_code) => {
    
    

    const body={
      c_cart_code:cart_code
    }
    DeleteByIdAction(body);
   
    event.stopPropagation();
    setState({
      open: true,
      Transition,
      message: `${name} deleted from cart`,
    });
    handleDeleteItem(name, index,cart_code);
    GetCartItemAction();
    return false;
  };

  const handleClickShortButton = (e, Transition, name,item_code,cart_code) => {
    e.stopPropagation();

    const body={
        "c_br_code":itemDetail.n_firm_id,
        "c_cart_code":cart_code,
        "c_item_code":item_code
    }
    MoveToShortAction(body)

    setState({
      open: true,
      Transition,
      message: `${name} Moved to Shortbook`,
    });
    GetCartItemAction();
  };
  const handleCloseButton = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const handleSelect = (event,qty,cart_code) => {
    setOptValue(event.target.value);

    console.log(event.target.value,"HANDLE CHANGE")
    console.log(qty,"qty")
    console.log(cart_code,"cart code");

    const body ={
      "c_cart_code":cart_code,
      "n_qty":event.target.value
    }
    UpdateCartItemAction(body)
    GetCartItemAction();
  };

  const [toggle, setToggle] = React.useState(false);
  const handleToggle = () => {
    console.log("toggle");
    setToggle(!toggle);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    openDeleteModal();
  };

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
             disabled
              icon={<CheckBoxIcon />}
              color="primary"
              className="msg-checkbox checkbox-listItem"
            />
          </React.Fragment>
        }
      />

      <div
        className={
          index == 0 && backgroundRed
            ? "deliver-to-add-wrapper pt-0 pd-0 bg-red"
            : "deliver-to-add-wrapper pt-0 pd-0"
        }
      >
        <div
          className={
            index == 0 && backgroundRed
              ? "mob-cart-items-wrapper web-cart-items-wrapper bg-red"
              : "mob-cart-items-wrapper web-cart-items-wrapper"
          }
        >
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div
                className="mob-cartitems-flex-sec mob-cartitems-flex-sec1"
                onClick={handleToggle}
              >
                {index == 0 && backgroundRed ? (
                  <>
                    {toggle ? <AddIcon /> : <RemoveIcon />}
                    <h4>Cart 1 ({itemDetail.j_supplier.length} Items)</h4>
                    <div className="cart-action-btn">
                      <Button
                        variant="outlined"
                        className="delete-cart-button"
                        onClick={(e) => handleDelete(e)}
                      >
                        Delete Cart
                      </Button>
                      <Button variant="outlined" className="reassign-btn">
                        Reassign
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    {toggle ? <AddIcon /> : <RemoveIcon />}
                    <h4>
                      {suppliers.c_supplier_name} ({suppliers.length} Items)
                    </h4>
                  </>
                )}
              </div>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              {suppliers.length != 0 ? (
                <div
                  className={
                    index == 0 && backgroundRed
                      ? "mob-cartitems-sec bg-red"
                      : "mob-cartitems-sec"
                  }
                >
                  <div className="cart-items-list b-0 pt-0 pb-0">
                    <div className="cart-items-list-productimg price-left">
                      <h4 className="cart-products-list-title">
                        Product Details
                      </h4>
                    </div>
                    <div className="cart-items-list-productdetails">
                      <div className="cart-item-list-left"></div>
                      <div className="cart-item-list-right p-0">
                        {/* <h4 className="cart-products-list-title width-33">Scheme</h4> */}
                        <h4 className="cart-products-list-title width-33">
                          Quantity
                        </h4>
                        <h4 className="cart-products-list-title width-33">
                          Total
                        </h4>
                      </div>
                    </div>
                  </div>
                  {suppliers.j_items.map((item, index) => (
                    <div className="cart-items-list" key={index}>
                      <div className="cart-items-list-productimg">
                        <img src={item.c_image_url} alt="ProductImg" />
                      </div>
                      <div className="cart-items-list-productdetails">
                        <div className="cart-item-list-left">
                          <div className="cart-items-list-productdetails-title">
                            <h4>{item.c_item_name}</h4>
                          </div>
                          <h5 className="cart-items-list-productdetails-packsize">
                            Pack Size: {item.c_pack}
                          </h5>
                          <h5 className="cart-items-list-productdetails-mrp">
                            <span
                              style={{
                                textDecorationLine: "line-through",
                                textDecorationStyle: "solid",
                                textDecorationColor: "#ef2b4a",
                              }}
                            >
                              MRP {item.n_mrp}
                            </span>
                            <span>PTR {item.ptr}</span>
                            <span>GST: {item.n_gst}%</span>
                            <span style={{ color: "#2ec4b6" }}>
                              Scheme {item.c_scheme}
                            </span>
                          </h5>
                          <h5 className="cart-items-list-productdetails-packsize">
                            Contains<span>{item.c_contains}</span>
                          </h5>
                          <div className="display-flex align-middle mt-10">
                            <div
                              className="cart-delete-icon"
                              onClick={(e) => {
                                handleClickButton(
                                  e,
                                  GrowTransition,
                                  item.c_item_name,
                                  index,
                                  item.c_cart_code
                                );
                              }}
                            >
                              <img src={DeleteImg} alt="DeleteImg" />
                            </div>
                            <h4
                              className="move-toshort-link"
                              onClick={(e) =>
                                handleClickShortButton(
                                  e,
                                  GrowTransition,
                                  item.c_item_name,
                                  item.c_item_code,
                                  item.c_cart_code,
                                )
                              }
                            >
                              Move to Shortbook
                            </h4>
                          </div>
                        </div>

                        <div className="cart-item-list-right">
                          <div className="width-33">
                            <TextField
                              name="email"
                              select
                              autoComplete="off"
                              margin="normal"
                              variant="outlined"
                              value={optValue}
                              onChange={handleSelect}
                              defaultValue= {item.n_qty}
                              onChange={(e) =>
                                handleSelect(
                                  e,
                                  item.n_qty,
                                  item.c_cart_code,
                                )
                              }
                              className="mob-pro-drugcount"
                            >
                              <option value={""}>{item.n_qty}</option>
                              <option value={10}>10</option>
                              <option value={20}>20</option>
                              <option value={30}>30</option>
                              <option value={40}>40</option>
                              <option value={50}>50</option>
                              <option value={60}>60</option>
                              <option value={70}>70</option>
                              <option value={80}>80</option>
                              <option value={90}>90</option>
                              <option value={100}>100</option>
                            </TextField>
                          </div>
                          <h3 className="web-scheme width-33">
                            {item.n_qty * item.n_seller_rate}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="cart-items-list b-0">
                    <div className="cart-items-list-productimg price-left"></div>
                    <div className="cart-items-list-productdetails">
                      <div className="width-100">
                        <h4 className="cart-price">
                          Price Details ({itemDetail.j_supplier.length} Items)
                        </h4>
                        <div className="mob-price-details-flexsec">
                          <h4>Total Amount</h4>
                          <h4>Rs. {totalAmt}</h4>
                        </div>
                        <div className="mob-price-details-flexsec">
                          <h4>Total GST</h4>
                          <h4>Rs. {gstAmt}</h4>
                        </div>
                        <div className="mob-price-details-flexsec">
                          <h3 className="m-0">Total Amount + Total GST</h3>
                          <h3 className="delivery-charge-text m-0">
                            Rs. {gstAmt + totalAmt}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </div>
    </>
  );
};


export default ProductDetails;
