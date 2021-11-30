import React, { useState, useEffect } from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { SellerDetailsItemsEntity,PdpPageItemsEntity } from "../../../common/model";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Fade from '@material-ui/core/Fade';
import Snackbar from '@material-ui/core/Snackbar';

import seller_priority_icon from "../../../assets/images/seller_priority_icon.svg";
import down_arrow_icon from "../../../assets/images/down-arrow.svg";
// import { constants } from "perf_hooks";


const filter = createFilterOptions();
const useStyles = makeStyles((theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    dropdownStyle: {
      borderRadius: "6px",
      backgroundColor: "#fff",
      width: "11.9em",
      marginTop: "3em"
    },
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      paddingLeft: theme.spacing(0),

    },
    nested: {
      paddingLeft: theme.spacing(0),
      alignItems: 'left',
      paddingTop: theme.spacing(0)
    },
    root1: {
      maxWidth: '100%',
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
  }))

let array = [];
for (var i = 0; i <= 100; i++) {
  if (i == 0) {
    array.push({ title: "1" })
  }
  else {
    array.push({ title: (i * 10).toString() })
  }

}
function GrowTransition(props) {
  return <Grow {...props} />;
}

const SellerDetails = (props) => {

  const [value, setValue] = React.useState(array[0]);
  const [open, setOpen] = useState(true);
  const [errorMsgSeller, setErrorMsgSeller] = useState("")
  const handleClick = () => {
    setOpen(!open);
  };
  const classes = useStyles();
  const { 
    GetPdpPageItems,
    match ,
    pdpPageItemsResult
  } = props;
  const [optValue, setOptValue] = useState("1");


  // const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setOptValue(event.target.value);
  // };

  useEffect(() => {
    GetPdpPageItems(match.params.itemCode)
  }, [match.params.itemCode]);
  useEffect(() => {
    if (!pdpPageItemsResult.loading) {
      setErrorMsgSeller(pdpPageItemsResult.error)
    }
  }, [!pdpPageItemsResult.loading])




  // console.log("pdpPageSellerDetailsResult.payload", pdpPageSellerDetailsResult.payload)



  const payload = pdpPageItemsResult.payload;
  const lengthSellers = pdpPageItemsResult.payload.length;
  const countSellers = pdpPageItemsResult.payload.slice(4, lengthSellers).length;
  const optionCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [priorityValue, setPriority] = useState("Seller Priority");
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };
  const handleClose = (event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target)
    ) {
      return;
    }
    setIsOpen(false);
  };
  let tempArray = [];
  for (let i = 0; i <= lengthSellers; i++) {
    tempArray.push(false)
  }
  
  const [isAddtoCart, setAddtoCart] = useState(tempArray);
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClickButton = (Transition, index) => () => {
    setTimeout(() =>{
      setState({
        open: true,
        Transition,
        });
  }, 500) 
    buttonTrue(index);
  };
const  buttonTrue = (index) =>{
  let temp = [...isAddtoCart]
    temp[index] = true;
    // temp[index] = !temp[index];
    console.log(index,temp[index])
    setAddtoCart(temp);
}

  const handleCloseButton = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const [qty, setQty] = useState("");
  return (
    <div>


      <div className="pdp-flexinfo-sec">
        <h4 className="pdp-seller-details">Sellers Details</h4>
        <p className="login-error-msg">{errorMsgSeller}</p>
        <div className="left-sec">
          <TextField
            name="priority"
            value={priorityValue}
            onClick={handleToggle}
            disabled={true}
            autoComplete="new-password"
            margin="normal"
            variant="outlined"
            className="auth-input seller-priority"
            placeholder={priorityValue}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={seller_priority_icon} alt="Email" />
                  <img src={down_arrow_icon} alt="down_arrow_icon" className="down_arrow_icon" />
                </InputAdornment>
              ),
            }}
          >

          </TextField>
          <div className="priority-collapse-div">
            <Popper
              open={isOpen}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
              className="profile-dropdown"
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom"
                        ? "center top"
                        : "center bottom"
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu" >
                        <MenuItem value={-1} onClick={(value) => {
                          setPriority("Seller Priority")
                        }}>
                          Seller Priority
                              </MenuItem >
                        <MenuItem value={"Offer Wise"} onClick={(value) => {
                          setPriority("Offer Wise")
                        }}>
                          Offer Wise
                              </MenuItem >
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>

          {lengthSellers > 4 ?
            (open ? <h4 className="share-link" onClick={handleClick}>+ {countSellers} Sellers</h4> : <h4 className="share-link" onClick={handleClick}>- {countSellers} Sellers</h4>) : null}
        </div>
      </div>
      <TableContainer className="pdp-table">
        <Table className="pdp-seller-detail-table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Rate</TableCell>
              <TableCell>Scheme</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {(payload).slice(0, 4).map((seller, index) => (


              <TableRow key={index}>
                <TableCell> {seller.c_seller_name }</TableCell >
                <TableCell>{seller.n_rate}</TableCell>
                <TableCell>{seller.c_scheme}</TableCell>

                <TableCell className="pdp-drugcount-qty mr-bot10">

                  <Autocomplete
                    id="controllable-states-demo"
                    key={seller.c_seller_name}
                    defaultValue={array[0]}
                    value={value && value[seller.c_seller_name]}
                    onKeyPress={(event) =>{
                     
                    if (event.key === 'Enter') {
                      console.log('do validate');
                      console.log("qty", qty) // please check here , we need to add the value qty to the autoacomplete field at key press  ENTER
                      setValue({
                        title: qty,
                      });

                    }
                    }}

                    onChange={(event, newValue) => {
                      if (typeof newValue === 'string') {
                        setValue({
                          title: newValue,
                        });
                      } else if ((newValue && newValue.inputValue)) {
                        setValue({
                          title: newValue.inputValue,
                        });
                      }
                      // else if(newValue == null ){
                      //     setValue({
                      //       title:  ''
                      //     })
                      // }
                      else {
                        setValue(newValue);
                      }
                    }}
                    filterOptions={(options, params) => {
                      const filtered = filter(options, params);
                      // console.log("params",params)
                    
                      if (params.inputValue !== '') {
                        setQty(params.inputValue) // here i am setting the value of qty
                        filtered.push({
                          inputValue: params.inputValue,
                          title: params.inputValue,
                        });
                      }

                      return filtered;
                    }}
                    selectOnFocus
                    closeIcon={false}
                    clearOnBlur
                    handleHomeEndKeys
                    options={array}
                    getOptionLabel={(array) => array.title}
                    className="mob-pro-drugcount pdp-drugcount"
                    style={{ width: 80 }}
                    renderInput={(params) => <TextField {...params} margin="normal" className="mob-pro-drugcount pdp-drugcount" variant="outlined" />}
                  />
                 
                  {isAddtoCart[index] ? 
                  <Button
                    variant="contained"
                    color="primary"
                    className="fast-moving-addtocart fast-moving-spacing colorChange"
                    
                  >
                    Added
                </Button> : <Button
                      variant="contained"
                      color="primary"
                      className="fast-moving-addtocart fast-moving-spacing "
                      onClick={handleClickButton(GrowTransition, index)}
                    >
                      Add To Cart
                </Button>}

                </TableCell >
              </TableRow>
            ))}

            {(!open) ?
              (payload).slice(4, payload.length).map((seller, index) => (
                <TableRow key={index + 4}  >
                  <TableCell>{seller.c_seller_name.toLowerCase() }</TableCell>
                  <TableCell>{seller.n_rate}</TableCell>
                  <TableCell>{seller.c_scheme}</TableCell>
                  <TableCell className="pdp-drugcount-qty">
                    <Autocomplete
                      id="controllable-states-demo"
                      key={seller.c_seller_name}
                      defaultValue={array[0]}
                      value={value && value[seller.c_seller_name]}
                      // onInputChange={(event,newValue) =>{
                      //   console.log("test", newValue)
                      //   setValue({
                      //     title: newValue,
                      //   });
                        
                      // }}
                      onKeyPress={(event) =>{
                        console.log("test", event)
                      }}
                      onKeyUp={(event) =>{
                        console.log("up", event)
                      }}
                      onChange={(event, newValue) => {
                        console.log("test", event)
                        // if (event.key === 'Enter') {
                        //   console.log('do validate');
                        // }
                        if (typeof newValue === 'string') {
                          setValue({
                            title: newValue,
                          });
                        } else if ((newValue && newValue.inputValue) || null) {
                          setValue({
                            title: newValue.inputValue,
                          });
                        } else if (newValue == null) {
                          setValue({
                            title: ''
                          })
                        } else {
                          setValue(newValue);
                        }
                      }}
                      filterOptions={(options, params) => {
                        const filtered = filter(options, params);
                        if (params.inputValue !== '') {
                          filtered.push({
                            inputValue: params.inputValue,
                            title: params.inputValue,
                          });
                        }

                        return filtered;
                      }}
                      selectOnFocus
                      closeIcon={false}
                      clearOnBlur
                      handleHomeEndKeys
                      options={array}
                      getOptionLabel={(array) => array.title}
                      className="mob-pro-drugcount pdp-drugcount"
                      style={{ width: 80 }}
                      renderInput={(params) => <TextField {...params} margin="normal" className="mob-pro-drugcount pdp-drugcount" variant="outlined" />}
                    />
                    
                    {isAddtoCart[index + 4]  ? <Button
                      variant="contained"
                      color="primary"
                      className="fast-moving-addtocart fast-moving-spacing colorChange"
                      // onClick={handleClickButton(GrowTransition, index + 4)}
                    >
                      Added
                </Button> : <Button
                        variant="contained"
                        color="primary"
                        className="fast-moving-addtocart fast-moving-spacing  "
                        onClick={handleClickButton(GrowTransition, index + 4)}
                      >
                        Add To Cart
                </Button>}
                  </TableCell>
                </TableRow>
              ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
<div className={classes.root1}>
      <Snackbar
        open={state.open}
        onClose={handleCloseButton}
        TransitionComponent={state.Transition}
        message={pdpPageItemsResult.payload?.c_item_name + " successfully added to cart"}
        key={state.Transition.name} 
        autoHideDuration={5000}
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
      </div>
    </div>
  )
}

export default SellerDetails;
