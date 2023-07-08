import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import skiSlopes from "../assets/skiSlopes.jpeg";
import MapImg from "./MapImg";
import TargetingBox from "./TargetingBox";

function Map({ characters }) {
    const [realWidth, setRealWidth] = useState(0);
    const [realHeight, setRealHeight] = useState(0);

    useEffect(() => {
        const img = new Image();
        img.src = skiSlopes;
        img.onload = () => {
            setRealWidth(img.width);
            setRealHeight(img.height);
        };
    }, []);

    return (
        <div className="Map">
            <MapImg img={skiSlopes} />
            {console.log(realWidth, realHeight)}
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
