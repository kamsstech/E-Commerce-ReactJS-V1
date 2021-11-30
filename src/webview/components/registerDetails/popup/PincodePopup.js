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
import iconforsuccess from "../../../../assets/images/iconforsuccess.svg";
import loop from "../../../../assets/images/icons/loop.svg";
import {Link} from 'react-router-dom';
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles, Theme, createStyles , MuiThemeProvider,createMuiTheme,withStyles} from "@material-ui/core/styles";


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

const PincodePopup = (props) => {
	const {savePassResult} =props
	console.log(savePassResult,"<<< savePassResult")
			return(
			<div>
			
			<Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" className="sucDialogimg" open={props.open}  >
				<DialogTitle id="customized-dialog-title" className="sucimgclose">
					<Tooltip title="Close" TransitionComponent={Zoom} >
				 
					<IconButton style={{float:'right'}} aria-label="close"  onClick={props.handleClose}>
					<CloseIcon  />
				</IconButton>
				
					
				</Tooltip>
				</DialogTitle>
			
				<img src={loop} alt="loop" className="regsucimg" />
				
				
				<DialogContent>
				<div className="text-center">
				<p className="orderf-title">Oops</p>
				<h4 className="orderf-label">{savePassResult.error}</h4>
				<p >Please Enter Valid Pincode</p>
				</div>
			 
				
				</DialogContent>
				
					
					
				{/* </DialogActions> */}
			</Dialog>
		</div>
			)
}

export default PincodePopup;

