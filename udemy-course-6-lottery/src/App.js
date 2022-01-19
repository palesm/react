import './App.css';
import Lottery from "./components/Lottery";

function App() {
    return (
        <div className="App">
            <Lottery />
            <Lottery title={"4es lotto"} maxNum={10} numBalls={4} />
        </div>
    );
}

export default App;
