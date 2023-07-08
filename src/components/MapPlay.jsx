import { useLocation } from "react-router-dom";
import Map from "./Map";

function MapPlay() {
    const location = useLocation();
    const map = location.state && location.state.map;

    console.log(map);

    return (
        <div className="MapPlay">
            <h1>{map.name}</h1>
            <Map map={map} />
        </div>
    );
}

export default MapPlay;
