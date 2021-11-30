import * as React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CrossImg from "../../../assets/images/cross-grey.svg";
import Notify from "../../../assets/images/notification-watchist.svg";
import { Tooltip, Zoom } from "@material-ui/core";

const WatchlistProductVisibility =  (props) => {
  const {openModal,closeModal} = props;
  const [open, setOpen] = React.useState(false);

  React.useEffect(()=>{
    setOpen(openModal);
  },[openModal])


  const handleClose = () => {
    setOpen(false);
    closeModal();
  };

  const [checkList, setCheckList] = React.useState({
    one: true,
    two: false,
    three: false,
    four: false
  })

  const handleCheckbox = (name) => (event) => {
    setCheckList({
      ...checkList,
      [name]: event.target.checked
    })
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="orderplaced-popup"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div
            className="watchlist-popup-sec"
          >
            <div className="align-right popup-align-right">
              <Tooltip title="Close" TransitionComponent={Zoom}>
                <div className="cross-img-div">
                  <img src={CrossImg} alt="cross-img" onClick={handleClose} />
                </div>
              </Tooltip>
            </div>
            <div className="align-center">
                <img src={Notify} alt="notification" />
                <p className="watchlist-popup-title">Great! want to get notified?</p>
                <p className="order-label">
                Please Select below option to get <br/> notification on product </p>
              
                <div className="checkbox-actions">
              
                    <FormControlLabel
                        control={
                            <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="large" style={{ borderRadius: 50 }} />}
                            checkedIcon={<CheckBoxIcon fontSize="large" style={{ borderRadius: 50 }} />}
                            checked={checkList.one}
                            onChange={handleCheckbox("one")}
                            color="primary"
                            className="adduser-checkbox-icon notify-checkbox"
                            />
                        }
                        label="Complete Up & Down Visibility"
                        className="adduser-checkbox "
                    />
                    <div className="dashed-divider"></div>
                    <FormControlLabel
                        control={
                            <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="large"/>}
                            checkedIcon={<CheckBoxIcon fontSize="large" />}
                            checked={checkList.two}
                            onChange={handleCheckbox("two")}
                            color="primary"
                            className="adduser-checkbox-icon notify-checkbox"
                            />
                        }
                        label="View On Rate"
                        className="adduser-checkbox"
                    />
                    <div className="dashed-divider"></div>

                    <FormControlLabel
                        control={
                            <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                            checkedIcon={<CheckBoxIcon fontSize="large" />}
                            checked={checkList.three}
                            onChange={handleCheckbox("three")}
                            color="primary"
                            className="adduser-checkbox-icon notify-checkbox"
                            />
                        }
                        label="View On Scheme/Discount"
                        className="adduser-checkbox "
                    />
                    <div className="dashed-divider"></div>

                    <FormControlLabel
                        control={
                            <Checkbox
                                icon={<CheckBoxOutlineBlankIcon fontSize="large"/>}
                                checkedIcon={<CheckBoxIcon fontSize="large" />}
                                checked={checkList.four}
                                onChange={handleCheckbox("four")}
                                color="primary"
                                className="adduser-checkbox-icon notify-checkbox"
                            />
                        }
                        label="Availability In Stock"
                        className="adduser-checkbox "
                    />
                    <div className="dashed-divider"></div>

                </div>
                <Button
                    variant="contained"
                    color="primary"
                    className="orderplaced-popup-btn done-btn"
                    >
                    done
                </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default WatchlistProductVisibility;
