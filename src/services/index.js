import { 
	createDB, 
	createTeam, 
	createConsistsOfMatch, 
	createPrize,
	createPrizeReceivedByTeam,
	createSeriesOfMatchesPlayedOn,
	createSponsor,
	createStage, 
	createTeammember
} from './setup';

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
		createTeammember(res => {
			console.log(res);
			console.log('creating teammember table');
		})
}

export {
	setupDB
};