import * as React from "react";
import { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { RegisterEntity } from "../../../../common/model"
import iconforsuccess from "../../../../assets/images/iconforsuccess.svg";
import crossimg from "../../../../assets/images/cross.svg";

import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles, Theme, createStyles, MuiThemeProvider, createMuiTheme, withStyles } from "@material-ui/core/styles";


const useStylesBranch = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    letterSpacing: ".8px",
    fontFamily: "Quicksand-Medium",
  }
}));

function BranchTooltip(props) {
  const classes = useStylesBranch();

  return <Tooltip arrow classes={classes} {...props} />;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    dropdownStyle: {
      borderRadius: "6px",
      backgroundColor: "#fff",
      width: "11.9em",
      marginTop: "2em"
    }
  })
);



const SucessProfilePassPop = (props) => {



  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={props.handleClickOpen}>
        Open dialog
      </Button> */}
      <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" className="sucDialogimg" open={props.open}  >
        <DialogTitle id="customized-dialog-title" className="sucimgclose">
          <Tooltip title="Close" TransitionComponent={Zoom} >
            <IconButton aria-label="close" onClick={props.handleClose}>
              {/* <img
                src={crossimg}
                alt="crossimg"
                className=""
              /> */}
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </DialogTitle>
        <img
          src={iconforsuccess}
          alt="iconforsuccess"
          className="passucimg"
        />
        <DialogContent>
          <div className="passucimgmsg"> {props.changePasswordResult.payload}</div>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={props.handleClose} color="primary">
            Save changes
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SucessProfilePassPop;
