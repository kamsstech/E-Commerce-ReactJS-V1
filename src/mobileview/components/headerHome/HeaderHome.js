import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Zoom from "@material-ui/core/Zoom";

//Images
// import Logo from "../../../assets/mobImages/logo.svg";
import Logo from "../../../assets/mobImages/logo_1.svg";
import Bell from "../../../assets/mobImages/bell-white/bell.png";
import Wishlist from "../../../assets/mobImages/wishlist-white/wishlist.png";
import Shortbook from "../../../assets/mobImages/shortbook-white/shortbook.png";
import Cart from "../../../assets/mobImages/cart-white/cart.png";
// import Profile from "../../../assets/mobImages/profile.jpg";
import Profile from "../../../assets/images/thumbnail.svg";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Badge from "@material-ui/core/Badge";
import Search from "./Search";
import { RolePageContainer } from "../index";
import Bar from "../HideScroll";
import Tooltip from "@material-ui/core/Tooltip";
const useStylesBranch = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    letterSpacing: ".8px",
    fontFamily: "Quicksand-Medium",
  },
}));

function BranchTooltip(props) {
  const classes = useStylesBranch();

  return <Tooltip arrow classes={classes} {...props} />;
}

const HeaderHome = (props) => {
  const { getBranchListAction, getSearchParameters, branchListResult,CartCount,cartCountRes } = props;

  const [cartCount, setCartCount] = useState(0);
  const [br_code, setBr_Code] = useState("");

  console.log(cartCountRes,"<<< cartCountRes")
 
  useEffect(() => {
    if (cartCountRes.payload != "") {
      let count =
        cartCountRes.payload.data.count > 0
          ? cartCountRes.payload.data.count
          : 0;
      setCartCount(count);
      // localStorage.setItem("notifiCount", count);
    }
  }, [cartCountRes]);
  useEffect(() => {
		let temp = {};
		Object.entries(branchListResult.payload).map((entry,index) => {
			console.log(entry[1].c_default_status, "<<< entry.c_BR_Code")
			if(entry[1].c_default_status === "Y"){
				temp = entry[1];
			}
			
			setBr_Code(temp.c_br_code);
		});

		
	}, [branchListResult]);
  useEffect(() => {
    const body={
      "n_branch_id":br_code
    }
    CartCount(body);
  }, [br_code])
  return (
    <div className="mob-appbar-wrapper">
      <Bar>
        <AppBar position="static" color="primary" className="mob-appbar">
          <Toolbar>
            <div className="grow">
              <img src={Logo} alt="Logo" className="mobLogo" />
            </div>

            {/* <div className="grow" >
          <IconButton className="mob-header-icons" color="inherit">
            <img src={Bell} alt="Bell" />
          </IconButton>
          </div> */}

            {/* <Tooltip title="Watchlist" TransitionComponent={Zoom}> */}
              <Link to="/watchlist">
                <IconButton className="mob-header-icons" color="inherit">
                  {/* <Badge badgeContent={4} color="secondary">
                    <img src={Wishlist} alt="Wishlist" />
                  </Badge> */}
                  <img src={Wishlist} alt="Wishlist" />
                </IconButton>
              </Link>
            {/* </Tooltip> */}
            <Link to="/shortbook">
            <IconButton className="mob-header-icons" color="inherit">
              {/* <Badge badgeContent={5} color="secondary">
                <img src={Shortbook} alt="Shortbook" />
              </Badge> */}
              <img src={Shortbook} alt="Shortbook" />
            </IconButton>
            </Link>

            <Link to="/cart">
              <IconButton className="mob-header-icons" color="inherit">
                <Badge badgeContent={cartCount} color="secondary">
                  <img src={Cart} alt="Cart" />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/profile">
              <img src={Profile} alt="" className="mobhead-profile-img" />
            </Link>
          </Toolbar>

          <Search GetSearchParameters={getSearchParameters}/>
          {/* <RolePageContainer /> */}
        </AppBar>
      </Bar>
      {/* <RolePageContainer/> */}
    </div>
  );
};

export default HeaderHome;
