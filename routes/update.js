const express = require('express');
const router = express.Router();
const db = require('../src/db-connection')


router.use(express.json())
router.post('/update', (req, res) => {
    let data = (req.body)
    console.log(`update back
    update back,
    `, data)
    let updates = []
    Object.keys(data).forEach(key => {
        if (key !== "id") {
            updates.push(`${key}="${data[key]}"`)
        }
    })

    let sql = `UPDATE transactions SET ${updates.toString()} WHERE id="${data['id']}"`
    db.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send({ message: "Actualizado" })
    })

})



module.exports = router;