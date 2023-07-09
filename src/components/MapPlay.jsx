import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mapPropType } from "../propTypes";
import CharactersFound from "./CharactersFound";
import Map from "./Map";
import PlayEnd from "./PlayEnd";

function MapPlay({ maps }) {
    const { id } = useParams();
    const [map, setMap] = useState(null);
    const [mounted, setMounted] = useState(false);
    const [charactersFound, setCharactersFound] = useState([]);

    function findCharacter(characterName) {
        if (!charactersFound.some((characterFound) => characterFound == characterName)) {
            setCharactersFound([...charactersFound, characterName]);
        }
    }

    function isCharacterFound(characterName) {
        return charactersFound.some((characterFound) => characterFound == characterName);
    }

    function hasFoundAll() {
        return map.characters.every((character) => isCharacterFound(character.name));
    }

    useEffect(() => {
        const foundMap = maps.find((map) => map.id == id);
        if (!mounted && foundMap) {
            setMap(foundMap);
            setMounted(true);
        }
    }, [id, maps, mounted]);

    if (mounted) {
        return (
            <div className="MapPlay">
                <h1>{map.name}</h1>
                {hasFoundAll() && <PlayEnd scores={map.scores} />}
                <CharactersFound characters={map.characters} isCharacterFound={isCharacterFound} />
                <Map map={map} findCharacter={findCharacter} />
            </div>
        );
    }
}

MapPlay.propTypes = {
    maps: PropTypes.arrayOf(mapPropType).isRequired,
};

export default MapPlay;
