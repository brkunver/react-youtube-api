import React, { useState } from "react";
import { TextField, Button, Grid } from '@material-ui/core';

const SearchBar = (props) => {
  let [query, setQuery] = useState('');

  let onInputChange = (event) => {
    setQuery(event.target.value);
  }



  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item > <i className="fab fa-youtube fa-2x"></i></Grid>
        <Grid item > <h1>Search Youtube</h1>  </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item md={4} sm={6} xs={8} >
          <TextField size='small' onChange={onInputChange} variant="outlined" fullWidth={true} />
        </Grid>
        <Grid item md={2} sm={2} xs={4} >
          <Button fullWidth={true} variant="contained" color="secondary" onClick={() => props.onButtonClick(query)} >
            Search
          </Button>
        </Grid>
      </Grid>



    </div>
  )
}

export default SearchBar;