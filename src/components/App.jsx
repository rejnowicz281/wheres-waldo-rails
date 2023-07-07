import skiSlopes from "../assets/skiSlopes.jpeg";
import Map from "./Map";

const characters = [
    {
        id: 1,
        name: "Wizard",
        x: 210,
        y: 1425,
    },
    {
        id: 2,
        name: "Waldo",
        x: 2575,
        y: 1375,
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
