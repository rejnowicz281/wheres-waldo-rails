import PropTypes from "prop-types";

function TargetingBox({ xPercent, yPercent, widthPercent, heightPercent, onClick }) {
    const width = `${widthPercent * 100}%`;
    const height = `${heightPercent * 100}%`;
    const top = `${yPercent * 100 - heightPercent * 50}%`;
    const left = `${xPercent * 100 - widthPercent * 50}%`;

    return <button className="TargetingBox" style={{ width, height, top, left }} onClick={onClick}></button>;
}

TargetingBox.propTypes = {
    xPercent: PropTypes.number.isRequired,
    yPercent: PropTypes.number.isRequired,
    widthPercent: PropTypes.number.isRequired,
    heightPercent: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default TargetingBox;
