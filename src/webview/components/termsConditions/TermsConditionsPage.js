import React from 'react';
import FooterPage from '../footerSection/Footer';
import TermsConditionsBanner from './TermsConditionsBanner';
import TermsConditionsContent from './TermsConditionsContent';

const PrivacyAndPolicyPage= () => {

    return(
        <>
        <div className="text-center terms-container">
            <TermsConditionsBanner/>
            <TermsConditionsContent/>
        </div>
        <FooterPage/>
        </>
    )
}
export default PrivacyAndPolicyPage;
