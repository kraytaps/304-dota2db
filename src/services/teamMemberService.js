import api from "../api";

export const getTeamMembers = () => {
	return api.get('/teammember').then(res => {
		return res.data;
	});
}

export const insertTeamMember = (teamMember) => {
	return api.get(`/teammember/add?firstName=${teamMember.firstName}&lastName=${teamMember.lastName}&nationality=${teamMember.nationality}&teamName=${teamMember.teamName}`);
}

export const deleteTeamMember = (key) => {
	return api.get(`/teammember/delete?key=${key}`)
}

export const filterTeamMembers = (key) => {
	return api.get(`/teammember/filter?teamName=${key}`)
}

export const filterMembersSameCountry = () => {
	return api.get(`/teammember/samecountry`).then(res => {
		return res.data;
	});
}