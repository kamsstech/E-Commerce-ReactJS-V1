import React from 'react'
import { Link } from 'react-router-dom';
import AutoPublish from './AutoPublish';
import { TouchStoreSideBar } from './TouchStoreSideBar';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

/**
* @author
* @function CopyRights
**/

const AutoPublishPage = (props) => {
    const {page} =props
  return(
    <>

<div className="body-spacing">
      <Container fixed>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <TouchStoreSideBar
            page="auto-publish"
            />
          </Grid>
          <Grid item xs={9}>
            <div className="myprofile-box">
            <AutoPublish />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>



      
    </>
   )

 }

export default AutoPublishPage;