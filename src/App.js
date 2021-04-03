import SearchBar from './Components/SearchBar'
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import axios from 'axios';
import KEY from './API/YoutubeAPI'


function App() {
  let [searchTerm, setSearchTerm] = useState('');

  let [res, setRes] = useState([]);

  let onButtonClick = (term) => {
    setSearchTerm(term);
    axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        maxResult: 5,
        q: searchTerm,
        type: "video",
        key: KEY
      }
    }).then(response => {
      setRes(response.data.items)
    });
  }

  


  return (
    <Container>
      <SearchBar onButtonClick={onButtonClick} />
    </Container>


  );
}

export default App;
