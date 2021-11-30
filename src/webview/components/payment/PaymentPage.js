import React, {useEffect, useState} from 'react';
import { Container, Grid } from '@material-ui/core';
import PriceDetail from './PriceDetail';
import ProductDetails from './ProductDetails';

import './css/PaymentPage.css';
import PaymentFooterPage from '../paymentFooter/PaymentFooterPage';

const PaymentPage= (props) => {
	const [arrayJson, setarrayJson] = useState([]);
	const [arrayInJson, setarrayInJson] = useState([]);
  	const [page, setPage] = useState(1);
  	const [loadStatus, setloadStatus] = useState(false);
  	const [totalList, setTotalList] = useState(5);
  	const [totalLimit, setLimitTotal] = useState(10);
  	const [totalOffset, settotalOffset] = useState(0);
  	const [notFound, setNotFound] = useState(false);
  	const [pageLimit, setPageLimit] = useState(5);
  	const [searchKey, setSearchKey] = useState("");
  	const [totalPay, settotalPay] = useState(0);
  	const [totalOutPay, settotalOutPay] = useState(0);
  	const [isCheck, setIsCheck] = useState([]);
  	const [isCheckAll, setIsCheckAll] = useState(false);
  	const [checkCount, setCheckCount] = useState(0);
  	const [resultofSeller, setresultofSeller] = useState('');
	const {GetSellerWisePayOut,sellerwisePayoutResult,GetSellerWisePayPagination,sellerwisePayPaginationResult,GetSellerPayDetails,sellerPayDetailsResult} = props;
	const mobileNo= "9567764045"
	const sellerCode= "002502"
	return(
		<>
			<div className="website-body">
				<div className="paymentflowflow">
					<div className="head">
						<Container fixed>
							<h4>Outstanding Details</h4>  
						</Container>
					</div>
					<ProductDetails
					  mobileNo={mobileNo}
					  sellerCode={sellerCode}
					  page={page}
		              setPage={setPage}
		              loadStatus={loadStatus}
		              setloadStatus={setloadStatus}
		              totalList={totalList}
		              setTotalList={setTotalList}
		              totalLimit={totalLimit}
		              setLimitTotal={setLimitTotal}
		              totalOffset={totalOffset}
		              settotalOffset={settotalOffset}
		              pageLimit={pageLimit}
		              setPageLimit={setPageLimit}
		              notFound={notFound}
		              setNotFound={setNotFound}
		              arrayJson={arrayJson}
		              setarrayJson={setarrayJson}
		              arrayInJson={arrayInJson}
		              setarrayInJson={setarrayInJson}
		              searchKey={searchKey}
		              setSearchKey={setSearchKey}
		              totalPay={totalPay}
		              settotalPay={settotalPay}
		              totalOutPay={totalOutPay}
		              settotalOutPay={settotalOutPay}
		              isCheck={isCheck}
		              setIsCheck={setIsCheck}
		              isCheckAll={isCheckAll}
		              setIsCheckAll={setIsCheckAll}
		              checkCount={checkCount}
		              setCheckCount={setCheckCount}
		              resultofSeller={resultofSeller}
		              setresultofSeller={setresultofSeller}
					  GetSellerWisePayOut={GetSellerWisePayOut}
					  sellerwisePayoutResult={sellerwisePayoutResult}
					  GetSellerWisePayPagination={GetSellerWisePayPagination}
					  sellerwisePayPaginationResult={sellerwisePayPaginationResult}
		              GetSellerPayDetails={GetSellerPayDetails}
		              sellerPayDetailsResult={sellerPayDetailsResult}
					/>   
					{/*<div className="info onePharama paymentFlow">
						<Container fixed>
						</Container>
					</div>*/}
					{/*<PaymentFooterPage footerSubscribe={(email)=>console.log(email)}/>}*/}
				</div>    
				<div className="termsAndCondi positioninit">
					<Container fixed>
						Copyright ©️ 2021 C-Square Info Solutions Pvt. Ltd. All rights reserved.
					</Container>
				</div>
			</div>
		</>
	)
}
export default PaymentPage;
