import * as React from "react";

//images
import menImg from "../../../assets/images/men.svg";
import medicineImg from "../../../assets/images/medicine.svg";
import transactionImg from "../../../assets/images/transaction.svg";
import PharmaSystem from "../../../assets/images/pharma-system.svg";

const KeyHighlights = () => {
  return (
    <div className="key-highlights">
      <div>
        <h3 className="mob-slider-title">Key Highlights</h3>
        <h5 className="mob-slider-subtitle">All over India</h5>
      </div>
      <div className="mob-highlights-sec">
        <div className="mob-highlights">
          <img src={menImg} alt="menImg" />
          <p>10K + Trusted Customers</p>
        </div>
        <div className="mob-highlights">
          <img src={medicineImg} alt="menImg" />
          <p>4 Lac + Products</p>
        </div>
        <div className="mob-highlights">
          <img src={transactionImg} alt="menImg" />
          <p>22 Cr + Transactions </p>
        </div>
        <div className="mob-highlights">
          <img src={PharmaSystem} alt="PharmaSystem" />
          <p>India's B2B 'Pharma System'</p>
        </div>
      </div>
    </div>
  );
};

export default KeyHighlights;
