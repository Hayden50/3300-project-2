import "./ComparisonTile.css";

const ComparisonTile = props => {
    return (
        <div className="tile-body">
            <p className="left-ptr">{props.data > 0 ? '<' : ' '}</p>
            <p className="comparator-data">{Math.abs(props.data)}</p>
            <p className="right-ptr">{props.data < 0 ? '>' : ' '}</p>
        </div>
    )
}

export default ComparisonTile;