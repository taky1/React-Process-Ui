import mongoose from 'mongoose';

const processusSchema = mongoose.Schema({
 titre : String,
 icone : String,
 couleur : String,
 forme : String,
 tache : [String],
 position:{
     x:String,
     y:String
 }
});

const processus  = mongoose.model('processus', processusSchema);

export default processus;