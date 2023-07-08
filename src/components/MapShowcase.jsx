import { Link } from "react-router-dom";
import { mapPropType } from "../propTypes";

function MapShowcase({ map }) {
    return (
        <div className="MapShowcase">
            <h1>{map.name}</h1>
            <Link className="map-link" to="/wheres-waldo/play" state={{ map }}>
                <img className="map-img" src={map.image_url} alt={map.name} />
            </Link>
        </div>
    );
}

MapShowcase.propTypes = {
    map: mapPropType.isRequired,
};

export default MapShowcase;
