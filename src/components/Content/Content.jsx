import React from 'react';
import "./Content.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Matches from "./Routes/Matches";

const Content = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/matches" component={Matches} />
			</Switch>
		</BrowserRouter>
	);
}

export default Content;
