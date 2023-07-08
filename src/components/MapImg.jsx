import PropTypes from "prop-types";

function MapImg({ img }) {
    return <img className="MapImg" onClick={(e) => console.log(e)} src={img} />;
}

MapImg.propTypes = {
    img: PropTypes.string.isRequired,
};

export default MapImg;
