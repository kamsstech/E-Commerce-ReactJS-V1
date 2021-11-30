import React, {useEffect, useState} from 'react';
import { Container, Grid } from '@material-ui/core';
import { Button, Table, TableRow, TableCell, Divider, TableBody, TableHead } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import './css/FinalPaymentPage.css';
import TermsAndConditionsPopup from "./TermsAndConditionsPopup";
import PaymentSuccessfulPopup from "./PaymentSuccessfulPopup";
import PaymentCanceledPopup from "./PaymentCanceledPopup";
import { useHistory } from "react-router-dom";
import { Constants } from "../../../common/constant/localstorage";

const FinalPaymentPage= (props) => {
    let history = useHistory();
    const  {GetSellerPayDetails,
            sellerPayDetailsResult,
            GetSellerPayOrder,
            sellerPayOrderResult,
        } = props;
    const mobileNo= "9567764045"
    const [termsAndConditionsPopupModal, setTermsAndConditionsPopupModal] = React.useState(false);

    const handleTermsAndConditionsPopupModal = () => {
        setTermsAndConditionsPopupModal(true);
    };

    const handleCloseTermsAndConditionsPopupModal = () => {
        setTermsAndConditionsPopupModal(false);
    };

    const [paymentSuccessfulPopupModal, setPaymentSuccessfulPopupModal] = React.useState(false);

    const handlePaymentSuccessfulPopupModal = () => {
        setPaymentSuccessfulPopupModal(true);
    };

    const handleClosePaymentSuccessfulPopupModal = () => {
        setPaymentSuccessfulPopupModal(false);
    };

    const [paymentCanceledPopupModal, setPaymentCanceledPopupModal] = React.useState(false);
    
    const handlePaymentCanceledPopupModal = () => {
        setPaymentCanceledPopupModal(true);
    };

    const handleClosePaymentCanceledPopupModal = () => {
        setPaymentCanceledPopupModal(false);
    };

    
    const [arrayJson, setarrayJson] = useState([]);
    const [resStatus, setresStatus] = useState(false);
    const [checkTerms, setcheckTerms] = useState(false);

    useEffect(() => {
        // console.log(sellerPayDetailsResult,'asgdshdfsdjhgdjdfgh') 
        if (sellerPayDetailsResult.statuscode === 0) {
          // console.log(sellerPayDetailsResult,'asgdshdfsdjhgdjdfgh') 
          if(arrayJson.length === 0)
          {
              setarrayJson(sellerPayDetailsResult.payload?.data);
          }            
        }
        if (sellerPayDetailsResult.statuscode === '') {
          setresStatus(true)
          const seller_code = localStorage.getItem(Constants.BILL_SELLER);
          const bill_nos = localStorage.getItem(Constants.BILL_NOS);
          const check_status = localStorage.getItem(Constants.CHECK_STATUS);
          // console.log(check_status)
              if (check_status === "false"){
                  var body ={
                    c_mobile_no:mobileNo,
                    c_seller_code:seller_code,
                    ac_invoice_no:[bill_nos]
                }
              }
              else
              {
                  var body ={
                    c_mobile_no:mobileNo,
                    c_seller_code:seller_code,
                    ac_invoice_no:[]
                }
              }
            GetSellerPayDetails(body)
        }
      }, []);
    useEffect(() => {
        if(resStatus === false) return;
        if(sellerPayDetailsResult.statuscode === 0) {
          setarrayJson(sellerPayDetailsResult.payload?.data);
        }
      }, [sellerPayDetailsResult,resStatus]);
    // console.log(arrayJson)
    const handleCheckTerms = () => {
        if(checkTerms == false)
        {
            setcheckTerms(true);
        }
        else if(checkTerms == true)
        {
             setcheckTerms(false);
        }
        
    };
    const handlePayNow = (e) =>{
        if(checkTerms == false) return;
        const seller_code = localStorage.getItem(Constants.BILL_SELLER);
        const bill_nos = localStorage.getItem(Constants.BILL_NOS);
        const check_status = localStorage.getItem(Constants.CHECK_STATUS);
        if (check_status === "false"){
              var body ={
                c_mobile_no:mobileNo,
                c_seller_code:seller_code,
                ac_invoice_no:[bill_nos]
            }
          }
          else
          {
              var body ={
                c_mobile_no:mobileNo,
                c_seller_code:seller_code,
                ac_invoice_no:[]
            }
        }
        GetSellerPayOrder(body)
    }
    useEffect(() => {
        if(sellerPayOrderResult.statuscode === 0) {
          console.log(sellerPayOrderResult);
        }
      }, [sellerPayOrderResult]);
	return(
        <>
		<div className="finalpaymentflow">
			<Container fixed>
                <Grid container>
                    <Grid item xs={8}>
                        <h1><span className="receiverPayer">Reciever:</span> {arrayJson.c_buyer_name}</h1>
                    </Grid>
                    <Grid item xs={4}>
                        <h1><span className="receiverPayer">Payer:</span> {arrayJson.c_seller_name}</h1>
                        <p>{arrayJson.c_seller_address}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <hr className="MuiDivider-root blue-divider"></hr>
                        <div>
                            <Table className="paymentsellerList">
                                <TableHead>
                                    <TableRow className="head noBorder">
                                        <TableCell width="20%">Invoice Number</TableCell>
                                        <TableCell width="20%">Bill Date</TableCell>
                                        <TableCell width="60%">Invoice Balance</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {Array.isArray(arrayJson.j_bill_info) &&
                                    arrayJson.j_bill_info.length > 0 &&
                                    arrayJson.j_bill_info.map((item, index) => (
                                    <TableRow>
                                        <TableCell className="tBody">{item.c_bill_number}</TableCell>
                                        <TableCell className="tBody">{item.d_bill_date}</TableCell>
                                        <TableCell className="tBody">₹ {item.n_invoice_balance}</TableCell>
                                    </TableRow>
                                    ))}
                                    <TableRow className="totalPaymentAmount">
                                        <TableCell className="tBody" colSpan={2}>
                                            <div className="totalPaymentFooter br-ra-l-tb-8">
                                                <div className="pd-l-32 paymentFooterCon">
                                                    Total
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="tBody">
                                            <div className="totalPaymentFooter br-ra-r-tb-8">
                                                <div className="paymentFooterCon">
                                                    ₹ {arrayJson.n_outstanding_amount}
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                        <div className="mr-t-24 paymentTermsConditions">
                            <h6>
                                <Checkbox className="pd-l-32 itemMapCheckbox" color="primary" onClick={handleCheckTerms}/>  I have read and agree to the <span className="link" onClick={handleTermsAndConditionsPopupModal}>Terms and Conditions </span>and<span className="link"> Privacy Policy</span>
                            </h6>
                            {/*Add need add 'disabled'*/}
                            <Button variant="contained" className="" color="primary" disabled={checkTerms === true ? "" : "disabled"} onClick={(e) => handlePayNow(e)}>
                                Pay Now
                            </Button>

                        </div>
                        {/*<Button color="primary" onClick={handlePaymentSuccessfulPopupModal}>
                            Payment Successful
                        </Button>
                        <Button color="primary" onClick={handlePaymentCanceledPopupModal}>
                            Payment Canceled!
                        </Button>
                        <Button color="primary" onClick={handleAreYouSureModal}>
                            Are you sure?
                        </Button>*/}
                    </Grid>
                </Grid>
			</Container>
		</div>  

        <div className="termsAndCondi">
            <Container fixed>
                Copyright ©️ 2021 C-Square Info Solutions Pvt. Ltd. All rights reserved.
            </Container>
        </div>
        <TermsAndConditionsPopup 
          open={termsAndConditionsPopupModal}
          handleClose={handleCloseTermsAndConditionsPopupModal}
          />  
        <PaymentSuccessfulPopup 
          open={paymentSuccessfulPopupModal}
          handleClose={handleClosePaymentSuccessfulPopupModal}
          />  

        <PaymentCanceledPopup 
          open={paymentCanceledPopupModal}
          handleClose={handleClosePaymentCanceledPopupModal}
          />  

        </>
	)
}
export default FinalPaymentPage;
