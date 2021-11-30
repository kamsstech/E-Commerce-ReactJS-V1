import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

//images
import CategoryIcon from "../../../assets/mobImages/category-blue/category.png"
import DashboardIcon from "../../../assets/mobImages/dashboard-blue/dashboard.png"
import LiveorderGoldIcon from "../../../assets/mobImages/liveorder-gold-blue/liveorder-gold.png"
import OffersIcon from "../../../assets/mobImages/offers-blue/offers.png"
import PatientIcon from "../../../assets/mobImages/patient-blue/patient.png"

const MenuPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className="mob-menu-sec pt-0"
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <img src={CategoryIcon} alt="CategoryIcon" />
        </ListItemIcon>
        <ListItemText primary="Categories" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className="sub-menu-sec">
          <ListItem button>
            <ListItemText primary="Generic Medicines" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Ayurvedic Medicines" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="FMCG" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="OTC" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="All Products" />
          </ListItem>
        </List>
      </Collapse>
      <div className="menu-divider-line"></div>
      <ListItem button>
        <ListItemIcon>
          <img src={DashboardIcon} alt="DashboardIcon" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <div className="menu-divider-line"></div>
      <ListItem button>
        <ListItemIcon>
          <img src={LiveorderGoldIcon} alt="LiveorderGoldIcon" />
        </ListItemIcon>
        <ListItemText primary="Live Order Gold" />
      </ListItem>
      <div className="menu-divider-line"></div>
      <ListItem button>
        <ListItemIcon>
          <img src={OffersIcon} alt="OffersIcon" />
        </ListItemIcon>
        <ListItemText primary="Offers & Promotions" />
      </ListItem>
      <div className="menu-divider-line"></div>
      <ListItem button>
        <ListItemIcon>
          <img src={PatientIcon} alt="PatientIcon" />
        </ListItemIcon>
        <ListItemText primary="Patient" />
      </ListItem>
      <div className="menu-divider-line"></div>
    </List>
  );
}

export default MenuPage;