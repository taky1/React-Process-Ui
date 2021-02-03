import React ,{ useState,useEffect } from 'react';
import {Dialog, TextField, Button,Typography } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch ,useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts'; 


const Form = ( currentId, setCurrentId) => {
  const [postData, setPostData] = useState({ titre: '', icone: '', couleur: '', forme: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const _handleClose =(e) => {
    e({ open: false });
  }

  useEffect(() => {
    if (post) setPostData(post);
      }, 
      [post]);

  const clear = () => {
        setCurrentId(null);
        setPostData({titre:'',icone:'' , couleur:'', forme:''})
  }

    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(createPost(postData))
      
    }

   const actions = [
      <Button
        type="reset"
        label="Reset"
        secondary={true}
        style={{ float: 'left' }}
        />,
      <Button
        label="Cancel"
        primary={true}
        onClick={_handleClose}
        />,
      <Button
        type="submit"
        label="Submit"
        primary={true}
        />
    ]; 
    return (
        <div>
        <Button variant="contained" color="primary" size="small" onClick={handleClickOpen} fullWidth>
        Ajouter Task
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Typography variant="h6" align="center">{'Creation Task'}</Typography>
      <TextField name="titre" 
      variant="outlined"
      label="titre"
   
      fullWidth
      value={postData.titre}
      onChange={(e) => setPostData({ ...postData, titre: e.target.value })} />

      <FileBase 
      type="file"
      multiple={false}
      onDone={({base64}) => setPostData({ ...postData, icone: base64 })}
          />

      <TextField name="couleur" 
      variant="outlined"
      label="couleur"
      fullWidth
      value={postData.couleur}
      onChange={(e) => setPostData({ ...postData, couleur: e.target.value })} />


      <TextField name="forme" 
      variant="outlined"
      label="forme"
      fullWidth
      value={postData.forme}
      onChange={(e) => setPostData({ ...postData, forme: e.target.value })} />

          <Button variant="contained" color="primary" size="medium" type="submit" fullWidth>
          Valider
          </Button>

          <Button variant="contained" color="green" size="medium" onClick={clear} fullWidth>
          Annuller
          </Button>
          <Button variant="contained" color="secondary" size="medium" onClick={handleClose} fullWidth>
          Fermer
          </Button>
         
          { actions }
      </form>
            </Dialog>
      
            </div>
    )
}

export default Form;