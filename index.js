const express = require("express");
const app = express();
require('dotenv').config()
const port = process.env.PORT || 4000;
const database = require('./src/database');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");
const Customer = require('./src/models/customer');
const Transaction = require('./src/models/transaction');
app.use(cors());
app.use(express.static(path.join(__dirname, 'bank-client/build')));
var jsonParser = bodyParser.json()

app.use("/api/custDetails", (req, res) => {
  Customer.find({}, function (err, foundItems) {
    if(err){
      res.status(404).json(err);
    }
    else{
      res.status(200).json(
        [...foundItems]
      );
    }
  });
});
app.use("/api/transact/:id", (req, res) => {
  const { id } = req.params;
  Customer.findById(id, function (err, User) {
    if(err){
      res.status(404).json(err);
    }
    else{
      res.status(200).json(
        User
      );
    }
    
  });
});

app.post("/api/transfer/:id1", jsonParser, async (req, res) => {
  const { id1 } = req.params;
  const amount = parseInt(req.body.amount);
  ToUser = parseInt(req.body.user);
  var toUser = await Customer.findOne({ acc_no: ToUser }).exec();
  const fromUser = await Customer.findById(id1).exec();
  if (amount <= fromUser.balance && amount > 0) {

    let fromamountNew = parseInt(fromUser.balance - amount);
    let toamountNew = parseInt(toUser.balance + amount);
    await Customer.findByIdAndUpdate(id1, { balance: fromamountNew }, function (err, docs) {
      if (err) {
        console.log(err);
        res.status(404).json(err);
      }
      else {
        console.log("Updated User : ", docs);
      }
    });
    await Customer.findByIdAndUpdate(toUser._id, { balance: toamountNew }, function (err, docs) {
      if (err) {
        console.log(err);
        res.status(404).json(err);
      }
      else {
        console.log("Updated User : ", docs);
      }
    });
    const transactionNumber = Math.floor((Math.random() * 10000000000) + 1);
    let newT = new Transaction();
    newT.sendersName = fromUser.name;
    newT.recieversName = toUser.name;
    newT.sender_acc_no = fromUser.acc_no;
    newT.reciever_acc_no = toUser.acc_no;
    newT.transactionNumber = transactionNumber;
    newT.amount = amount;
    await newT.save();
    res.status(200).json(newT)
  }
  else {
    res.status(201).json("Insufficient balance");
    console.log("Insufficient balance")
  }
});

app.get("/api/history", (req, res) => {
  Transaction.find({}, function (err, foundItems) {
    if(err){
      res.status(404).json(err);
    }
    else{
      res.status(200).json(
        [...foundItems]
      );
    }
  });
});
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'bank-client/build', 'index.html'));
});
app.listen(port, () => {
  console.log("Server running at port : " + port);
});
