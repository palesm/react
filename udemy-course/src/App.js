import './App.css';
import MachineSlot from "./components/MachineSlot";
import Friends from "./components/Friends";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Machine Game
          <MachineSlot />
          Friends
          <Friends name={'Elton'} hobbies={['piano','singing', 'dancing']} />
      </header>
    </div>
  );
}

export default App;
