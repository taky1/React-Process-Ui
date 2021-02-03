const  mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/DBprocessus', {useNewUrlParser:true,useUnifiedTopology:true},
err => {
    if(!err)
    console.log('Mongodb connection succeeded.')
    else
    console.log('Error while connection MongoDB: ' +JSON.stringify(err, undefined, 2))
}
);