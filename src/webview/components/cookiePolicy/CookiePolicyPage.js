import React from 'react';
import FooterPage from '../footerSection/Footer';
import CookiePolicyBanner from './CookiePolicyBanner';
import CookiePolicyContent from './CookiePolicyContent';

const CookiePolicyPage= () => {

    return(
        <>
        <div className="text-center terms-container">
            <CookiePolicyBanner/>
            <CookiePolicyContent/>
        </div>
        <FooterPage/>
        </>
    )
}
export default CookiePolicyPage;
