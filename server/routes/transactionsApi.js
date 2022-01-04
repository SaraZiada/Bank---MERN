const express = require('express')
const router = express.Router()
const Transaction = require('../model/Transaction')

router.get('/transactions', function(req, res) {
    Transaction.find({}).exec(function(err, transactions) {
        res.send(transactions)
    })
})
router.post('/transaction', function(req, res) {
    let transaction = req.body
    let vendor = transaction.vendor
    let category = transaction.category
    let amount = transaction.amount
    let newTransaction = new Transaction({
        vendor: vendor,
        category: category,
        amount: amount
    })
    newTransaction.save().then(function(addedTransaction) { console.log(addedTransaction) })
    res.send()

})
router.delete('/transaction', function(req, res) {
    let id = req.body.id
    Transaction.deleteOne({ _id: id }, function(err) {
        if (err) {
            console.log(err)
        } else {
            res.end('success');
        }
    })
})

module.exports = router