import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";

import DelivDeliverToCD from "./DeliverToCD";
import OrderingBranch from "../cart/OrderingBranch";
import DeliveryDetails from "./DeliveryDetails";
import PriceDetailsCD from "./PriceDetailsCD";
import SuggestedProduct from "../cart/SuggestedProduct";
import ItemView from "./ItemView";

//images
import ProductImg1 from "../../../assets/mobImages/item1.png";
import ProductImg2 from "../../../assets/mobImages/item2.png";
import ProductImg3 from "../../../assets/mobImages/item3.png";
import ProductImg4 from "../../../assets/mobImages/item4.png";
import ProductImg5 from "../../../assets/mobImages/item5.png";
import DeliverTo from "../cart/DeliverTo";

const ChooseDeliverySlotsPage = () => {
  const itemDetails = [
    {
      sellerName: "Maheerveer Medi-Sales Pvt. Ltd.",
      total: "1,255.00",
      gst: "150.00",
      totalAmount: "1405.00",
      items: [
        {
          id: ProductImg1,
          name: "Bronko Med Syrup 100 ml",
          mrp: "68.00",
          ptr: "46.50",
          total: "465",
        },
        {
          id: ProductImg2,
          name: "Refort 200ml Syrup",
          mrp: "38.00",
          ptr: "24.50",
          total: "245",
        },
        {
          id: ProductImg3,
          name: "Benadryl Cough Syrup",
          mrp: "67.00",
          ptr: "54.50",
          total: "245",
        },
      ],
    },
    {
      sellerName: "Raj-Sons Pharma Pvt. Ltd.",
      total: "640.00",
      gst: "76.80",
      totalAmount: "716.80",
      items: [
        {
          id: ProductImg4,
          name: "ChildLife Cough Syrup",
          mrp: "58.00",
          ptr: "39.50",
          total: "395",
        },
        {
          id: ProductImg5,
          name: "Refort 200ml Syrup",
          mrp: "38.00",
          ptr: "24.50",
          total: "245",
        },
      ],
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* <DelivDeliverToCD /> */}
      <DeliverTo />
      <div className="bggrey">
        <Container fixed>
          <div className="cart-products  relative">
            <div className="cart-product-details">
              <div className="mr-16">
                <OrderingBranch />

                {itemDetails.map((item, index) => (
                  <DeliveryDetails itemDetail={item} key={index} />
                ))}
              </div>
            </div>
            <div className="cart-price-details">
              <PriceDetailsCD />
            </div>
          </div>
        </Container>
      </div>

      <SuggestedProduct />
    </div>
  );
};

export default ChooseDeliverySlotsPage;
