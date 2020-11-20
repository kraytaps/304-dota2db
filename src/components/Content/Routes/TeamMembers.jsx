import React, { useEffect, useState } from 'react';
import { Table, Form, Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'

import { deleteTeamMember, filterTeamMembers, getTeamMembers, insertTeamMember, filterMembersSameCountry } from "../../../services/teamMemberService";

const TeamMembers = () => {
	const [mounted, setMounted] = useState(false)
	
	const [selectedTeam, setSelectedTeam]  = useState();
	const [members, setMembers] = useState([]);
	const [teams, setTeams] = useState([]);
	const [filteredMembers, setFilteredMembers] = useState([]);
	const [newMember, setNewMember] = useState({
		firstName: "",
		lastName: "",
		nationality: "",
		teamName: ""
	})

	useEffect(() => {
		getTeamMembers().then(res => {
			setMembers(res.data);
			const teamArray = res.data.map(member => member.teamName);
			setTeams([...new Set(teamArray)]);
		})
	}, [members])

	useEffect(() => {
		if (!mounted) setFilteredMembers(teams);
		setMounted(true);
		return () => {
		};
	}, []);

	const handleFilter = (term) => {
		filterTeamMembers(term).then(res => {
			console.log(res);
			if (selectedTeam === 'All') {
				setFilteredMembers(members);
			} else {
				setFilteredMembers(res.data.data);
				console.log(filteredMembers);
			}
		})
	}

	const handleDivison = () => {
		filterMembersSameCountry().then(res => {
			console.log(res.data);
			setFilteredMembers(res.data);
		})
	}

	return (
		<>
			<div className="table-container">
				<h1 className="table-title">Team Members</h1>
				<div className="form-container">
					<Form className="table-form">
						<Form.Group>
							<Form.Label>First Name</Form.Label>
							<Form.Control onChange={e => setNewMember({...newMember, firstName: e.target.value})} placeholder="Enter first name" />
							<Form.Text className="text-muted">
								Team member's first name.
							</Form.Text>
						</Form.Group>
						<Form.Group>
							<Form.Label>Last Name</Form.Label>
							<Form.Control onChange={e => setNewMember({...newMember, lastName: e.target.value})} placeholder="Enter last name" />
							<Form.Text className="text-muted">
								Team member's last name.
							</Form.Text>
						</Form.Group>
						<Form.Group>
							<Form.Label>Nationality</Form.Label>
							<Form.Control onChange={e => setNewMember({...newMember, nationality: e.target.value})} placeholder="Enter nationality" />
							<Form.Text className="text-muted">
								Team member's nationality.
							</Form.Text>
						</Form.Group>
						<Form.Group>
							<Form.Label>Team Name</Form.Label>
							<Form.Control as="select" onClick={e => setNewMember({...newMember, teamName: e.target.value})}>
								<option>-</option>
								{teams ? teams.map((team) => {
									return (
										<option key={team}>{team}</option>
									)
								}) : null}
							</Form.Control>
							<Form.Text className="text-muted">
								Team member's affiliated team.
							</Form.Text>
						</Form.Group>
						<Button variant="primary" type="submit" onClick={() => {
							console.log(newMember)
							insertTeamMember(newMember);
						}}>
							Add New Member
						</Button>
					</Form>

					<Form className="table-form">
						<Form.Group>
							<Form.Label>Select Team</Form.Label>
							<Form.Control as="select" onClick={e => {
									setSelectedTeam(e.target.value);
								}}>
								<option value="All">All</option>
								{teams ? teams.map((team) => {
									return (
										<option key={team}>{team}</option>
									)
								}) : null}
							</Form.Control>
						</Form.Group>
						<Button variant="primary" onClick={() => {
							handleFilter(selectedTeam);
						}}>
							Filter
						</Button>

						<Form.Group className="mt-4">
							<Form.Label>Select members from the same country as their team</Form.Label>
						</Form.Group>
						<Button variant="primary" onClick={() => {
							handleDivison(selectedTeam);
						}}>
							Filter
						</Button>
					</Form>
				</div>

				<Table striped bordered hover className="table">
					<thead>
						<tr>
							<th>Member Name</th>
							<th>Nationality</th>
							<th>Team Name</th>
						</tr>
					</thead>
					<tbody>
						{filteredMembers.length !== 0 ? filteredMembers.map((member) => {
							return (
								<tr key={member.memberID}>
									<td>{member.firstName} {member.lastName}</td>
									<td>{member.nationality}</td>
									<td>
										{member.teamName}
										<Button variant="light" size="sm" className="float-right" onClick={() => {
												deleteTeamMember(member.memberID)
											}}>
											<FontAwesomeIcon icon={faTimes} />
										</Button>
									</td>
								</tr>
							)
						}) : members ? members.map((member) => {
							return (
								<tr key={member.memberID}>
									<td>{member.firstName} {member.lastName}</td>
									<td>{member.nationality}</td>
									<td>
										{member.teamName}
										<Button variant="light" size="sm" className="float-right" onClick={() => {
												deleteTeamMember(member.memberID)
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

export default TeamMembers;
