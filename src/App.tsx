import "./App.css";
import { StopLight } from "./StopLight";

function App() {


  return (
    <div className="page">
      <StopLight intitialState="go"/>
      <StopLight />
      <StopLight intitialState="slow"/>
      <StopLight />
    </div>
  )
}

export default App;
