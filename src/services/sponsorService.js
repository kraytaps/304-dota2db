import api from "../api";

export const getSponsors = () => {
	return api.get('/sponsor').then(res => {
		return res.data;
	});
}

export const insertSponsor = (name) => {
	return api.get(`/sponsor/add?name=${name}`);
}