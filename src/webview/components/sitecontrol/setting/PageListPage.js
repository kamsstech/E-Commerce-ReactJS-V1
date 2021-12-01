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

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
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

const PageListPage = (props) => {
	const {
		pageListPageResult,
		PageListPageAction,
	} = props;
	const [filterBy, setFilterBy] = React.useState(10);
	const [searchKey, setSearchKey] = React.useState("");
	const [paginationResult, setPaginationResult] = React.useState(10);
	const {openDeleteModal,index,backgroundRed,handleDeleteItem } = props;
	const [arrayJson, setarrayJson] = useState([]);
	const [page, setPage] = useState(1);
  	const [loadStatus, setloadStatus] = useState(false);
  	const [totalList, setTotalList] = useState(10);
  	const [totalLimit, setLimitTotal] = useState(10);
  	const [totalOffset, settotalOffset] = useState(0);
  	const [notFound, setNotFound] = useState(false);
  	const [pageLimit, setPageLimit] = useState(5);
  	const [pageOffset, setpageOffset] = useState(0);
	useEffect(() => {
		  const body = {
		  	c_process:"1",
		  	n_offset:0,
		  	n_limit:filterBy
		  }
	    PageListPageAction(body);
	}, []);
	
	const handleChangenew = (event,total_count) => {
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
		setpageOffset(0)
		const body = {
		  	c_process:"2",
		  	n_offset:0,
		  	n_limit:event.target.value,
		  	n_status:1,
		  	c_searchval:searchKey
		  }
		PageListPageAction(body)
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
	const handlePagination =(e,page_Number) => {
    	e.stopPropagation();
    	var pageN=page_Number - 1
    	var pageIn=pageN * filterBy
    	setpageOffset(pageIn)
    	setPage(pageIn + 1)
    	const body = {
		  	c_process:"2",
		  	n_offset:pageIn,
		  	n_limit:filterBy,
		  	n_status:1,
		  	c_searchval:searchKey
		  }
    	PageListPageAction(body)
    }
    const handleSearchnew = (event) => {
     	setPage(1)
     	setpageOffset(0)
	    let target = event.target.value;
	    setSearchKey(target);
	  	const body ={
			    c_process:"2",
			    n_offset:0,
			    n_status:1,
			    n_limit:filterBy,
			    c_searchval:target
			}
        PageListPageAction(body)
	};
	useEffect(() => {
	    setloadStatus(false);
	    if (pageListPageResult.statuscode === 1) {
	      if(pageListPageResult.payload.data.length > 0)
	      {
	        setarrayJson(pageListPageResult.payload?.data);
	        setTotalList(pageOffset + pageListPageResult.payload.data.length)
	        setLimitTotal(pageListPageResult.payload?.total)
	        var totalcount=pageListPageResult.payload?.total / filterBy
	        if (Number.isInteger(totalcount)) {
				var totalc=totalcount
			}
			else
			{
				var roundOffVal=Math.floor(totalcount) + 1
				var totalc=roundOffVal
			}
	        setPaginationResult(totalc)
	        setloadStatus(true);
	        setNotFound(false);
	      }
	    }
	    if(pageListPageResult.statuscode === 3) {
	      setarrayJson([])
	      setloadStatus(false);
	      setNotFound(true);
	    }
	    
	  }, [pageListPageResult]);
	const { items } = usePagination({
			count: paginationResult,
	});
	return (
		<>
			<div>
				<div className="profile-title-sec ml-16">
					<h4 className="profile-title">Page List</h4>
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
												onChange={(e) => handleChangenew(e,totalLimit)}
												>
												<MenuItem value="10">10</MenuItem>				
												<MenuItem value="25">25</MenuItem>
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
										onChange={(e) => handleSearchnew(e)}
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
						</Container>
						<div className="pd-l-16">
							<hr className="MuiDivider-root blue-divider"></hr>
						</div>
						<div className="pd-l-16">
								<Table className="paymentsellerList">
									<TableHead>
										<TableRow className="head noBorder">
											<TableCell>SNo</TableCell>
											<TableCell>Page Type</TableCell>
											<TableCell>Title</TableCell>
											<TableCell>Date</TableCell>
											<TableCell>Status</TableCell>
											<TableCell>Action</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
									{
										Array.isArray(arrayJson) &&
										arrayJson.length > 0 &&
										arrayJson.map((item1, index1) => (
										<TableRow>
											<TableCell className="tBody">{(index1 + 1) + pageOffset > 9 ? (index1 + 1) + pageOffset : "0" + ((index1 + 1) + pageOffset)}</TableCell>
											<TableCell className="tBody">{item1.c_page_type}</TableCell>
											<TableCell className="tBody">{item1.c_page_title}</TableCell>
											<TableCell className="tBody">{item1.dt_createdate}</TableCell>
											<TableCell className="tBody">
											{
												item1.n_status==1 ?
												<Button
													className="active-btn"
											        variant="contained"
											        color="primary"
											        size="small"
											        startIcon={<VisibilityIcon />}
											      >
											        Active
											      </Button>
											      :
												<Button
													className="inactive-btn"
											        variant="contained"
											        color="secondary"
											        size="small"
											        startIcon={<VisibilityOffIcon />}
											      >
											        Inactive
											      </Button>
											}
											</TableCell>
											<TableCell className="tBody">
											    <IconButton size="small">
										          	<EditIcon fontSize="inherit" />
										        </IconButton>
										        <IconButton size="small">
										          	<DeleteIcon fontSize="inherit" />
										        </IconButton>
											</TableCell>
										</TableRow>
										))
									}
									{
										arrayJson.length == 0 ? "Record Not Found!":""
									}
									</TableBody>
								</Table>
						</div>
						<div className="pd-b-32">
							<Container fixed className="paginate">
								{
									notFound == false?(
										<Grid container className="mr-t-12 pd-l-16">
											<Grid item xs={7}>
												<p>Showing {page} to {totalList} of {totalLimit ===0 ? 0 : totalLimit} entries</p>
											</Grid>
											{paginationResult > 1 ?(
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
																return <li onClick={(e) => handlePagination(e,page)} key={index}>{children}</li>;
														})
														}
														</ul>
													</nav>
												</Grid>
												):""
											}
								</Grid>
								):""
								}
							</Container>
						</div>
												
						</div>
				</div>
			</div>
		</>
	);
};

export default PageListPage;