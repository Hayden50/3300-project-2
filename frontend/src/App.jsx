import StatDisplay from "./components/StatDisplay";
import NameForm from "./components/NameForm";
import { useState } from "react";
import "./App.css"
 
const App = () => {

  const [playerOneData, setPlayerOneData] = useState(null);
  const [playerTwoData, setPlayerTwoData] = useState(null);

  const temp = {
    avgPoints: 10,
    avgAssists: 10,
    avgRebounds: 10,
    avgBlocks: 10,
    avgSteals: 10,
    fgPct: 1,
  }
  JSON.stringify(temp);

  return (
    <div className = "parent">
      <div className='div1'>
        <NameForm setPlayerOneData={setPlayerOneData} setPlayerTwoData={setPlayerTwoData}/>
      </div>
      <div className='div2'>
        <StatDisplay playerData={playerOneData === null ? temp : playerOneData}/>
      </div>
      <div className='div3'></div>
      <div className='div4'>
        <StatDisplay playerData={playerTwoData === null ? temp : playerTwoData}/>
      </div>
      <div className='div5'>5</div>
    </div>
  )
}

export default App;
