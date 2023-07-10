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
        return <h2 className="text-center success">Score Sent!</h2>;
    } else {
        return (
            <div className="ScoreSender text-center">
                <input
                    className="score-input"
                    type="text"
                    placeholder="Your Name"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                />
                <button className="send-score-button" onClick={handleSend}>
                    Send Your Score
                </button>
            </div>
        );
    }
}

ScoreSender.propTypes = {
    mapId: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
};

export default ScoreSender;
