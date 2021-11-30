import * as React from "react";
import Container from "@material-ui/core/Container";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import { getToken } from "../../../common/components/getToken/getToken";
import { useState, useEffect } from "react";


export const NavigationPage = (props) => {
  const {pageTitle, pageLink, match,pageSubTitle,subPath}= props;
  // const itemName= (props.match.params.itemName ?( `/` +  props.match.params.itemName.toLowerCase()) : '');
  const itemName= (props.match.params.itemName ?( `/` +  props.match.params.itemName.toLowerCase()) : '');
  const [showProductDetails,SetshowProductDetails] = useState(false)

  // const pageName = (pageSubTitle) ? `${pageSubTitle}/${pageTitle}` : `${pageTitle}${itemName}`;
  useEffect(() => {
    var token = getToken();
    if(token){
      SetshowProductDetails(true)
    }else{
      SetshowProductDetails(false)
    }
  }, [])

  return (
    <>
    { showProductDetails == true ?
    <div className="navigation-container ">
      <Container fixed  >
        <Breadcrumbs aria-label="breadcrumb" className="navigation-list">
          <Link to="/home">Home</Link>
          {pageSubTitle ? <Link to={`${subPath}`}>{pageSubTitle}</Link>:""}
          <Link to={`/${pageLink}`} className="active-link">
            {pageTitle + itemName }
          </Link>
        </Breadcrumbs>
      </Container>
    </div> : null }
    </>

  );
};

export default NavigationPage;
