import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill, faAward } from '@fortawesome/free-solid-svg-icons'
import { Nav, Button } from "react-bootstrap";

import { setupDB } from "../../services/index";
import "./Sidebar.css";

const Sidebar = () => {

	return (
		<div className="sidebar-container">
			<Nav defaultActiveKey="/" className="flex-column d-flex justify-content-between">
				<Nav.Link href="/sponsors" className="d-flex align-items-center justify-content-center">
					<FontAwesomeIcon icon={faMoneyBill} className="mr-2" />
					Sponsors
				</Nav.Link>
				<Nav.Link href="/prizes" className="d-flex align-items-center justify-content-center">
					<FontAwesomeIcon icon={faAward} className="mr-2" />
					Prizes
				</Nav.Link>
				<Button variant="outline-primary" onClick={setupDB} className="mt-5">Create Database</Button>
			</Nav>
		</div>
	);
}

export default Sidebar;
