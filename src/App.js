import CareerSearch from "./Components/CareerSearch";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";
import Buttons from "./Components/Buttons";
import "./style.css";
import Introtext from "./Components/Introtext";

function App() {
  return (
    <div>
      <Intro></Intro>
      <CareerSearch />
      <Skills />
      <Introtext />
      <Buttons />
      <Timeline />
    </div>
  );
}

export default App;
