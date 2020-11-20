import React, { useEffect, useState } from 'react';
import { Table, Form, Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'
import NumberFormat from 'react-number-format';

import { deleteTeam, getTeams, insertTeam, filterTeam, updateTeam } from "../../../services/teamService";
import { updatePrizes, deletePrizeAndTeams } from "../../../services/prizeService";

const Teams = () => {
	const [teams, setTeams] = useState([]);
	const [mounted, setMounted] = useState(false)
	const [countries, setCountries] = useState([]);
	const [filterTerm, setFilterTerm] = useState("");
	const [filteredTeams, setFilteredTeams] = useState([]);
	const [newTeam, setNewTeam] = useState({
		name: "",
		country: "",
		prize: 0
	});

	const [showForm, setShowForm] = useState(false);
	const [newPrizeID, setNewPrizeID] = useState();

	// let mounted = false;
	useEffect(() => {
		getTeams().then(res => {
			setTeams(res.data);
			const countryArray = res.data.map(team => team.countryOfOrigin);
			setCountries([...new Set(countryArray)]);
		})
		return () => {

		}
	}, [teams]);

	useEffect(() => {
		if (!mounted) setFilteredTeams(teams);
		setMounted(true);
		return () => {
		};
	}, []);

	const handleFilter = (term) => {
		filterTeam(term).then(res => {
			console.log(res);
			if (filterTerm === 'All') {
				setFilteredTeams(teams);
			} else {
				setFilteredTeams(res.data.data);
				console.log(filteredTeams);
			}
		})
	}

	return (
		<>
			<div className="table-container">
				<h1 className="table-title">Team</h1>
				<div className="form-container">
					<Form className="table-form">
						<Form.Group>
							<Form.Label>Team Name</Form.Label>
							<Form.Control onChange={e => setNewTeam({...newTeam, name: e.target.value})} placeholder="Enter team name" />
							<Form.Text className="text-muted">
								Adds a new team to the list of teams.
							</Form.Text>
						</Form.Group>
						<Form.Group>
							<Form.Label>Country of Origin</Form.Label>
							<Form.Control onChange={e => setNewTeam({...newTeam, country: e.target.value})} placeholder="Enter country of origin" />
						</Form.Group>
						<Form.Group>
							<Form.Label>Prize ID</Form.Label>
							<Form.Control onChange={e => setNewTeam({...newTeam, prize: e.target.value})} placeholder="Enter id of prize received" />
						</Form.Group>
						<Button variant="primary" type="submit" onClick={() => {
							insertTeam(newTeam);
						}}>
							Add New Team
						</Button>
					</Form>

					<Form className="table-form">
						<Form.Group>
							<Form.Label>Filter by country</Form.Label>
							<Form.Control as="select" onClick={e => {
									console.log('filtering by', e.target.value);
									setFilterTerm(e.target.value);
								}}>
								<option value="All">All</option>
								{countries ? countries.map((country) => {
									return (
										<option key={country}>{country}</option>
									)
								}) : null}
							</Form.Control>
						</Form.Group>
						<Button variant="primary" onClick={() => {
							handleFilter(filterTerm);
						}}>
							Filter
						</Button>
					</Form>
				</div>

				<Table striped bordered hover className="table">
					<thead>
						<tr>
							<th>Team Name</th>
							<th>Country of Origin</th>
							<th>Prize Received</th>
						</tr>
					</thead>
					<tbody>
						{filteredTeams.length !== 0 ? filteredTeams.map((team) => {
							return (
								<tr key={team.teamName}>
									<td>{team.teamName}</td>
									<td>{team.countryOfOrigin}</td>
									<td className="d-flex justify-content-between">
										{team.prizeID ? team.prizeID : "-"}
										<Button variant="light" size="sm" className="float-right" onClick={() => {
												deleteTeam(team.teamName)
											}}>
											<FontAwesomeIcon icon={faTimes} />
										</Button>
									</td>
								</tr>
							)
						}) : teams ? teams.map((team) => {
							return (
								<tr key={team.teamName}>
									<td>{team.teamName}</td>
									<td>{team.countryOfOrigin}</td>
									<td className="d-flex justify-content-between">
										{team.prizeID ? team.prizeID : "-"}
										<ButtonToolbar>
											<ButtonGroup>
												<Button variant="light" size="sm" className="float-right mr-2" type="submit" onClick={() => {
														setShowForm(!showForm);
													}}>
													<FontAwesomeIcon icon={faEdit} />
												</Button>
											</ButtonGroup>
											<Form>
												{showForm && 
												<Form.Control size="sm" value={newPrizeID} placeholder="Enter new prize id" onKeyPress={e => {
													if (e.charCode === 13) {
														console.log(e.target.value)
														updateTeam(team.teamName, e.target.value);
														updatePrizes();
													};
												}}>
													
												</Form.Control>}
											</Form>
											<ButtonGroup>
												<Button variant="light" size="sm" className="float-right ml-2" type="submit" onClick={() => {
														deletePrizeAndTeams();
														deleteTeam(team.teamName)
														updatePrizes();
													}}>
													<FontAwesomeIcon icon={faTimes} />
												</Button>
											</ButtonGroup>
										</ButtonToolbar>
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

export default Teams;
