const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    transactionNumber:Number,
    sendersName: String,
    sender_acc_no: Number,
    recieversName: String,
    reciever_acc_no: Number,
    amount: Number
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;