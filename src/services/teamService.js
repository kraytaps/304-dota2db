import api from "../api";

export const getTeams = () => {
	return api.get('/team').then(res => {
		return res.data;
	});
}

export const insertTeam = (team) => {
	return api.get(`/team/add?name=${team.name}&country=${team.country}&prize=${team.prize}`);
}

export const deleteTeam = (key) => {
	return api.get(`/team/delete?key=${key}`)
}

export const filterTeam = (key) => {
	return api.get(`/team/filter?key=${key}`)
}