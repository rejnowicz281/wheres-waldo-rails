import PropTypes from "prop-types";
import { useState } from "react";
import { sendScore } from "../helpers/apiUtils";

function ScoreSender({ mapId, seconds }) {
    const [playerName, setPlayerName] = useState("");
    const [sentScore, setSentScore] = useState(false);

    async function handleSend() {
        const response = await sendScore(mapId, playerName, seconds);
        if (response) {
            setSentScore(true);
        }
    }

    if (sentScore) {
        return <h2>Score Sent!</h2>;
    } else {
        return (
            <div className="ScoreSender">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                />
                <button onClick={handleSend}>Send Score</button>
            </div>
        );
    }
}

ScoreSender.propTypes = {
    mapId: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
};

export default ScoreSender;
