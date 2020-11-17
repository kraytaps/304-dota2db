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