// import Hideandshow from "./components/hideandshow";
import "./css/main.css"
import DisplayTodos from "./components/todo/DisplayTodos";
import LifecycleClass from "./components/lifecycle/lifecycleClass";
import LifecycleFunc from "./components/lifecycle/lifecycleFunc";

function App() {
  return (
    <div className="App">
      
        {/* <Hideandshow /> */}
      <LifecycleClass />
      <LifecycleFunc/>
    </div>
  );
}

export default App;
