import axios from "axios"
import { useState } from "react";

const App = () => {

  const data = {name: "LeBron James"};

  const handleClick = () => {
    axios.post('/api/player', data).then(res => {
      console.log(res.data);
    }).catch(err => console.log(err));
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App;
