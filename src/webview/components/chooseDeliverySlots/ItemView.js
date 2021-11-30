import * as React from "react";

import ProductDetailsCD from "./ProductDetailsCD";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

import CrossImg from "../../../assets/images/cross-grey.svg";



//images
import ProductImg1 from "../../../assets/mobImages/item1.png";
import ProductImg2 from "../../../assets/mobImages/item2.png";
import ProductImg3 from "../../../assets/mobImages/item3.png";
import ProductImg4 from "../../../assets/mobImages/item4.png";
import ProductImg5 from "../../../assets/mobImages/item5.png";


const ItemView = (props) => {
  const {  isOpen, setIsOpen } = props;
  const [error, setError] = React.useState(true);
  const handleClose = () => {
    setIsOpen(false)
  };
  const itemDetails_sample = [
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
    }
  ]
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="orderplaced-popup"
        open={ isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={isOpen}>
          <div
            className="itemView-popup-sec"
          >
            <div className="align-right">
              <h4 className="deliverySlots-details-title">Maheeveer Medi-Sales Pvt.Ltd. (3 Items)</h4>
              <Tooltip title="Close"TransitionComponent={Zoom} >
              <div className="cross-img-div">
              <img src={CrossImg} alt="cross-img" onClick={handleClose} />
              </div>
              </Tooltip>
            </div>
            {itemDetails_sample.map((item,index) => (
              <ProductDetailsCD itemDetail={item} key={index} />
            ))}

          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ItemView;
