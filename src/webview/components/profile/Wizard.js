import React, { useState, useEffect } from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) =>
  createStyles({
    root: {
      height: 4,
      borderRadius: 3,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 3,
      backgroundColor: '#00d3b4',
    },
  }),
)(LinearProgress);



const Wizard = (props) => {
  const { step, progress } = props;

  const [val, setVal] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVal(progress);
    }, 2500);

    return () => {
      clearInterval(timer);
    };

  }, [])

  return (
    <div className="wizard-sec">
      <div className="f1-steps">
        <div className="f1-progress">
            <BorderLinearProgress variant="determinate" value={val} />
        </div>

        <div className={`step ${step > 0 && "activated"}`}>
          <div className="f1-step">
            <div className="f1-step-icon">
              <div className="small-circle"></div>
            </div>
          </div>
          <p>Firm legal Identities</p>
        </div>

        <div className={`step ${step > 1 && "activated"}`}>
          <div className="f1-step">
            <div className="f1-step-icon">
                <div className="small-circle"></div>
            </div>
          </div>
          <p>Other Documents</p>
        </div>

        <div className={`step ${step > 2 && "activated"}`}>
          <div className="f1-step">
            <div className="f1-step-icon">
                <div className="small-circle"></div>
            </div>
          </div>
          <p>Firm Contact Information</p>
        </div>
        <div className={`step ${step > 3 && "activated"}`}>
          <div className="f1-step">
            <div className="f1-step-icon">
                <div className="small-circle"></div>
            </div>
          </div>
          <p>Information</p>
        </div>
        <div className={`step ${step > 4 && "activated"}`}>
          <div className="f1-step">
            <div className="f1-step-icon">
                <div className="small-circle"></div>
            </div>
          </div>
          <p>Contact </p>
        </div>
        

      </div>
    </div>
  )
}

export default Wizard;