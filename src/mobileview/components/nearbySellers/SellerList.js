import * as React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import Image from "../../../common/components/image";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

//images
import SliderImg1 from "../../../assets/mobImages/seller1.png";
import SliderImg2 from "../../../assets/mobImages/seller2.png";
import SliderImg3 from "../../../assets/mobImages/seller3.png";

interface Props {
  loading: boolean;
}

const SellerList = (props: Props) => {
  const { loading } = props;
  const medicines = [
    {
      id: 1,
      img: SliderImg1,
      name: "Srinivasa Medisales Pvt. Ltd."
    },
    {
      id: 2,
      img: SliderImg2,
      name: "Mahaveer Medisales Pvt. Ltd."
    },
    {
      id: 3,
      img: SliderImg3,
      name: "Focus Medisales Pvt. Ltd."
    },
    {
      id: 4,
      img: SliderImg1,
      name: "Sun Pharma Pvt. Ltd."
    },
    {
      id: 5,
      img: SliderImg2,
      name: "Orphelia Pharma Pvt. Ltd."
    },
    {
      id: 6,
      img: SliderImg3,
      name: "Vardhman Pharma Pvt. Ltd."
    }
  ];

  return (
    // <Link to="/product-details/059346">
    <div className="mob-profile-sec-space mob-home-slider plp-list search-item-sec">
      <Grid container className="mob-product-list">
        {medicines.map(medicine => (
          <Grid item xs={6} key={medicine.id}  >
            {/* <div className="search-item"> */}
            <div className="mob-home-slide top-ordered-slider">
              <div className="center">
                {loading ? (
                  <Skeleton variant="rect" className="slider-img" />
                ) : (
                    <img
                      src={medicine.img}
                      alt="medicalsImg"
                      className="slider-img sellers-img"
                    />
                  )}
              </div>
              {loading ? (
                <Skeleton className="mob-home-slider-title" />
              ) : (
                  <h5 className="mob-home-slider-title no-ellipsis">{medicine.name}</h5>
                )}
              {loading ? (
                <Skeleton className="mob-home-sposore" />
              ) : (
                  <h5 className="mob-home-sposore">Sponsored</h5>
                )}
            </div>
            {/* </div> */}
          </Grid>
        ))}
      </Grid>
    </div>
    // </Link>
  );
};

export default SellerList;
