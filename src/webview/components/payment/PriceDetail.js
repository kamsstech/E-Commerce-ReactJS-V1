import React from 'react';
import { Table, TableRow, TableCell, Divider, Button, TableBody } from '@material-ui/core';
import ItemView from '../chooseDeliverySlots/ItemView';

  
const PriceDetail = (props) => {
    const { priceDetail } = props;
    const [open, setOpen] = React.useState(false);
    const paymentHandle =() =>{
        console.log(priceDetail,"priceDetail")
    }
    const handleOpen = () => {
        setOpen(true);
    };
    return(
        
        <div className="order-price-breakup">
            <div className="order-details">
                <p className="seller-name">{priceDetail.seller}</p>
                <p className="order-subtitle">Price Details <span onClick={handleOpen}>({priceDetail.noOfItems} items)</span></p>
                <Divider className="divider"/>
                <Table className="payment-breakup-table">
                    <TableBody>
                    <TableRow>
                        <TableCell className="price-rows">Total Amount</TableCell>
                        <TableCell className="price-value"><i>&#8377;</i>&nbsp;{priceDetail.totalAmt}</TableCell>
                    </TableRow>
                    
                    <TableRow>
                        <TableCell className="price-rows">Total GST</TableCell>
                        <TableCell className="price-value"><i>&#8377;</i>&nbsp;{priceDetail.totalGst}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="price-rows">Coupon Discount</TableCell>
                        <TableCell className="price-value" style={{color:"#00d3b4"}}><i>&#8377;</i>&nbsp;{priceDetail.discountAmt}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="price-rows">Delivery Charges</TableCell>
                        <TableCell className="price-value delivery-charge"><i>&#8377;</i>&nbsp;{priceDetail.deliveryCharge}</TableCell>
                    </TableRow>
                    </TableBody>
                    </Table>
                    <div className="dashed-divider-table"></div>
                    <Table className="payment-breakup-table2">
                        <TableBody>
                        <TableRow>
                            <TableCell className="final-amt">Total Amount Payable</TableCell>
                            <TableCell className="final-amt-value"><i>&#8377;</i>&nbsp;{priceDetail.payableAmt}</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                
                    <Button 
                        onClick={paymentHandle}
                        variant="contained"
                        color="primary"
                        className="pay-now-btn"
                    >
                        pay now
                    </Button>
                {/* </div> */}
            </div>
            <ItemView isOpen={open}  setIsOpen = {setOpen} />

        </div>
            
    )
}

export default PriceDetail;