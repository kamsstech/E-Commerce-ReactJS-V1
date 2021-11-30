import React from "react";


//Images
import backArrowIcon from "../../../assets/mobImages/back-white/back.png";
import Edit from "../../../assets/mobImages/edit-white/edit.png";
import Add from "../../../assets/mobImages/edit-white/edit.png";
import Bell from "../../../assets/mobImages/bell-white/bell.png";
import Search from "../../../assets/mobImages/search-white/search.png";
import Shortbook from "../../../assets/mobImages/shortbook-white/shortbook.png";
import Cart from "../../../assets/mobImages/cart-white/cart.png";
import HideAppBar from "../HideScroll";
import { useHistory } from "react-router-dom";


const HeaderListPage = (props) => {
    let history = useHistory();
    const { pageTitle, subTitle } = props;
    return (
    <HideAppBar>

        <div className="mob-list-header-sec">
            <div className="list-header-row">
                <div className="mobile-navigation-back opacity1">
                    <img src={backArrowIcon} alt="backArrow" onClick={history.goBack} />
                </div>
                <div className="mob-list-header">
                    <div className="mobile-navigation-back opacity1">
                        <img src={Search} alt="Search" />
                    </div>
                    <div className="mobile-navigation-back opacity1">
                        <img src={Shortbook} alt="Shortbook" />
                    </div>
                    <div className="mobile-navigation-back opacity1">
                        <img src={Cart} alt="Cart" />
                    </div>
                </div>
            </div>
            <h4>{pageTitle}</h4>
            <h5>{subTitle}</h5>
        </div>
        </HideAppBar>

    )
}

export default HeaderListPage;
