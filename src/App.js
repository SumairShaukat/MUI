import "./App.css";
import Buttonatom from "../src/atoms/Button/index";
import SwitchAtom from "./atoms/switch/index";
import Modal from "./atoms/modal/index";
function App() {
  return (
    <div className="App">
      <Buttonatom />
      <SwitchAtom />
      <Modal />
    </div>
  );
}

export default App;
