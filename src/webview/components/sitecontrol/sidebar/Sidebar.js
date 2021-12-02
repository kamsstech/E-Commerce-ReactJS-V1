import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import BackArrow from "../../../../assets/images/down-arrow-line-grey.svg";
import downArrow from "../../../../assets/images/Chevron_Right_1_.svg";

// Sidebar Icons
import BurstModeIcon from '@material-ui/icons/BurstMode';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import CategoryIcon from '@material-ui/icons/Category';
import QueueIcon from '@material-ui/icons/Queue';
import TableChartIcon from '@material-ui/icons/TableChart';
import PeopleIcon from '@material-ui/icons/People';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import LockIcon from '@material-ui/icons/Lock';
const Sidebar = (props) => {
	const { page} = props;
	// console.log(page)
    const [openHandleMenu, setHandleMenu] = useState(page ? page : 1);
    const handleMenu = (e) => {
		setHandleMenu(e)
	};
    return (
        <div className="mr-16-filter">

            <List
                component="nav">

                <div className="filter-side-tab">
                    <ListItem onClick={() => handleMenu(1)} className="filter-list-item-padding">
                    	<BurstModeIcon/>
                        <ListItemText primary="Banner" className="filter-side-tab-item" />
                        {openHandleMenu==1 ? <img src={downArrow} alt="fliter-mfac" className="downarrow-icon" /> :  <img src={BackArrow} alt="fliter-mfac" className="backarrow-icon" />}
                    </ListItem>
                    <Collapse in={openHandleMenu==1 || (page==='banner'||page==='add-banner')?true:false} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem>
                    			<Link to="/site-control/add-banner" >
                            		Add Banner
                        		</Link>
                            </ListItem>
                            <ListItem>
                    			<Link to="/site-control/banner" >
                            		Manage Banner
                        		</Link>
                            </ListItem>
                        </List>
                    </Collapse>
                </div>

                <div className="filter-side-tab">
                    <ListItem onClick={() => handleMenu(2)} className="filter-list-item-padding" >
                    	<ViewCarouselIcon/>
                        <ListItemText primary="Brands" className="filter-side-tab-item" />
                        {openHandleMenu==2 ? <img src={downArrow} alt="fliter-mfac" className="downarrow-icon" />: <img src={BackArrow} alt="fliter-mfac" className="backarrow-icon" />}
                    </ListItem>
                    <Collapse in={openHandleMenu==2 || (page==='brand'||page==='add-brand')?true:false} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem>
                    			<Link to="/site-control/add-brand" >
                            		Add Brand
                        		</Link>
                            </ListItem>
                            <ListItem>
                    			<Link to="/site-control/brand" >
                            		Manage Brand
                        		</Link>
                            </ListItem>
                        </List>
                    </Collapse>
                </div>

                <div className="filter-side-tab">
                    <ListItem onClick={() => handleMenu(3)} className="filter-list-item-padding" >
                        <CategoryIcon/>
                        <ListItemText primary="Category" className="filter-side-tab-item" />
                        	{openHandleMenu==3 ? <img src={downArrow} alt="fliter-mfac" className="downarrow-icon" /> : <img src={BackArrow} alt="fliter-mfac" className="backarrow-icon" />}
                    </ListItem>
                    <Collapse in={openHandleMenu==3 || (page==='category'||page==='add-category') ?true:false} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem>
                    			<Link to="/site-control/add-category" >
                            		Add Category
                        		</Link>
                            </ListItem>
                            <ListItem>
                    			<Link to="/site-control/category" >
                            		Manage Category
                        		</Link>
                            </ListItem>
                        </List>
                    </Collapse>
                </div>

                <div className="filter-side-tab">
                    <ListItem onClick={() => handleMenu(4)} className="filter-list-item-padding" >
                    	<QueueIcon/>
                        <ListItemText primary="Variations" className="filter-side-tab-item" />
                        {openHandleMenu==4 ? <img src={downArrow} alt="fliter-mfac" className="downarrow-icon" /> : <img src={BackArrow} alt="fliter-mfac" className="backarrow-icon" />}
                    </ListItem>
                    <Collapse in={openHandleMenu==4 || (page==='variation'||page==='add-variation')?true:false} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem>
                    			<Link to="/site-control/add-variation" >
                            		Add Variation
                        		</Link>
                            </ListItem>
                            <ListItem>
                    			<Link to="/site-control/variation" >
                            		Manage Variation
                        		</Link>
                            </ListItem>
                        </List>
                    </Collapse>
                </div>

                <div className="filter-side-tab">
                    <ListItem onClick={() => handleMenu(5)} className="filter-list-item-padding" >
                    	<TableChartIcon/>
                        <ListItemText primary="Items" className="filter-side-tab-item" />
                        {openHandleMenu==5 ? <img src={downArrow} alt="fliter-mfac" className="downarrow-icon" /> : <img src={BackArrow} alt="fliter-mfac" className="backarrow-icon" />}
                    </ListItem>
                    <Collapse in={openHandleMenu==5 || (page==='add-item'||page==='items')?true:false} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem>
                    			<Link to="/site-control/add-item" >
                            		Add Item
                        		</Link>
                            </ListItem>
                            <ListItem>
                    			<Link to="/site-control/items" >
                            		Manage Items
                        		</Link>
                            </ListItem>
                        </List>
                    </Collapse>
                </div>

                <div className="filter-side-tab">
                    <ListItem onClick={() => handleMenu(6)} className="filter-list-item-padding" >
                    	<PeopleIcon/>
                        <ListItemText primary="Customers" className="filter-side-tab-item" />
                        {openHandleMenu==6 ? <img src={downArrow} alt="fliter-mfac" className="downarrow-icon" /> : <img src={BackArrow} alt="fliter-mfac" className="backarrow-icon" />}
                    </ListItem>
                    <Collapse in={openHandleMenu==6 || (page==='items')?true:false} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem>
                    			<Link to="/site-control/items" >
                            		Manage Customers
                        		</Link>
                            </ListItem>
                        </List>
                    </Collapse>
                </div>

                <div className="filter-side-tab">
                    <ListItem onClick={() => handleMenu(7)} className="filter-list-item-padding" >
                    	<AddShoppingCartIcon/>
                        <ListItemText primary="Manage Orders" className="filter-side-tab-item" />
                        {openHandleMenu==7 ? <img src={downArrow} alt="fliter-mfac" className="downarrow-icon" /> : <img src={BackArrow} alt="fliter-mfac" className="backarrow-icon" />}
                    </ListItem>
                    <Collapse in={openHandleMenu==7 || (page==='new-orders'||page==='failure-orders'||page==='cancel-orders'||page==='delivered-orders')?true:false} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem>
                    			<Link to="/site-control/new-orders" >
                            		New Orders
                        		</Link>
                            </ListItem>
                            <ListItem>
                    			<Link to="/site-control/failure-orders" >
                            		Failure Orders
                        		</Link>
                            </ListItem>
                            <ListItem>
                    			<Link to="/site-control/cancel-orders" >
                            		Cancel Orders
                        		</Link>
                            </ListItem>
                            <ListItem>
                    			<Link to="/site-control/delivered-orders" >
                            		Delivered Orders
                        		</Link>
                            </ListItem>

                        </List>
                    </Collapse>
                </div>

                <div className="filter-side-tab">
                    <ListItem onClick={() => handleMenu(8)} className="filter-list-item-padding" >
                    	<SettingsIcon/>
                        <ListItemText primary="Page Setting" className="filter-side-tab-item" />
                        {openHandleMenu==8 ? <img src={downArrow} alt="fliter-mfac" className="downarrow-icon" /> : <img src={BackArrow} alt="fliter-mfac" className="backarrow-icon" />}
                    </ListItem>
                    <Collapse in={openHandleMenu==8 || (page==='add-page'||page==='page')?true:false} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem>
                    			<Link to="/site-control/add-page">
                            		Add Page
                        		</Link>
                            </ListItem>
                            <ListItem>
                    			<Link to="/site-control/page">
                            		Manage Page
                        		</Link>
                            </ListItem>
                        </List>
                    </Collapse>
                </div>

                <div className="filter-side-tab">
                    <ListItem onClick={() => handleMenu(9)} className="filter-list-item-padding" >
                    	<LockIcon/>
                        <ListItemText primary="Manage Password" className="filter-side-tab-item" />
                        {openHandleMenu==9 ? <img src={downArrow} alt="fliter-mfac" className="downarrow-icon" /> : <img src={BackArrow} alt="fliter-mfac" className="backarrow-icon" />}
                    </ListItem>
                    <Collapse in={openHandleMenu==9 || (page==='change-password')?true:false} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem>
                    			<Link to="/site-control/change-password" >
                            		Change Password
                        		</Link>
                            </ListItem>
                        </List>
                    </Collapse>
                </div>

            </List>

        </div>
    )
}

export default Sidebar;
