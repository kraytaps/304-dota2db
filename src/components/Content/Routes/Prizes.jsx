import React, { useEffect, useState } from 'react';
import { Table, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import NumberFormat from 'react-number-format';

import { getPrizes, createPrize, deletePrize, insertPrize } from "../../../services/prizeService";

const Prizes = () => {
	const [prizes, setPrizes] = useState([]);
	const [newPrize, setNewPrize] = useState({
		name: "",
		value: 0
	});

	useEffect(() => {
		getPrizes().then(res => {
			setPrizes(res.data);
		})
		return () => {
		}
	}, [prizes]);

	return (
		<>
			<div className="table-container">
				<h1 className="table-title">Prizes</h1>
				<Form className="table-form">
					<Form.Group>
						<Form.Label>Prize Name</Form.Label>
						<Form.Control onChange={e => setNewPrize({...newPrize, name: e.target.value})} placeholder="Enter prize name" />
						<Form.Text className="text-muted">
							Adds a new sponsor to the list of sponsors.
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Label>Prize Value in USD</Form.Label>
						<Form.Control onChange={e => setNewPrize({...newPrize, value: e.target.value})} placeholder="Enter prize value" />
						<Form.Text className="text-muted">
							Adds a new sponsor to the list of sponsors.
						</Form.Text>
					</Form.Group>
					<Button variant="primary" onClick={() => {
							insertPrize(newPrize);
						}}>
						Submit
					</Button>
				</Form>
				<Table striped bordered hover className="table">
					<thead>
						<tr>
							<th>PrizeID</th>
							<th>Name</th>
							<th>Prize Value in USD</th>
						</tr>
					</thead>
					<tbody>
						{prizes ? prizes.map((prize) => {
							return (
								<tr key={prize.name}>
									<td>{prize.prizeID}</td>
									<td>{prize.name}</td>
									<td className="d-flex justify-content-between">
										<NumberFormat value={prize.prizeValueUSD} displayType={'text'} thousandSeparator={true} prefix={'$'} />
										<Button variant="light" size="sm" type="submit" onClick={() => {
												deletePrize(prize.prizeID)
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

export default Prizes;
