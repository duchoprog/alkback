const express = require('express');
const router = express.Router();
const db = require('../src/db-connection')

const getBalance = (array) => {
    let balance = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].tipo === "gasto") {
            balance -= array[i].monto
        } else {
            balance += array[i].monto
        }
    }
    return balance
}

router.get('/retrieve', (req, res) => {

    let sql = `SELECT * FROM  transactions ORDER BY id DESC`
    db.query(sql, (err, results) => {
        if (err) throw err;
        results.unshift({ balance: getBalance(results) })
        console.log(results)
        res.send(Object.assign({}, results.slice(0, 11)))
    })

})


module.exports = router;
