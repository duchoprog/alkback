const express = require('express');
const router = express.Router();
const db = require('../src/db-connection')


router.use(express.json())
router.post('/operate', (req, res) => {

    let data = (req.body)
    let sql = "INSERT INTO transactions SET ?"
    db.query(sql, data, (err, result) => {
        if (err) {
            res.send({ message: 'Error' })
            throw err
        };
        res.send({ message: 'OK' })

    })

})



module.exports = router;
