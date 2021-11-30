import * as React from 'react';
import Button from "@material-ui/core/Button";

import PaymentOption from "./PaymentOption";

const PaymentPage = () => {
  const List = [
    {
      id: 0,
      sellerName: "Mahaveer Medi-Sales Pvt. Ltd."
    },
    {
      id: 1,
      sellerName: "Raj-Sons Pharma Pvt. Ltd."
    }
  ]

  return (
    <>
      {List.map(item => (
        <div className="payment-sec-wrapper" key={item.id}>
          <div className="payment-sec">
            <h4 className="payment-sec-seller-name">{item.sellerName}</h4>
            <div className="payment-sec-pricedetails">
              <h3 className="mob-price-detail-title">PRICE DETAILS (3 Items)</h3>
              <div className="mob-price-details-flexsec">
                <h4>Cart Total Amount</h4>
                <h4>₹ 1,255.00</h4>
              </div>
              <div className="mob-price-details-flexsec">
                <h4>Total GST</h4>
                <h4>₹ 150.00</h4>
              </div>
              <div className="mob-price-details-flexsec">
                <h4>Coupon Discount</h4>
                <h4 className="coupon-text">₹ 200.00</h4>
              </div>
              <div className="mob-price-details-flexsec">
                <h4>Delivery  Charges</h4>
                <h4 className="delivery-charge-text">₹ 200.00</h4>
              </div>
              <div className="mob-price-details-flexsec">
                <h3 className="m-0">Total Amount Payable</h3>
                <h3 className="delivery-charge-text m-0">₹ 1,405.00</h3>
              </div>
            </div>
            <PaymentOption sellerName={item.sellerName} />
            <div className="payment-total-sec">
              <div className="mob-cart-total-sec">
                <div>
                  <h4 className="price-text">₹ 1,405.00</h4>
                </div>
                <div>
                  <Button variant="outlined" className="mob-changePass-btn m-0">
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default PaymentPage;