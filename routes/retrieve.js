const express = require('express');
const router = express.Router();
const db= require('../src/db-connection')

router.get('/retrieve', (req, res)=>{

    let sql= `SELECT * FROM (
        SELECT * FROM transactions ORDER BY id DESC LIMIT 10) sub 
        ORDER BY id ASC;`
    db.query(sql, (err, results)=>{
        if(err) throw err;  
           
        res.send(Object.assign({}, results))   
    })

})


module.exports = router;
