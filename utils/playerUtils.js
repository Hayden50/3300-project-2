export const calcStats = (allGames) => {
  let points = 0,
    assists = 0,
    rebounds = 0,
    blocks = 0,
    steals = 0,
    fgm = 0,
    fga = 0;
  let totalGames = allGames.length;
  for (let i = 0; i < allGames.length; i++) {
    let currGame = allGames[i];
    points += currGame.points;
    assists += currGame.assists;
    blocks += currGame.blocks;
    rebounds += currGame.totReb;
    steals += currGame.steals;
    fgm += currGame.fgm;
    fga += currGame.fga;
  }

  if (totalGames === 0) {
    totalGames = 1;
    fgm = 0;
    fga = 1;
  }

  const playerStats = {
    avgPoints: Math.round((points / totalGames) * 10) / 10,
    avgAssists: Math.round((assists / totalGames) * 10) / 10,
    avgRebounds: Math.round((rebounds / totalGames) * 10) / 10,
    avgBlocks: Math.round((blocks / totalGames) * 10) / 10,
    avgSteals: Math.round((steals / totalGames) * 10) / 10,
    fgPct: Math.round((fgm / fga) * 1000) / 10,
  };

  return playerStats;
};

export const splitNames = (fullName) => {
  fullName = fullName.toLowerCase();
  const names = fullName.split(" ");
  return [names[0], names[1]];
};

export const getDiff = (p1, p2) => {
  const diff = {
    avgPoints: Math.round((p1.avgPoints - p2.avgPoints) * 10) / 10,
    avgAssists: Math.round((p1.avgAssists - p2.avgAssists) * 10) / 10,
    avgRebounds: Math.round((p1.avgRebounds - p2.avgRebounds) * 10) / 10,
    avgBlocks: Math.round((p1.avgBlocks - p2.avgBlocks) * 10) / 10,
    avgSteals: Math.round((p1.avgSteals - p2.avgSteals) * 10) / 10,
    fgPct: Math.round((p1.fgPct - p2.fgPct) * 10) / 10,
  };

  return diff;
};
