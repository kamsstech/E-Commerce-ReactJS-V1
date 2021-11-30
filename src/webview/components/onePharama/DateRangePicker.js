import React,{useState} from "react";
import { DateRangePicker, DateRange } from "@shinabr2/react-material-daterange-picker";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import CrossImg from "../../../assets/images/cross-sb.svg";


const CustomRangeInputs = (props) => {
  const {openDateRange, handleOpenDateRange, handleRange} = props;

  const [dateRange, setDateRange] = useState({
    startDate: undefined,
    endDate: undefined
  });
  const handleCancel = () => {
    setDateRange({startDate : undefined,endDate : undefined})
    handleOpenDateRange()
  };
  return (
    <>
    {openDateRange &&
      <ClickAwayListener onClickAway={handleOpenDateRange}>
        <div className="order-daterange-picker order-datepicker-top">
        <div  className="box-view-tile-fav-cross-1 cursor" onClick={handleCancel}>
          <img src={CrossImg} alt="cross-img"/>
         </div>
          <DateRangePicker
            open={true}
            initialDateRange={dateRange}
            onChange={range => setDateRange(range)}
          />
          <div className="date-range-bottom">
            <Button
              variant="contained"
              color="primary"
              className="home-title-sectionbtn m-0"
              disabled={dateRange.startDate === undefined && dateRange.endDate === undefined}
              onClick={() => handleRange(dateRange)}
            >
              Ok
            </Button>
          </div>
        </div>
      </ClickAwayListener>
    }
    </>
  );
}

export default CustomRangeInputs