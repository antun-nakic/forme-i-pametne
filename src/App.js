import "./App.css";
import FormeIntro from "./components/FormeInto";
import { FormeAdvanced as Sime } from "./components/FormeAdvanced";
import Pametna from "./components/Pametna";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <Pametna naslov='Dobar Dan' />
      <br />
      <Sime />
      <br />
      <FormeIntro />
    </div>
  );
}

export default App;
