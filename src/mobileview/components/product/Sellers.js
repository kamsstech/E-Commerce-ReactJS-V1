import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';


// interface Props {
//   match: any;
//   GetPdpPageSellerDetails(itemCode: string): void;
//   pdpPageSellerDetailsResult: SellerDetailsItemsEntity;

// }
const filter = createFilterOptions();

let array = [];
for (var i = 0; i <= 100; i++) {
  array.push({ title: (i * 10).toString() })
}
const Sellers = (props) => {
  const [value, setValue] = React.useState(array[0]);
  const [optValue, setOptValue] = React.useState("one");
  const { GetPdpPageSellerDetails, pdpPageSellerDetailsResult, match } = props;
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleSelect = (event) => {
    setOptValue(event.target.value);
  };
  useEffect(() => {
    GetPdpPageSellerDetails(match.params.itemCode)
  }, []);

  const payload = pdpPageSellerDetailsResult.payload;
  const lengthSellers = pdpPageSellerDetailsResult.payload.length;
  const countSellers = pdpPageSellerDetailsResult.payload.slice(4, lengthSellers).length;
  // const countSellers = pdpPageSellerDetailsResult.payload.length;

  return (
    <div>
      <div className="mob-profile-sel-title-sec">
        <h4 className="mob-profile-sel-title">Sellers:</h4>
        {lengthSellers > 4 ?
          (open ? <h4 className="mob-profile-sel-count" onClick={handleClick}>+{countSellers} Sellers</h4> : <h4 className="mob-profile-sel-count" onClick={handleClick}>- {countSellers} Sellers</h4>) : null}

      </div>
      <h4 className="mob-profile-sponsored">Sponsored</h4>
      {payload && (payload).slice(0, 4).map((seller, index) => (
        <div key={index}>
          <div >
            <h5 className="mob-pro-sellername">{seller.c_seller_name.toLowerCase()}</h5>
          </div>
          <div className="mob-pro-sellers-list" key={seller.c_seller_code}>
            <div>
              {/* <h5 className="mob-pro-sellername">{seller.c_seller_name.toLowerCase()}</h5> */}
              <h5 className="mob-pro-drugrate">Rate: ₹{seller.n_rate}</h5>
              <h5 className="mob-pro-scheme">Scheme:{seller.c_scheme}</h5>
            </div>

            <div className="mob-pro-sellers-list-buttons ">

              <Autocomplete
                id="controllable-states-demo"
                key={seller.c_seller_code}
                value={value && value[seller.c_seller_code]}
                onChange={(event, newValue) => {
                  if ( newValue === 'any') {
                    setValue({
                      title: newValue,
                    });
                  } else if (newValue && newValue.inputValue) {
                    setValue({
                      title: newValue.inputValue,
                    });
                  } else if(newValue == null ){
                    setValue({
                      title:  ''
                    })
                  }else {
                    setValue(newValue);
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);
                  if (params.inputValue !== '') {
                    filtered.push({
                      inputValue: params.inputValue,
                      title: params.inputValue,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                closeIcon={false}
                clearOnBlur
                handleHomeEndKeys
                options={array}
                getOptionLabel={(array) => array.title}
                className="mob-pro-drugcount pdp-drugcount"
                style={{ width: 30 }}
                renderInput={(params) => <TextField {...params} margin="normal" className="mob-pro-drugcount pdp-drugcount" variant="outlined" />}
              />
              <Button
                variant="contained"
                color="primary"
                className="fast-moving-addtocart fast-moving-spacing"
              >
                Add To Cart
             </Button>
            </div>
          </div>
        </div>

      ))}


      {(!open) ?
        (payload).slice(4, payload.length).map(seller => (
          <div>
            <div >
              <h5 className="mob-pro-sellername">{seller.c_seller_name.toLowerCase()}</h5>
            </div>
            <div className="mob-pro-sellers-list" key={seller.c_seller_code}>
              <div >

                <h5 className="mob-pro-drugrate">Rate: ₹{seller.n_rate}</h5>
                <h5 className="mob-pro-scheme">Scheme:{seller.c_scheme}</h5>
              </div>
              <div className="mob-pro-sellers-list-buttons ">

                <Autocomplete
                  id="controllable-states-demo"
                  key={seller.c_seller_code}
                  value={value && value[seller.c_seller_code]}
                  onChange={(event, newValue) => {
                    if ( newValue === 'any') {
                      setValue({
                        title: newValue,
                      });
                    } else if (newValue && newValue.inputValue) {
                      setValue({
                        title: newValue.inputValue,
                      });
                    } else if(newValue == null ){
                      setValue({
                        title:  ''
                      })
                    }else {
                      setValue(newValue);
                    }
                  }}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);
                    if (params.inputValue !== '') {
                      filtered.push({
                        inputValue: params.inputValue,
                        title: params.inputValue,
                      });
                    }

                    return filtered;
                  }}
                  selectOnFocus
                  closeIcon={false}
                  clearOnBlur
                  handleHomeEndKeys
                  options={array}
                  getOptionLabel={(array) => array.title}
                  className="mob-pro-drugcount pdp-drugcount"
                  style={{ width: 30 }}
                  renderInput={(params) => <TextField {...params} margin="normal" className="mob-pro-drugcount pdp-drugcount" variant="outlined" />}
                />
                <Button
                  variant="contained"
                  color="primary"
                  className="fast-moving-addtocart fast-moving-spacing"
                >
                  Add To Cart
                      </Button>
              </div>
            </div>
          </div>
        )) : null}

    </div>
  );
};

export default Sellers;
