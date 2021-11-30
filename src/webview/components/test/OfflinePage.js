import React from 'react';
import { Offline, Online } from 'react-detect-offline';

// OfflinePage

var bgColors = { "Default": "#81b71a",
										"Blue": "#00B1E1",
										"Cyan": "#37BC9B",
										"Green": "#8CC152",
										"Red": "#E9573F",
										"Yellow": "#F6BB42",
};


const OnlineContent = () => (
	<div>
		<h1>Online</h1>
	</div>
);

const OfflineContent = () => (
	<div>
		<h1><p>
				❤️ Offline
			</p></h1>
	</div>
);


function OfflinePage() {
	return (
				<div 
				style={{

					backgroundColor: Online ? 'blue' : 'red',
					width: '100%',
					height: 'auto'
				}}
				>
				<Offline>
					<OfflineContent />
					
				</Offline>
				<Online>
					<div >
					<OnlineContent />
						</div>
				 
					
					</Online>

					
			</div>
	)
}

export default OfflinePage
