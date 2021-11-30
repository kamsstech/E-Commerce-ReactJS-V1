import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from "@material-ui/core/Button";

const Mailto = ({ email, subject, body, children }) => {
	return (
	  <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
	);
  };
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
}));

export default function SellersTab() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className={classes.root}>
			<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
					<AccordionSummary
				expandIcon={expanded === 'panel1'?<RemoveIcon />:<AddIcon/>}
				aria-controls="panel1bh-content"
				id="panel1bh-header"
			>
				<Typography className={classes.heading}>What is LiveOrder?</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>LiveOrder is a B2B Online ordering platform, connecting Buyers and Sellers which give overall solution to the Buyers. In return increasing the Business of the Sellers. Buyers are benefitted with several features to ease their day to day routine in Pharma World. Whereas, the Sellers can reach out the new Buyers with better utilisation of time by reducing the call centre cost.</Typography>
			</AccordionDetails>
		</Accordion>
		<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
			<AccordionSummary
				expandIcon={expanded === 'panel2'?<RemoveIcon />:<AddIcon/>}
				aria-controls="panel2bh-content"
				id="panel2bh-header"
			>
				<Typography className={classes.heading}>How does LiveOrder work?</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>LiveOrder is a single platform which works for both Buyers and Sellers, where they are mutually benefitted. This application can be accessed in the WEB, ANDROID and iOS version.</Typography>
			</AccordionDetails>
		</Accordion>
		<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
			<AccordionSummary
				expandIcon={expanded === 'panel3'?<RemoveIcon />:<AddIcon/>}
				aria-controls="panel3bh-content"
				id="panel3bh-header"
			>
				<Typography className={classes.heading}>How do I contact Customer Support?</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>Buyers can write us on 
					  
					 {/* <Button   title="liveorder@c2info.com">liveorder@c2info.com</Button> */}
					 <Button>
					 <Mailto email="liveorder@c2info.com" subject="Hello &amp; Welcome" body="Hello!">
									liveorder@c2info.com
								  	</Mailto>
					 </Button>
					 
					 or can call on to 080-67657007/8095170000 for instant Support.</Typography>
			</AccordionDetails>
		</Accordion>
		<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
			<AccordionSummary
				expandIcon={expanded === 'panel4'?<RemoveIcon />:<AddIcon/>}
				aria-controls="panel4bh-content"
				id="panel4bh-header"
			>
				<Typography className={classes.heading}>Will my data be safe?</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography><b>Yes</b>, your data is absolutely safe with us. Our well trained experts have performed all the safety measures in order not to give panic attacks to our beloved customers.</Typography>
			</AccordionDetails>
		</Accordion>
		 {/* <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
			<AccordionSummary
				expandIcon={expanded === 'panel5'?<RemoveIcon />:<AddIcon/>}
				aria-controls="panel5bh-content"
				id="panel5bh-header"
			>
				<Typography className={classes.heading}>Who is the provider for this service?</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography></Typography>
			</AccordionDetails>
		</Accordion> */}
		<Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
			<AccordionSummary
				expandIcon={expanded === 'panel6'?<RemoveIcon />:<AddIcon/>}
				aria-controls="panel6bh-content"
				id="panel6bh-header"
			>
				<Typography className={classes.heading}>Who can Buy and Sell products here?</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>In LiveOrder application, the Buyers can buy products from the Sellers.</Typography>
			</AccordionDetails>
		</Accordion>
	</div>
	);
}