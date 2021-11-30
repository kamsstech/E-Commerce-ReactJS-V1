import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import DeliveryAddress from "./DeliveryAddress"
import CartItems from "./CartItems";
import Coupon from "./Coupon";
import PriceDetails from "./PriceDetails";
import SuggestedProducts from "./SuggestedProducts";

//images
import ProductImg1 from "../../../assets/mobImages/item1.png";
import ProductImg2 from "../../../assets/mobImages/item2.png";
import ProductImg3 from "../../../assets/mobImages/item3.png";
import ProductImg4 from "../../../assets/mobImages/item4.png";
import ProductImg5 from "../../../assets/mobImages/item5.png";
const CartPage = () => {
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
                    total: "465"
                },
                {
                    id: ProductImg2,
                    name: "Refort 200ml Syrup",
                    mrp: "38.00",
                    ptr: "24.50",
                    total: "245"
                },
                {
                    id: ProductImg3,
                    name: "Benadryl Cough Syrup",
                    mrp: "67.00",
                    ptr: "54.50",
                    total: "245"
                }
            ]
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
                    total: "395"
                },
                {
                    id: ProductImg5,
                    name: "Refort 200ml Syrup",
                    mrp: "38.00",
                    ptr: "24.50",
                    total: "245"
                },
            ]
        }
    ]

    return (
        <div>
            <DeliveryAddress />
            {itemDetails.map(item => (
                <CartItems itemDetail={item} />
            ))}

            <Coupon />
            <PriceDetails />
            <SuggestedProducts />
            <div className="mob-cartstepper-height"></div>
            <div className="mob-profile-stepper-sec">
                <div className="mob-cart-total-sec">
                    <div>
                        <h4 className="price-text">₹ 2,121.80</h4>
                        <h4 className="view-text">View Details</h4>
                    </div>
                    <div>
                        <Link to="/payment">
                            <Button variant="outlined" className="mob-changePass-btn m-0">
                                Continue
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;