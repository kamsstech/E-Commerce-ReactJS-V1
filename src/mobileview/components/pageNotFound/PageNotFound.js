import React from 'react'
// import './css/pageNotFound.css';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import pagenotfound from "../../../assets/images/illustration404.png";

const PageNotFound=()=>{
    return(
        
        <div className="pagePadding">
            <img src={pagenotfound} alt="Back_arrow" />
            <div className="pageFlex">
                <div className="opsText">Oops...</div>
                <div className="pageNotExist">The Page You are looking for doesn't exist!</div>
            </div>
        </div>
    
    )
}

export default PageNotFound