import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import Calendar from '../../../../src/assets/images/calendar-blue.svg';
import Pay from '../../../../src/assets/images/pay.svg';
import Invoice from '../../../../src/assets/images/invoice.svg';




const BillingInfo = (props) => {
    const {OrderDetailResult} = props;

    return(
       <>
      
            <div className="mr-t-36 order-historypage">  
            <div className="top-left mr-b-16">
                <Grid container>
                    <Grid item xs={8}>
                        <p className="_seller-name">{OrderDetailResult.payload.c_seller_name}</p>
                        <p className="order-id">Order Id:  {OrderDetailResult.payload.c_order_id}</p>
                    </Grid>    
                    <Grid item xs={4}>
                        <div className="address">
                            <p>{OrderDetailResult.payload.c_address}</p>
                        </div>
                    </Grid>    
                </Grid>
            </div>

            <Grid container>
                <Grid item xs={2}>
                    <p className="heading">Billed To</p>
                    <p className="heading-content billing-address">  
                    {OrderDetailResult.payload.c_address}
                        {/* Maruti Medicals -560027,
                        39/14, Sarjapur Main Rd,
                        Iblur Village, Bellandur, 
                        Bengaluru- 560102
                        Karnataka */}
                    </p>
                </Grid>
                <Grid item xs={2}>
                    <p className="heading mr-left">Invoice Date</p>
                    <p className="heading-content mr-left">
                        <img src={Calendar} alt="calendar"/>&nbsp;{OrderDetailResult.payload.c_invoice_date}
                    </p>
                </Grid>
                <Grid item xs={2}>
                    <p className="heading">Invoice No</p>
                    <p className="heading-content">
                    <img src={Invoice} alt="Invoice" />&nbsp;{OrderDetailResult.payload.c_invoice_number}
                    </p>
                </Grid>
                <Grid item xs={2}>
                    <p className="heading">Payment</p>
                    <p className="heading-content">
                    <img src={Pay} alt="Pay" />&nbsp;  {OrderDetailResult.payload.c_payment}
                    </p>
                </Grid>
                <Grid item xs={2}>
                    <p className="heading">Total Amount</p>
                    <p className="heading-content">
                     ₹ {(OrderDetailResult.payload.c_subtotal_amount)+(OrderDetailResult.payload.c_cash_discount)+(OrderDetailResult.payload.c_total_gst_amount)}
                    </p>
                </Grid>
                <Grid item xs={2}>
                    <p className="heading">Due Amount (₹)</p>
                    <p className="heading-content due-amt">
                        ₹{OrderDetailResult.payload.c_due_amount}
                    </p>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2} className="mr-top">
                    <p className="heading mr-left">Due Date</p>
                    <p className="heading-content mr-left">
                        <img src={Calendar} alt="calendar" /> {OrderDetailResult.payload.c_due_date}
                    </p>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2} className="mr-top">
                    <p className="heading">Amount Paid</p>
                    <p className="heading-content">
                    ₹ {OrderDetailResult.payload.c_amount_paid}
                    </p>
                </Grid>
            </Grid>
            <Divider className="blue-divider"/>
            
        </div>
           
       
       </>
        
        
    )
}

export default BillingInfo;