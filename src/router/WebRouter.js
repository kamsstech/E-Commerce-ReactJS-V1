import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SiteLoader from "../webview/components/SiteLoader/SiteLoader";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
	//Admin Route
	//Banner
	BannerPageContainer,
	AddBannerPageContainer,

	//Brand
	BrandPageContainer,
	AddBrandPageContainer,

	//Category
	CategoryPageContainer,
	AddCategoryPageContainer,

	//Variation
	VariationsPageContainer,
	AddVariationsPageContainer,

	//Customers
	CustomersPageContainer,

	//Orders
	NewOrderPageContainer,
	FailureOrderPageContainer,
	CancelOrderPageContainer,
	DeliveredOrderPageContainer,

	//Page Setting
	AddPageSettingContainer,
	PageSettingContainer,
	ChangePasswordPageContainer,
} from "../webview/components";





import { getToken } from "../common/components/getToken/getToken";
// import { PageNotFoundContainer } from "../webview/components/pageNotFound/PageNotFoundContainer";

import ChatBot from "../webview/components/chatBot/ChatBot";
// import { PreferredPaymentPageContainer } from "../webview/components/profile/preferredPaymentPageContainer";
// import { CardPaymentPageContainer } from "../webview/components/profile/cardPaymentPageContainer";
// import { OtherWalletPageContainer } from "../webview/components/profile/otherWalletPageContainer";
// import { LcWalletPageContainer } from "../webview/components/profile/lcWalletPageContainer";

import FooterPage from "../webview/components/footerSection/Footer";
import { createBrowserHistory } from "history";
let history = createBrowserHistory();
// const LoginPageContainer = lazy(() => import('../webview/components/login/LoginPageContainer'));
const LoginPageContainer = lazy(() => import('../webview/components/login/LoginPageContainer'));
const DummyPage = lazy(() => import('../webview/components/dummy/DummyPage'));
const Main_Logo = lazy(() => import('../assets/mobImages/main_logo.svg'));
const LandingPageContainer1 = lazy(() => import('../webview/components/landing1/LandingPageContainer1'));

const AddBranchPageContainer = lazy(() => import('../webview/components/profile/AddBranchPageContainer'));
const AddUserPageContainer = lazy(() => import('../webview/components/profile/AddUserPageContainer'));
const ProfileInfoPageContainer = lazy(() => import('../webview/components/profile/ProfileInfoPageContainer'));
const UserPageContainer = lazy(() => import('../webview/components/profile/UserPageContainer'));
const PreferredPaymentPageContainer = lazy(() => import('../webview/components/profile/PreferredPaymentPageContainer'));
const OtherWalletPageContainer = lazy(() => import('../webview/components/profile/OtherWalletPageContainer'));
const LcWalletPageContainer = lazy(() => import('../webview/components/profile/LcWalletPageContainer'));
const ChangePassPageContainer = lazy(() => import('../webview/components/profile/ChangePassPageContainer'));
const CardPaymentPageContainer = lazy(() => import('../webview/components/profile/CardPaymentPageContainer'));
const BranchPageContainer = lazy(() => import('../webview/components/profile/BranchPageContainer'));

const CartPageContainer = lazy(() => import('../webview/components/cart/CartPageContainer'));

const ChooseDeliverySlotsPageContainer = lazy(() => import('../webview/components/chooseDeliverySlots/ChooseDeliverySlotsPageContainer'));

const CookiePolicyPageContainer = lazy(() => import('../webview/components/cookiePolicy/CookiePolicyPageContainer'));
const CopyRightsContainer = lazy(() => import('../webview/components/copyRights/CopyRightsContainer'));
const FeedbackPageContainer = lazy(() => import('../webview/components/feedback/FeedbackPageContainer'));
const FinalPaymentPageContainer = lazy(() => import('../webview/components/finalPayment/FinalPaymentPageContainer'));
const ForgotPassPageContainer = lazy(() => import('../webview/components/forgotPass/ForgotPassPageContainer'));
const HeaderPageContainer = lazy(() => import('../webview/components/header/HeaderPageContainer'));
const HelpPageContainer = lazy(() => import('../webview/components/help/HelpPageContainer'));
const HomePageContainer = lazy(() => import('../webview/components/home/HomePageContainer'));

const NavigationPageContainer = lazy(() => import('../webview/components/navigation/NavigationPageContainer'));
const OrderDetailsPageContainer = lazy(() => import('../webview/components/orderDetails/OrderDetailsPageContainer'));
const OrderHistoryPageContainer = lazy(() => import('../webview/components/orderHistory/OrderHistoryPageContainer'));
const PageNotFoundContainer = lazy(() => import('../webview/components/pageNotFound/PageNotFoundContainer'));
const PaymentPageContainer = lazy(() => import('../webview/components/payment/PaymentPageContainer'));
const PaymentHeaderWithoutLogoPageContainer = lazy(() => import('../webview/components/paymentHeaderWithoutLogo/PaymentHeaderWithoutLogoPageContainer'));
const PDPPageContainer = lazy(() => import('../webview/components/pdp/PDPPageContainer'));


const PlpPageContainer = lazy(() => import('../webview/components/plp/PlpPageContainer'));
const PrivacyAndPolicyPageContainer = lazy(() => import('../webview/components/privacyAndPolicy/PrivacyAndPolicyPageContainer'));
const RegisterPageContainer = lazy(() => import('../webview/components/register/RegisterPageContainer'));
const RegisterDetailsPageContainer = lazy(() => import('../webview/components/registerDetails/RegisterDetailsPageContainer'));
const ShortbookPageContainer = lazy(() => import('../webview/components/shortbook/ShortbookPageContainer'));
const TermsConditionsPageContainer = lazy(() => import('../webview/components/termsConditions/TermsConditionsPageContainer'));
const WatchListPageContainer = lazy(() => import('../webview/components/watchList/WatchListPageContainer'));


const ComingSoonContainer = lazy(() => import('../webview/components/comingSoon/ComingSoonContainer'));
const AboutUsContainer = lazy(() => import('../webview/components/aboutUs/AboutUsContainer'));
const ContactUsContainer = lazy(() => import('../webview/components/contactUs/ContactUsContainer'));
const PaymentProgressContainer = lazy(() => import('../webview/components/paymentProgress/PaymentProgressContainer'));




const PublicRoute = (props) => {
	const { Component, path,Layout } = props;
	var token = getToken();

	// console.log(token, "token")
	
	// if (!token) return <Route path={path} component={Component} />;
	// return <Redirect to="/home" />;

 
	if (!token){
		return <Layout path={path} Component={Component}/>
	} else{
		return <Layout path={path} Component={Component}/>
		// return <Redirect to="/home" />
	}

	
};  


const PrivateRoute = (props) => {
	const { path, Component, Layout, pageTitle,pageSubTitle, subPath } = props;
	const token = getToken();

	// console.log(token, "token")
	if (token){
		return <Layout path={path} Component={Component} pageTitle={pageTitle} pageSubTitle={pageSubTitle} subPath={subPath}/>
	} else{
		// return <Layout path={path} Component={Component} pageTitle={pageTitle} pageSubTitle={pageSubTitle} subPath={subPath}/>
		return <Redirect to="/login" />;
	}
	
	
};
const CommonRoute = (props) => {
	const { Component, path,Layout } = props;
	var token = getToken();

	// console.log(token, "token")
	
	// if (!token) return <Route path={path} component={Component} />;
	// return <Redirect to="/home" />;

 
	if (token){
		return (
			<Route
			path={path}
			render={props => (
				<>
                    <div className="preLoginDSu">
    					<HeaderPageContainer />
    					<Component {...props}/>
    					{/* <ChatBot /> */}
                    </div>
				</>
			)}
		/>
		)
	} else{
		return (
			<Route
			path={path}
			render={props => (
				<>
                    <div className="preLoginDSg">
    					<HeaderPageContainer />
    					<Component {...props}/>
    					<FooterPage/>
                    </div>
				</>
			)}
		/>
		)
	}	
};
const CommonLayout =(props)=>{
	const { Component, path } = props;
	return(
		<Route
			path={path}
			render={props => (
				<>
					<HeaderPageContainer />
					<Component {...props}/>
					<FooterPage/>
				</>
			)}
		/>
	)
}
const RegisterDetaislRoute = (props) => {
	const { Component, path,Layout } = props;
	var token = getToken();

	// console.log(token, "token")
	
	// if (!token) return <Route path={path} component={Component} />;
	// return <Redirect to="/home" />;

 
	if (token){
		return (
			<Route
			path={path}
			render={props => (
				<>
                    <div className="preLoginDS">
					<Component {...props}/>
                    </div>
					{/* <ChatBot /> */}
				</>
			)}
		/>
		)
	} else{
		return (
			<Route
			path={path}
			render={props => (
				<>
                    <div className="preLoginDSM">
					    <Component {...props}/>
                    </div>
					{/* <ChatBot /> */}
				</>
			)}
		/>
		)
	}
	
};


const LoginRegisterLayout =(props)=>{
	const { Component, path } = props;
	return(
		<Route
			path={path}
			render={props => (
				<>
					<Component {...props}/>
					{/* <ChatBot /> */}
				</>
			)}
		/>
	)
}


const HomeLayout = (props) => {
	const { Component, path } = props;

	return (
		<Route
			path={path}
			render={props => (
				<>

					<HeaderPageContainer />
					<Component {...props}/>
					{/* <ChatBot /> */}
				</>
			)}
		/>
	);
};

const LandingLayout = (props) => {
	const { Component, path } = props;

	return (
		<Route
			path={path}
			render={props => (
				<>
					
					<Component {...props}/>
				</>
			)}
		/>
	);
};

const EntityLayout = (props) => {
    const { Component, path } = props;
    var token = getToken();
    return (
        <Route
            path={path}
            render={props => (
                <>
                    
                    <Component {...props}/>
                    <FooterPage/>
                </>
            )}
        />
    );
};

const HeaderWithoutLogoLayout = (props) => {
    const { Component, path } = props;

    return (
        <Route
            path={path}
            render={props => (
                <>
                    
                    <PaymentHeaderWithoutLogoPageContainer />
                    <Component {...props}/>
                    {/* <ChatBot /> */}
                </>
            )}
        />
    );
};

const WithoutHeaderFooterLayout = (props) => {
    const { Component, path } = props;

    return (
        <Route
            path={path}
            render={props => (
                <>
                    <Component {...props}/>
                </>
            )}
        />
    );
};

const MainLayout = (props) => {
	const { Component, path, pageTitle, pageSubTitle, subPath } = props;
 // console.log("in main layout ",props)
	return (
		<Route
			path={path}
			render={(props) => (
				<>
					<HeaderPageContainer />
					<div className="website-body">
						{/*<NavigationPageContainer pageTitle={pageTitle} pageLink={path} pageSubTitle={pageSubTitle} subPath={subPath} {...props} />*/}
						<Component {...props }/>
						<div className="web-bottom-height"></div>
						<div className="termsAndCondi">
							<Container fixed>
								{/* Copyright ©️ 2018 C-Square Info Solutions Pvt. Ltd.. All rights
								reserved. */}
								Copyright ©️ 2021 C-Square Info Solutions Pvt. Ltd. All rights reserved.
							</Container>
						</div>
					</div>
					{/* <ChatBot /> */}
				</>
			)}
		/>
	);
};
const PlpLayout = (props) => {
	const { Component, path, pageTitle, pageSubTitle, subPath } = props;
 // console.log("in main layout ",props)
	return (
		<Route
			path={path}
			render={(props) => (
				<>
					<HeaderPageContainer />
					<div className="website-body">
						<Component {...props }/>
						<div className="web-bottom-height"></div>
						<div className="termsAndCondi">
							<Container fixed>
								{/* Copyright ©️ 2018 C-Square Info Solutions Pvt. Ltd.. All rights
								reserved. */}
								Copyright ©️ 2021 C-Square Info Solutions Pvt. Ltd. All rights reserved.
							</Container>
						</div>
					</div>
				</>
			)}
		/>
	);
};

const PageNotFoundLayout = (props) => {
	const { Component, path, pageTitle, pageSubTitle, subPath } = props;
	return (
		<Route
			path={path}
			render={(props) => (
				<>
					<HeaderPageContainer />
					<div className="website-body">
						{/* <NavigationPageContainer pageTitle={pageTitle} pageLink={path} pageSubTitle={pageSubTitle} subPath={subPath} {...props} /> */}
						<Component {...props }/>
						<div className="web-bottom-height"></div>
						<div className="termsAndCondi">
							<Container fixed>
								Copyright ©️ 2021 C-Square Info Solutions Pvt. Ltd. All rights reserved.
							</Container>
						</div>
					</div>
				</>
			)}
		/>
	);
};

const PageLoading = () => {
    const [showLoader, setShowLoader] = React.useState(false);
    React.useEffect(() => {
        if (history.location.pathname === "/login" && history.location.hash === "") {
            setTimeout(() => {
                setShowLoader(true);
            }, 5000);
        } else {
            setShowLoader(true);
        }
    }, [history.location.pathname]);

    if (showLoader === true) {
        return (
            <div className="router_logo">
				{/* <SiteLoader showLoader={showLoader} /> */}
				<CircularProgress className="mr-l-12" size={32} thickness={4}/>
			</div>


        )
    } else {
        return (
            <div className="router_logo">
				<CircularProgress className="mr-l-12" size={32} thickness={4}/>
				{/* <SiteLoader showLoader={showLoader} /> */}
			</div>
        )

    }

}



const WebRouter = () => {
	
	return (
		<Router>
			<Suspense fallback={<PageLoading />}>
			<Switch>

				 <CommonRoute
				 		exact
						path="/"
						Component={HomePageContainer}
						Layout={MainLayout}
						pageTitle="Home"
					/>

				 <PublicRoute 	path="/login" Layout={LoginRegisterLayout} Component={LoginPageContainer} />
				 <CommonRoute path="/privacy"  Layout={CommonLayout} Component={PrivacyAndPolicyPageContainer} />		

	             <CommonRoute path="/terms"  Layout={CommonLayout} Component={TermsConditionsPageContainer} />        
	             <CommonRoute path="/cookie"  Layout={CommonLayout} Component={CookiePolicyPageContainer} />    
				 <CommonRoute path="/help"  Layout={CommonLayout} Component={HelpPageContainer} />	
				 <CommonRoute path="/coming-soon"  Layout={CommonLayout} Component={ComingSoonContainer} />	
				 <CommonRoute path="/about-us"  Layout={CommonLayout} Component={AboutUsContainer} />	
				 <CommonRoute path="/contact-us"  Layout={CommonLayout} Component={ContactUsContainer} />	
				 

					<PublicRoute
						Layout={LoginRegisterLayout}
						path="/forgot-password/:username"
						Component={ForgotPassPageContainer}
					/>
					<PublicRoute
						exact={true}
						path="/register/:type"
						Layout={LoginRegisterLayout}
						Component={RegisterPageContainer}
					/>
					<RegisterDetaislRoute
						path="/register-details/:type"
						Layout={CommonLayout}
						Component={RegisterDetailsPageContainer}
					/>

					<PrivateRoute
						path="/home"
						Component={HomePageContainer}
						Layout={HomeLayout}
						pageTitle="Home"
					/>


					<PrivateRoute
						exact
						path="/profile"
						Component={ProfileInfoPageContainer}
						Layout={MainLayout}
						pageTitle="My Profile"
					/>
					<PrivateRoute
						exact
						path="/feedback"
						Component={FeedbackPageContainer}
						Layout={MainLayout}
						pageTitle="Feedback"
					/>
					<PrivateRoute
						path="/profile/user"
						Component={UserPageContainer}
						Layout={MainLayout}
						pageTitle="Add user"
					/>
					<PrivateRoute
						path="/profile/add-user"
						Component={AddUserPageContainer}
						Layout={MainLayout}
						pageTitle="Add user"
					/>
					<PrivateRoute
						path="/profile/edit-user/:userId"
						Component={AddUserPageContainer}
						Layout={MainLayout}
						pageTitle="Edit user"
					/>
					<PrivateRoute
						path="/profile/branch"
						Component={BranchPageContainer}
						Layout={MainLayout}
						pageTitle="Add branch"
					/>
					<PrivateRoute
						path="/profile/add-branch"
						Component={AddBranchPageContainer}
						Layout={MainLayout}
						pageTitle="Add branch"
					/>
					<PrivateRoute
						path="/profile/edit-branch/:branchId"
						Component={AddBranchPageContainer}
						Layout={MainLayout}
						pageTitle="Edit branch"
					/>
					<PrivateRoute
						path="/profile/change-password"
						Component={ChangePassPageContainer}
						Layout={MainLayout}
						pageTitle="Change Password"
					/>
					<PrivateRoute
						path="/profile/preferred-payment"
						Component={PreferredPaymentPageContainer}
						Layout={MainLayout}
						pageTitle="Preferred Payment"
					/>
					
					<PrivateRoute
						path="/profile/cards"
						Component={CardPaymentPageContainer}
						Layout={MainLayout}
						pageTitle="Credit &amp; Debit Cards"
					/>
					<PrivateRoute
						path="/profile/wallets"
						Component={OtherWalletPageContainer}
						Layout={MainLayout}
						pageTitle="Other Wallets"
					/>
					
					<PrivateRoute
						path="/profile/lc-wallet"
						Component={LcWalletPageContainer}
						Layout={MainLayout}
						pageTitle="LC Wallet"
					/>
					 <PrivateRoute
						path="/plp"
						exact
						Component={PlpPageContainer}
						Layout={MainLayout}
						pageTitle="Top/Most ordered Products" 
						/>
					<PrivateRoute
						path="/plp/:type"
						Component={PlpPageContainer}
						Layout={PlpLayout}
						pageTitle="" 
					/>

					<PrivateRoute
						path="/pdp/:itemCode/:itemName"
						Component={PDPPageContainer}
						Layout={MainLayout}
						pageTitle="Generic Medicines"
					/>
					{/* <PrivateRoute
						path="/notification"
						Component={NotificationPageContainer}
						Layout={PlpLayout}
						pageTitle="Notification"
					/> */}
					<PrivateRoute
						path="/shortbook"
						Component={ShortbookPageContainer}
						Layout={PlpLayout}
						pageTitle="Shortbook"
					/>
					<PrivateRoute
						path="/watchlist"
						Component={WatchListPageContainer}
						Layout={PlpLayout}
						pageTitle="Watchlist"
					/>
					<PrivateRoute
						exact
						path="/cart"
						Component={CartPageContainer}
						Layout={MainLayout}
						pageTitle="Cart"
					/>
					<PrivateRoute
						path="/cart/chooseDeliverySlots"
						Component={ChooseDeliverySlotsPageContainer}
						Layout={MainLayout}
						subPath="/cart"
						pageSubTitle={'Cart'}
						pageTitle="ChooseDeliverySlots"
					/>
					<PrivateRoute
						path="/order-history/details/:type"
						subPath="/order-history"
						Component={OrderDetailsPageContainer}
						Layout={MainLayout}
						pageTitle="Order Details"
						pageSubTitle="Order History"
					/>
					<PrivateRoute
						path="/order-history"
						Component={OrderHistoryPageContainer}
						Layout={MainLayout}
						pageTitle="Order History"
					/>
					<PrivateRoute
						path="/payment"
						Component={PaymentPageContainer}
						Layout={HomeLayout}
						pageTitle="Payment"
					/>
	                <PrivateRoute
	                    path="/final-payment"
	                    Component={FinalPaymentPageContainer}
	                    Layout={HeaderWithoutLogoLayout}
	                    pageTitle="Payment"
	                />

					 <PrivateRoute
						path="/404"
						Component={PageNotFoundContainer}
						Layout={PageNotFoundLayout}
						pageTitle="Page Not Found"
					/>
					 
					
					<PrivateRoute
						path="/payment-progress"
						Component={PaymentProgressContainer}
						Layout={WithoutHeaderFooterLayout}
						pageTitle="Payment Progress"
					/>

					<CommonRoute
						path="/site-control/add-banner"
						Component={AddBannerPageContainer}
						Layout={MainLayout}
						pageTitle="Add Banner Control"
					/>
					<CommonRoute
						path="/site-control/banner"
						Component={BannerPageContainer}
						// Layout={CommonLayout}
						pageTitle="Banner Control"
					/>

					<CommonRoute
						path="/site-control/add-brand"
						Component={AddBrandPageContainer}
						Layout={MainLayout}
						pageTitle="Add Brand Control"
					/>
					<CommonRoute
						path="/site-control/brand"
						Component={BrandPageContainer}
						Layout={MainLayout}
						pageTitle="Brand Control"
					/>

					<CommonRoute
						path="/site-control/add-category"
						Component={AddCategoryPageContainer}
						Layout={MainLayout}
						pageTitle="Add Category Control"
					/>
					<CommonRoute
						path="/site-control/category"
						Component={CategoryPageContainer}
						Layout={MainLayout}
						pageTitle="Category Control"
					/>

					<CommonRoute
						path="/site-control/add-variation"
						Component={AddVariationsPageContainer}
						Layout={MainLayout}
						pageTitle="Add Variation Control"
					/>
					<CommonRoute
						path="/site-control/variation"
						Component={VariationsPageContainer}
						Layout={MainLayout}
						pageTitle="Variation Control"
					/>

					<CommonRoute
						path="/site-control/customers"
						Component={CustomersPageContainer}
						Layout={MainLayout}
						pageTitle="Customers Control"
					/>

					<CommonRoute
						path="/site-control/new-orders"
						Component={NewOrderPageContainer}
						Layout={MainLayout}
						pageTitle="New Order Control"
					/>
					<CommonRoute
						path="/site-control/failure-orders"
						Component={FailureOrderPageContainer}
						Layout={MainLayout}
						pageTitle="Failure Order Control"
					/>
					<CommonRoute
						path="/site-control/cancel-orders"
						Component={CancelOrderPageContainer}
						Layout={MainLayout}
						pageTitle="Cancel Order Control"
					/>
					<CommonRoute
						path="/site-control/delivered-orders"
						Component={DeliveredOrderPageContainer}
						Layout={MainLayout}
						pageTitle="Delivered Order Control"
					/>

					<CommonRoute
						path="/site-control/add-page"
						Component={AddPageSettingContainer}
						Layout={MainLayout}
						pageTitle="Add page Control"
					/>
					<CommonRoute
						path="/site-control/page"
						Component={PageSettingContainer}
						Layout={MainLayout}
						pageTitle="Page Control"
					/>
					<CommonRoute
						path="/site-control/change-password"
						Component={ChangePasswordPageContainer}
						Layout={MainLayout}
						pageTitle="Change Password Control"
					/>
					{/* <Route
						render={() => (
										<Redirect to={{ pathname: "/404" }} />
						)}
					/> */}
					
				</Switch>
			</Suspense>
			
		</Router>
	);
};

export default WebRouter;