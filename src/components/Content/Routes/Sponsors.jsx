import React, { useEffect, useState, useRef } from 'react';
import { Table, Form, Button } from "react-bootstrap";
import { getSponsors, insertSponsor } from "../../../services/index";

const Sponsors = () => {
	const [sponsors, setSponsors] = useState([]);
	const [newSponsor, setNewSponsor] = useState("");

	useEffect(() => {
		getSponsors().then(res => {
			console.log(res);
			setSponsors(Array.from(res.data));
		})
		return () => {

		}
	}, []);

	return (
		<>
			<div className="table-container">
				<h1 className="table-title">Sponsors</h1>
				<Form className="table-form">
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Add New Sponsor</Form.Label>
						<Form.Control value={newSponsor} onChange={e => setNewSponsor(e.target.value)} placeholder="Enter sponsor name" />
						<Form.Text className="text-muted">
							Adds a new sponsor to the list of sponsors.
						</Form.Text>
					</Form.Group>
					<Button variant="primary" type="submit" onClick={() => {
							console.log(newSponsor);
							insertSponsor(newSponsor);
						}}>
						Submit
					</Button>
				</Form>
				<Table striped bordered hover className="table">
					<thead>
						<tr>
							<th>Company Name</th>
						</tr>
					</thead>
					<tbody>
						{sponsors ? sponsors.map((sponsor) => {
							return (
								<tr key={sponsor.companyName}>
									<td>{sponsor.companyName}</td>
								</tr>
							)
						}) : null}
					</tbody>
				</Table>
			</div>
		</>
	);
}

export default Sponsors;
