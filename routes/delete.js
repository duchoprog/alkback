const express = require('express');
const router = express.Router();
const db = require('../src/db-connection')


router.use(express.json())
router.get('/delete', (req, res) => {

    let data = (req.body)

    let sql = `DELETE FROM transactions WHERE id="${data['id']}"`
    db.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send("Actualizado")
    })

})



module.exports = router;