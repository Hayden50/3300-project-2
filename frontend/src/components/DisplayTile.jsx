import "./DisplayTile.css";

const DisplayTile = props => {
    return (
        <div className="tile-body">
            <p className="tile-title">{props.title}:</p>
            <p className="tile-data">{props.data}</p>
        </div>
    );
}

export default DisplayTile;