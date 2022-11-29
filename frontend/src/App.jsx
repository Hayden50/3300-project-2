import axios from "axios"

const App = () => {

  const data = {name1: "LeBron James", name2: "Ja Morant"};

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
