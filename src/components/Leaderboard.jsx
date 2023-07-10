import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getScoresData } from "../helpers/apiUtils";
import { secondsToTime } from "../helpers/utils";
import { scorePropType } from "../propTypes";

function Leaderboard({ mapId, initialScores, scoreAchieved, scoreIsSent }) {
    const [scores, setScores] = useState(initialScores);

    useEffect(() => {
        if (scoreIsSent && scoreAchieved < scores[2].seconds) {
            getScoresData(mapId).then((scoresData) => {
                setScores(scoresData);
            });
        }
    }, [scoreIsSent]);

    return (
        <div className="Leaderboard">
            <h3 className="text-center">Leaderboard: </h3>
            <ol className="leaderboard-list">
                {scores.slice(0, 3).map((score) => (
                    <li key={score.id}>
                        {score.player_name} - {secondsToTime(score.seconds)}
                    </li>
                ))}
            </ol>
        </div>
    );
}

Leaderboard.propTypes = {
    mapId: PropTypes.number.isRequired,
    initialScores: PropTypes.arrayOf(scorePropType),
    scoreAchieved: PropTypes.number.isRequired,
    scoreIsSent: PropTypes.bool.isRequired,
};

export default Leaderboard;
