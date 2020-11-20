import api from "../api";

export const getPrizes = () => {
	return api.get('/prize').then(res => {
		return res.data;
	});
}

export const insertPrize = (prize) => {
	return api.get(`/prize/add?name=${prize.name}&value=${prize.value}`);
}

export const deletePrize = (key) => {
	return api.get(`/prize/delete?key=${key}`)
}

export const deletePrizeAndTeams = () => {
	return api.get(`/prizeandteams/deleteall`)
}

export const getSumPrize = () => {
	return api.get(`/prize/getsum`);
}

export const getMaxPrize = () => {
	return api.get(`/prize/getmax`);
}

export const getJoinedPrizes = () => {
	return api.get(`/prizeandteams`).then(res => {
		return res.data;
	});
}

export const updatePrizes = () => {
	return api.get(`/prize/updatelist`);
}