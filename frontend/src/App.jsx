import StatDisplay from "./components/StatDisplay";
import NameForm from "./components/NameForm";
import { useState } from "react";
import "./App.css"
 
const App = () => {

  const [playerOneData, setPlayerOneData] = useState(null);
  const [playerTwoData, setPlayerTwoData] = useState(null);

  const temp = {
    avgPoints: 0,
    avgAssists: 0,
    avgRebounds: 0,
    avgBlocks: 0,
    avgSteals: 0,
    fgPct: 0,
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
      <div className='div5'>
        <p className="div5-sentence">This data is representative of the 2021 season</p>
      </div>
    </div>
  )
}

export default App;
