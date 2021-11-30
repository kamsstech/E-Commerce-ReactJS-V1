import React from 'react';
import FooterPage from '../footerSection/Footer';
import './css/PrivacyAndPolicyStyle.css';
import PrivacyBanner from './PrivacyBanner';
import PrivacyContent from './PrivacyContent';

const PrivacyAndPolicyPage= () => {

    return(
        <>
        <div className="text-center terms-container">
            <PrivacyBanner/>
            <PrivacyContent></PrivacyContent>
        </div>
        <FooterPage/>
        </>
    )
}
export default PrivacyAndPolicyPage;
