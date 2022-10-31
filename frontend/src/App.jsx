import axios from "axios"
import { useState } from "react";

const App = () => {

  const [val, setVal] = useState('');
  axios.get('/api/').then(res => setVal(res.data)).then(res => console.log(res));

  return (
    <div>
      {val}
    </div>
  )
}

export default App;
