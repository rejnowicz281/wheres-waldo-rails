import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import MapImg from "./MapImg";
import TargetingBox from "./TargetingBox";

function Map({ characters, mapUrl }) {
    const [originalWidth, setOriginalWidth] = useState(0); // Original width of map image
    const [originalHeight, setOriginalHeight] = useState(0); // Original height of map image

    useEffect(() => {
        const realImg = new Image();

        realImg.src = mapUrl;
        realImg.onload = () => {
            setOriginalWidth(realImg.width);
            setOriginalHeight(realImg.height);
        }; // Get image's original width and height before it gets resized by CSS
    }, [mapUrl]);

    return (
        <div className="Map">
            <MapImg img={mapUrl} />
            {characters.map((character) => {
                return (
                    <TargetingBox
                        key={character.id}
                        xPercent={character.x / originalWidth}
                        yPercent={character.y / originalHeight}
                        widthPercent={100 / originalWidth}
                        heightPercent={100 / originalHeight}
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
    mapUrl: PropTypes.string.isRequired,
};

export default Map;
