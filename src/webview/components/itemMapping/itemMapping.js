import React,{useState,useEffect}  from 'react'
import './css/itemMapping.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from "@material-ui/core/Container";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import ItemSubMasterMapping from './itemSubMasterMapping/itemSubMasterMapping';
import ItemSubMasterMappingCount from './itemSubMasterMapping/itemSubMasterMappingCount';

import ItemMasterMapping from './itemMasterMapping/itemMasterMapping';
import ItemMasterMappingCount from './itemMasterMapping/itemMasterMappingCount';
import { Constants } from "../../../common/constant/localstorage";
	

function a11yProps(index) {
	return {
	  id: `full-width-tab-${index}`,
	  'aria-controls': `full-width-tabpanel-${index}`,
	};
}
const useStyles = makeStyles((theme) => ({
	root: {
	  backgroundColor: theme.palette.background.paper,
	  width: 500,
	},
}));

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	const classes = useStyles();

	return (
	  <div
		role="tabpanel"
		hidden={value !== index}
		id={`full-width-tabpanel-${index}`}
		aria-labelledby={`full-width-tab-${index}`}
		{...other}
	  >
		{value === index && (
		  <Box p={3}>
			<Typography>{children}</Typography>
		  </Box>
		)}
	  </div>
	);
 }
	
	const ItemMapping =(props)=>{

	  const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	  const classes = useStyles();
  	  const {GetItemMasterMapCount,itemMasterMapCountResult,GetItemMasterMap,itemMasterMapResult,MoveOwnItemMasterMap,ownItemMasterMapResult,MoveBlockItemMasterMap,blockItemMasterMapResult,MoveConfirmItemMasterMap,confirmItemMasterMapResult,MoveOwnAllItemMasterMap,ownAllItemMasterMapResult,DeleteItemMasterMap,deleteItemMasterMapResult ,GetItemSubMasterMapCount,itemSubMasterMapCountResult,GetItemSubMasterMap,itemSubMasterMapResult,MoveOwnItemSubMasterMap,ownItemSubMasterMapResult,MoveBlockItemSubMasterMap,blockItemSubMasterMapResult,MoveConfirmItemSubMasterMap,confirmItemSubMasterMapResult,MoveOwnAllItemSubMasterMap,ownAllItemSubMasterMapResult,DeleteItemSubMasterMap,deleteItemSubMasterMapResult,SearchByProduct,searchByProductResult,GetItemSubMasterSearch,itemSubMasterSearchResult} = props;
	  const theme = useTheme();
	  const [value, setValue] = useState(0);
	  // console.log(itemMasterMapResult,"<<< itemMasterMapResult")
   
return(
	<div className="itemmapping-tab-wrapper">
		<div className="itemmapping-tab-sec">
			<div className="itemmapping-tab-sec-inner">
				<Container fixed>
					<AppBar position="static" color="default">
						<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor="primary"
						textColor="primary"
						aria-label="full width tabs example"
						className="order-history-tab custom-ors-tab"
						>
						<Tab label="Item Sub-Master Mapping" {...a11yProps(0)} />
						<Tab label="Item Master Mapping" {...a11yProps(1)} />
						</Tabs>
					</AppBar>
				</Container>
			</div>
		</div>
			<TabPanel value={value} index={0} dir={theme.direction}>
				<div className="itemmapping-tab-subwrapper pb-0">
					<div className="countWrapper">
						<Container fixed>
							<ItemSubMasterMappingCount
							GetItemSubMasterMapCount={GetItemSubMasterMapCount}
                            itemSubMasterMapCountResult={itemSubMasterMapCountResult}
							/>
						</Container>
					</div>
					<Container fixed>
						<ItemSubMasterMapping
						GetItemSubMasterMapCount={GetItemSubMasterMapCount}
                        itemSubMasterMapCountResult={itemSubMasterMapCountResult}
                        GetItemSubMasterMap={GetItemSubMasterMap}
                        itemSubMasterMapResult={itemSubMasterMapResult}
                        MoveOwnItemSubMasterMap={MoveOwnItemSubMasterMap}
                        ownItemSubMasterMapResult={ownItemSubMasterMapResult}
                        MoveOwnAllItemSubMasterMap={MoveOwnAllItemSubMasterMap}
                        ownAllItemSubMasterMapResult={ownAllItemSubMasterMapResult}
                        MoveBlockItemSubMasterMap={MoveBlockItemSubMasterMap}
                        blockItemSubMasterMapResult={blockItemSubMasterMapResult}
                        MoveConfirmItemSubMasterMap={MoveConfirmItemSubMasterMap}
                        confirmItemSubMasterMapResult={confirmItemSubMasterMapResult}
                        DeleteItemSubMasterMap={DeleteItemSubMasterMap}
                        deleteItemSubMasterMapResult={deleteItemSubMasterMapResult}
                        GetItemSubMasterSearch={GetItemSubMasterSearch}
                        itemSubMasterSearchResult={itemSubMasterSearchResult}
                        />
					</Container>
				</div>
			</TabPanel>
			<TabPanel value={value} index={1} dir={theme.direction}>
                <div className="itemmapping-tab-subwrapper pb-0">
                    <div className="countWrapper">
                        <Container fixed>
                            <ItemMasterMappingCount 
                            GetItemMasterMapCount={GetItemMasterMapCount}
                            itemMasterMapCountResult={itemMasterMapCountResult}
                            />
                        </Container>
                    </div>
                    <Container fixed>
                        <ItemMasterMapping
                        GetItemMasterMapCount={GetItemMasterMapCount}
                        itemMasterMapCountResult={itemMasterMapCountResult}
                        GetItemMasterMap={GetItemMasterMap}
                        itemMasterMapResult={itemMasterMapResult}
                        MoveOwnItemMasterMap={MoveOwnItemMasterMap}
                        ownItemMasterMapResult={ownItemMasterMapResult}
                        MoveOwnAllItemMasterMap={MoveOwnAllItemMasterMap}
                        ownAllItemMasterMapResult={ownAllItemMasterMapResult}
                        MoveBlockItemMasterMap={MoveBlockItemMasterMap}
                        blockItemMasterMapResult={blockItemMasterMapResult}
                        MoveConfirmItemMasterMap={MoveConfirmItemMasterMap}
                        confirmItemMasterMapResult={confirmItemMasterMapResult}
                        DeleteItemMasterMap={DeleteItemMasterMap}
                        deleteItemMasterMapResult={deleteItemMasterMapResult}
                        SearchByProduct={SearchByProduct}
                        searchByProductResult={searchByProductResult}
                        />
                    </Container>
                </div>
			</TabPanel>
	</div>
	)
}

export default ItemMapping