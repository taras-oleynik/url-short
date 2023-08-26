import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Input from "./components/InputBar";
import AdvancedStat from "./components/AdvancedStat";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <AdvancedStat className="input-stat-container" />
      <BoostLinks />
      <Footer />
    </div>
  );
}

export default App;
