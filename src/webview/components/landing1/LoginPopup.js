import * as React from "react";
import { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


import exclamation from "../../../assets/images/icons/exclamation.svg";
// import coming_soon from "../../../assets/images/coming_soon.png";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles, Theme, createStyles , MuiThemeProvider,createMuiTheme,withStyles} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStylesBranch = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
      letterSpacing:".8px",
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
				borderRadius: "14px",
				backgroundColor: "#fff",
				width: "11.9em",
				marginTop: "3em"
			}
		})
	);

const LoginPopup = (props) => {
	const {open, handleClose}= props
	return(
		<div>
			<Dialog 
			fullWidth={true}
        	maxWidth={'md'}
			onClose={handleClose} aria-labelledby="customized-dialog-title" className="sucDialogimg maximumReached" open={open}  >
				<DialogTitle id="customized-dialog-title" className="sucimgclose">
					<Tooltip title="Close" TransitionComponent={Zoom} >
						<IconButton style={{float:'right'}} aria-label="close"  onClick={handleClose}>
							<CloseIcon  />
						</IconButton>
					</Tooltip>
				</DialogTitle>
					{/* <img src={coming_soon} alt="coming soon" className="comesoonImg" /> */}
					<img src={exclamation} alt="exclamation" className="regsucimg" />		
				<DialogContent>
					<div className="text-center">
						<p className="orderf-title popupHead">Uh Oh!</p>
						<p className="popupDesc">You have reached your maximum of free search. <br/> <span>Please login to continue</span>.</p>
					</div>
				</DialogContent>
				<div className="regSuccbtn">
					<Link to="/login">
						<Button
							variant="contained"
							color="primary"
							className="theme-btn"
						>
							Login
						</Button>
					</Link>
				</div>	
				{/* </DialogActions> */}
			</Dialog>
		</div>
	)
}

export default LoginPopup;

