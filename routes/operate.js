const express = require('express');
const router = express.Router();

router.post('/operate', (req, res)=>{
    res.send ("Hello operate")
})

module.exports = router;
