import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import skiSlopes from "../assets/skiSlopes.jpeg";
import MapImg from "./MapImg";
import TargetingBox from "./TargetingBox";

const API_URL = "http://localhost:3000/api/v1";

async function getCharactersData() {
    try {
        const response = await axios.get(`${API_URL}/maps/1/characters`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

async function getMapData() {
    try {
        const response = await axios.get(`${API_URL}/maps/1`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

function Map() {
    const [realWidth, setRealWidth] = useState(0);
    const [realHeight, setRealHeight] = useState(0);

    const [characters, setCharacters] = useState([]);
    const [mapUrl, setMapUrl] = useState("");

    useEffect(() => {
        const img = new Image();
        img.src = skiSlopes;
        img.onload = () => {
            setRealWidth(img.width);
            setRealHeight(img.height);
        };

        let mounted = true;
        getCharactersData().then((data) => {
            console.log(data);
            if (mounted) setCharacters(data);
        });

        getMapData().then((data) => {
            console.log(data);
            if (mounted) setMapUrl(data.url);
        });

        return () => (mounted = false);
    }, []);

    return (
        <div className="Map">
            <MapImg img={mapUrl} />
            {characters.map((character) => {
                return (
                    <TargetingBox
                        key={character.id}
                        xPercent={character.x / realWidth}
                        yPercent={character.y / realHeight}
                        widthPercent={100 / realWidth}
                        heightPercent={100 / realHeight}
                        onClick={() => console.log("found", character.name)}
                    />
                );
            })}
        </div>
    );
}

Map.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired,
        })
    ),
};

export default Map;
