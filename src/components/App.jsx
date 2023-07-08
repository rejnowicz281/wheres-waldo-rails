import skiSlopes from "../assets/skiSlopes.jpeg";
import Map from "./Map";

const characters = [
    {
        id: 1,
        name: "Wizard",
        x: 210,
        y: 1440,
    },
    {
        id: 2,
        name: "Waldo",
        x: 2565,
        y: 1390,
    },
    {
        id: 3,
        name: "Odlaw",
        x: 955,
        y: 1215,
    },
];

function App() {
    return (
        <div className="App">
            <Map map={skiSlopes} characters={characters} />
        </div>
    );
}

export default App;
