import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Players from "./components/Players/Players";
import cricketers from "./FakeData/criceterFakeData.json";

function App() {
  const [players, setPlayers] = useState([]);
  // --Fake Data Load --//
  useEffect(() => {
    const players = cricketers;
    setPlayers(players);
  }, []);

  // --player selection state --//
  const [playerAdd, setPlayerAdd] = useState([]);

  // --Handle add player btn --//
  const handleAddPlayerBtn = (playerInfo) => {
    const playerSelection = [...playerAdd, playerInfo];
    setPlayerAdd(playerSelection);
  };

  const totalPlayerOctionCost = playerAdd.reduce((totalCost, element) => {
    const number = parseInt(element.salary);
    const totalSalary = totalCost + number;
    return totalSalary;
  }, 0);

  // --Budget Calculation --//
  const maxBudget = 20;
  let moneyLeft = maxBudget - totalPlayerOctionCost;
  let budgetMessage = "";
  if (moneyLeft > 0) {
    moneyLeft = 0;
    budgetMessage = "Continue Bying!";
  } else {
    budgetMessage = "Opps!Your Budget is Over!";
  }

  return (
    <div className="App">
      <div className="player-oction" style={{ textAlign: "center" }}>
        <p>Total Player Added : {playerAdd.length}</p>
        <p>Total Budget : {maxBudget} Cores</p>
        <p>Total Player Buying Prize : {totalPlayerOctionCost}</p>
        <hr />
        <p>Money Left : {moneyLeft} Cores</p>
        <p style={{ fontSize: "1.5rem", color: "navy" }}>{budgetMessage}</p>
      </div>
      {/* <Header></Header>
      <Main></Main>
      <Footer></Footer> */}
      {/* --Player Component-- */}
      <div className="player-app-container">
        {players.map((player) => (
          <Players player={player} playerInfo={handleAddPlayerBtn}></Players>
        ))}
      </div>
    </div>
  );
}

export default App;
