import PropTypes from "prop-types";

const characterPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
});

const scorePropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    player_name: PropTypes.string.isRequired,
    seconds: PropTypes.number.isRequired,
});

const mapPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    characters: PropTypes.arrayOf(characterPropType),
    scores: PropTypes.arrayOf(scorePropType),
});

export { characterPropType, mapPropType, scorePropType };
