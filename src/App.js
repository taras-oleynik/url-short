import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Input from "./components/InputBar";
import AdvancedStat from "./components/AdvancedStat";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container">
      <div className="App">
        <Nav />
        <Main />
        <div className="input-stat-container">
          <Input />
          <AdvancedStat />
        </div>

        <BoostLinks />
        <Footer />
      </div>
    </div>
  );
}

export default App;
