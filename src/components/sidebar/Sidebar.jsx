import React from 'react';
import { setupDB } from "../../services/index";
import "./Sidebar.css";
import { Nav, Button } from "react-bootstrap";

const Sidebar = () => {

	return (
		<div className="sidebar-container">
			<Nav defaultActiveKey="/" className="flex-column sidebar">
				<Nav.Link href="/sponsors">Sponsors</Nav.Link>
				<Button onClick={setupDB}>Create Database</Button>
			</Nav>
		</div>
	);
}

export default Sidebar;
