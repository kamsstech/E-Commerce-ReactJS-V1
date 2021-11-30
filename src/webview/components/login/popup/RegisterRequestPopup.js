import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import iconforsuccess from "../../../../assets/images/iconforsuccess.svg";
import exclamation from "../../../../assets/images/icons/exclamation.svg";
import loop from "../../../../assets/images/icons/loop.svg";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import {
	makeStyles,
	Theme,
	createStyles,
	MuiThemeProvider,
	createMuiTheme,
	withStyles,
} from "@material-ui/core/styles";

const useStylesBranch = makeStyles((theme) => ({
	arrow: {
		color: theme.palette.common.black,
	},
	tooltip: {
		backgroundColor: theme.palette.common.black,
		letterSpacing: ".8px",
		fontFamily: "Quicksand-Medium",
	},
}));

function BranchTooltip(props) {
	const classes = useStylesBranch();

	return <Tooltip arrow classes={classes} {...props} />;
}

const useStyles = makeStyles((theme) =>
	createStyles({
		grow: {
			flexGrow: 1,
		},
		dropdownStyle: {
			borderRadius: "6px",
			backgroundColor: "#fff",
			width: "11.9em",
			marginTop: "3em",
		},
	})
);

const RegisterRequestPopup = (props) => {
	return (
		<div>
			<>
			{ props.status === 0  && (
				<>
					<Dialog
						onClose={props.handleClose}
						aria-labelledby="customized-dialog-title"
						className="sucDialogimg"
						open={props.open}
					>
						<DialogTitle id="customized-dialog-title" className="sucimgclose">
							<Tooltip title="Close" TransitionComponent={Zoom}>
								<IconButton
									style={{ float: "right" }}
									aria-label="close"
									onClick={props.handleClose}
								>
									<CloseIcon />
								</IconButton>
							</Tooltip>
						</DialogTitle>

						<>
							<img src={loop} alt="loop" className="regsucimg" />
							<DialogContent>
								<div className="text-center">
									<p className="orderf-title">Welcome</p>

									<p className="orderf-label">
										{props.errormsg}
									</p>
								</div>
							</DialogContent>
							{/* <div className="regSuccbtn">
								<Link to="/register/buyer">
									<Button
										variant="contained"
										color="primary"
										className="theme-btn"
									>
										Register
									</Button>
								</Link>
							</div> */}
						</>

						<DialogActions></DialogActions>
					</Dialog>
				</>
			)}
			{ props.status === 5 && props.errormsg === "Not a registered user!" && (
				<>
					<Dialog
						onClose={props.handleClose}
						aria-labelledby="customized-dialog-title"
						className="sucDialogimg"
						open={props.open}
					>
						<DialogTitle id="customized-dialog-title" className="sucimgclose">
							<Tooltip title="Close" TransitionComponent={Zoom}>
								<IconButton
									style={{ float: "right" }}
									aria-label="close"
									onClick={props.handleClose}
								>
									<CloseIcon />
								</IconButton>
							</Tooltip>
						</DialogTitle>
						<>
							<div className="exclamation text-center">
								<img src={exclamation} alt="exclamation" className="exclamationImg" />
							</div>

							<DialogContent>
								<div className="text-center">
									<p className="orderf-title">Uh Oh!</p>
									<p className="orderf-label">
										Entered <span>Mobile Number</span> is not registered with us. Click below to Register
									</p>
								</div>
							</DialogContent>
							<div className="regSuccbtn">
								<Link to="/register/buyer">
									<Button
										variant="contained"
										color="primary"
										className="theme-btn"
									>
										Register
									</Button>
								</Link>
							</div>
						</>
					</Dialog>
				</>
			)}
			{props.status === 11 && (
				<>
					<Dialog
						onClose={props.handleClose}
						aria-labelledby="customized-dialog-title"
						className="sucDialogimg"
						open={props.open}
					>
						<DialogTitle id="customized-dialog-title" className="sucimgclose">
							<Tooltip title="Close" TransitionComponent={Zoom}>
								<IconButton
									style={{ float: "right" }}
									aria-label="close"
									onClick={props.handleClose}
								>
									<CloseIcon />
								</IconButton>
							</Tooltip>
						</DialogTitle>

						<>
							<div className="exclamation text-center">
								<img src={exclamation} alt="exclamation" className="exclamationImg" />
							</div>
							<DialogContent>
								<div className="text-center">
									<p className="orderf-title">Oops</p>

									<p className="orderf-label">
										Entered <span>Mobile Number / Password</span> is incorrect. Please Enter valid Mobile Number / Password.
									</p>
								</div>
							</DialogContent>
							{/* <div className="regSuccbtn">
								<Link to="/register/buyer">
									<Button
										variant="contained"
										color="primary"
										className="theme-btn"
									>
										Register
									</Button>
								</Link>
							</div> */}
						</>
					</Dialog>
				</>
			)}
			</>
		</div>
	);
};

export default RegisterRequestPopup;
