import React from 'react';
import { Navbar } from "react-bootstrap"

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark" className="header">
			<Navbar.Brand href="/">Dota 2 Database</Navbar.Brand>
		</Navbar>
	);
}

export default Header;
