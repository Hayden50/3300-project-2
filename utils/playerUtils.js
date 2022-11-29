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
    blocks += currGame.totReb;
    rebounds += currGame.blocks;
    steals += currGame.steals;
    fgm += currGame.fgm;
    fga += currGame.fga;
  }

  const playerStats = {
    avgPoints: Math.round((points / totalGames) * 10) / 10,
    avgAssists: Math.round((assists / totalGames) * 10) / 10,
    avgRebounds: Math.round((rebounds / totalGames) * 10) / 10,
    avgBlocks: Math.round((blocks / totalGames) * 10) / 10,
    avgSteals: Math.round((steals / totalGames) * 10) / 10,
    fgPct: Math.round((fgm / fga) * 10) / 10,
  };

  return playerStats;
};

export const splitNames = (fullName) => {
  fullName = fullName.toLowerCase();
  const names = fullName.split(" ");
  return [names[0], names[1]];
};
