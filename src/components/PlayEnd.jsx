import PropTypes from "prop-types";
import { secondsToTime } from "../helpers/utils";
import { scorePropType } from "../propTypes";

function PlayEnd({ scores }) {
    return (
        <div className="PlayEnd">
            <h2>You found everyone!</h2>
            {scores.length > 0 && (
                <>
                    <h3>Previous scores: </h3>
                    <ul>
                        {scores.map((score) => (
                            <li key={score.id}>
                                {score.player_name} - {secondsToTime(score.seconds)}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

PlayEnd.propTypes = {
    scores: PropTypes.arrayOf(scorePropType),
};

export default PlayEnd;
