const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    vendor: String,
    category: String,
    amount: Number
})

const Transaction = mongoose.model("Transaction", TransactionSchema)

module.exports = Transaction