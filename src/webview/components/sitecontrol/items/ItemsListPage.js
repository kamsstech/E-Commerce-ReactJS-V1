import React, {useEffect, useState} from 'react';
import Fade from '@material-ui/core/Fade';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';


import Shop from "../../../../assets/images/icons/shop.svg";
import User from "../../../../assets/images/icons/user.svg";
import Phone from "../../../../assets/images/icons/smartphone.svg";
import Email from "../../../../assets/images/email.svg";
import TAN_PAN from "../../../../assets/images/icons/pan-tan.svg";
import Narcotic from "../../../../assets/images/icons/narcotic-number.svg";
import RentAgreement from "../../../../assets/images/icons/rent-agreement.svg";
import PartnershipDeed from "../../../../assets/images/icons/partnership-deed.svg";
import AuthorityLetter from "../../../../assets/images/icons/authority-letter.svg";
import Zipcode from "../../../../assets/images/icons/zip-code.svg";
import State from "../../../../assets/images/icons/state.svg";
import City from "../../../../assets/images/icons/city.svg";
import Area from "../../../../assets/images/icons/area.svg";
import Landmark from "../../../../assets/images/landmark.svg";
import Address from "../../../../assets/images/address.svg";


import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import StepConnector from "@material-ui/core/StepConnector";
import {InputAdornment, TextField } from "@material-ui/core";
import FirstAidKit from "../../../../assets/images/first-aid-kit.svg";
import Camera from "../../../../assets/images/camera.svg";
import ImageView from "./ImageView";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Calendar from "../../../../assets/images/calendar.svg";
import Gst from "../../../../assets/images/gst.svg";
import Tax from "../../../../assets/images/tax.svg";
import Drug from "../../../../assets/images/drug.svg";
import PlusPurple from "../../../../assets/images/plus-purple.svg";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Slider from "@material-ui/core/Slider";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";

const ItemsListPage = (props) => {
	const [activeStep, setActiveStep] = React.useState(0);
	const handleNext = () => {
	    setActiveStep((prevActiveStep) => prevActiveStep + 1);
	  };

	  const handleBack = () => {
	    setActiveStep((prevActiveStep) => prevActiveStep - 1);
	  };

	  const handleReset = () => {
	    setActiveStep(0);
	  };
	return (
		<>
			<div>
				<Container fixed>
					<Stepper activeStep={activeStep} orientation="vertical">
				          <Step key="0">
				            <StepLabel>Product Basic Details</StepLabel>
				            <StepContent>
				              <Typography>Title 1</Typography>
				              <div>
				                <div>
				                {
				                	activeStep!=0 ? <Button
				                    onClick={handleBack}
				                  >
				                    Back
				                  </Button> : ""
				                }
				                  
				                  <Button
				                    variant="contained"
				                    color="primary"
				                    onClick={handleNext}
				                  >
				                  Next
				                  </Button>
				                </div>
				              </div>
				            </StepContent>
				          </Step>
				          <Step key="1">
				            <StepLabel>Product Categories</StepLabel>
				            <StepContent>
				              <Typography>Title 2</Typography>
				              <div>
				                <div>
				                  <Button
				                    onClick={handleBack}
				                  >
				                    Back
				                  </Button>
				                  <Button
				                    variant="contained"
				                    color="primary"
				                    onClick={handleNext}
				                  >
				                  Next
				                  </Button>
				                </div>
				              </div>
				            </StepContent>
				          </Step>
				          <Step key="2">
				            <StepLabel>Product Variant</StepLabel>
				            <StepContent>
				              <Typography>Title 2</Typography>
				              <div>
				                <div>
				                  <Button
				                    onClick={handleBack}
				                  >
				                    Back
				                  </Button>
				                  <Button
				                    variant="contained"
				                    color="primary"
				                    onClick={handleNext}
				                  >
				                  Next
				                  </Button>
				                </div>
				              </div>
				            </StepContent>
				          </Step>
				          <Step key="3">
				            <StepLabel>Product Images</StepLabel>
				            <StepContent>
				              <Typography>Title 2</Typography>
				              <div>
				                <div>
				                  <Button
				                    onClick={handleBack}
				                  >
				                    Back
				                  </Button>
				                  <Button
				                    variant="contained"
				                    color="primary"
				                    onClick={handleNext}
				                  >
				                  Next
				                  </Button>
				                </div>
				              </div>
				            </StepContent>
				          </Step>
				      </Stepper>
				     {/* {activeStep === steps.length && (
				        <Paper square elevation={0} className={classes.resetContainer}>
				          <Typography>All steps completed - you&apos;re finished</Typography>
				          <Button onClick={handleReset} className={classes.button}>
				            Reset
				          </Button>
				        </Paper>
				      )}*/}
				</Container>
			</div>
		</>
	);
};

export default ItemsListPage;