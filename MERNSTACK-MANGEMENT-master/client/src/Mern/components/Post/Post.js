import React from "react";

import { useDispatch } from 'react-redux';
import useStyles from "./styles";
import { Card, CardMedia, Button, Typography } from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Draggable from "react-draggable";


const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();


  return (
    <div>
    <Draggable> 
    <Card className={classes.card}>
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.icone} />
      <div className={classes.overlay2}>

      <Button style={{ color: 'white' }} size="small"
       onClick={() => setCurrentId(post._id)}>
       <MoreHorizIcon fontSize="default" />
       </Button>
      </div>
    </Card>
    <Typography className={classes.titre} gutterBottom>
    {post.titre}
    <Button size="small" color="primary"><DeleteIcon fontSize="small" /> Delete</Button>
    </Typography>
    
      </Card>
    </Draggable>
    </div>
  );
};

export default Post;
