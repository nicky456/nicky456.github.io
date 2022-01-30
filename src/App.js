import CareerSearch from "./Components/CareerSearch";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";
import Buttons from "./Components/Buttons";
import "./style.css";

function App() {
  return (
    <div>
      <Intro></Intro>
      <CareerSearch />
      <Buttons />
      <Skills />
      <Timeline />
    </div>
  );
}

export default App;
