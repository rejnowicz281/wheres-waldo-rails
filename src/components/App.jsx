import { useEffect, useState } from "react";
import { getMapsData } from "../utils";
import Map from "./Map";

function App() {
    const [maps, setMaps] = useState([]);

    useEffect(() => {
        let mounted = true;
        getMapsData().then((data) => {
            console.log(data);
            if (mounted) setMaps(data);
        });

        return () => (mounted = false);
    }, []);

    return (
        <div className="App">
            {maps.map((map) => {
                return (
                    <div className="map-container" key={map.id}>
                        <h1>{map.name}</h1>
                        <Map characters={map.characters} mapUrl={map.image_url} />
                    </div>
                );
            })}
        </div>
    );
}

export default App;
