import * as React from "react";

const PriceDetails = () => {
  return (
    <div className="mob-cart-items-wrapper">
      <div className="mob-price-details-sec">
        <h3 className="mob-price-detail-title">ESTIMATED PRICE DETAILS (5 Items)</h3>
        <div className="mob-price-details-flexsec">
          <h4>Cart Total Amount</h4>
          <h4>Rs. 2,121.80</h4>
        </div>
        <div className="mob-price-details-flexsec">
          <h4>Total GST</h4>
          <h4>Rs. 226.80</h4>
        </div>
        <div className="mob-price-details-flexsec">
          <h4>Coupon Discount</h4>
          <h4 className="coupon-text">Rs. 200.00</h4>
        </div>
        <div className="mob-price-details-flexsec">
          <h4>Delivery  Charges</h4>
          <h4 className="delivery-charge-text">Rs. 200.00</h4>
        </div>
        <div className="delivery-price-line"></div>
        <div className="mob-price-details-flexsec">
          <h3>Total</h3>
          <h3 className="delivery-charge-text">Rs.2,148.60</h3>
        </div>
      </div>
    </div>
  );
}

export default PriceDetails;