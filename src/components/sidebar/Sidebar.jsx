import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill, faTrophy, faGamepad } from '@fortawesome/free-solid-svg-icons'
import { Nav, Button } from "react-bootstrap";

import { setupDB } from "../../services/index";
import "./Sidebar.css";

const Sidebar = () => {

	return (
		<div className="sidebar-container">
			<Nav defaultActiveKey="/" className="flex-column d-flex justify-content-between">
				<Nav.Link href="/sponsors" className="d-flex align-items-center">
					<FontAwesomeIcon icon={faMoneyBill} className="mr-2 navlink-icon" fixedWidth />
					Sponsors
				</Nav.Link>
				<Nav.Link href="/prizes" className="d-flex align-items-center">
					<FontAwesomeIcon icon={faTrophy} className="mr-2 navlink-icon" fixedWidth />
					Prizes
				</Nav.Link>
				<Nav.Link href="/teams" className="d-flex align-items-center">
					<FontAwesomeIcon icon={faGamepad} className="mr-2 navlink-icon" fixedWidth />
					Teams
				</Nav.Link>
				<Button variant="outline-primary" onClick={setupDB} className="mt-5">Create Database</Button>
			</Nav>
		</div>
	);
}

export default Sidebar;
