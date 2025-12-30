import { Routes, Route } from "react-router-dom";
import Tracker from "../Components/Tracker";
import Task from "../components/Task";
import UndoRedo from "../components/UndoRedo";
import ContactManager from "../components/ContactManager";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tracker />} />
      <Route path="/task" element={<Task/>} />
      <Route path="/undo-redo" element={<UndoRedo/>} />
      <Route path="/contact" element={<ContactManager/>} ></Route>
    </Routes>
  );
}

export default App;
