import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';

import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';

import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, InputAdornment, TextField } from '@material-ui/core';
import FirstAidKit from "../../../assets/images/first-aid-kit.svg";
import Camera from "../../../assets/images/camera.svg";

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundColor:
        '#00d3b4',
    },
  },
  completed: {
    '& $line': {
      backgroundColor:
        '#00d3b4',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    
    zIndex: 1,
    color: '#00d3b4',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor:
      '#fff'
  },
  completed: {
    backgroundColor:
      '#fff',
  }
  
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <RadioButtonCheckedIcon />,
    2: <RadioButtonCheckedIcon />,
    3: <RadioButtonCheckedIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Firm legal Identities', 'Other Documents', 'Firm Contact Information'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Firm legal Identities';
    case 1:
      return 'Other Documents';
    case 2:
      return 'Firm Contact Information';
    default:
      return 'Unknown step';
  }
}

export default function Wizard1() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

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
    <div className={classes.root}>
     


      
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>



      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep) ===  "Firm legal Identities" && (
                <Grid container spacing={0}>
                <Grid item xs={4}>
                <TextField
                    name="c_druglicense_no1"
                    
                    value=""
                    
                    autoComplete="off"
                    
                    margin="normal"
                    variant="outlined"
                    placeholder="Drug License Number 1 *"
                    className="auth-input"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={FirstAidKit} alt="mobile-phone" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <img src={Camera} alt="Camera" />
                          <input
                            type="file"
                            name="c_druglicense_no1_img"
                            id="c_druglicense_no1"
                            accept="image/jpeg, image/png, image/jpg, image/webp"
                            multiple={false}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  </Grid></Grid>
              ) }

              {getStepContent(activeStep) ===  "Other Documents" && (
                <Grid container spacing={0}>
                <Grid item xs={4}>
                <TextField
                    name="c_druglicense_no1"
                    
                    value=""
                    
                    autoComplete="off"
                    
                    margin="normal"
                    variant="outlined"
                    placeholder="Mobile Number *"
                    className="auth-input"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={FirstAidKit} alt="mobile-phone" />
                        </InputAdornment>
                      ),
                     
                    }}
                  />
                  </Grid></Grid>
              ) }
              </Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="fast-moving-addtocart"
                onClick={handleNext}
                // className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}