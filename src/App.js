import { useEffect, useState } from "react";
import { createContext } from "react/cjs/react.development";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Players from "./components/Players/Players";
import cricketers from "./FakeData/criceterFakeData.json";
import Footer from "./components/Footer/Footer";

//--createContext() API --//
export const ContextApi = createContext();

function App() {
  const [players, setPlayers] = useState([]);

  // --player selection state --//
  const [playerAdd, setPlayerAdd] = useState([]);

  // --Fake Data Load --//
  useEffect(() => {
    const players = cricketers;
    setPlayers(players);
  }, []);

  // --Handle add player btn --//
  const handleAddPlayerBtn = (playerInfo) => {
    const playerSelection = [...playerAdd, playerInfo];
    setPlayerAdd(playerSelection);
  };

  return (
    
      <ContextApi.Provider value={[playerAdd]}>
        <div className="App">
          <Header></Header>
          <Main></Main>
          {/* --Player Component-- */}
          <div className="player-app-container">
            {players.map((player) => (
              <Players
                player={player}
                playerInfo={handleAddPlayerBtn}
              ></Players>
            ))}
          </div>

          <Footer></Footer>
        </div>
      </ContextApi.Provider>
    
  );
}

export default App;
