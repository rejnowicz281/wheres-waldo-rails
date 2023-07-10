import PropTypes from "prop-types";
import { secondsToTime } from "../helpers/utils";
import { scorePropType } from "../propTypes";
import ScoreSender from "./ScoreSender";

function PlayEnd({ mapId, scores, seconds }) {
    return (
        <div className="PlayEnd">
            <h2>You found everyone in {secondsToTime(seconds)}!</h2>
            <ScoreSender mapId={mapId} seconds={seconds} />
            {scores.length > 0 && (
                <div className="leaderboard">
                    <h3 className="text-center">Leaderboard: </h3>
                    <ol className="leaderboard-list">
                        {scores.slice(0, 3).map((score) => (
                            <li key={score.id}>
                                {score.player_name} - {secondsToTime(score.seconds)}
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
}

PlayEnd.propTypes = {
    mapId: PropTypes.number.isRequired,
    scores: PropTypes.arrayOf(scorePropType),
    seconds: PropTypes.number.isRequired,
};

export default PlayEnd;
