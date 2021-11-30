import * as React from "react";

const EstimatedDetailsCD = () => {
  return (
    <div className="mob-price-details-sec pl-0 pr-0">
        <h3 className="mob-price-detail-title">ESTIMATED PRICE DETAILS (5 Items)</h3>
        <div className="mob-price-details-flexsec">
            <h4>Cart Total Amount</h4>
            <h4>₹ 2,510.00</h4>
        </div>
        <div className="mob-price-details-flexsec">
            <h4>Total GST</h4>
            <h4>₹ 300.00</h4>
        </div>
        <div className="mob-price-details-flexsec">
            <h4>Coupon Discount</h4>
            <h4 className="coupon-text">₹ 400.00</h4>
        </div>
        <div className="mob-price-details-flexsec">
            <h4>Delivery  Charges</h4>
            <h4 className="delivery-charge-text">₹ 100.00</h4>
        </div>
        <div className="web-delivery-text">To get Free Delivery Add <span>₹ 1000.00</span> In Mahaveer & <span>₹ 500.00 </span>  In Raj-Sons</div>
        <div className="delivery-price-line"></div>
        <div className="mob-price-details-flexsec">
            <h3 className="font-19">Total</h3>
            <h3 className="delivery-charge-text font-19">₹ 2,510.00</h3>
        </div>
    </div>
  );
}

export default EstimatedDetailsCD;