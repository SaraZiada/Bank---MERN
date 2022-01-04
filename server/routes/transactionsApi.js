const express = require('express')
const router = express.Router()
const Transaction = require('../model/Transaction')

router.get('/transactions', function(req, res) {
    Transaction.find({}).exec(function(err, transactions) {
        res.send(transactions)
    })
})
router.post('/transaction', async function(req, res) {
    let transaction = req.body

    let vendor = transaction.vendor
    let category = transaction.category
    let amount = transaction.amount

    let newTransaction = new Transaction({
        vendor: vendor,
        category: category,
        amount: amount
    })

    let toReturn = await newTransaction.save()
    res.send(toReturn)

})
router.delete('/transaction', function(req, res) {
    let id = req.body.id
    Transaction.findByIdAndDelete(id, function(err) {
        if (err) {
            res.send(false)
        } else {
            res.send(true);
        }
    })
})

module.exports = router