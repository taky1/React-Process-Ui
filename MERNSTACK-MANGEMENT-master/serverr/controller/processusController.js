const express = require('express');
var router = express.Router()

var { processus } = require ('../model/processus');

router.get('/',(req, res)=>{
    processus.find((err,docs) =>{
        if(!err) res.send(docs)
        else console.log('Error Processus not found ! : '+JSON.stringify(err,undefined,2))
    })
})


module.exports = router ;