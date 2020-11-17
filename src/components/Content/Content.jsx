import React from 'react';
import "./Content.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sponsors from "./Routes/Sponsors";

const Content = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/sponsors" component={Sponsors} />
			</Switch>
		</BrowserRouter>
	);
}

export default Content;
