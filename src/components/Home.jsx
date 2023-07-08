import PropTypes from "prop-types";
import { mapPropType } from "../propTypes";
import MapShowcase from "./MapShowcase";

function Home({ maps }) {
    return (
        <div className="Home">
            {maps.map((map) => {
                return <MapShowcase key={map.id} map={map} />;
            })}
        </div>
    );
}

Home.propTypes = {
    maps: PropTypes.arrayOf(mapPropType),
};

export default Home;
