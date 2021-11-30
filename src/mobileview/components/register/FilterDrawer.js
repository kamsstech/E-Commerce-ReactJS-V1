import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckIcon from '@material-ui/icons/Check';
import Button from "@material-ui/core/Button";

//images
import CrossImg from "../../../assets/mobImages/cross-grey/cross.png";



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 340,
    },
}));


const FilterDrawer = (props) => {
    const { toggleDrawer, openDrawer } = props;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <SwipeableDrawer
                anchor="bottom"
                open={openDrawer}
                className="drawerRadius"
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <div className="mob-profile-sec-space pb-0">
                    <div className="mob-addbranch-drawer">
                        <h4 className="mob-addbranch-drawer-title">Filter</h4>
                        <img src={CrossImg} alt="CrossImg" onClick={toggleDrawer(false)} />
                    </div>
                    <p className="mob-addbranch-drawer-subtitle">Apply filter given below</p>
                    <div className="dashed-divider"></div>
                </div>
                <div className={`${classes.root} alternate-filter-tab`}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                    >
                        <Tab label="Product Category" {...a11yProps(0)} />
                        <Tab label="Manufacturer" {...a11yProps(1)} />
                        <Tab label="Scheme" {...a11yProps(2)} />
                        <Tab label="Distributor" {...a11yProps(3)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <ul className="alternate-filter-tab-list">
                            <li>
                                <FormControlLabel
                                    control={<Checkbox color="primary" icon={<CheckIcon />} checkedIcon={<CheckIcon />} name="checkedH" />}
                                    label="Generic"
                                />
                            </li>
                            <li>
                                <FormControlLabel
                                    control={<Checkbox color="primary" icon={<CheckIcon />} checkedIcon={<CheckIcon />} name="checkedH" />}
                                    label="Branded"
                                />
                            </li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <ul className="alternate-filter-tab-list">
                            <li>
                                <FormControlLabel
                                    control={<Checkbox color="primary" icon={<CheckIcon />} checkedIcon={<CheckIcon />} name="checkedH" />}
                                    label="Abbott"
                                />
                            </li>
                            <li>
                                <FormControlLabel
                                    control={<Checkbox color="primary" icon={<CheckIcon />} checkedIcon={<CheckIcon />} name="checkedH" />}
                                    label="Alkem"
                                />
                            </li>
                            <li>
                                <FormControlLabel
                                    control={<Checkbox color="primary" icon={<CheckIcon />} checkedIcon={<CheckIcon />} name="checkedH" />}
                                    label="Apex"
                                />
                            </li>
                            <li>
                                <FormControlLabel
                                    control={<Checkbox color="primary" icon={<CheckIcon />} checkedIcon={<CheckIcon />} name="checkedH" />}
                                    label="Cipla"
                                />
                            </li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <ul className="alternate-filter-tab-list">
                            <li>
                                <FormControlLabel
                                    control={<Checkbox color="primary" icon={<CheckIcon />} checkedIcon={<CheckIcon />} name="checkedH" />}
                                    label="Schemed prodcuts"
                                />
                            </li>
                            <li>
                                <FormControlLabel
                                    control={<Checkbox color="primary" icon={<CheckIcon />} checkedIcon={<CheckIcon />} name="checkedH" />}
                                    label="Non schemed products"
                                />
                            </li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <ul className="alternate-filter-tab-list">
                            <li>
                                <FormControlLabel
                                    control={<Checkbox color="primary" icon={<CheckIcon />} checkedIcon={<CheckIcon />} name="checkedH" />}
                                    label="Mahaveer medi sales"
                                />
                            </li>
                            <li>
                                <FormControlLabel
                                    control={<Checkbox color="primary" icon={<CheckIcon />} checkedIcon={<CheckIcon />} name="checkedH" />}
                                    label="Medico Pharma"
                                />
                            </li>
                            <li>
                                <FormControlLabel
                                    control={<Checkbox color="primary" icon={<CheckIcon />} checkedIcon={<CheckIcon />} name="checkedH" />}
                                    label="Raj sons Pharma"
                                />
                            </li>
                            <li>
                                <FormControlLabel
                                    control={<Checkbox color="primary" icon={<CheckIcon />} checkedIcon={<CheckIcon />} name="checkedH" />}
                                    label="Vardhaman Pharma"
                                />
                            </li>
                        </ul>
                    </TabPanel>
                </div>
                <div className="mob-cartstepper-height"></div>
                <div className="mob-profile-stepper-sec width-100">
                    <Button variant="outlined" className="mob-changePass-btn m-0">
                        Apply
                    </Button>
                </div>
            </SwipeableDrawer>
        </div>
    );
}

export default FilterDrawer;