import PropTypes from "prop-types";
import { useState } from "react";
import { sendScore } from "../helpers/apiUtils";

function ScoreSender({ mapId, seconds, scoreIsSent, setscoreIsSent }) {
    const [playerName, setPlayerName] = useState("");

    async function handleSend() {
        const response = await sendScore(mapId, playerName, seconds);
        if (response) {
            setscoreIsSent(true);
        }
    }

    if (scoreIsSent) {
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
    scoreIsSent: PropTypes.bool.isRequired,
    setscoreIsSent: PropTypes.func.isRequired,
};

export default ScoreSender;
