import './css/App.css';
import {Component} from "react";
import Pokegame from "./components/Pokegame";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                   <Pokegame />
                </header>
            </div>
        );
    }

}

export default App;
