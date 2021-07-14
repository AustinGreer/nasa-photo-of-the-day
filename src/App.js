import React, { useState, useEffect } from "react";
import axios from 'axios';

import Header from "./components/Header";
import PhotoOfTheDay from "./components/PhotoOfTheDay";
import PhotoInfo from "./components/PhotoInfo";

const apiKey = process.env.REACT_APP_API_KEY

function App() {
  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res => {
        // date, explanation, media_type, service_version, title, url
        setNasaData(res.data)
      })
      .catch(err => {
        console.log({err})
      })
  }, [])

  setTimeout(() => {
    console.log("time out", nasaData)
  }, 2000)
  return (
    <div>
      <Header />
      <PhotoOfTheDay media={nasaData.media_type} url={nasaData.url} />
      <PhotoInfo title={nasaData.title} explanation={nasaData.explanation} date={nasaData.date} />
    </div>
  );
}

export default App;
