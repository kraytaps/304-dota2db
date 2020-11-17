import api from '../api';

const createDB = () => {
	return api.get('/setup/db');
}

const createSponsor = () => {
	return api.get('/setup/sponsor');
}

const createStage = () => {
	return api.get('/setup/stage');
}

const createPrize = () => {
	return api.get('/setup/prize');
}

const createTeam = () => {
	return api.get('/setup/team');
}

const createPrizeReceivedByTeam = () => {
	return api.get('/setup/prizereceivedbyteam');
}

const createSeriesOfMatchesPlayedOn = () => {
	return api.get('/setup/seriesofmatchesplayedon');
}

const createConsistsOfMatch = () => {
	return api.get('/setup/consistsofmatch');
}

export { 
	createDB, 
	createTeam, 
	createSponsor, 
	createStage, 
	createPrize, 
	createPrizeReceivedByTeam, 
	createSeriesOfMatchesPlayedOn, 
	createConsistsOfMatch 
};