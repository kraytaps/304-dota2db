import React from 'react';
import "./Content.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sponsors from "./Routes/Sponsors";
import Prizes from "./Routes/Prizes";
import Teams from './Routes/Teams';
import TeamMembers from './Routes/TeamMembers';

const Content = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/sponsors" component={Sponsors} />
				<Route path="/prizes" component={Prizes} />
				<Route path="/teams" component={Teams} />
				<Route path="/teammembers" component={TeamMembers} />
			</Switch>
		</BrowserRouter>
	);
}

export default Content;
