import { 
	createDB, 
	createTeam, 
	createConsistsOfMatch, 
	createPrize,
	createPrizeReceivedByTeam,
	createSeriesOfMatchesPlayedOn,
	createSponsor,
	createStage 
} from './setup';

import {
	getSponsors,
	insertSponsor
} from "./sponsorService";

const setupDB = () => {
	createDB().then(res => {
			console.log(res);
			console.log('creating db');
		});
		createSponsor().then(res => {
			console.log(res);
			console.log('creating sponsor table');
		})
		createStage().then(res => {
			console.log(res);
			console.log('creating stage table');
		})
		createPrize().then(res => {
			console.log(res);
			console.log('creating prize table');
		})
		createTeam().then(res => {
			console.log(res);
			console.log('creating team table');
		})
		createPrizeReceivedByTeam(res => {
			console.log(res);
			console.log('creating prizereceivedbyteam table');
		});
		createSeriesOfMatchesPlayedOn(res => {
			console.log(res);
			console.log('creating seriesofmatchesplayedon table');
		})
		createConsistsOfMatch(res => {
			console.log(res);
			console.log('creating consistsofmatch table');
		})
}

export { setupDB, getSponsors, insertSponsor };