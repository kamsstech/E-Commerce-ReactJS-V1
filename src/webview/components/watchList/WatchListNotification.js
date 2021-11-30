import * as React from "react";

// import ProductDetailsCD from "./productDetailsCD";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

import Small_oral_sus from "../../../assets/images/Small_oral_sus.svg";
import Small_injectable from "../../../assets/images/Small_injectable.svg";
import Small_tablet from "../../../assets/images/Small_tablet.svg";
import Small_drops from "../../../assets/images/Small_drops.svg";
import CrossImg from "../../../assets/images/cross-sb.svg";
// import CrossImg from "../../../assets/images/cross-sb.svg";

function GrowTransition(props) {
    console.log("props",props)
    return <Grow {...props} />;
}
const WatchListNotification = (props) => {
    // const [Open, setOpen] = React.useState(false);
    // const handleOpen = () => {
    //   setOpen(true);
    // }
    const { isOpen, setIsOpen } = props;
    //   const [error, setError] = React.useState(true);
    const handleClose = () => {
        setIsOpen(false)
    };
    const handleCross = (Transition) => () => {
        // let newArray = array.filter(el => el.c_item_code !== item_code); 
        // setArray(newArray);
        setIsOpen(false)
    };
    


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="orderplaced-popup"
                open={isOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
            >
                <Fade in={isOpen}>
                    <div
                        className="seller-dropDown-sec DSScroll"
                    >
                        <div className="top-space">
                        <h4 className="notification-title"> Notification (5)</h4>
                        <Tooltip title="Close" TransitionComponent={Zoom}>
                        <div  className="cross-img-div position-cross" onClick={handleCross(GrowTransition)}>
                                            <img src={CrossImg} alt="cross-img"/>
                                        </div>
                                        </Tooltip>
                                        </div>
                        <p className="mark-all-read"> Mark All Read | Clear </p>
                        <p className="today-title"> Today</p>

                        <div className="table-notification">
                            <div className="div-sec display-notification" >
                                <div >
                                    <img src={Small_oral_sus} alt="homeSliderImg-1" className="imgsec" />
                                </div>
                                <div className="p-sec">
                                    <div className="w-paragraph">
                                        <p className="p-sec-reading"> <span className="c-yellow">On Scheme!</span> <span className="f-w">Cremaffin Plus Syrup Reshreshing Sugar Free</span>  is now avaiable at on <span className="c-green"> 10+3 Schme.</span> Hurry-up</p>
                                    </div>

                                    <p className="notification-time"> 2 hours ago </p>
                                </div>
                            </div>


                            <div className="div-sec display-notification" >
                                <div >
                                    <img src={Small_tablet} alt="homeSliderImg-1" className="imgsec" />
                                </div>
                                <div className="p-sec">
                                    <div className="w-paragraph">
                                        <p className="p-sec-reading"> <span className="c-yellow">On Discount!</span> <span className="f-w">Telpres CT 40/12.5 Tablet</span>  is now avaiable at on <span className="c-green"> extra 3% Discount.</span> Hurry-up</p>
                                    </div>

                                    <p className="notification-time"> 2 hours ago </p>
                                </div>
                            </div>


                            
                            <div className="div-sec display-notification" >
                                <div >
                                    <img src={Small_oral_sus} alt="homeSliderImg-1" className="imgsec" />
                                </div>
                                <div className="p-sec">
                                    <div className="w-paragraph">
                                        <p className="p-sec-reading"> <span className="c-red">Price Drop Alert!</span> <span className="f-w">ChildLife Cough Syrup</span>  is now avaiable at<span className="c-green"> ₹ 39</span> Purchase Now</p>
                                    </div>

                                    <p className="notification-time"> 4 hours ago </p>
                                </div>
                            </div>


                            <div className="div-sec display-notification" >
                                <div >
                                    <img src={Small_injectable} alt="homeSliderImg-1" className="imgsec" />
                                </div>
                                <div className="p-sec">
                                    <div className="w-paragraph">
                                        <p className="p-sec-reading"> <span className="c-orange">Back In Stock!</span> <span className="f-w">Calpol 25mg Peadiatric Injection</span>  is back in stock now & available at<span className="c-green"> ₹ 39</span> Purchase Now</p>
                                    </div>

                                    <p className="notification-time"> 4 hours ago </p>
                                </div>
                            </div>  

                            <div className="div-sec display-notification" >
                                <div >
                                    <img src={Small_drops} alt="homeSliderImg-1" className="imgsec" />
                                </div>
                                <div className="p-sec">
                                    <div className="w-paragraph">
                                        <p className="p-sec-reading"> <span className="c-orange">Back In Stock!</span> <span className="f-w">Refresh Tears Eye Drop</span> + 2 items are now available in stock<span className="c-green"> ₹ 39</span> Purchase Now</p>
                                    </div>

                                    <p className="notification-time"> 4 hours ago </p>
                                </div>
                            </div>  
                        </div>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default WatchListNotification;
