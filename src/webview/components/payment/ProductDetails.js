import React, {useEffect, useState} from 'react';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';

import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";
import { Table, TableRow, TableCell, Divider, Button, TableBody, TableHead } from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { usePagination } from '@material-ui/lab/Pagination';


//images
import ProductImg1 from "../../../assets/mobImages/item1.png";
import ProductImg2 from "../../../assets/mobImages/item2.png";
import ProductImg3 from "../../../assets/mobImages/item3.png";
import ProductImg4 from "../../../assets/mobImages/item4.png";
import ProductImg5 from "../../../assets/mobImages/item5.png";
import DeleteImg from "../../../assets/images/delete_color.svg";
import arrow from "../../../assets/images/Priorityarrow.svg";
import searchimg from "../../../assets/images/search.svg";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useHistory } from "react-router-dom";
import { Constants } from "../../../common/constant/localstorage";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

const ProductDetails = (props) => {
	localStorage.setItem(Constants.BILL_NOS,[]);
	localStorage.setItem(Constants.BILL_SELLER,"");
	localStorage.setItem(Constants.CHECK_STATUS,false);
	localStorage.setItem(Constants.BILL_SELLER_NAME,"");

	let history = useHistory();
	const  {GetSellerWisePayOut,
			sellerwisePayoutResult,
			GetSellerWisePayPagination,
			sellerwisePayPaginationResult,
			GetSellerPayDetails,
			sellerPayDetailsResult,
			mobileNo,
			sellerCode,
			page,
			setPage,
			loadStatus,
			setloadStatus,
			totalList,
			setTotalList,
			totalLimit,
			setLimitTotal,
			totalOffset,
			settotalOffset,
			pageLimit,
            setPageLimit,
			notFound,
			setNotFound,
			arrayJson,
			setarrayJson,
			arrayInJson,
			setarrayInJson,
			searchKey,
			setSearchKey,
			totalPay,
          	settotalPay,
          	totalOutPay,
          	settotalOutPay,
          	isCheck,
		    setIsCheck,
		    isCheckAll,
		    setIsCheckAll,
		    setCheckCount,
    		checkCount,
    		resultofSeller,
    		setresultofSeller
		} = props;
	const [filterBy, setFilterBy] = React.useState(5);
	const [selectSeller, setSelectSeller] = React.useState(0);
	const [paginationResult, setPaginationResult] = React.useState(0);
	useEffect(() => {
	    const body = {
			    c_mobile_no:mobileNo,
			    c_seller_code:sellerCode
			}
	    GetSellerWisePayOut(body);
	  }, []);
    useEffect(() => {
    	if(sellerPayDetailsResult.statuscode ===0)
    	{
    		sellerPayDetailsResult.statuscode=999
    	}
	    setloadStatus(false);
	    if (sellerwisePayoutResult.statuscode === 0) {
	      if(sellerwisePayoutResult.payload.data.length > 0)
	      {
	        setarrayJson(sellerwisePayoutResult.payload?.data);
	        setarrayInJson(sellerwisePayoutResult.payload?.data[0].j_bill_info)
	        setTotalList(5)
	        var totalcount=sellerwisePayoutResult.payload?.data[0].n_count / 5
	        if (Number.isInteger(totalcount)) {
				var totalc=totalcount
			}
			else
			{
				var roundOffVal=Math.floor(totalcount) + 1
				var totalc=roundOffVal
			}
	        setPaginationResult(totalc)
	        setToggle(true)
	        setloadStatus(true);
	        setNotFound(false);
	      }
	    }
	    if(sellerwisePayoutResult.statuscode === 5) {
	      setarrayJson([])
	      setarrayInJson([])
	      setloadStatus(false);
	      setNotFound(true);
	    }
	    
	  }, [sellerwisePayoutResult]);

    const { items } = usePagination({
        count: paginationResult,
    });

    const handleChangenew = (event,total_count,seller_code) => {
    	setPage(1)
        setFilterBy(event.target.value);
        setPageLimit(event.target.value);
        var totalcount=total_count / event.target.value
        if (Number.isInteger(totalcount)) {
			var totalc=totalcount
		}
		else
		{
			var roundOffVal=Math.floor(totalcount) + 1
			var totalc=roundOffVal
		}
		setPaginationResult(totalc)
		if(searchKey.length > 3)
    	{
    		var body ={
			    c_mobile_no:mobileNo,
			    c_seller_code:seller_code,
			    n_page:0,
			    n_limit:event.target.value,
			    c_search_term:searchKey
			}
		}
		else
		{

			var body ={
			    c_mobile_no:mobileNo,
			    c_seller_code:seller_code,
			    n_page:0,
			    n_limit:event.target.value,
			}
		}
		GetSellerWisePayPagination(body)
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e,seller_code) => {
        setOpen(true);
        setresultofSeller(seller_code);
    };

    const handleClose = () => {
        setOpen(false);
    };

	const {openDeleteModal,index,backgroundRed,handleDeleteItem } = props;
	
	
	const [optValue, setOptValue] = React.useState("one");
	const [gstAmt, setGstAmt] = React.useState(0);
	const [totalAmt, setTotalAmt] = React.useState(0);
	

	const [state, setState] = useState({
		open: false,
		Transition: Fade,
		message: "",
	});

	const handleClickButton = (event,Transition, name, index)  => {
		event.stopPropagation()
		setState({
			open: true,
			Transition,
			message: `${name} deleted from cart`,
		});
		handleDeleteItem(name,index);
		return false;
	};

	const handleClickShortButton = (e, Transition, name) => {
		e.stopPropagation();
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

	const handleSelect = (event) => {
		setOptValue(event.target.value);
	};

	const [toggle, setToggle] = React.useState(false)
	const handleToggle = (e,index,total_count,seller_code) => {
		setToggle(!toggle)
		setPage(1)
		setTotalList(5)
		setPageLimit(5)
		setFilterBy(5)
		setSelectSeller(index)
		setSearchKey("")
		setIsCheck([])
		setCheckCount(0)
		setIsCheckAll(false);
		setresultofSeller(seller_code);
		var totalcount=total_count / 5
        if (Number.isInteger(totalcount)) {
			var totalc=totalcount
		}
		else
		{
			var roundOffVal=Math.floor(totalcount) + 1
			var totalc=roundOffVal
		}
		setPaginationResult(totalc)
		const body ={
			    c_mobile_no:mobileNo,
			    c_seller_code:seller_code,
			    n_page:0,
			    n_limit:5,
			}
        GetSellerWisePayPagination(body)
	}

	const handleDelete = (e) => {
		e.stopPropagation();
		openDeleteModal();
	}
    const handlePagination =(e,page_Number,seller_code) => {
    	e.stopPropagation();
    	var pageN=page_Number - 1
    	var pageIn=pageN * pageLimit
    	setPage(pageIn + 1)
    	if(searchKey.length > 3)
    	{
    		var body ={
				    c_mobile_no:mobileNo,
				    c_seller_code:seller_code,
				    n_page:pageN,
				    n_limit:pageLimit,
				    c_search_term:searchKey
				}
    	}
    	else
    	{
    		var body ={
				    c_mobile_no:mobileNo,
				    c_seller_code:seller_code,
				    n_page:pageN,
				    n_limit:pageLimit,
				}
    	}
    	GetSellerWisePayPagination(body)
    }
    const handleSearchnew = (event,seller_code) => {
     	setPage(1)
     	setresultofSeller(seller_code);
	    let target = event.target.value;
	    setSearchKey(target);
	  	if(target.length > 3)
      	{
        	const body ={
			    c_mobile_no:mobileNo,
			    c_seller_code:seller_code,
			    n_page:0,
			    n_limit:5,
			    c_search_term:target
			}
        	GetSellerWisePayPagination(body)
      	}
      	if(target.length === 0)
      	{
      		const body ={
			    c_mobile_no:mobileNo,
			    c_seller_code:seller_code,
			    n_page:0,
			    n_limit:5,
			}
        	GetSellerWisePayPagination(body)
      	}
	};
    useEffect(() => {
	    setloadStatus(false);
	    if (sellerwisePayPaginationResult.statuscode === 0) {
	      var totalR=sellerwisePayPaginationResult.payload.data?.j_seller_info.j_bill_info.length;
	      if(totalR > 0)
	      {
	      	setarrayInJson(sellerwisePayPaginationResult.payload.data?.j_seller_info.j_bill_info);
	      }
	      else
	      {
	      	setarrayInJson([]);
	      }
	      var pageIn=page - 1
	      setTotalList(totalR + pageIn)
	      if(searchKey.length > 3)
	      {
	      	settotalPay(sellerwisePayPaginationResult.payload.data?.j_seller_info.n_total_amount)
	      	settotalOutPay(sellerwisePayPaginationResult.payload.data?.j_seller_info.n_outstanding_amount)
	      	setLimitTotal(sellerwisePayPaginationResult.payload.data?.j_seller_info.n_count)
	      	var totalcount=sellerwisePayPaginationResult.payload.data?.j_seller_info.n_count / pageLimit
	        if (Number.isInteger(totalcount)) {
				var totalc=totalcount
			}
			else
			{
				var roundOffVal=Math.floor(totalcount) + 1
				var totalc=roundOffVal
			}
			setPaginationResult(totalc)
	      }
	      else
	      {
	      	setLimitTotal(0)
	      	settotalPay(0)
	      	settotalOutPay(0)
	      }
	      setloadStatus(true);
	      setNotFound(false);
	    }
	    if(sellerwisePayPaginationResult.statuscode === 5) {
	      setloadStatus(false);
	      setNotFound(true);
	    }
	    
	  }, [sellerwisePayPaginationResult]);

   const handleSelectAll = (e,select_amt) => {
	    setIsCheckAll(!isCheckAll);
	    setIsCheck(arrayJson.map((li) => li.c_code));
	    if (isCheckAll) {
	      setIsCheck([]);
	    }
	    if(totalOutPay > 0)
	    {
	    	if (!isCheckAll) {
		        setCheckCount(totalOutPay);
		      } else {
		        setCheckCount(0);
		      }
	    }
	    else
	    {
	      if (!isCheckAll) {
	        setCheckCount(select_amt);
	      } else {
	        setCheckCount(0);
	      }
	    }
	  };
	  const handleClick = (e,select_amt) => {
	    if (isCheckAll === false) {
	      const { id, checked } = e.target;
	      setIsCheck([...isCheck, id]);
	      if (!checked) {
	        setIsCheck(isCheck.filter((item) => item !== id));
	        setCheckCount(checkCount - select_amt);
	      } else {
	        setCheckCount(checkCount + select_amt);
	      }

	      if (isCheck.length == 0) {
	        setIsCheckAll(false);
	      }
	    }
	  };
	  const handleClickRedirect = (e,seller_code) => {
	  	if (isCheckAll === false){
	  		var body ={
			    c_mobile_no:mobileNo,
			    c_seller_code:seller_code,
			    ac_invoice_no:isCheck
			}
	  	}
	  	else
	  	{
	  		var body ={
			    c_mobile_no:mobileNo,
			    c_seller_code:seller_code,
			    ac_invoice_no:[]
			}
	  	}
        GetSellerPayDetails(body)
	  }
	  useEffect(() => {
	    setloadStatus(false);
	    if(sellerPayDetailsResult.statuscode === 0) {
	      setloadStatus(true);
	      setNotFound(false);
	      localStorage.setItem(Constants.BILL_NOS,isCheck);
	      localStorage.setItem(Constants.BILL_SELLER,resultofSeller);
	      localStorage.setItem(Constants.CHECK_STATUS,isCheckAll);
	      let name=sellerPayDetailsResult.payload?.data.c_seller_name
	      localStorage.setItem(Constants.BILL_SELLER_NAME,name);

	      history.push("/payment-progress");
	    }
	    if(sellerPayDetailsResult.statuscode === 5) {
	      setloadStatus(false);
	      setNotFound(true);
	    }
	    
	  }, [sellerPayDetailsResult]);
	return(
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
	{Array.isArray(arrayJson) &&
		arrayJson.length > 0 &&
		arrayJson.map((item1, index1) => (
		<div className="info onePharama paymentFlow">
		<Container fixed>
			<div className={(index==0 && backgroundRed) ?"paymentflow-wrapper pt-0 pd-0 bg-red":"paymentflow-wrapper pt-0 pd-0"} >
				<div className={(index==0 && backgroundRed)?"mob-cart-items-wrapper web-cart-items-wrapper bg-red":"mob-cart-items-wrapper web-cart-items-wrapper"}>
					<ExpansionPanel defaultExpanded className="mr-t-16" >
						<ExpansionPanelSummary
							aria-controls="panel1a-content"
							id="panel1a-header">
							<div className="mob-cartitems-flex-sec mob-cartitems-flex-sec1" onClick={(e) => handleToggle(e,index1,item1.n_count,item1.c_seller_code)}>
								<Grid className="expansionPanel" container>
								{/*{toggle ? <AddIcon /> : <RemoveIcon /> } <h4> Maheerveer Medi-Sales Pvt. Ltd.</h4>*/}
		    						<Grid item xs={8}>
		    							{selectSeller === index1  ? <RemoveIcon /> :<AddIcon />}
		    							<h4>{item1.c_seller_name}</h4>
		    							<p className="desc">Pay all your old bills to clear outstanding</p>
									</Grid>
									<Grid item xs={4}>
										<p className="text-right flow-seller-desc">Total Outstanding Amount</p>
										<h1 className="text-right flow-seller-total">₹ {item1.n_outstanding_amount}</h1>
									</Grid>
								</Grid>
							</div>
						</ExpansionPanelSummary>
						
							<ExpansionPanelDetails>
							{ selectSeller === index1 ?(
									<div className={(index==0 && backgroundRed) ?"mob-cartitems-sec bg-red":"mob-cartitems-sec"}>
			                            <Container fixed>
			                                <div className="allorders-top-sec">
			                                    <Box className="flexRow" display="flex" flexDirection="row">
			                                        <Box>
			                                            <Button disabled className="mr-r-8" color="primary">Show</Button>
			                                            <Select
			                                                menuPlacement="auto"
			                                                menuPosition="fixed"
			                                                className="width72 filterBy"
			                                                labelId="demo-multiple-checkbox-label"
			                                                id="demo-multiple-checkbox"
			                                                value={filterBy}
			                                                variant="outlined"
			                                                onChange={(e) => handleChangenew(e,item1.n_count,item1.c_seller_code)}
			                                                >
			                                                <MenuItem value="5">05</MenuItem>
			                                                <MenuItem value="10">10</MenuItem>
			                                                <MenuItem value="20">20</MenuItem>
			                                                <MenuItem value="50">50</MenuItem>
			                                                <MenuItem value="100">100</MenuItem>
			                                            </Select>
			                                            <Button disabled className="mr-l-8" color="primary">entries</Button>
			                                        </Box>
			                                    </Box>

			                                    

			                                    <div className="relative">
			                                        {/*If selected Pay Selected Bills*/}
			                                        {checkCount > 0 ? <p className="allorders-selected">Total Amount Payable: <span>₹ {checkCount}</span></p> : ""}
			                                        {/*disabled*/}
			                                        <Button onClick={(e) => handleClickOpen(e,item1.c_seller_code)} variant="contained" className="paySelectedBills width164 mt-0 mr-r-12" color="primary"
			                                        disabled={checkCount > 0 ? "" : "disabled"}>
			                                           Pay Selected Bills
			                                        </Button>
			                                        <TextField
			                                            margin="normal"
			                                            variant="outlined"
			                                            placeholder="Search biil no."
			                                            value={searchKey}
			                                            onChange={(e) => handleSearchnew(e,item1.c_seller_code)}
			                                            className="serachSellerInput mr-t-0 width256 searchbox"
			                                            InputProps={
			                                                {
			                                                    startAdornment: (
			                                                        <InputAdornment position="start">
			                                                          <img src={searchimg} alt="searchimg" />
			                                                        </InputAdornment>
			                                                    ),
			                                                }
			                                            }
			                                       />
			                                    </div>
			                                </div>
			                                {/*If selected Pay Selected Bills Start*/}
			                                {checkCount > 0 ? <div className="mr-t-24"></div>:""}
			                                {/*End*/}
			                            </Container>
									    <hr className="MuiDivider-root blue-divider"></hr>
									    
			                            <div>
			                                <Table className="paymentsellerList">
			                                    <TableHead>
			                                        <TableRow className="head noBorder">
			                                            <TableCell><Checkbox className="itemMapCheckbox" color="primary" onClick={(e) => handleSelectAll(e,item1.n_outstanding_amount)} 
                  											checked={isCheckAll}/> Select</TableCell>
			                                            <TableCell>Bill Number</TableCell>
			                                            <TableCell>Bill Date</TableCell>
			                                            <TableCell>Due Date</TableCell>
			                                            <TableCell>Invoice Total</TableCell>
			                                            <TableCell>Invoice Balance</TableCell>
			                                        </TableRow>
			                                    </TableHead>
			                                    <TableBody>
			                                    {Array.isArray(arrayInJson) &&
													arrayInJson.length > 0 &&
													arrayInJson.map((item2, index2) => (
			                                        <TableRow>
			                                            <TableCell className="tBody">
			                                                <div className="pd-l-32">
			                                                    <Checkbox id={item2.c_bill_number} 
			                                                    onClick={(e) => handleClick(e,item2.n_invoice_balance)}
                          												checked={isCheckAll || isCheck.includes(item2.c_bill_number)} className="itemMapCheckbox" color="primary"/>
			                                                </div>
			                                            </TableCell>
			                                            <TableCell className="tBody">{item2.c_bill_number}</TableCell>
			                                            <TableCell className="tBody">{item2.d_bill_date}</TableCell>
			                                            <TableCell className="tBody">{item2.d_due_date}</TableCell>
			                                            <TableCell className="tBody">₹ {item2.n_invoice_total}</TableCell>
			                                            <TableCell className="tBody">₹ {item2.n_invoice_balance}</TableCell>
			                                        </TableRow>
			                                    ))}
													{arrayInJson.length > 0 ?
													<TableRow className="totalPaymentAmount">
			                                            <TableCell className="tBody" colSpan={4}>
			                                                <div className="totalPaymentFooter br-ra-l-tb-8">
			                                                    <div className="pd-l-32 paymentFooterCon">
			                                                        Total
			                                                    </div>
			                                                </div>
			                                            </TableCell>
			                                            <TableCell className="tBody">
			                                                <div className="totalPaymentFooter">
			                                                    <div className="paymentFooterCon">
			                                                        ₹ {totalPay ===0 ? item1.n_total_amount : totalPay}
			                                                    </div>
			                                                </div>
			                                            </TableCell>
			                                            <TableCell className="tBody">
			                                                <div className="totalPaymentFooter br-ra-r-tb-8">
			                                                    <div className="paymentFooterCon">
			                                                        ₹ {totalOutPay === 0 ? item1.n_outstanding_amount : totalOutPay} 
			                                                    </div>
			                                                </div>
			                                            </TableCell>
			                                        </TableRow> :""
			                                    }
			                                    </TableBody>
			                                </Table>
			                            </div>
			                            <div className="pd-b-32">
				                            {arrayInJson.length > 0 ?(
				                            	<Container fixed className="paginate">
				                                <Grid container className="mr-t-12">
				                                    <Grid item xs={8}>
				                                        <p>Showing {page} to {totalList} of {totalLimit ===0 ? item1.n_count : totalLimit} entries</p>
				                                    </Grid>
				                                    {paginationResult > 1 ?(
				                                    	<Grid item xs={4}>
				                                        <nav className="text-right">
				                                            <ul className="pagination">
				                                                {
				                                                    items.map(({ page, type, selected, ...item }, index) => {
				                                                        let children = null;
				                                                        if (type === 'start-ellipsis' || type === 'end-ellipsis') 
				                                                        {
				                                                            children = '…';
				                                                        } 
				                                                        else if (type === 'page') 
				                                                        {
				                                                           children = (
				                                                               <button type="button"
				                                                                className={`${selected ? 'current' : ''}`}  {...item}>
				                                                                    {page}
				                                                                    
				                                                                </button>
				                                                            );
				                                                        } 
				                                                        else 
				                                                        {
				                                                            children = (
				                                                                <button type="button" {...item}>
				                                                                    {type}
				                                                                </button>
				                                                            );
				                                                        }
				                                                        return <li onClick={(e) => handlePagination(e,page,item1.c_seller_code)} key={index}>{children}</li>;
				                                                    })
				                                                }
				                                          </ul>
				                                        </nav>
				                                    	</Grid>
				                                    	):""
				                                    }
				                                </Grid>
				                            </Container>):""
										    }
									    </div>
			                            
							        </div>
							        ):""
							}
							</ExpansionPanelDetails>
						
					</ExpansionPanel>
				</div>
			</div>
		</Container>
	</div>
	))}
	

    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'xl'}
        className="paymentflowPopup"
      >
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
            <Grid container>
                <Grid item xs={8}>
                    <p>Any complaints of the retail customers will be addressed by the Sellers <br/>and C Square will play no role in resolving customer grievances.</p>
                </Grid>
                <Grid item xs={4}>
                    <div className="btn-section pd-t-8">
                        <Button onClick={(e) => handleClickRedirect(e,resultofSeller)} className="yes mr-r-12" color="primary">Yes</Button>
                        <Button onClick={handleClose} className="no" color="primary">No</Button>
                      </div>
                </Grid>
            </Grid>
        </DialogContent>
      </Dialog>

	</>
	)
}

export default ProductDetails