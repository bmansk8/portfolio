import "./App.css";
import Creations from "./components/creations";
import Experince from "./components/experince";
import Education from "./components/education";
import Music from "./components/music";
import Socials from "./components/socials";
import HeaderCard from "./components/header";
import Technologies from "./components/technologies";

function App() {
  return (
    <div className="App">
      <Socials />
      <HeaderCard />
      <Experince />
      <Creations />
      <Technologies />
      <Music />
      <Education />

      <footer>
        <p>
          Created by Barron M V Brock using create react app and aws amplify
        </p>
      </footer>
    </div>
  );
}

export default App;
