import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { secondsToTime } from "../helpers/utils";
import { mapPropType } from "../propTypes";
import CharactersFound from "./CharactersFound";
import Map from "./Map";
import PlayEnd from "./PlayEnd";

function MapPlay({ maps }) {
    const { id } = useParams();
    const [map, setMap] = useState(null);
    const [mounted, setMounted] = useState(false);
    const [charactersFound, setCharactersFound] = useState([]);
    const [timer, setTimer] = useState(0);
    let timerInterval = useRef(null);

    useEffect(() => {
        if (!mounted) {
            const foundMap = maps.find((map) => map.id == id);
            if (foundMap) setMap(foundMap);

            setMounted(true);
        }

        timerInterval.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);

        return () => stopTimer();
    }, []);

    function stopTimer() {
        clearInterval(timerInterval.current);
    }

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

    if (mounted) {
        return (
            <div className="MapPlay">
                {!hasFoundAll() && <h2>Time: {secondsToTime(timer)}</h2>}
                <h1>{map.name}</h1>
                {hasFoundAll() && (
                    <>
                        {stopTimer()}
                        <PlayEnd mapId={map.id} scores={map.scores} seconds={timer} />
                    </>
                )}
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
