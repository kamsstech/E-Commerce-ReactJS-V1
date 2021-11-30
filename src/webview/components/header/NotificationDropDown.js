import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import "./css/Notification.css";
import tabletIcon from "../../../assets/images/tablet.svg";

const NotificationDropDown = (props) => {
    const { openModal, closeModal} = props;
    const handleClose = () => {
        closeModal(false)
    };
    return (
    <>
        <div>
            <Modal
                 aria-labelledby="transition-modal-title"
                 aria-describedby="transition-modal-description"
                 className="orderplaced-popup"
                 open={openModal}
                 onClose={handleClose}
                 closeAfterTransition
                 BackdropComponent={Backdrop}
                 BackdropProps={{ timeout: 500 }}>
                <Fade in={openModal}>
                    <div className="notifi-dropDown-sec">
                        <div className="notifi-title-sec">
                           <h4 className="notifi-title"> Notification (0)</h4>
                           {/* <Button color="primary">Mark All Read</Button>
                           <Button className="divider" disabled color="primary"></Button>
                           <Button color="primary">Clear</Button> */}
                        </div>
                        {/* <div className="notifi-container">
                            <h5 className="mr-z pd-b-24">Today</h5>
                            <div className="notifi-view-sec">
                                <div class="box-view-title">
                                    <div class="notifi-view-title-imgsec">
                                        <img src={tabletIcon} alt class="imgsec"/>
                                    </div>
                                    <div class="box-view-title-details">
                                        <h4 className="mr-z mr-b-12"> 
                                            <span className="onScheme">On Scheme ! </span>  
                                            <span className="onProductName"> Cremaffin Plus Syrup Refreshing Sugar </span>
                                            <span className="onProductContent"> Free is now available at on</span>
                                            <span className="schemeDiscount"> 10+3 Scheme.</span> 
                                            <span className="onProductContent"> Hurry-up.</span>
                                        </h4>
                                        <p className="mr-b-16">2 hours ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="notifi-view-sec">
                                <div class="box-view-title">
                                    <div class="notifi-view-title-imgsec">
                                        <img src={tabletIcon} alt class="imgsec"/>
                                    </div>
                                    <div class="box-view-title-details">
                                        <h4 className="mr-z mr-b-12"> 
                                            <span className="onScheme">On Discount ! </span>  
                                            <span className="onProductName"> Telpres CT 40/12.5 Tablet </span>
                                            <span className="onProductContent"> is now available on</span>
                                            <span className="schemeDiscount"> extra 3% Discount.</span> 
                                            <span className="onProductContent"> Hurry-up.</span>
                                        </h4>
                                        <p className="mr-b-16">2 hours ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="notifi-view-sec">
                                <div class="box-view-title">
                                    <div class="notifi-view-title-imgsec">
                                        <img src={tabletIcon} alt class="imgsec"/>
                                    </div>
                                    <div class="box-view-title-details">
                                        <h4 className="mr-z mr-b-12"> 
                                            <span className="onPriceDropAlert">Price Drop Alert ! </span>  
                                            <span className="onProductName"> Telpres CT 40/12.5 Tablet </span>
                                            <span className="onProductContent"> is now available on</span>
                                            <span className="schemeDiscount"> extra 3% Discount.</span> 
                                            <span className="onProductContent"> Hurry-up.</span>
                                        </h4>
                                        <p className="mr-b-16">2 hours ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="notifi-view-sec">
                                <div class="box-view-title">
                                    <div class="notifi-view-title-imgsec">
                                        <img src={tabletIcon} alt class="imgsec"/>
                                    </div>
                                    <div class="box-view-title-details">
                                        <h4 className="mr-z mr-b-12"> 
                                            <span className="onStock">Back In Stock ! </span>  
                                            <span className="onProductName"> Refresh Tears Eye Drop </span>
                                            <span className="onProductContent"> + 2 items are now available in stock. Check Now</span>
                                        </h4>
                                        <p className="mr-b-16">2 hours ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="notifi-view-sec">
                                <div class="box-view-title">
                                    <div class="notifi-view-title-imgsec">
                                        <img src={tabletIcon} alt class="imgsec"/>
                                    </div>
                                    <div class="box-view-title-details">
                                        <h4 className="mr-z mr-b-12"> 
                                            <span className="onStock">Back In Stock ! </span>  
                                            <span className="onProductName"> Refresh Tears Eye Drop</span>
                                            <span className="onProductContent">  + 2 items are now available in stock. Check Now</span>
                                        </h4>
                                        <p className="mr-b-16">2 hours ago</p>
                                    </div>
                                </div>
                            </div>

                            <h5 className="mr-z pd-b-24">Yesterday</h5>
                            <div className="notifi-view-sec">
                                <div class="box-view-title">
                                    <div class="notifi-view-title-imgsec">
                                        <img src={tabletIcon} alt class="imgsec"/>
                                    </div>
                                    <div class="box-view-title-details">
                                        <h4 className="mr-z mr-b-12"> 
                                            <span className="onScheme">On Scheme ! </span>  
                                            <span className="onProductName"> Cremaffin Plus Syrup Refreshing Sugar </span>
                                            <span className="onProductContent"> Free is now available at on</span>
                                            <span className="schemeDiscount"> 10+3 Scheme.</span> 
                                            <span className="onProductContent"> Hurry-up.</span>
                                        </h4>
                                        <p className="mr-b-16">2 hours ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="notifi-view-sec">
                                <div class="box-view-title">
                                    <div class="notifi-view-title-imgsec">
                                        <img src={tabletIcon} alt class="imgsec"/>
                                    </div>
                                    <div class="box-view-title-details">
                                        <h4 className="mr-z mr-b-12"> 
                                            <span className="onScheme">On Discount ! </span>  
                                            <span className="onProductName"> Telpres CT 40/12.5 Tablet </span>
                                            <span className="onProductContent"> is now available on</span>
                                            <span className="schemeDiscount"> extra 3% Discount.</span> 
                                            <span className="onProductContent"> Hurry-up.</span>
                                        </h4>
                                        <p className="mr-b-16">2 hours ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="notifi-view-sec">
                                <div class="box-view-title">
                                    <div class="notifi-view-title-imgsec">
                                        <img src={tabletIcon} alt class="imgsec"/>
                                    </div>
                                    <div class="box-view-title-details">
                                        <h4 className="mr-z mr-b-12"> 
                                            <span className="onPriceDropAlert">Price Drop Alert ! </span>  
                                            <span className="onProductName"> Telpres CT 40/12.5 Tablet </span>
                                            <span className="onProductContent"> is now available on</span>
                                            <span className="schemeDiscount"> extra 3% Discount.</span> 
                                            <span className="onProductContent"> Hurry-up.</span>
                                        </h4>
                                        <p className="mr-b-16">2 hours ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="notifi-view-sec">
                                <div class="box-view-title">
                                    <div class="notifi-view-title-imgsec">
                                        <img src={tabletIcon} alt class="imgsec"/>
                                    </div>
                                    <div class="box-view-title-details">
                                        <h4 className="mr-z mr-b-12"> 
                                            <span className="onStock">Back In Stock ! </span>  
                                            <span className="onProductName"> Refresh Tears Eye Drop </span>
                                            <span className="onProductContent"> + 2 items are now available in stock. Check Now</span>
                                        </h4>
                                        <p className="mr-b-16">2 hours ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="notifi-view-sec">
                                <div class="box-view-title">
                                    <div class="notifi-view-title-imgsec">
                                        <img src={tabletIcon} alt class="imgsec"/>
                                    </div>
                                    <div class="box-view-title-details">
                                        <h4 className="mr-z mr-b-12"> 
                                            <span className="onStock">Back In Stock ! </span>  
                                            <span className="onProductName"> Refresh Tears Eye Drop</span>
                                            <span className="onProductContent">  + 2 items are now available in stock. Check Now</span>
                                        </h4>
                                        <p className="mr-b-16">2 hours ago</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                   </div>
                </Fade>
            </Modal>
        </div>
    </>
  );
};

export default NotificationDropDown;

