import React from 'react';
import "./Sidebar.css";
import { Nav, Button } from "react-bootstrap";

const Sidebar = () => {
	return (
		<div className="sidebar-container">
			<Nav defaultActiveKey="/" className="flex-column sidebar">
				<Nav.Link href="/matches">Matches</Nav.Link>
				<Button href="/createdb">Create Database</Button>
			</Nav>
		</div>
	);
}

export default Sidebar;
