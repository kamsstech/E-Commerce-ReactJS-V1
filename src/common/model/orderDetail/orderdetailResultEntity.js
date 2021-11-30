export interface OrderdetailResultEntity {
     c_seller_code :string;
     c_seller_name :string;
     c_seller_address :string;
     c_order_id :string;
     d_invoice_date :string;
     c_invoice_number :string;
     c_payment_type :string;
     n_total_amount :number;
     n_amount_paid :number;
     n_due_amount :number;
     d_payment_due_date :string;
     a_order_items :[];
     n_sub_total :number;
     n_discount_amount :number;
     n_gst_amount :number;
}