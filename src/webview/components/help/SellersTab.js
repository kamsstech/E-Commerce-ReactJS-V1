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

export default function GeneralTab() {
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
					<Typography className={classes.heading}>How can i register as a Seller?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Seller can register himself by completing the Sign up process.</Typography>
					<Typography>The Seller needs to enter the Firm name, Mobile number and create own password. </Typography>
					<Typography>Once this step is completed, the seller's mobile number will be prompted with an OTP. Upon OTP verification, the seller has to fill the FIRM CONTACT INFO(Contact person name, contact number, address and Email) and FIRM LEGAL IDENTITIES(GST details and  DL number) for getting registered.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<AccordionSummary
					expandIcon={expanded === 'panel2'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel2bh-content"
					id="panel2bh-header"
				>
					<Typography className={classes.heading}>What are the documents required to register as a Seller on LiveOrder?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>The Seller need to enter his Firm name, Contact person name, Contact number, Address, City, State, Pin code, DL number and GST details respectively.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
				<AccordionSummary
					expandIcon={expanded === 'panel3'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel3bh-content"
					id="panel3bh-header"
				>
					<Typography className={classes.heading}>How can I give credit to Buyers?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>The credit limit shall be decided by the Seller, the buyer cannot  placed the orders if the limit is crossed.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
				<AccordionSummary
					expandIcon={expanded === 'panel4'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel4bh-content"
					id="panel4bh-header"
				>
					<Typography className={classes.heading}>How can I add a Buyer?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>The Buyer can be created in the Seller software and upon updation to the Liveorder, Buyers can be created.</Typography>
					<Typography>The Buyer can send a request to the Seller for activation,  the seller can approve the request and add him as a Buyer.</Typography>
				</AccordionDetails>
			</Accordion>
			 <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
				<AccordionSummary
					expandIcon={expanded === 'panel5'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel5bh-content"
					id="panel5bh-header"
				>
					<Typography className={classes.heading}>How can I upload the scheme?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>The Schemes are to be updated in the Seller software, where the same data shall be synchronised to the LiveOrder.</Typography>
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
					<Typography><b>Yes</b>, the product details such as Product name, Product Image, MRP, PTR, Schemes, GST detail, HSN code, Molecules and Packaging details are displayed in the Live Order.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
				<AccordionSummary
					expandIcon={expanded === 'panel7'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel7bh-content"
					id="panel7bh-header"
				>
					<Typography className={classes.heading}>What products can I sell on LiveOrder?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>The product category such as Generic medicines, Ayurvedic medicines, FMCG and OTC products can be sold in Live Order.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
				<AccordionSummary
					expandIcon={expanded === 'panel8'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel8bh-content"
					id="panel8bh-header"
				>
					<Typography className={classes.heading}>I don't have a website, can I still sell on Live Order?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography><b>Yes</b>, the seller can register on the platform and can sell the products in Live Order.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
				<AccordionSummary
					expandIcon={expanded === 'panel9'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel9bh-content"
					id="panel9bh-header"
				>
					<Typography className={classes.heading}>How do I list my products on Live Order?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>The Seller can create the Items in the Seller software and the same shall be updated in the Live Order.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
				<AccordionSummary
					expandIcon={expanded === 'panel10'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel10bh-content"
					id="panel10bh-header"
				>
					<Typography className={classes.heading}>How do I manage my Orders on LiveOrder?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Seller can download the orders from LiveOrder to their respective Seller software and can process the orders to the Buyers.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
				<AccordionSummary
					expandIcon={expanded === 'panel11'?<RemoveIcon />:<AddIcon/>}
					aria-controls="panel11bh-content"
					id="panel11bh-header"
				>
					<Typography className={classes.heading}>How can i grow my Business in Live Order?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Seller can opt this platform for an hassle-free interaction with the Buyers in delivering their orders by reducing the call center time. This application is user friendly with multiple features, enables the buyers to use in a much faster and reliable way. Due to which the sellers get many orders and hence the Business grows eventually.</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}