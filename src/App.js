import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Players from "./components/Players/Players";
import cricketers from "./FakeData/criceterFakeData.json";

function App() {
  const [players, setPlayers] = useState([]);
  console.log(players);
  // --Fake Data Load --//
  useEffect(() => {
    const players = cricketers;
    setPlayers(players);
  }, []);
  return (
    <div className="App app-container">
      {/* <Header></Header>
      <Main></Main>
      <Footer></Footer> */}
      {players.map((player) => (
        <Players player={player}></Players>
      ))}
    </div>
  );
}

export default App;
