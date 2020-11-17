import React from 'react';
import "./Content.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sponsors from "./Routes/Sponsors";
import Prizes from "./Routes/Prizes";

const Content = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/sponsors" component={Sponsors} />
				<Route path="/prizes" component={Prizes} />
			</Switch>
		</BrowserRouter>
	);
}

export default Content;
