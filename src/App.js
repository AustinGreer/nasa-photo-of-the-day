import React, { useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import Content from './components/Content'

function App() {
  const [nasaData, setnasaData] = useState({})

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=5tasFWbd2bH7Cws0ag1zeqaltZUYUmrniqiojMg5")
    .then(res => {
      console.log(res.data)
      setnasaData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  
  return (
    <div className="App">
      <h1>NASA PHOTO OF THE DAY</h1>
      <Content nasaData={nasaData} />
    </div>
  );
}

export default App;
