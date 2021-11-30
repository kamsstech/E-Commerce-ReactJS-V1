import * as React from "react";
import {useEffect} from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const TermsAndConditionsPopup = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  const {open, handleClose } = props;
  const [scroll, setScroll] = React.useState('paper');
  const [maxWidth, setMaxWidth] = React.useState('md');
  const [fullWidth, setFullWidth] = React.useState(false);

  return (
    <div>
      <Dialog
        className="onePharmaPopup TermsAndConditions"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogContent>
            <div className="relative">
                <h1 className="title">Terms &amp; Conditions</h1>
                <Tooltip title="Close" placement="bottom">
                    <Button onClick={handleClose}><CloseOutlinedIcon/></Button>
                </Tooltip>
            </div>
            <h4 className="mr-b-32 last-revised">Last Revised: 15 February, 2021 </h4>
            <h2 className="subtitle">Please read all the terms &amp; conditions carefully before accepting it.</h2>
            <div className="onePharamaContent">
                <h3>1. General</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className="onePharamaContent">
                <h3>2. Credit Limit Introduction</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of  classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics.</p>
            </div>
            <div className="onePharamaContent">
                <h3>2.1 Define Instruction</h3>
                <List component="nav">
                    <ListItem>
                        <ListItemIcon><FiberManualRecordIcon fontSize='small' /></ListItemIcon>
                        <ListItemText primary="The standard chunk of Lorem Ipsum used since the 1500s is reproduced." />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><FiberManualRecordIcon fontSize='small' /></ListItemIcon>
                        <ListItemText primary="1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum 'by Cicero." />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><FiberManualRecordIcon fontSize='small' /></ListItemIcon>
                        <ListItemText primary="The standard chunk of Lorem Ipsum used since the 1500s is reproduced." />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><FiberManualRecordIcon fontSize='small' /></ListItemIcon>
                        <ListItemText primary="1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero." />
                    </ListItem>
                </List>
            </div>
            <div className="onePharamaContent">
                <h3>2.2 Terms &amp; conditions</h3>
                <List component="nav">
                    <ListItem>
                        <ListItemIcon><FiberManualRecordIcon fontSize='small' /></ListItemIcon>
                        <ListItemText primary="The standard chunk of Lorem Ipsum used since the 1500s is reproduced." />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><FiberManualRecordIcon fontSize='small' /></ListItemIcon>
                        <ListItemText primary="1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero." />
                    </ListItem>
                </List>
                <ul>
                    <li></li> 
                    <li></li>
                </ul>
            </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TermsAndConditionsPopup;
