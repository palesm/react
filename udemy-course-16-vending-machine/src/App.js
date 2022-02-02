import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import VendingMachine from "./components/VendingMachine";
import Twix from "./components/Twix";
import Sardines from "./components/Sardines";
import Soda from "./components/Soda";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<VendingMachine />} />
                <Route path="twix" element={<Twix />} />
                <Route path="sardines" element={<Sardines />} />
                <Route path="soda" element={<Soda />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
