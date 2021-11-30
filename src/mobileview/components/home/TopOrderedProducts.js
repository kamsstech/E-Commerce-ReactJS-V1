import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

//images
import Shortbook from "../../../assets/mobImages/shortbook-grey/shortbook.png";
import Injectable from "../../../assets/images/injectable.svg";
// import Item1 from "../../../assets/mobImages/item1.png";
// import Item2 from "../../../assets/mobImages/item2.png";
// import Item3 from "../../../assets/mobImages/item3.png";
// import Item4 from "../../../assets/mobImages/item4.png";
// import Item5 from "../../../assets/mobImages/item5.png";
// import Item6 from "../../../assets/mobImages/item6.png";

import DistributorList from "./DistributorList";

import { Event } from "@material-ui/icons";

const TopOrderedProducts = (props) => {
  const { GetFastMovingItems, fastMovingItemsResult } = props;
  useEffect(() => {
    GetFastMovingItems()
  }, [])
  // console.log(" fastMovingItemsResult", fastMovingItemsResult.payload);
  const params = {
    slidesPerView: 2.2,
    spaceBetween: 12,
    freeMode: true
  };

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (
    event,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((Event).key === 'Tab' ||
        (Event).key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <div>
      
    {Array.isArray(fastMovingItemsResult.payload.data?.j_list) && fastMovingItemsResult.payload.data?.j_list.length !== 0 &&
    
    <>
      <div className="home-grey-bg">
        <DistributorList toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
        <div className="mob-home-seller-slider-sec">
          <div className="mob-slider-sec">
            <div>
              <h3 className="mob-slider-title">Top/Most Ordered Products</h3>
              <h5 className="mob-slider-subtitle">In Bangalore</h5>
            </div>
            <div>
              <Link to="/PLP">
                <Fab
                  variant="extended"
                  size="small"
                  color="default"
                  className="mob-viewall-button"
                  aria-label="add"
                >
                  View All
            </Fab>
              </Link>
            </div>
          </div>



          <div className="mob-home-slider">
            <Swiper {...params}>
              {(fastMovingItemsResult.payload.data?.j_list).map((item, index) => (
                <div key={index}>
                  <Link to={`/pdp/${item.c_item_code}`}>
                    <div className="mob-home-slide top-ordered-slider">
                      <div className="center shortbook-sec">
                      {item.ac_thumbnail_images === "" ? (
                              <img src={Injectable} alt="ProductImg" />
                            ) : (

                                <img
                                  src={item.ac_thumbnail_images}
                                  alt={item.c_item_name}
                                  onError={(e) => {
                                     e.target.src = Injectable
                                  }}
                                />
                            )}
                        <img
                          src={Shortbook}
                          alt="Shortbook"
                          className="shortbook-icon"
                        />
                        {/* <img
                          src={item.ac_thumbnail_url[0]}
                          alt="homeSliderImg"
                          className="slider-img"
                        /> */}
                       
                      </div>
                      {/* <h5 className="mob-home-slider-title"> {item.c_item_name.toLocaleLowerCase()}</h5> */}
                      <h5 className="mob-home-slider-title"> {item.c_item_name}</h5>
                      <h6 className="mob-home-slider-subtitle">
                        Pack Size: {item.c_pack_name}
                      </h6>
                      <h6 className="mob-home-slider-mtp">MRP {item.n_max_mrp}</h6>
                      <h6 className="mob-home-slider-contains">
                        <span>Contains</span>
                        <span className="contains-ele"> {item.c_cont_name}</span>
                      </h6>
                      
                    </div>
                  </Link>
                  <Button
                        variant="contained"
                        color="primary"
                        className="fast-moving-addtocart mob-home-addtocart "
                        onClick={toggleDrawer(true)}
                      >
                        Add To Cart
                </Button>
                </div>
              ))}
            </Swiper>




           
          </div>
        </div>
      </div>
    </>
  }
    </div >
  );
};

export default TopOrderedProducts;

