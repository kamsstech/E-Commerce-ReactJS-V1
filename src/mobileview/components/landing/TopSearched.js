import * as React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import Swiper from "react-id-swiper";
import Skeleton from "@material-ui/lab/Skeleton";
import Image from "../../../common/components/image";

//images
import Item1 from "../../../assets/mobImages/item1.png";
import Item2 from "../../../assets/mobImages/item2.png";
import Item3 from "../../../assets/mobImages/item3.png";
import Item4 from "../../../assets/mobImages/item4.png";
import Item5 from "../../../assets/mobImages/item5.png";
import Item6 from "../../../assets/mobImages/item6.png";

interface Props {
  loading: boolean;
}

const TopSearchedMadicines = (props: Props) => {
  const { loading } = props;
  const params = {
    slidesPerView: 2.3,
    spaceBetween: 16,
    freeMode: true,
    pagination: {
      clickable: true
    }
  };

  const medicines = [
    {
      id: 1,
      
      img: Item1,
      fallbackImg:
        "https://liveconnectpwa.z29.web.core.windows.net/static/media/home-slider-img1.71910543.jpg",
      name: "Bronko Med Syrup",
      pack: "60ml syrup",
      mrp: 38.5,
      contain: "Paracetamol"
    },
    {
      id: 2,
      
      img: Item2,
      fallbackImg:
        "https://liveconnectpwa.z29.web.core.windows.net/static/media/home-slider-img1.71910543.jpg",
      name: "Refort 200ml Syrup",
      pack: "25ml syrup",
      mrp: 30.5,
      contain: "Clerodend"
    },
    {
      id: 3,
      // img:
      //   "https://liveconnectpwa.z29.web.core.windows.net/static/media/home-slider-img.d894a72f.webp",
      img: Item3,
      fallbackImg:
        "https://liveconnectpwa.z29.web.core.windows.net/static/media/home-slider-img1.71910543.jpg",
      name: "Benadryl Cough Syrup",
      pack: "60ml syrup",
      mrp: 38.5,
      contain: "Paracetamol"
    },
    {
      id: 4,
      // img:
      //   "https://liveconnectpwa.z29.web.core.windows.net//static/media/home-slider-img1.6cde06a1.webp"
      img: Item4,
      fallbackImg:
        "https://liveconnectpwa.z29.web.core.windows.net/static/media/home-slider-img1.71910543.jpg",
      name: "ChildLife Cough Syrup",
      pack: "25ml syrup",
      mrp: 30.5,
      contain: "Clerodend"
    },
    {
      id: 5,
      // img:
      //   "https://liveconnectpwa.z29.web.core.windows.net/static/media/home-slider-img.d894a72f.webp",
      img: Item5,
      fallbackImg:
        "https://liveconnectpwa.z29.web.core.windows.net/static/media/home-slider-img1.71910543.jpg",
      name: "Dolo 250 MG Syrup",
      pack: "60ml syrup",
      mrp: 38.5,
      contain: "Paracetamol"
    },
    {
      id: 6,
      // img:
      //   "https://liveconnectpwa.z29.web.core.windows.net//static/media/home-slider-img1.6cde06a1.webp",
      img: Item6,
      fallbackImg:
        "https://liveconnectpwa.z29.web.core.windows.net/static/media/home-slider-img1.71910543.jpg",
      name: "Bronko Med Syrup",
      pack: "25ml syrup",
      mrp: 30.5,
      contain: "Clerodend"
    }
  ];


  return (
    <div>
      <div className="mob-slider-sec">
        <div>
          <h3 className="mob-slider-title">Top Searched Medicines</h3>
          <h5 className="mob-slider-subtitle">All over Bangalore</h5>
        </div>
        <div>
          <Link to="/search-list">
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
          {medicines.map(medicine => (
            <Link to="/product-details/059346" key={medicine.id}>
              <div>
                <div className="mob-home-slide">
                  <div className="center">
                    {loading ? (
                      <Skeleton variant="rect" className="slider-img" />
                    ) : (
                        // <img
                        //   src={medicine.img}
                        //   onError={e => fallback(e)}
                        //   alt="homeSliderImg"
                        //   className="slider-img"
                        // />
                        <Image
                          src={medicine.img}
                          fallbackUrl={medicine.fallbackImg}
                          className="slider-img"
                          alt="homeSliderImg"
                        />
                      )}
                  </div>
                  {loading ? (
                    <Skeleton className="mob-home-slider-title" />
                  ) : (
                      <h5 className="mob-home-slider-title">{medicine.name}</h5>
                    )}
                  {loading ? (
                    <Skeleton className="mob-home-slider-subtitle" />
                  ) : (
                      <h6 className="mob-home-slider-subtitle">
                        Pack Size: 60ml syrup
                    </h6>
                    )}
                  {loading ? (
                    <Skeleton className="mob-home-slider-mtp" />
                  ) : (
                      <h6 className="mob-home-slider-mtp">MRP {medicine.mrp}</h6>
                    )}
                  {loading ? (
                    <Skeleton className="mob-home-slider-contains" />
                  ) : (
                      <h6 className="mob-home-slider-contains">
                        <span>Contains</span>
                        <span className="contains-ele">{medicine.contain}</span>
                      </h6>
                    )}
                </div>
              </div>
            </Link>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopSearchedMadicines;
