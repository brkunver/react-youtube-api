import React from 'react'
import { Grid } from '@material-ui/core';
import Youtube from 'react-youtube'

let Video = props => {
  let src = "https://www.youtube.com/watch?v=" + props.link;
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{marginTop : "24px" }}>
      <Grid item >
        <h3 style={{textAlign : "center"}} > <a href={src} > Watch on Youtube </a> </h3>
        <Youtube videoId={props.link} opts={{
          height: '240',
          width: '360'
        }} >
        </Youtube>
      </Grid>
    </Grid>
  )
}


export default Video;