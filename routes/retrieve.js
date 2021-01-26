const express = require('express');
const router = express.Router();

router.get('/retrieve', (req, res)=>{
    res.send ("Hello retrieve")
})

module.exports = router;
