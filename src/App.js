import React, { useEffect } from "react";
import WebRouter from "./router/WebRouter";
import MobileRouter from "./router/MobileRouter";
import "./App.css";
// import styles from './App.css'

import { Provider } from "react-redux";
import store from "./store";

import { BrowserView, MobileView } from "react-device-detect";

window.store = store;

function App() {


	return (
		<Provider store={store}>
			<div className="App">
				<BrowserView>
					<WebRouter />
				</BrowserView>
				<MobileView>
					<MobileRouter />
				</MobileView>
			</div>
		</Provider>
	);
}

export default App;
