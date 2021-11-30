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
import ProductImg1 from "../../../../assets/mobImages/item1.png";
import ProductImg2 from "../../../../assets/mobImages/item2.png";
import ProductImg3 from "../../../../assets/mobImages/item3.png";
import ProductImg4 from "../../../../assets/mobImages/item4.png";
import ProductImg5 from "../../../../assets/mobImages/item5.png";
import DeleteImg from "../../../../assets/images/delete_color.svg";
import arrow from "../../../../assets/images/Priorityarrow.svg";
import searchimg from "../../../../assets/images/search.svg";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useHistory } from "react-router-dom";
import { Constants } from "../../../../common/constant/localstorage";

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

const NewOrderListPage = (props) => {

	const [errMsg, setErrMsg] = useState("");
	const [filterBy, setFilterBy] = React.useState(5);
	const [searchKey, setSearchKey] = React.useState("");
	const [selectSeller, setSelectSeller] = React.useState(0);
	const [paginationResult, setPaginationResult] = React.useState(10);
	const {openDeleteModal,index,backgroundRed,handleDeleteItem } = props;
		const { items } = usePagination({
				count: paginationResult,
		});

		const handleChangenew = (event,total_count,seller_code) => {
			setPage(1)
				setFilterBy(event.target.value);
			 
		};

		const [open, setOpen] = React.useState(false);

		const handleClickOpen = (e,seller_code) => {
				setOpen(true);
				
		};

		const handleClose = () => {
				setOpen(false);
		};

	
	
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

	
	const handleDelete = (e) => {
		e.stopPropagation();
		openDeleteModal();
	}
		const handlePagination =(e,page_Number,seller_code) => {
			e.stopPropagation();
			var pageN=page_Number - 1
			var pageIn=pageN * pageLimit
			
		}
	const handleSearchnew = (event,seller_code) => {
			 
	};
	 
	return (
		<>
			<div>
				
				<div className="profile-title-sec ml-16">
					<h4 className="profile-title">New Order List</h4>
				</div>

				<div>
				 <div className={(backgroundRed) ?"mob-cartitems-sec bg-red":"mob-cartitems-sec"}>
						<Container fixed>
								<div className="allorders-top-sec d-flex kamss-show mr-t-12 pd-l-16">
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
																// onChange={(e) => handleChangenew(e,item1.n_count,item1.c_seller_code)}
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
												
												<TextField
														margin="normal"
														variant="outlined"
														placeholder="Search Here"
														value={searchKey}
														// onChange={(e) => handleSearchnew(e,item1.c_seller_code)}
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
								
								{/*End*/}
						</Container>
						<div className="pd-l-16">
							<hr className="MuiDivider-root blue-divider"></hr>
						</div>
						<div className="pd-l-16">
								<Table className="paymentsellerList">
										<TableHead>
												<TableRow className="head noBorder">
														<TableCell>Bill Number</TableCell>
														<TableCell>Bill Date</TableCell>
														<TableCell>Due Date</TableCell>
														<TableCell>Invoice Total</TableCell>
														<TableCell>Invoice Balance</TableCell>
												</TableRow>
										</TableHead>
										<TableBody>
									 
												<TableRow>
														<TableCell className="tBody">aaaaaaaaaaaa</TableCell>
														<TableCell className="tBody">123345546</TableCell>
														<TableCell className="tBody">sdfge5t456</TableCell>
														<TableCell className="tBody">₹ 1000</TableCell>
														<TableCell className="tBody">₹ 200</TableCell>
												</TableRow>
										</TableBody>
								</Table>
						</div>
						<div className="pd-b-32">
								<Container fixed className="paginate">
									<Grid container className="mr-t-12 pd-l-16">
										<Grid item xs={7}>
												<p>Showing 1 to 5 of 10 entries</p>
										</Grid>
										<Grid item xs={5}>
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
									</Grid>
							</Container>
						</div>
												
						</div>
				</div>
			</div>
		</>
	);
};

export default NewOrderListPage;