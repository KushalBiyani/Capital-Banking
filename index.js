//Express Server
const express = require("express");
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'bank-client/build')));

//Cors for local file access
const cors = require("cors");
app.use(cors());

//Environment Variable
require('dotenv').config()
const port = process.env.PORT || 6000;

//Mongo Database and Models
const database = require('./src/database');
const Customer = require('./src/models/customer');
const Transaction = require('./src/models/transaction');

//Body parser
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

//Route for fetching customers
app.use("/api/custDetails", (req, res) => {
  Customer.find({}, function (err, foundItems) {
    if (err) {
      return res.status(404).json(err);
    }
    else {
      return res.status(200).json(
        [...foundItems]
      );
    }
  });
});

//Route for Transfer
app.post("/api/transfer", jsonParser, async (req, res) => {
  const  id1  = req.body.userId;
  const amount = parseInt(req.body.amount);
  ToUser = parseInt(req.body.acc_no);
  var toUser = await Customer.findOne({ acc_no: ToUser }).exec();
  var fromUser = await Customer.findById(id1).exec();

  if (amount <= fromUser.balance && amount > 0) {

    let fromamountNew = parseInt(fromUser.balance - amount);
    let toamountNew = parseInt(toUser.balance + amount);
    try {
      await Customer.findByIdAndUpdate(id1, { balance: fromamountNew }, function (err, docs) {
        if (err) {
          console.log(err);
          return res.status(404).json(err);
        }
        else {
          console.log("Updated User : ", docs);
        }
      });
    } catch (error) {
      console.log('Amount doen not get changed', error)
    }
    try {
      await Customer.findByIdAndUpdate(toUser._id, { balance: toamountNew }, function (err, docs) {
        if (err) {
          console.log(err);
          return res.status(404).json(err);
        }
        else {
          console.log("Updated User : ", docs);
        }
      });
    } catch (error) {
      console.log('Amount doen not get changed', error)
    }

    const transactionNumber = Math.floor((Math.random() * 10000000000) + 1);
    let newT = new Transaction();
    newT.sendersName = fromUser.name;
    newT.recieversName = toUser.name;
    newT.sender_acc_no = fromUser.acc_no;
    newT.reciever_acc_no = toUser.acc_no;
    newT.transactionNumber = transactionNumber;
    newT.amount = amount;
    try {
      await newT.save();
    } catch (error) {
      console.log('transaction not get saved', error)
    }

    return res.status(200).json(newT)
  }
  else {
    console.log("Insufficient balance")
    return res.status(201).json("Insufficient balance");
  }
});

//Route for fetching transaction
app.get("/api/history", (req, res) => {
  Transaction.find({}, function (err, foundItems) {
    if (err) {
      return res.status(404).json(err);
    }
    else {
      return res.status(200).json(
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
