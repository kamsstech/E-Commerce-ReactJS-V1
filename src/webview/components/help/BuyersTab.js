import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


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

export default function BuyersTab() {
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
					<Typography className={classes.heading}>How can i register as a Buyer?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Buyer can register himself by completing the Sign up process.</Typography>
					<Typography>The buyer needs to enter the Firm name, Mobile number and create own password. </Typography>
					<Typography>Once this step is completed, the buyer's mobile number will be prompted with an OTP. Upon OTP verification, the buyer has to fill the FIRM DETAILS and the Buyer will be registered.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<AccordionSummary
					expandIcon={expanded === 'panel2'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel2bh-content"
					id="panel2bh-header"
				>
					<Typography className={classes.heading}>What are the documents required to register as a buyer on LiveOrder?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>The Buyer need to enter his Firm name, Contact person name, Contact number, Address, City, State, Pin code and GST details respectively. Buyer also can upload the Drug Licence picture and its validity date.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
				<AccordionSummary
					expandIcon={expanded === 'panel3'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel3bh-content"
					id="panel3bh-header"
				>
					<Typography className={classes.heading}>Is credit available and wat will be the credit limit?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Yes, the credit will be available for the buyer and the limit will be set by their respective distributors.</Typography>
				</AccordionDetails>
			</Accordion>
			{/* <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
				<AccordionSummary
					expandIcon={expanded === 'panel4'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel4bh-content"
					id="panel4bh-header"
				>
					<Typography className={classes.heading}>How can I add a Seller?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>The Buyer can send the request to the Seller by entering the details such as Store Info, Legal identities and Address by clicking the "Add Seller"option under Unmapped Seller page. Upon approval by the Seller, the Seller will be mapped/added to the retailer.</Typography>
				</AccordionDetails>
			</Accordion> */}
			 <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
				<AccordionSummary
					expandIcon={expanded === 'panel5'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel5bh-content"
					id="panel5bh-header"
				>
					<Typography className={classes.heading}>Can i see availabitity, Price and Schemes?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography><b>Yes</b>, the stock availability, price and Schemes can be accessed in the LiveOrder.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
				<AccordionSummary
					expandIcon={expanded === 'panel6'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel6bh-content"
					id="panel6bh-header"
				>
					<Typography className={classes.heading}>Can I see full details and Description of the product?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Yes, the product details such as Product name, Product Image, MRP, PTR, Schemes, GST detail, HSN code, Molecules and Packaging details are displayed in the Live Order.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
				<AccordionSummary
					expandIcon={expanded === 'panel7'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel7bh-content"
					id="panel7bh-header"
				>
					<Typography className={classes.heading}>Can I see the Order status?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>The Order status can be viewed in the ORDER HISTORY option, where the different stages of delivery is being tracked.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
				<AccordionSummary
					expandIcon={expanded === 'panel8'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel8bh-content"
					id="panel8bh-header"
				>
					<Typography className={classes.heading}>Do we have an alert / notification for wishlisted products?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Yes, we have. You can wishlist the products and our platform will notify you when the product is on scheme or in stock.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
				<AccordionSummary
					expandIcon={expanded === 'panel9'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel9bh-content"
					id="panel9bh-header"
				>
					<Typography className={classes.heading}>Is tracking system available for an order?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>The Order can be tracked in the Order History page.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
				<AccordionSummary
					expandIcon={expanded === 'panel10'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel10bh-content"
					id="panel10bh-header"
				>
					<Typography className={classes.heading}>Can i give order to multiple seller at a time?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Yes, Buyer can send orders to multiple Sellers at a time.</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}