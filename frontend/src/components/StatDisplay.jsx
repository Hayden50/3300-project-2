import DisplayTile from "./DisplayTile";
import "./StatDisplay.css";

const StatDisplay = props => {

    const stats = props.playerData;

    return (
        <div className = "display-body">
            <DisplayTile title={"Points"} data={stats.avgPoints}/>
            <DisplayTile title={"Assists"} data={stats.avgAssists}/>
            <DisplayTile title={"Rebounds"} data={stats.avgRebounds}/>
            <DisplayTile title={"Blocks"} data={stats.avgBlocks}/>
            <DisplayTile title={"Steals"} data={stats.avgSteals}/>
            <DisplayTile title={"Field Goal Percent"} data={stats.fgPct}/>
        </div>
    )
}

export default StatDisplay;
