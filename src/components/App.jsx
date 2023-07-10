import { useEffect, useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import images from "../assets";
import { getMapsData } from "../helpers/apiUtils";
import Home from "./Home";
import MapPlay from "./MapPlay";

function App() {
    const [maps, setMaps] = useState([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        getMapsData().then((mapsData) => {
            if (!mounted) {
                mapsData.map((map) => (map["image_url"] = images[map.filename]));
                setMaps(mapsData);
                setMounted(true);
            }
        });
    }, []);

    if (mounted) {
        return (
            <BrowserRouter>
                <nav className="text-center">
                    <Link to="/wheres-waldo/maps">Where&apos;s Waldo?</Link>
                </nav>
                <Routes>
                    <Route path="/*" element={<Navigate to="/wheres-waldo/maps" />} />
                    <Route path="/wheres-waldo/maps" element={<Home maps={maps} />} />
                    <Route path="/wheres-waldo/maps/:id" element={<MapPlay maps={maps} />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
