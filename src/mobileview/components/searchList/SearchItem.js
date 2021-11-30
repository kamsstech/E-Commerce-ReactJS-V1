import * as React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import Image from "../../../common/components/image";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

//images
import Item1 from "../../../assets/mobImages/item1.png";
import Item2 from "../../../assets/mobImages/item2.png";
import Item3 from "../../../assets/mobImages/item3.png";
import Item4 from "../../../assets/mobImages/item4.png";
import Item5 from "../../../assets/mobImages/item5.png";
import Item6 from "../../../assets/mobImages/item6.png";


const SearchItem = (props) => {
  const { loading } = props;
  const medicines = [
    {
      id: 1,
      // img:
      //   "https://liveconnectpwa.z29.web.core.windows.net/static/media/home-slider-img.d894a72f.webp",
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
      // img:
      //   "https://liveconnectpwa.z29.web.core.windows.net//static/media/home-slider-img1.6cde06a1.webp",
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
    <div className="mob-profile-sec-space mob-home-slider plp-list search-item-sec">
      <Grid container className="mob-product-list">
        {medicines.map(medicine => (
          <Grid item xs={6} key={medicine.id}  >
            <Link to="/product-details/059346">
              <div className="mob-home-slide top-ordered-slider">
                <div className="center">
                  {loading ? (
                    <Skeleton variant="rect" className="slider-img" />
                  ) : (
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
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SearchItem;
