
import React, { useState, useEffect } from "react"

import Button from "@material-ui/core/Button";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Fade from '@material-ui/core/Fade';
import Grow from "@material-ui/core/Grow";
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import chooseFilter from "../../../assets/images/icons/filter-choose.svg";
import chooseFilterSelected from "../../../assets/images/icons/right-sign.svg";
import { Constants } from "../../../common/constant/localstorage";


const filter = createFilterOptions();

const useStyles = makeStyles((theme) => ({
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
    }
}));
let array = [];
for (var i = 0; i <= 100; i++) {
    if (i == 0) {
        array.push({ title: "1" })
    }
    else {
        array.push({ title: (i * 10).toString() })
    }

}
let d = '1';

function GrowTransition(props) {
    return <Grow {...props} />;
  }
 
const SellerDetailsSection = (props) => {
    const nMobile = localStorage.getItem(Constants.MOBILE_NO)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const filterOpen = Boolean(anchorEl);

    const handleFilterClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleFilterClose = () => {
    setAnchorEl(null);
    };

    const { itemName,br_code,c_item_code,c_item_name,title, isOpen, setIsOpen,item1,AddToCartAction,addToCartResult,CartCount,arrayLength} = props;
    
 
    
   


    const handleClose = () => {
        setIsOpen(false)
      };
    const [value, setValue] = React.useState(array[0]);
    const [open, setOpen] = useState(true);
    

    //   console.log(item1.j_list.length, "SSSSSSSSSSSSSSSSSSSSSS arrayLength")

    const [errorMsgSeller, setErrorMsgSeller] = useState("")
    const handleClick = () => {
        setOpen(!open);
    };
    const classes = useStyles();
    const [optValue, setOptValue] = useState("1");
    const optionCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let payload2=item1.j_list;
    
    let tempArray = [];
    for (let i = 0; i < arrayLength; i++) {
        tempArray.push(false)
    }

    
    
    console.log(arrayLength, "<<<<arrayLengtharrayLength")

    // useEffect(() => {
       
    //     if(Object.values(item1)){
    //         setarrayLength(Object.entries(item1.j_list).length)
            
    //     }
        

    // }, [Object.entries(item1)])
    


    const [isAddtoCart, setAddtoCart] = useState(tempArray);
    const [state, setState] = React.useState({
      open: false,
      Transition: Fade,
      message:""
    });


    const [trans, setTrans] = useState("");
    const [indexx, setIndexx] = useState("");
    const [tit, setTit] = useState("");
    const handleClickButton = (Transition, index,qty,sellerCode,sellerName,title,n_seller_rate,n_seller_item_code,n_mrp) => () => {

        setTrans(Transition)
        setIndexx(index);
        setTit(title)
        // console.log(sellerCode,"<<sellerCode");
        // console.log(sellerName,"<<sellerName");
        
        setTimeout(() =>{
            setState({
                open: true,
                Transition,
                message:`${title} added successfully to Cart`
              });
        }, 1500) 
        buttonTrue(index);

        // setTimeout(() =>{
        //     handleClose();
        // },3000);

        

        

        const body={
           
            c_item_code:c_item_code,
            n_qty:qty,
            c_seller_code:sellerCode,
            c_seller_name:sellerName,
            n_seller_rate:n_seller_rate,
            c_mobile_no:nMobile,
            c_seller_item_code:n_seller_item_code,
            n_mrp:n_mrp
        }
        
        
        AddToCartAction(body);
        
      };



    const  buttonTrue = (index) =>{
      let temp = [...isAddtoCart]
        temp[index] = true;
        // temp[index] = !temp[index];
        // // console.log(index,temp[index])
        setAddtoCart(temp);
    }
    
      const handleCloseButton = () => {
        setState({
          ...state,
          open: false,
        });
      };

  

      useEffect(() => {
        if(addToCartResult.statuscode === 0 && addToCartResult.statuscode !== undefined && br_code !== "" ){
         
          const body={
              n_branch_id:br_code
          }
          CartCount(body);
        }
     
    }, [addToCartResult.statuscode === 0 && addToCartResult.statuscode !== undefined])
    return (
        <div>


            <div className="seller-flexinfo-secgrid">
            <div>
                <Container fixed >
                   <Grid container spacing={0} className="seller-flexinfo-header">
                    <Grid item xs={8}>
                        {/* <h4 className="seller-table-title">Select Seller For Dolo 650 Tablet</h4> */}
                        <h4 className="seller-table-title">Select Seller For {itemName}</h4>
                        <p className="seller-table-desc">See best schemes, Rate below</p>
                        <h5 className="seller-offer-desc">
                            Showing Sellers Result as per <span>‘Offer-Wise’</span> 
                        </h5>
                    </Grid>
                    <Grid item xs={4} className="text-right filter-choose-head">
                        <Button className="filter-choose" aria-controls="fade-menu" aria-haspopup="true" onClick={handleFilterClick}>
                            <img src={chooseFilter} alt="FilterChoose"/>
                          </Button>
                        <Menu
                            className="dropdownFilter"
                            id="fade-menu"
                            anchorEl={anchorEl}
                            getContentAnchorEl={null}
                            keepMounted
                            open={filterOpen}
                            onClose={handleFilterClose}
                            TransitionComponent={Fade}
                            anchorOrigin={{ vertical: "bottom", horizontal: "bottom" }}
                            transformOrigin={{ vertical: "top", horizontal: "bottom" }}
                            >
                            <MenuItem className="active" onClick={handleFilterClose}>
                                Seller Priority
                                <img src={chooseFilterSelected} alt=""/>
                            </MenuItem>
                            <MenuItem onClick={handleFilterClose}>
                                Offer-Wise
                            </MenuItem>
                        </Menu>
                    </Grid>
                    </Grid>
                 </Container>
            </div>
                {/* <p className="login-error-msg">{errorMsgSeller}</p> */}

            </div>
            <div className="table-seller">

                {item1.j_list &&
                item1.j_list.map((seller, index) => (
                    <div className="div-sec" key={index}>   
                        <p className="table-seller-name"> {seller.c_seller_name}</p>
                        <div className="sec-row" >

                            <div>
                                {/* <p className="table-seller-item">Rate: &#8377; {seller.n_max_mrp}</p> */}
                                <p className="table-seller-item">Rate: &#8377; {seller.n_seller_rate}</p>
                                
                                <p className="table-seller-scheme">Scheme: {seller.c_schemes}</p>
                            </div>

                            
                            <div className="table-buttons">
                                <Autocomplete
                                    id="controllable-states-demo"
                                    // key={seller.c_seller_name}
                                    defaultValue={array[0]}
                                    // value={value && value[seller.c_seller_name]}
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
                                        else if(newValue == null ){
                                            setValue({
                                              title:  ''
                                            })
                                        }
                                        else {
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
                                    // style={{ width: 80 }}
                                    renderInput={(params) => <TextField {...params} margin="normal" className="mob-pro-drugcount pdp-drugcount" variant="outlined" />}
                                />
                                {isAddtoCart[index] ? <Button
                                    variant="contained"
                                    color="primary"
                                    className="fast-moving-addtocart fast-moving-spacing colorChange"
                                    
                                  >
                                    Added 
                                </Button> : <Button
                                    disabled={(seller.n_seller_rate === "") ? true : false}
                                      variant="contained"
                                      color="primary"
                                      className="fast-moving-addtocart fast-moving-spacing "
                                      onClick={handleClickButton(
                                          GrowTransition, 
                                        index,
                                        value.title, 
                                        seller.c_seller_code, 
                                        seller.c_seller_name,
                                        c_item_name,
                                        seller.n_seller_rate,
                                        seller.c_seller_item_code,
                                        seller.n_mrp)}
                                    >
                                      Add To Cart
                                </Button>}
                            </div>
                        </div>
                    </div>
                ))}

            </div>


            <Snackbar
        open={state.open}
        onClose={handleCloseButton}
        TransitionComponent={state.Transition}
        message={state.message}
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
    )
}

export default SellerDetailsSection;
