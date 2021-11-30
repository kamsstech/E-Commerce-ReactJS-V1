import * as React from "react";
import BuyerRegForm from "./BuyerRegForm";

const BuyerRegPage = () => {
  return (
    <div className="mob-auth-container">
      <h2 className="mob-title">Sign Up</h2>
      <h3 className="mob-auth-title">Welcome To 'Live Order'</h3>
      <h5 className="mob-auth-subtitle">
        India's Fastest B2B Pharma 'Eco System'
      </h5>
      <BuyerRegForm />
    </div>
  );
};

export default BuyerRegPage;
