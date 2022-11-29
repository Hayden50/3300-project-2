import axios from "axios"
import { useState } from "react";
import Person from './components/Person'
import NameForm from './components/NameForm'
import "./App.css"
 



const App = () => {

  const [val, setVal] = useState('');
  //axios.get('/api/').then(res => setVal(res.data)).then(res => console.log(res));
  return (
    <div className = "App">
      <h1>NBA Player Comparison</h1>
      <NameForm/>
    </div>
  )
}

export default App;
