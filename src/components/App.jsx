import { useEffect, useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { getMapsData } from "../utils";
import Home from "./Home";
import MapPlay from "./MapPlay";

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
        <BrowserRouter>
            <nav className="text-center">
                <Link to="/wheres-waldo/maps">Where&apos;s Waldo?</Link>
            </nav>
            <Routes>
                <Route path="/*" element={<Navigate to="/wheres-waldo/maps" />} />
                <Route path="/wheres-waldo/maps" element={<Home maps={maps} />} />
                <Route path="/wheres-waldo/play" element={<MapPlay />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
