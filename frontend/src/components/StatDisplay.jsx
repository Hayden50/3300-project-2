const StatDisplay = props => {

    const stats = props.playerData;

    return (
        <div className = "StatDisplay">
            <p>Points: {stats.avgPoints}</p>
            <p>Assists: {stats.avgAssists}</p>
            <p>Rebounds: {stats.avgRebounds}</p>
            <p>Blocks: {stats.avgBlocks}</p>
            <p>Steals: {stats.avgSteals}</p>
            <p>Field Goal Percent: {stats.fgPct}%</p>
        </div>
    )
}

export default StatDisplay
