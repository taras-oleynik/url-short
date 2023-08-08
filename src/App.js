import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Input from "./components/InputBar";
import AdvancedStat from "./components/AdvancedStat";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer";
function App() {
  const [sortLink, setShortLink] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.shrtco.de/v2/shorten?url=https://rozetka.com.ua/ua/slava-ukraini-00-00001123/p362948856/"
    )
      .then((res) => res.json())
      .then((data) => setShortLink(data.result.full_share_link));
  }, []);

  return (
    <div className="App">
      {/* <div>{sortLink}</div> */}
      <Nav />
      <Main />
      <div className="input-stat-container">
        <Input />
        <AdvancedStat />
      </div>

      <BoostLinks />
      <Footer />
    </div>
  );
}

export default App;
