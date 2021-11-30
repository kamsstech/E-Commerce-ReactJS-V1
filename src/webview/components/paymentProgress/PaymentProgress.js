import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./css/PaymentProgress.css";
import { Constants } from "../../../common/constant/localstorage";

const PaymentProgress = (props) => {
	let history = useHistory();
    const [tick, setTick] = useState(10);
    const seller_name = localStorage.getItem(Constants.BILL_SELLER_NAME);
	useEffect(() => {
	    for (var i = 2; i <= 10; i++) {
	        (function(i) {
	            setTimeout(function() {
	                setTick(i * 10);
	                // console.log(i + 1);
	            }, 500 * (i + 1));
	        })(i);
		    
	    }
	}, []);
	useEffect(() => {
	    if(tick==100)
	    {
	    	// setTick(10);
		    history.push("/final-payment");
	    }
	}, [tick]);
	return (
		<>
			<Container fixed>
				<Grid container>
					<Grid item xs={12}>
						<div className="PaymentProgressPage">
							<div className="PaymentProgressInner">
								<div class="cssProgress">
								    <div class="progressBar">
								    	<div class="cssProgress-bar Progress-glow-active" style={{
								            width: tick + "%"
								          }}>
								        </div>
								    </div>
								</div>
							</div>
							<div className="PaymentProgressContent text-center mr-t-16">
								<p>Redirecting to <span>{seller_name}.</span> Payment detail page.</p>
							</div>
						</div>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default PaymentProgress;