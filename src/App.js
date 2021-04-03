import React, { useState } from "react";
import axios from "axios";
import KEY from "./API/YoutubeAPI";
import SearchBar from "./Components/SearchBar";
import Container from "@material-ui/core/Container";
import Footer from './Components/Footer'

import SearchList from "./Components/SearchList";
import Video from './Components/Video';

function App() {
  let [link, setLink] = useState(null)
  let [res, setRes] = useState([]);

  let onButtonClick = (term) => {
    setLink(null)
    axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        maxResult: 9,
        q: term,
        type: "video",
        key: KEY
      }
    }).then(response => setRes(response.data.items)).then(err => console.log(err))

  }

  let onWatchVideo = videoId => {
    setLink(videoId);
    setRes([])
  };


  return (
    <Container>
      <SearchBar onButtonClick={onButtonClick} />
      { link && <Video link={link} />}

      <SearchList list={res} watch={onWatchVideo} />
      
        <Footer/>
      
    </Container>
  );
}

export default App;
