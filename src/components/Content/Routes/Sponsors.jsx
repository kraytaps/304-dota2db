import React, { useEffect, useState } from 'react';
import { Table, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { getSponsors, insertSponsor, deleteSponsor } from "../../../services/sponsorService";

const Sponsors = () => {
	const [sponsors, setSponsors] = useState([]);
	const [newSponsor, setNewSponsor] = useState("");

	useEffect(() => {
		getSponsors().then(res => {
			setSponsors(res.data);
		})
		return () => {

		}
	}, [sponsors]);

	return (
		<>
			<div className="table-container">
				<h1 className="table-title">Sponsors</h1>
				<Form className="table-form">
					<Form.Group>
						<Form.Label>Add New Sponsor</Form.Label>
						<Form.Control value={newSponsor} onChange={e => setNewSponsor(e.target.value)} placeholder="Enter sponsor name" />
						<Form.Text className="text-muted">
							Adds a new sponsor to the list of sponsors.
						</Form.Text>
					</Form.Group>
					<Button variant="primary" onClick={() => {
							console.log(newSponsor);
							insertSponsor(newSponsor);
							setNewSponsor("");
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
									<td className="d-flex justify-content-between">
										{sponsor.companyName}
										<Button variant="light" size="sm" type="submit" onClick={() => {
												deleteSponsor(sponsor.companyName)
											}}>
											<FontAwesomeIcon icon={faTimes} />
										</Button>
									</td>
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
