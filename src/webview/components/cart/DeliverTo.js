import React from "react";
import Container from "@material-ui/core/Container";
import PaymentStatus from "../../../assets/images/payment-status.svg";
import LocationImg from "../../../assets/images/location-purple.svg";
import EditAddressModal from "./EditAddressModal";
import Select from '@material-ui/core/Select';
import { MenuItem } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
const DeliverTo = (props) => {
  const {getCartItemResult,branchListResult} = props;
  const [open, setOpen] = React.useState(false);
  const [filterBy, setFilterBy] = React.useState(1);
  // console.log(getCartItemResult.payload.length,"getCartItemResult length")
  const handleClose = () => {
    setOpen(false);
  }

  
  return (
    <div>
      <Container fixed>
        <div className="deliver-to-sec">
          <h4>My Shopping Cart ({getCartItemResult.payload.length} Items)</h4>
          <div className="deliver-to-add-sec">
            <img src={LocationImg} alt="LocationImg" className="mr-10"/>
            <p>Deliver to</p>
           
             {/* <Select 
             menuPlacement="auto"
             menuPosition="fixed"
             placeholder="Select the Deliver Address"
            className=" width212  filterBy"
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            value="Bangolore, 5600029"
            variant="outlined"
         
             >
               <MenuItem className="sel-add" value="1"></MenuItem>
             {
            branchListResult.payload !== "" && branchListResult.payload.map((item, index) => (
             <MenuItem className="sel-add" value={item.c_pincode}>{item.c_city_name},{item.c_area_name},{item.c_pincode}</MenuItem>
             ))
          }

               </Select> */}
              

               { branchListResult.payload !== "" && branchListResult.payload.map((item, index) => (
            <div className="default-address-sec" key={index}>
              <p className="sel-add"><span>{item.c_name}</span>,{item.c_city_name},{item.c_area_name},{item.c_pincode}</p>
             <p className="edit-link" onClick={() => setOpen(true)}>Edit</p>
             </div>
             ))
            }
          </div>
        </div>
      </Container>
      <EditAddressModal open={open} handleClose={handleClose} branchListResult={branchListResult} />
    </div>
  )
}

export default DeliverTo;