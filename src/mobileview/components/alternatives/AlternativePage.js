import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@material-ui/core/IconButton";
import AlternativeItem from "./AlternativeItem";


//images
import Cross from "../../../assets/images/cross.svg";
import searchImg from "../../../assets/images/search.svg";
import FilterImg from "../../../assets/images/filter.svg";

import FilterDrawer from "./FilterDrawer";

// interface Props {
//   window?: () => Window;
//   children: React.ReactElement;
//   match: any;
//   getProdDetails(productCode: number): void;
//   productDetails: ProductEntity;

//   GetPdpPageAlternatives(c_cont_code: string, limitNumber: number): void;
//   pdpPageAlternativesResult: AlternativesEntity;
// }

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

const AlternativesPage = (props) => {
  const { productDetails,
    GetPdpPageAlternatives,
    pdpPageAlternativesResult,
    match } = props;

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event,) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event).key === 'Tab' ||
        (event).key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  const limitNumber=10;
  useEffect(() => {
    GetPdpPageAlternatives(match.params.contCode, limitNumber);
  }, []);
  console.log(" pdpPageAlternativesResult", pdpPageAlternativesResult.payload)
  const loading = pdpPageAlternativesResult.loading;
  const payload = pdpPageAlternativesResult.payload;

 
  return (
    <div className="mob-search-bar">
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Link to={`/pdp/${props.match.params.contCode}`}>
              <IconButton>
                <img src={Cross} alt="Back_arrow" />
              </IconButton>
            </Link>
            <div className="mob-searchlist-header">
              <h4>Alternates For {match.params.itemName.toLowerCase()} </h4>
              <h4 className="alternate-item-count">327 Items</h4>
            </div>
            <IconButton className="search-btn" onClick={toggleDrawer(true)}>
              <img src={FilterImg} alt="Back_arrow"  />
            </IconButton>
            <Link to="/search">
              <IconButton className="search-btn">
                <img src={searchImg} alt="Back_arrow" />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <FilterDrawer toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
      <div className="mob-product-spacing mob-top-spacing">
        {(!loading)
          ?  (payload).map((alternate) => (
              <AlternativeItem
                loading={false}
                alternate={alternate}
                key={alternate.c_item_code}
              />
            ))
              : null}


      </div>
    </div>
  );
};

export default AlternativesPage;

