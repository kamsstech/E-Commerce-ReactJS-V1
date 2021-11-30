import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@material-ui/core/IconButton";
import ProductDesc from "./ProductDesc";
import About from "./About";
import Alternatives from "./Alternatives";
import Sellers from "./Sellers";


//images
import Cross from "../../../assets/images/cross.svg";
import searchImg from "../../../assets/images/search.svg";




const ElevationScroll = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};

const ProductPage = (props) => {

  const { 
    GetPdpPageItems,
    match, 
    pdpPageItemsResult,
    GetPdpPageSellerDetails, 
    pdpPageSellerDetailsResult, 
    GetPdpPageAlternatives,
    pdpPageAlternativesResult} = props;
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="mob-search-bar">
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Link to="/landing">
              <IconButton>
                <img src={Cross} alt="Back_arrow" />
              </IconButton>
            </Link>
            <div className="mob-searchlist-header"></div>
            <Link to="/search">
              <IconButton className="search-btn">
                <img src={searchImg} alt="Back_arrow" />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className="mob-product-spacing mob-top-spacing">
         <ProductDesc
          match={match}
          GetPdpPageItems= {GetPdpPageItems}
          pdpPageItemsResult={pdpPageItemsResult}
          />
        <Sellers
        match ={match}
        GetPdpPageSellerDetails={GetPdpPageSellerDetails} 
        pdpPageSellerDetailsResult={pdpPageSellerDetailsResult} />
        <About
        match={match}
         GetPdpPageItems= {GetPdpPageItems}
         pdpPageItemsResult={pdpPageItemsResult} />
       <Alternatives
         match={match}
         GetPdpPageItems={GetPdpPageItems}
         GetPdpPageAlternatives={ GetPdpPageAlternatives}
         pdpPageItemsResult={pdpPageItemsResult}
         pdpPageAlternativesResult={pdpPageAlternativesResult}
        />
      </div>
    </div>
  );
};

export default ProductPage;
