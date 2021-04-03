import React from "react";
import { Grid, Card, CardActionArea, CardMedia, Button, Typography, CardContent, CardActions } from '@material-ui/core';

let SearchList = props => {
  let list = props.list.map(item => {
    return (
      <Grid item md={6} xs={10} style={{marginTop : "24px"}} key={item.id.videoId} >
        <Card >
          <CardActionArea>
            <CardMedia> <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} /> </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.snippet.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.snippet.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => props.watch(item.id.videoId)} >
              Watch
        </Button>
          </CardActions>
        </Card>

      </Grid>
    )
  })

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={1}
    >
      {list}
    </Grid>
  )

}

export default SearchList;