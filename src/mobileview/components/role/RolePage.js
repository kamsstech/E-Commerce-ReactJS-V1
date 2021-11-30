import * as React from "react";

//images
import Buy from "../../../assets/mobImages/buy/buy.png";
import Sell from "../../../assets/mobImages/sell/sell.png";
import Pob from "../../../assets/mobImages/pob/p.o.b.png";
import RouteOrder from "../../../assets/mobImages/route-order/route-order.png";

// interface Props{
//   page: string;
// }

const RolePage = () => {
  /* TODO 
    Get roles array from localstorage , based on the id map the active and inactive classes ,
    assign onclick method changeRole(id). 
    In this method open register popup for seller/buyer or redirect to Coming Soon page if user is already registered as
    seller (this thing can be seen from roles array inside localStorage),
  */
  // const {page} = props;
  // if(page === "/home"){
  return (
    <div className="role-sec">
      <div className="role-imgs">
        <div>
          <img src={Buy} alt="Buy" />
          <p className="active">Want to Buy</p>
        </div>
        <div>
          <img src={Sell} alt="Sell" />
          <p>Want to Sell</p>
        </div>
        <div>
          <img src={Pob} alt="Pob" />
          <p>P.O.B</p>
        </div>
        <div>
          <img src={RouteOrder} alt="RouteOrder" />
          <p>Route Order</p>
        </div>
      </div>
    </div>
  );
  // } else 
  //   return null
};

export default RolePage;
