const express = require('express');
const router = express.Router();
const db= require('../src/db-connection')

router.post('/operate', (req, res)=>{
    
    res.send ("Hello operate")
db.query(sql, (err, result)=>{
    if(err) throw err;
    res.send()
})

})



module.exports = router;
