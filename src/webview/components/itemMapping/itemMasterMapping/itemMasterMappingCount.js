import React,{useState,useEffect}  from 'react'
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Constants } from "../../../../common/constant/localstorage";
import circleImg from "../../../../assets/images/icons/item-mapping-pattern.svg";

const ItemMasterMappingCount =(props)=>{
	const {GetItemMasterMapCount,itemMasterMapCountResult} = props;
	const exJson={
		"c_total_count":"0",
		"c_mapped_count":"0",
		"c_unmapped_count":"0",
		"c_ownitems_count":"0",
		"c_blocked_count":"0"
  	}
    const [totalCount, setTotalCount] = useState(exJson.c_total_count);
    const [mapCount, setMapCount] = useState(exJson.c_mapped_count);
    const [unmapCount, setUnmapCount] = useState(exJson.c_unmapped_count);
    const [ownICount, setOwnICount] = useState(exJson.c_ownitems_count);
    const [blockCount, setBlockCount] = useState(exJson.c_blocked_count);
    const c2code=localStorage.getItem(Constants.C2_CODE);
    useEffect(() => {
	  		
	  		const body = {
		      c_c2code: c2code,
		    };
		    GetItemMasterMapCount(body);
	  }, []);
	useEffect(() => {
		// console.log(itemMasterMapCountResult.payload)
		if (itemMasterMapCountResult.payload !=''){
			if (itemMasterMapCountResult.payload.c_total_count != "") {
		      setTotalCount(itemMasterMapCountResult.payload.c_total_count);
		  	}
		  	if (itemMasterMapCountResult.payload.c_mapped_count != "") {
		      setMapCount(itemMasterMapCountResult.payload.c_mapped_count);
		    }
		    if (itemMasterMapCountResult.payload.c_unmapped_count != "") {
		      setUnmapCount(itemMasterMapCountResult.payload.c_unmapped_count);
		    }
		    if (itemMasterMapCountResult.payload.c_ownitems_count != "") {
		      setOwnICount(itemMasterMapCountResult.payload.c_ownitems_count);
		    }
		    if (itemMasterMapCountResult.payload.c_blocked_count != "") {
		      setBlockCount(itemMasterMapCountResult.payload.c_blocked_count);
		    }
		}
	  }, [itemMasterMapCountResult]);


return(
		<>
		<div className="custom-mr">
			<Grid container>
				<div className="items">
					<div className="countData mr-l-4 mr-r-4">
						<p className="mr-z">Total</p>
						<h1 className="mr-z pd-z">{totalCount}</h1>
						<img alt src={circleImg}/>
					</div>
				</div>
				<div className="items">
					<div className="countData mr-l-4 mr-r-4">
						<p className="mr-z">Mapped</p>
						<h1 className="mr-z pd-z">{mapCount}</h1>
						<img alt src={circleImg}/>
					</div>
				</div>
				<div className="items">
					<div className="countData mr-l-4 mr-r-4">
						<p className="mr-z">UnMapped</p>
						<h1 className="mr-z pd-z">{unmapCount}</h1>
						<img alt src={circleImg}/>
					</div>
				</div>
				<div className="items">
					<div className="countData mr-l-4 mr-r-4">
						<p className="mr-z">OwnItems</p>
						<h1 className="mr-z pd-z">{ownICount}</h1>
						<img alt src={circleImg}/>
					</div>
				</div>
				<div className="items">
					<div className="countData mr-l-4 mr-r-4">
						<p className="mr-z">Blocked</p>
						<h1 className="mr-z pd-z">{blockCount}</h1>
						<img alt src={circleImg}/>
					</div>
				</div>
			</Grid>
		</div>
		</>
	)
}

export default ItemMasterMappingCount