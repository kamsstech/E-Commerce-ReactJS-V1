import * as React from "react";
import { useEffect, useState } from "react";

import Container from "@material-ui/core/Container";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import SearchIcon from "../../../assets/images/search-icon.svg";

import ShortItem from "./ShortItem";

import { Constants } from "../../../common/constant/localstorage";
import chooseFilter from "../../../assets/images/icons/filter-choose.svg";
import chooseFilterSelected from "../../../assets/images/icons/right-sign.svg";

const useStyles = makeStyles((theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    dropdownStyle: {
      borderRadius: "6px",
      backgroundColor: "#fff",
      width: "11.9em",
      marginTop: "3em",
    },
  })
);


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

const ShortbookPage = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const filterOpen = Boolean(anchorEl);

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const {
    GetShortbookItems,
    getBranchListAction,
    branchListResult,
    shortbookItemsResult,
    AddWatchlistItems,
    addWatchlistResult,
    RemoveWatchlistItems,
    removeWatchlistResult,
    RemoveShortbookItems,
    removeShortbookResult,
    watchlistCountRes,
    shortbookCountRes,
    GetPdpPageItems,
    GetPdpPageSellerDetails,
    pdpPageItemsResult,
    pdpPageSellerDetailsResult,
    AddToCartAction,
    addToCartResult,
    CartCount
  } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // let totalList=0;
  const [totalList, setTotalList] = useState(0);
  const [totalLimit, setLimitTotal] = useState(10);
  const [br_code, setBr_Code] = useState("");
  let pageNumber = 0;
  useEffect(() => {
    // const body = {
    //   n_page: pageNumber,
    //   n_limit: total,
    // };
    // GetShortbookItems(body);
    getBranchListAction();
  }, []);

  // useEffect(() => {
  //   let temp = {};
  //   Object.entries(branchListResult.payload).map((entry) => {
  //     temp = entry[1];
  //   });
  //   setBr_Code(temp.n_branch_id);
  // }, [branchListResult]);

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

  // useEffect(() => {
  //   if (shortbookItemsResult.payload != "") {
  //     setTotalList(shortbookItemsResult.payload.n_total);
  //   }
  // }, [shortbookItemsResult]);

  return (
    <>
      <div className="navigation-container ">
        <Container fixed>
          <Breadcrumbs aria-label="breadcrumb" className="navigation-list">
            <Link to="/home">Home</Link>
            <Link className="active-link">Shortbook</Link>
          </Breadcrumbs>
        </Container>
      </div>

      <div className="body-spacing">
        <Container fixed>
          <div className="freq-top-sec">
            <div className="top-heading">
              <div className="heading">
                <div className="heading-sub">
                  <h3 className="heading-title m-r-0"> All Products </h3>
                  <p className="products-count-sec">
                    {" "}
                    (Showing {pageNumber} - {totalLimit} of {totalList}{" "}
                    products)
                  </p>
                </div>
                <div className="heading-subdes">
                  <p class="seller-offer-desc">
                    Showing Sellers Result as per <span>Seller-Wise’</span>
                  </p>
                </div>
              </div>
              <div className="rightside_topHeading">
                {/* <div className="view-icon-sec" onClick={handleViewToggle}> */}
                <TextField
                  name="c_email"
                  disabled={false}
                  // onChange={e => handleInputChange(e)}
                  // error={errors.c_email}
                  // onBlur={e => handleBlur(e)}
                  // helperText={errors.c_email && "Not a valid E-mail"}
                  margin="normal"
                  variant="outlined"
                  placeholder="Search Shortbook Products"
                  className="auth-input search-product watchlist-search"
                  autoComplete="new-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={SearchIcon} alt="search-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                {/* </div> */}
                <div className="filter">
                  <Button
                    className="filter-choose"
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    onClick={handleFilterClick}
                  >
                    <img src={chooseFilter} alt="FilterChoose" />
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
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "left", horizontal: "right" }}
                  >
                    <MenuItem className="active" onClick={handleFilterClose}>
                      Seller Priority
                      <img src={chooseFilterSelected} alt="" />
                    </MenuItem>
                    <MenuItem onClick={handleFilterClose}>Offer-Wise</MenuItem>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Grid item xs={12} className="watchItems">
            <ShortItem
              GetPdpPageItems={GetPdpPageItems}
              GetPdpPageSellerDetails={GetPdpPageSellerDetails}
              GetShortbookItems={GetShortbookItems}
              shortbookItemsResult={shortbookItemsResult}
              AddWatchlistItems={AddWatchlistItems}
              addWatchlistResult={addWatchlistResult}
              RemoveWatchlistItems={RemoveWatchlistItems}
              removeWatchlistResult={removeWatchlistResult}
              RemoveShortbookItems={RemoveShortbookItems}
              removeShortbookResult={removeShortbookResult}
              watchlistCountRes={watchlistCountRes}
              shortbookCountRes={shortbookCountRes}
              br_code={br_code}
              pdpPageItemsResult={pdpPageItemsResult}
              pdpPageSellerDetailsResult={pdpPageSellerDetailsResult}
              AddToCartAction={AddToCartAction}
              addToCartResult={addToCartResult}
              totalList={totalList}
              setTotalList={setTotalList}
              totalLimit={totalLimit}
              setLimitTotal={setLimitTotal}
              CartCount={CartCount}
            />
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ShortbookPage;
