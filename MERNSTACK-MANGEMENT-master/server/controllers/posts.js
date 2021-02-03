 import processus from '../models/processus.js';
 import mongoose from 'mongoose';
 
 
 export const getPosts = async(req, res) => {
    try {
        const processues = await processus.find();
        res.status(200).json(processues);
    } catch (error) {
        res.status(404).json({ message: error.message});
        
    }
 }

 export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 export const createPost = async(req, res) => {
     const  post = req.body;
     const newPost = new processus(post);

     try {
         await  newPost.save();
         res.status(201).json(newPost);
     } catch (error) {
         res.status(409).json({message: error.message });
     }
    
 }


 export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
        const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
   const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

    res.json(updatedPost);
}




 