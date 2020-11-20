import React, { useEffect, useState } from 'react';
import { Table, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import NumberFormat from 'react-number-format';

import { getPrizes, deletePrize, insertPrize, getSumPrize, getMaxPrize, getJoinedPrizes, updatePrizes, deletePrizeAndTeams } from "../../../services/prizeService";

const Prizes = () => {
	const [prizePool, setPrizePool] = useState();
	const [maxPrize, setMaxPrize] = useState();
	const [prizes, setPrizes] = useState([]);
	const [joinedPrizes, setJoinedPrizes] = useState([]);
	const [newPrize, setNewPrize] = useState({
		name: "",
		value: 0,
		prize: 0
	});

	useEffect(() => {
		getPrizes().then(res => {
			setPrizes(res.data);
		})
		getJoinedPrizes().then(res => {
			setJoinedPrizes(res.data);
		})
		return () => {
		}
	}, [prizes]);

	const handleGetSumPrize = () => {
		getSumPrize().then(res => {
			console.log(Object.values(res.data.data[0])[0]);
			setPrizePool(Object.values(res.data.data[0])[0]);
		})
	}

	const handleGetMaxPrize = () => {
		getMaxPrize().then(res => {
			console.log(Object.values(res.data.data[0])[0]);
			setMaxPrize(Object.values(res.data.data[0])[0]);
		})
	}
	

	return (
		<>
			<div className="table-container">
				<h1 className="table-title">Prizes</h1>
				<div className="form-container">
					<Form className="table-form">
						<Form.Group>
							<Form.Label>Prize Name</Form.Label>
							<Form.Control onChange={e => setNewPrize({...newPrize, name: e.target.value})} placeholder="Enter prize name" />
							<Form.Text className="text-muted">
								Adds a new prize to the list.
							</Form.Text>
						</Form.Group>
						<Form.Group>
							<Form.Label>Prize Value</Form.Label>
							<Form.Control onChange={e => setNewPrize({...newPrize, value: e.target.value})} placeholder="Enter prize value" />
							<Form.Text className="text-muted">
								Prize value in USD.
							</Form.Text>
						</Form.Group>
						<Button variant="primary" onClick={() => {
								insertPrize(newPrize);
							}}>
							Add New Prize
						</Button>
					</Form>
					<Form className="table-form">
						<Form.Group>
							<Form.Label>Current Prize Pool</Form.Label>
							<Form.Text style={{ fontSize: "2em"}}>
								{prizePool ? <NumberFormat value={prizePool} displayType={'text'} thousandSeparator={true} prefix={'$'} /> : ""}
							</Form.Text>
							<Button variant="primary" onClick={() => {
									handleGetSumPrize();
								}}>
								Get Current Prize Pool
							</Button>
						</Form.Group>
						<Form.Group>
							<Form.Label>Current Grand Prize</Form.Label>
							<Form.Text style={{ fontSize: "2em"}}>
								{maxPrize ? <NumberFormat value={maxPrize} displayType={'text'} thousandSeparator={true} prefix={'$'} /> : ""}
							</Form.Text>
							<Button variant="primary" onClick={() => {
									handleGetMaxPrize();
								}}>
								Get Current Grand Prize
							</Button>
						</Form.Group>
					</Form>
				</div>

				<Table striped bordered hover className="table">
					<thead>
						<tr>
							<th>PrizeID</th>
							<th>Team Name</th>
						</tr>
					</thead>
					<tbody>
						{joinedPrizes ? joinedPrizes.map((joinedPrize) => {
							return (
								<tr key={joinedPrize.name}>
									<td>{joinedPrize.prizeID}</td>
									<td className="d-flex justify-content-between">
										{joinedPrize.teamName}
									</td>
								</tr>
							)
						}) : null}
					</tbody>
				</Table>

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
												deletePrizeAndTeams()
												deletePrize(prize.prizeID)
												updatePrizes()
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
