import "./Comparator.css";
import ComparisonTile from "./ComparisonTile";

const Comparator = props => {

    const differences = props.diffData;

    return (
        <div className="display-body">
            <ComparisonTile data={differences.avgPoints} />
            <ComparisonTile data={differences.avgAssists} />
            <ComparisonTile data={differences.avgRebounds} />
            <ComparisonTile data={differences.avgBlocks} />
            <ComparisonTile data={differences.avgSteals} />
            <ComparisonTile data={differences.fgPct} />
        </div>
    )
}

export default Comparator;