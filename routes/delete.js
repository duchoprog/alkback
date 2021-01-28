const express = require('express');
const router = express.Router();
const db = require('../src/db-connection')


router.use(express.json())
router.post('/delete', (req, res) => {

    let data = (req.body)

    let sql = `DELETE FROM transactions WHERE id="${data['id']}"`
    db.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send("Borrado")
    })

})



module.exports = router;