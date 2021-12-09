import React from 'react'
import { Link } from 'react-router-dom';

/**
* @author
* @function CopyRights
**/

const CopyRights = (props) => {
  return(
    <>
      <h5 className="copyright-text">
        Copyright © 2021 KAMSS Tech All rights reserved.
      </h5>
      <h5 className="static-links">
        {/*<Link to="/">Terms & Conditions</Link> | {""}
        <Link to="/">Cookie Policy</Link>*/}
      </h5>
    </>
   )

 }

export default CopyRights;