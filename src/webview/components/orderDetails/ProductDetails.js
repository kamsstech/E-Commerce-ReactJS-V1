import React from 'react';
import { Table, TableRow, TableCell, Divider, Button, TableBody, TableHead } from '@material-ui/core';




const PurchasedProductDetails = (props) => {
    const {OrderDetailResult} = props;
    console.log(OrderDetailResult,"<<<<<<<<<<<<<<<<<<&&&&&&&&&OrderDetailResult")
    
    return(
        <div className="ordered-products">
        <Table>
            <TableHead>
                <TableRow className="head noBorder">
                    <TableCell>Item Name</TableCell>
                    <TableCell>Batch No.</TableCell>
                    <TableCell>Expiry Date</TableCell>
                    <TableCell>MRP(₹)</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>Scheme Qty.</TableCell>
                    <TableCell>Discount</TableCell>
                    <TableCell>Sale Rate</TableCell>
                    <TableCell>GST</TableCell>
                    <TableCell>Net Amount</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {/* Array.isArray(OrderDetailResult.j_purchase_items) && OrderDetailResult.j_purchase_items.length > 0 && */}
                {OrderDetailResult.j_purchase_items && OrderDetailResult.j_purchase_items.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="tBody">{item.c_item_name}</TableCell>
                        <TableCell className="tBody">{item.c_batch_no}</TableCell>
                        <TableCell className="tBody">{item.c_expiry_date}</TableCell>
                        <TableCell className="tBody">{item.c_mrp}</TableCell>
                        <TableCell className="tBody">{item.c_qty}</TableCell>
                        <TableCell className="tBody">{item.c_scheme_qty}</TableCell>
                        <TableCell className="tBody">{item.c_discount}</TableCell>
                        <TableCell className="tBody">{item.c_sale_rate}</TableCell>
                        <TableCell className="tBody">{item.c_gst}</TableCell>
                        <TableCell className="tBody">{item.c_net_amount}</TableCell>
                    </TableRow>
                ))}
            <TableRow>
            </TableRow>
            </TableBody>
        </Table>
        </div>
    )
}

export default PurchasedProductDetails;
