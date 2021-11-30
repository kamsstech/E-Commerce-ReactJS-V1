import React from "react";

import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

//Images
import Home from "../../../assets/mobImages/home-grey/home.png";
import HomeActive from "../../../assets/mobImages/home-purple/home.png";
import Order from "../../../assets/mobImages/order-grey/order.png";
import OrderActive from "../../../assets/mobImages/order-purple/order.png";
import SmartCart from "../../../assets/mobImages/smart-cart-grey/smart-cart.png";
import SmartCartActive from "../../../assets/mobImages/smart-cart-purple/smart-cart.png";
import Menu from "../../../assets/mobImages/menu-grey/menu.png";
import MenuActive from "../../../assets/mobImages/menu-purple/menu.png";
import { Badge } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});


const FooterPage = (props) => {
  let history = useHistory();
  const { currentPage } = props;

  const classes = useStyles();
  const [value, setValue] = React.useState(currentPage);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(`/${newValue}`);
  };

  return (
    <div>
      <div className="mob-footer-sec-bottomheight"></div>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className="mob-footer-sec"
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={
            value === "home" ? (
              <img src={HomeActive} alt="HomeActive" />
            ) : (
                <img src={Home} alt="Home" />
              )
          }
        />
        <BottomNavigationAction
          label="Smart Cart"
          value="smart-cart"
          icon={
            value === "smart-cart" ? (
              <img src={SmartCartActive} alt="SmartCartActive" />
            ) : (
                <img src={SmartCart} alt="SmartCart" />
              )
          }
        />
        <BottomNavigationAction
          label="Orders"
          value="orders"
          icon={
            value === "orders" ? (
              <img src={OrderActive} alt="OrderActive" />
            ) : (
              <Badge badgeContent={5} color="secondary">
                 <img src={Order} alt="Order" />
              </Badge>
               
              )
          }
        />
        <BottomNavigationAction
          label="Menu"
          value="menu"
          icon={
            value === "menu" ? (
              <img src={MenuActive} alt="MenuActive" />
            ) : (
                <img src={Menu} alt="Menu" />
              )
          }
        />
      </BottomNavigation>
    </div>
  );
};

export default FooterPage;
